import { useState, useCallback, useEffect } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_MESSAGES, SEND_MESSAGE } from '../graphql/queries';
import { IMessage } from 'react-native-gifted-chat';
import { Message } from '../types/Message';

export function useChatLogic(roomId: string, userId: string) {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const { loading, error, data, refetch } = useQuery(GET_MESSAGES, {
    variables: { roomId },
    pollInterval: 1000,
  });

  const [sendMessage] = useMutation(SEND_MESSAGE);

  useEffect(() => {
    if (!loading && data) {
      const formattedMessages: IMessage[] = data.room.messages.map((message: Message) => ({
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

  return { loading, error, messages, onSend, userId };
}