import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Bubble, GiftedChat, IMessage, InputToolbar, Send } from 'react-native-gifted-chat';
import { useMutation, useQuery } from '@apollo/client';
import { GET_MESSAGES, SEND_MESSAGE } from '../graphql/queries';
import { Message } from '../types/Message';
import { chatStyles } from './styles/chatStyles';

type ChatProps = {
  route: { params: { roomId: string, userName: string, userId: string } };
};

function ChatScreen({ route }: ChatProps) {
  const roomId = route.params.roomId;
  const userId = route.params.userId;
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { loading, error, data, refetch } = useQuery(GET_MESSAGES, {
    variables: { roomId },
    pollInterval: 1000,
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
          renderInputToolbar={(props: any) => (
            <InputToolbar
              {...props}
              containerStyle={chatStyles.inputToolbar}
              primaryStyle={{ alignItems: 'center' }}
            />
          )}
          renderSend={(props: any) => (
            <Send {...props} containerStyle={chatStyles.sendButton}>
              <Text style={chatStyles.sendButtonText}>Send</Text>
            </Send>
          )}
          renderBubble={(props: any) => (
            <Bubble
              {...props}
              wrapperStyle={{
                left: { backgroundColor: 'white' },
                right: { backgroundColor: 'purple' },
              }}
              textStyle={{
                left: { color: 'black' },
                right: { color: 'white' },
              }}
            />
          )}
        />
    </View>
  );
};

export default ChatScreen;
