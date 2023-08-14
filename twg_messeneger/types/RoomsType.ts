import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Chat: { roomId: string; userName: string; userId: string };
};

export type RoomScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Chat'>;
};