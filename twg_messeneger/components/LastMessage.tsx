import { useQuery } from "@apollo/client";
import { GET_MESSAGES } from "../graphql/queries";
import { View, Text } from "react-native";
import { lastMessageStyles } from "./styles/lastMessageStyles";

const LastMessage: React.FC<{ roomId: string }> = ({ roomId }) => {
    const { loading: messagesLoading, error: messagesError, data: messagesData } = useQuery(GET_MESSAGES, {
      variables: { roomId },
      pollInterval: 1000,
    });
  
    if (messagesLoading) return null;
    if (messagesError) return null;
  
    const lastMessage = messagesData.room.messages[0];
  
    return (
      <View>
        <Text style={lastMessageStyles.message} numberOfLines={1}>
          {lastMessage ? lastMessage.body : 'No messages'}
        </Text>
      </View>
    );
  };

export default LastMessage;