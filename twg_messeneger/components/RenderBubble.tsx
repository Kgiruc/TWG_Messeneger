import { Bubble, BubbleProps, IMessage } from "react-native-gifted-chat";
import palette from "../styles/colors";
import { fonts } from "../styles/fonts";

const RenderBubble = (props: BubbleProps<IMessage>) => (
    <Bubble 
      {...props}
      wrapperStyle={{
        left: { 
          backgroundColor: palette.white.main, 
          marginBottom: 12,
          borderBottomLeftRadius: 0, 
          borderTopRightRadius: 12, 
          borderBottomRightRadius: 12, 
        },
        right: { 
          backgroundColor: palette.plum.light_md, 
          marginBottom: 12,
          borderTopLeftRadius: 12, 
          borderBottomLeftRadius: 12, 
          borderBottomRightRadius: 0, 
        },
      }}
      textStyle={{
        left: {...fonts.bodyText, color: palette.black.main},
        right: {
          ...fonts.bodyText,
          color: palette.white.main
        }
      }}
      renderTime={() => null}
    />
  );

export default RenderBubble