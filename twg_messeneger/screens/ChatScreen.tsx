import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView } from 'react-native';
import { Bubble, BubbleProps, Composer, ComposerProps, GiftedChat, IMessage, InputToolbar, InputToolbarProps, Send, SendProps } from 'react-native-gifted-chat';
import { useMutation, useQuery } from '@apollo/client';
import { GET_MESSAGES, SEND_MESSAGE } from '../graphql/queries';
import { Message } from '../types/Message';
import palette from '../styles/colors';
import { fonts } from '../styles/fonts';
import SendIcon from '../assets/send.svg';

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

  const renderBubble = (props: BubbleProps<IMessage>) => (
    <Bubble 
    {...props}
    wrapperStyle={{
      left: { backgroundColor: palette.white.main, marginBottom: 12 },
      right: { backgroundColor: palette.plum.light_md, marginBottom: 12 },
    }}
    textStyle={{
      left: {...fonts.bodyText},
      right: {
        ...fonts.bodyText,
        color: palette.white.main
      }
    }}
    renderTime={() => null}
    />
  )

  const renderSend = (props: SendProps<IMessage>) => (
    <Send {...props} 
      containerStyle={{
        paddingRight: 16,
        alignSelf: 'center' 
      }}
    >
      <SendIcon />
    </Send>
  )

  const renderComposer = (props: ComposerProps) => {
    return (
      <Composer
        {...props}
        textInputStyle={{
          ...fonts.title_input,
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: palette.white.main,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          marginHorizontal: 12,
          flex: 1,
          paddingTop: 16,
          height: 41,
          alignSelf: 'center'
        }}
        multiline
      />
    );
  };

  const renderInputToolbar = (props: InputToolbarProps<IMessage>) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: palette.blue.light_md,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          height: 73,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    );
  };



  return (
    <View style={{ flex: 1 }}>
      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{
          _id: userId,
        }}
        placeholder=''
        renderBubble={renderBubble}
        renderAvatar={null}
        alwaysShowSend
        renderSend={renderSend}
        renderComposer={renderComposer}
        renderInputToolbar={renderInputToolbar}
      />
    </View>
  );
}

export default ChatScreen;
