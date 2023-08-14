import { IMessage, InputToolbar, InputToolbarProps } from "react-native-gifted-chat";
import palette from "../styles/colors";

const RenderInputToolbar = (props: InputToolbarProps<IMessage>) => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: palette.blue.light_md,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          height: 73,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      />
    );
  };

export default RenderInputToolbar;