import { useQuery } from '@apollo/client';
import * as React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { GET_MESSAGES } from '../graphql/queries';
import { useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Rooms: undefined;
  Details: { roomId: string };
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

type Props = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

function DetailsScreen({ route }: Props) {
  const { roomId } = route.params;

  const [messageText, setMessageText] = useState('')
  // const [sendMessage] = 

  const { loading, error, data } = useQuery(GET_MESSAGES, {
    variables: {
      roomId: roomId,
    },
  });
  
  if (loading) return <Text>{roomId}</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  const messages = data.room.messages;

  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.body}</Text>
            <Text>{item.insertedAt}</Text>
          </View>
        )}
      />
      <TextInput
        value={messageText}
        onChangeText={(text) => setMessageText(text)}
        placeholder="Type your message..."
      />
      <TouchableOpacity onPress={(e) => console.log(e)}>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;
