import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import LastMessage from '../components/LastMessage';
import Profile from '../assets/profile.svg';
import { roomsStyles } from './styles/roomsStyles';
import { RoomScreenProps } from '../types/RoomsType';
import { useRooms } from '../hooks/useRooms';

const RoomsScreen: React.FC<RoomScreenProps> = ({ navigation }) => {
  const { loading, error, data } = useRooms();

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const rooms = data.usersRooms.rooms;

  return (
    <View style={roomsStyles.container}>
      <FlatList
        data={rooms}
        keyExtractor={(room) => room.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={roomsStyles.roomContainer}
            onPress={() =>
              navigation.navigate('Chat', {
                roomId: item.id, 
                userName: item.name,
                userId: data.usersRooms.user.id,
              })
            }
          > 
            <View style={roomsStyles.roomItem}>
              <View style={roomsStyles.profileContainer}>
                <Profile style={roomsStyles.profileIcon} />
              </View>
              <View style={roomsStyles.roomInfo}>
                <Text 
                  style={roomsStyles.roomName} 
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
                <LastMessage roomId={item.id}/>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default RoomsScreen;