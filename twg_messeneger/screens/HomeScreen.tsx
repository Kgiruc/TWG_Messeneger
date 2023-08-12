import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

interface HomeScreenProps {
  navigation: any; // Tutaj powinien być właściwy typ nawigacji
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Home Screen</Text>
    <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default HomeScreen;