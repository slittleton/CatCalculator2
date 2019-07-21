import React from 'react';
import { 
  Text, 
  View, 
  Modal, 
  TouchableOpacity,
  Image
} from 'react-native';
import styles from "./styles";

export default function SettingsModal(props) {
  return (
    <View style={{width:'20%'}}>
    <TouchableOpacity onPress={props.handleModal} style={styles.settingsBtn}>
      <Image 
        source={require('../img/gear.png')}
        style={{width: 32, height: 32}}
      />
    </TouchableOpacity>
    <Modal 
      visible={props.modalVisibility}
      animationType={'slide'}
      onRequestClose={()=>{}}
    >
      {props.children}

      <TouchableOpacity onPress={props.handleModal} style={styles.buttonStyleInside}>
        <Text style={styles.textStyle}>Close</Text>
      </TouchableOpacity>
    </Modal>
  </View>
  )
}
