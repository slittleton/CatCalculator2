import React from 'react'
import { 
  Text, 
  View, 
  Picker,
} from 'react-native';
import styles from "./styles";

export default function BackColorPicker(props) {
  return (
    <View>
      <Text style={styles.menu}>Choose Background</Text>
      <View style={{marginTop:20}}>
        <Text style={styles.submenu}>Background Color</Text>
        <Picker
          style={{width:'100%'}}
          selectedValue={props.backgroundImage}
          onValueChange={(itemValue) => props.saveBackground(itemValue)}
        >
          <Picker.Item label="Blue" value={1}/>
          <Picker.Item label="Red" value={2}/>
          <Picker.Item label="Green" value={3}/>
          <Picker.Item label="Black" value={4}/>
          <Picker.Item label="White" value={5}/>
          <Picker.Item label="Rainbow" value={6}/>
        </Picker>
      </View>
    </View>
  )
}
