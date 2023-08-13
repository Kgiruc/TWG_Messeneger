import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import client from '../graphql/apolloClient';
import RoomsScreen from '../screens/RoomsScreen';
import ChatScreen from '../screens/ChatScreen';
import { View, Text, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../types/RootStackParamList';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {

  const renderHeaderRight = () => (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => alert('Button 1 Pressed')}>
        <Text style={{ fontSize: 16, color: 'blue', marginRight: 10 }}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Button 2 Pressed')}>
        <Text style={{ fontSize: 16, color: 'blue' }}>Button 2</Text>
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
              return { title: userName };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default AppNavigator;