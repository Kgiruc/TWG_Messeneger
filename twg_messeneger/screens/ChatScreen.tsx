import { View, Text } from 'react-native';
import { ChatProps } from '../types/ChatTypes';
import { useChatLogic } from '../hooks/useChatLogic';
import { ChatComponents } from '../components/ChatComponents';

function ChatScreen({ route }: ChatProps) {
  const roomId = route.params.roomId;
  const userId = route.params.userId;

  const { loading, error, messages, onSend, userId: currentUserId } = useChatLogic(roomId, userId);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <ChatComponents
        messages={messages}
        onSend={onSend}
        currentUserId={currentUserId}
      />
    </View>
  );
}

export default ChatScreen;
