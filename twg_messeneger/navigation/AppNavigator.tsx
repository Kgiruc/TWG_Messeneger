import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import client from '../graphql/apolloClient';
import RoomsScreen from '../screens/RoomsScreen';
import ChatScreen from '../screens/ChatScreen';
import { RootStackParamList } from '../types/RootStackParamList';
import Rooms from '../assets/rooms.svg';
import Search from '../assets/search.svg';
import Phone from '../assets/phone.svg';
import Video from '../assets/videocall.svg';
import Profile from '../assets/profile.svg';
import CarterLeft from '../assets/carter-left.svg';
import RenderHeaderRight from '../components/RenderHeaderRight';
import navigationStyles from './AppNavigatorStyles';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
           screenOptions={{
            headerStyle: navigationStyles.header,
          }}
        >
          <Stack.Screen
            name="Rooms"
            component={RoomsScreen}
            options={{
              title: 'Rooms',
              headerTitleStyle: navigationStyles.headerTitle, 
              headerRight: () => <RenderHeaderRight logo1={<Rooms />} logo2={<Search />} />
            }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen as React.ComponentType}
            options={({ route }) => {
              const userName = (route.params as RootStackParamList['Chat'])?.userName || '';
              return {
                headerTitle: () => (
                  <View style={navigationStyles.chatHeaderContainer}> 
                    <Profile width={44} height={44}/>
                    <Text numberOfLines={1} style={navigationStyles.chatHeaderText}>
                      {userName}
                    </Text>
                  </View>
                ),
                headerRight: () => <RenderHeaderRight logo1={<Phone />} logo2={<Video />} />,
                headerBackImage: () => (<CarterLeft />),
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default AppNavigator;