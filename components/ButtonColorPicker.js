import React, { Component } from "react";
import { Text, View, Picker } from "react-native";
import { Consumer } from "../Context";

import styles from "./styles";

class ButtonColorPicker extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <View style={{ marginTop: 20 }}>
              <Text style={styles.submenu}>Button Color</Text>
              <Picker
                style={{ width: "100%" }}
                selectedValue={value.buttons.backgroundColor}
                onValueChange={color => value.saveButtonColor(color)}
              >
                <Picker.Item label="Red" value={"rgba(125,0,4,0.7)"} />
                <Picker.Item label="Blue" value={"rgba(0,0,155,0.7)"} />
                <Picker.Item label="Green" value={"rgba(0,125,0,0.7)"} />
                <Picker.Item label="Teal" value={"rgba(65,128,128,0.8)"} />
                <Picker.Item label="Cyan" value={"rgba(0,180,180,0.8)"} />
                <Picker.Item label="Orange" value={"rgba(206,67,0,0.7)"} />
                <Picker.Item label="Violet" value={"rgba(88,0,176,0.7)"} />
                <Picker.Item label="Magenta" value={"rgba(140, 30, 111,0.7)"} />
                <Picker.Item label="Black" value={"rgba(0,0,0,0.7)"} />
              </Picker>
            </View>
          );
        }}
      </Consumer>
    );
  }
}

export default ButtonColorPicker;
