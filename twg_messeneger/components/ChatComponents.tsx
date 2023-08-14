import React from 'react';
import { IMessage } from 'react-native-gifted-chat';
import { GiftedChat } from 'react-native-gifted-chat';

import RenderBubble from '../components/RenderBubble';
import RenderSend from '../components/RenderSend';
import RenderComposer from '../components/RenderComposer';
import RenderInputToolbar from '../components/RenderInputToolbar';

interface ChatComponentsProps {
  messages: IMessage[];
  onSend: (newMessages: IMessage[]) => void;
  currentUserId: string;
}

export function ChatComponents({
  messages,
  onSend,
  currentUserId,
}: ChatComponentsProps) {
  return (
    <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{
        _id: currentUserId,
      }}
      placeholder=''
      renderBubble={RenderBubble}
      renderAvatar={null}
      alwaysShowSend
      renderSend={RenderSend}
      renderComposer={RenderComposer}
      renderInputToolbar={RenderInputToolbar}
    />
  );
}