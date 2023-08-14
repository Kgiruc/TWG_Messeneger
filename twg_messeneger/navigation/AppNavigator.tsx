import {Text} from 'react-native';
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
import { navigationStyles } from './AppNavigatorStyles';
import palette from '../styles/colors';
import { fonts } from '../styles/fonts';
import Profile from '../assets/profile.svg'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {

  const renderHeaderRight = () => (
    <View style={navigationStyles.headerRightContainer}>
      <TouchableOpacity  onPress={() => alert('Button 1 Pressed')}>
        <Search />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert('Button 2 Pressed')}>
        <Rooms />
      </TouchableOpacity>
    </View>
  );

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator
           screenOptions={{
            headerStyle: {
              backgroundColor: palette.blue.light_md,
              height: 100,
              borderBottomLeftRadius: 24,
              borderBottomRightRadius: 24,
            },
          }}
        >
          <Stack.Screen
            name="Rooms"
            component={RoomsScreen}
            options={{
              title: 'Rooms',
              headerTitleStyle: {
                ...fonts.heading2,
                color: palette.plum.main,
              },
              headerRight: () => renderHeaderRight(),
            }}
          />
          <Stack.Screen
            name="Chat"
            component={ChatScreen as React.ComponentType}
            options={({ route }) => {
              const userName = (route.params as RootStackParamList['Chat'])?.userName || '';
              return {
                headerTitle: () => (
                  <View style={{ 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    gap: 12,
                    maxWidth: 200 
                    }}>
                    <Profile width={44} height={44}/>
                    <Text numberOfLines={1} style={{
                      ...fonts.title_chat,
                      color: palette.plum.main,
                    }}>{userName}</Text>
                  </View>
                ),
                headerRight: () => renderHeaderRight(),
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default AppNavigator;