import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { ApolloProvider } from '@apollo/client';
import client from '../graphql/apolloClient';

const Stack = createStackNavigator();


const AppNavigator: React.FC = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </ApolloProvider>
);

export default AppNavigator;