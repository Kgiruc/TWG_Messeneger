import React, { useState, useCallback, useEffect } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { useQuery } from '@apollo/client';
import { GET_MESSAGES } from '../graphql/queries';

type ChatProps = {
  route: { params: { roomId: string, userName: string } };
};

function ChatScreen({ route }: ChatProps) {
  const roomId = route.params.roomId;
  const [messages, setMessages] = useState([]);
  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: { roomId },
  });

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

  const onSend = useCallback((newMessages = []) => {
    // Implement sending logic here
  }, []);

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
