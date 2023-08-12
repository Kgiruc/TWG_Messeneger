import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007BFF',
    padding: 15,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Header;