import React, {Component} from 'react';
import { 
        View, 
        ImageBackground
      } from 'react-native';
import Calc from './Calc';
import styles from "./styles";
import AsyncStorage from '@react-native-community/async-storage';
import BackColorPicker from './BackColorPicker';
import CatPicker from './CatPicker';
import ButtonColorPicker from './ButtonColorPicker';
import SettingsModal from './SettingsModal';

const backgrounds = {
  background1: require('../img/blue-b.jpg'),
  background2: require('../img/red-b.jpg'),
  background3: require('../img/green-b.jpg'),
  background4: require('../img/black-b.jpg'),
  background5: require('../img/white-b.jpg'),
  background6: require('../img/rainbow-b.jpg')
}

const cats = {
  cat1: require('../img/cat1.png'),
  cat2: require('../img/scienceCat-SR.png'),
  cat3: require('../img/lgbtCat-SR.png'),
  cat4: require('../img/runnerCat-SR.png')
};

class BackgroundChanger extends Component{
  state={
    backgroundImage: require('../img/blue-b.jpg'),
    cat: require('../img/cat1.png'),
    modal: false
  }

  componentDidMount = async ()=>{
    const value = await AsyncStorage.getItem('@UserBackground:key');
    const catValue = await AsyncStorage.getItem('@UserCat:key');
 
    // Background================
    if (value == 1){ this.setState({backgroundImage: backgrounds.background1})
    }else if (value == 2){ this.setState({backgroundImage: backgrounds.background2})
    }else if (value == 3){ this.setState({backgroundImage: backgrounds.background3})
    }else if (value == 4){ this.setState({backgroundImage: backgrounds.background4})
    }else if (value == 5){ this.setState({backgroundImage: backgrounds.background5})
    }else if (value == 6){ this.setState({backgroundImage: backgrounds.background6})
    }else{ this.setState({backgroundImage: backgrounds.background1})
    }
    //Cat ======================
    if (catValue== 7){ this.setState({cat: cats.cat1})
    } else if (catValue==8){ this.setState({cat: cats.cat2})
    } else if (catValue==9){ this.setState({ cat: cats.cat3 })
    } else if (catValue==10){ this.setState({ cat: cats.cat4 })
    } else { this.setState({ cat: cats.cat1 })
    }
  };

  handleModal = () =>{
    this.setState({ modal: !this.state.modal ? true : false })
  };

  saveBackground = async (itemValue) => {
    let val1 = JSON.stringify(itemValue);
    await AsyncStorage.setItem('@UserBackground:key', val1);

    let value = JSON.parse(await AsyncStorage.getItem('@UserBackground:key'));
    this.setState({
      backgroundImage: value,
    })
  }

  saveCat = async (itemValue) => {
    let catVal = JSON.stringify(itemValue);
    await AsyncStorage.setItem('@UserCat:key', catVal);

    let value = JSON.parse(await AsyncStorage.getItem('@UserCat:key'));
    this.setState({
      cat: value,
    }) 
  }

  render(){
    return(
      <View>
        <ImageBackground 
          style={styles.image} 
          imageStyle={{resizeMode: 'stretch'}} 
          source={this.state.backgroundImage}
        >
        <ImageBackground 
              style={styles.image} 
              imageStyle={{resizeMode: 'stretch'}} 
              source={this.state.cat}
            >
            <Calc/>
            <SettingsModal handleModal={this.handleModal} modalVisibility={this.state.modal}>
              <BackColorPicker saveBackground={this.saveBackground} backgroundImage={this.state.backgroundImage}/>
              <CatPicker saveCat={this.saveCat} cat={this.state.cat}/>
              <ButtonColorPicker/>
            </SettingsModal>
        
          </ImageBackground>
        </ImageBackground>
      </View>
    )
  }

}
export default BackgroundChanger;



