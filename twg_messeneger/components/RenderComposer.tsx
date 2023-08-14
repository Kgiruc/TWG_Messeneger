import { Composer, ComposerProps } from "react-native-gifted-chat";
import { fonts } from "../styles/fonts";
import palette from "../styles/colors";

const RenderComposer = (props: ComposerProps) => {
    return (
      <Composer
        {...props}
        textInputStyle={{
          ...fonts.title_input,
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: palette.white.main,
          borderTopRightRadius: 12,
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          marginHorizontal: 12,
          flex: 1,
          paddingTop: 16,
          height: 41,
          alignSelf: 'center'
        }}
        multiline
      />
    );
  };

export default RenderComposer;