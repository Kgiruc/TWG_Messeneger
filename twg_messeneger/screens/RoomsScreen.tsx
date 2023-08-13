import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useQuery } from '@apollo/client';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { GET_USERS_ROOMS } from '../graphql/queries';
import LastMessage from '../components/LastMessege';

type RootStackParamList = {
  Chat: { roomId: string, userName: string };
};


const RoomsScreen: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { loading, error, data } = useQuery(GET_USERS_ROOMS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const rooms = data.usersRooms.rooms;

  return (
    <View>
      <FlatList
        data={rooms}
        keyExtractor={(room) => room.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Chat', {roomId: item.id, userName: item.name})
            }
          >
            <Text>{item.name}</Text>
            <LastMessage roomId={item.id}/>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RoomsScreen;