import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_USERS_ROOMS } from '../graphql/queries';

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USERS_ROOMS);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const user = data.usersRooms.user;
  const rooms = data.usersRooms.rooms;

  return (
    <View>
      <Text>User Information:</Text>
      <Text>Name: {user.firstName} {user.lastName}</Text>
      <Text>Email: {user.email}</Text>

      <Text>Rooms:</Text>
      <FlatList
        data={rooms}
        keyExtractor={(room) => room.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

export default Home;