import { StyleSheet } from "react-native";
import { fonts } from "../../styles/fonts";
import palette from "../../styles/colors";

export const roomsStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 36,
      backgroundColor: palette.blue.light,
    },
    roomContainer: {
      marginBottom: 12,
    },
    roomItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      width: '100%',
      maxHeight: 89,
      backgroundColor: palette.white.main,
      borderRadius: 12,
    },
    profileContainer: {
      marginRight: 16,
    },
    profileIcon: {
      width: 64,
      height: 64,
    },
    roomInfo: {
      flex: 1,
    },
    roomName: {
      ...fonts.title_input,
      marginBottom: 4,
    },
  });