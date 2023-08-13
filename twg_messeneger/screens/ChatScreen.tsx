import React, { useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { useMutation, useQuery } from '@apollo/client';
import { GET_MESSAGES, SEND_MESSAGE } from '../graphql/queries';
import { Message } from '../types/Message';

type ChatProps = {
  route: { params: { roomId: string, userName: string, userId: string } };
};

function ChatScreen({ route }: ChatProps) {
  const roomId = route.params.roomId;
  const userId = route.params.userId;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { loading, error, data, refetch } = useQuery(GET_MESSAGES, {
    variables: { roomId },
  });

  const [sendMessage] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    if (!loading && data) {
      const formattedMessages: IMessage[] = data.room.messages.map((message: Message ) => ({
        _id: message.id,
        text: message.body,
        createdAt: new Date(message.insertedAt),
        user: {
          _id: message.user.id,
          name: `${message.user.firstName} ${message.user.lastName}`,
        },
      }));
      setMessages(formattedMessages);
    }
  }, [loading, data]);

  const onSend = useCallback(async (newMessages: IMessage[] = []) => {
    const messageText = newMessages[0].text;
    try {
      await sendMessage({
        variables: {
          roomId,
          body: messageText,
        },
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
    refetch();
  }, [sendMessage, roomId, refetch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{
          _id: userId,
        }}
      />
    </View>
  );
}

export default ChatScreen;
