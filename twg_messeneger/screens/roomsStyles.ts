import { StyleSheet } from "react-native";

export const roomsStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 16,
      paddingTop: 16,
    },
    roomContainer: {
      marginBottom: 8,
    },
    roomItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#FFFFFF',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    profileContainer: {
      marginRight: 16,
    },
    profileIcon: {
      width: 40,
      height: 40,
    },
    roomInfo: {
      flex: 1,
    },
    roomName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });