import { StyleSheet } from 'react-native';
import palette from '../../styles/colors';

export const chatStyles = StyleSheet.create({
  inputToolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: palette.black.main,
    paddingHorizontal: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 24,
    backgroundColor: '#F4F4F4',
    marginRight: 8,
  },
  sendButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: 'purple',
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
  bubble: {
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 8,
    maxWidth: '80%',
  },
  bubbleText: {
    color: 'white',
  },
});