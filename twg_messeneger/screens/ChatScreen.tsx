import React, { useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useMutation, useQuery } from '@apollo/client';
import { GET_MESSAGES, SEND_MESSAGE } from '../graphql/queries';

type ChatProps = {
  route: { params: { roomId: string, userName: string } };
};

function ChatScreen({ route }: ChatProps) {
  const roomId = route.params.roomId;
  const [messages, setMessages] = useState([]);
  const { loading, error, data, refetch } = useQuery(GET_MESSAGES, {
    variables: { roomId },
  });

  const [sendMessage] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    if (!loading && data) {
      const formattedMessages = data.room.messages.map(message => ({
        _id: message.id,
        text: message.body,
        createdAt: new Date(message.insertedAt),
        user: {
          _id: message.user.id,
          name: `${message.user.firstName} ${message.user.lastName}`,
          avatar: 'https://placeimg.com/140/140/any',
        },
      }));
      setMessages(formattedMessages);
    }
  }, [loading, data]);

  const onSend = useCallback(async (newMessages = []) => {
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
    refetch()
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
          _id: 1,
        }}
      />
    </View>
  );
}

export default ChatScreen;
