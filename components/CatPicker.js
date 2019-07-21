import React from 'react';
import { 
  Text, 
  View, 
  Picker,
} from 'react-native';
import styles from "./styles";

export default function CatPicker(props) {
  return (
    <View style={{marginTop:20}}>
    <Text style={styles.submenu}>Cat</Text>
    <Picker
      style={{width:'100%'}}
      selectedValue={props.cat}
      onValueChange={(itemValue) => props.saveCat(itemValue)}
    >
      <Picker.Item label="Cat" value={7}/>
      <Picker.Item label="For SCIENCE!" value={8}/>
      <Picker.Item label="Purride" value={9}/>
      <Picker.Item label="Marathon Cat" value={10}/>
    </Picker>
  </View>
  )
}
