import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import client from '../graphql/apolloClient';
import RoomsScreen from '../screens/RoomsScreen';
import ChatScreen from '../screens/ChatScreen';
import { View, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../types/RootStackParamList';
import Rooms from '../assets/rooms.svg';
import Search from '../assets/search.svg';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {

  const renderHeaderRight = () => (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => alert('Button 1 Pressed')}>
        <Rooms />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Button 2 Pressed')}>
        <Search />
      </TouchableOpacity>
    </View>
  );

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Rooms"
            component={RoomsScreen}
            options={{
              headerRight: () => renderHeaderRight(),
            }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen as React.ComponentType}
            options={({ route }) => {
              const userName = (route.params as RootStackParamList['Chat'])?.userName || '';
              return {
                headerRight: () => renderHeaderRight(),
                 title: userName
               };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default AppNavigator;