import { IMessage, Send, SendProps } from "react-native-gifted-chat";
import SendIcon from '../assets/send.svg';

const RenderSend = (props: SendProps<IMessage>) => (
    <Send {...props} 
      containerStyle={{
        paddingRight: 16,
        alignSelf: 'center' 
      }}
    >
      <SendIcon />
    </Send>
  )

export default RenderSend;