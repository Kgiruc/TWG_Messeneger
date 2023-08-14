import React from "react";
import { TouchableOpacity, View } from "react-native";
import { renderHeaderRightStyles } from "./styles/renderHeaderRightStyles";

type Props = {
  logo1: React.ReactNode;
  logo2: React.ReactNode; 
};

const RenderHeaderRight: React.FC<Props> = ({ logo1, logo2 }) => (
  <View style={renderHeaderRightStyles.headerRightContainer}>
    <TouchableOpacity onPress={() => alert('Button 1 Pressed')}>
      {logo1}
    </TouchableOpacity>
    <TouchableOpacity onPress={() => alert('Button 2 Pressed')}>
      {logo2}
    </TouchableOpacity>
  </View>
);

export default RenderHeaderRight;