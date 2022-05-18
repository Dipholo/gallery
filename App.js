import { StyleSheet, Text, View, StatusBar, TouchableOpacity,Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Display from './Display';

export default function App() {
  const[image,setImage] = useState(require('./assets/icon.jpg'));

    function happy(){
        setImage(require('./assets/happy_bart.jpg'));  
    }
    function sad(){
        setImage(require('./assets/sad_bart.jpg'));
    }
    function normal(){
      setImage(require('./assets/normal_bart.jpg'));
    }
    function angry(){
      setImage(require('./assets/angry_bart.jpg'));
    }
    function surprised(){
      setImage(require('./assets/surprised_bart.jpg'));
    }
    function anxious(){
      setImage(require('./assets/anx.webp'));

    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        
         <TouchableOpacity>
         <Ionicons name="arrow-back-outline" size={24} color="white" />
         </TouchableOpacity>   
        <Text style={styles.label}> Gallery </Text>
         
        <View style={styles.icon}>
        <TouchableOpacity>
        <AntDesign name="sharealt" size={20} color="white" />
         </TouchableOpacity>
         </View>
        
         <View style={styles.icon2}>
         <TouchableOpacity>
         <Ionicons name="settings-outline" size={20} color="white" />
         </TouchableOpacity>
         </View>
      </View>

      <View style={styles.body}>
        <Display image={image}/>
      </View>
      <View style={styles.footer}>
      <ScrollView horizontal={true}>
       
      <TouchableOpacity onPress={happy}>
      <Image style={styles.image} source={require('./assets/happy_bart.jpg')}  />
      <Text style={styles.text}>Happy</Text> 
      </TouchableOpacity>
      
      <TouchableOpacity onPress={sad}>
      <Image style={styles.image} source={require('./assets/sad_bart.jpg')} />
      <Text style={styles.text}>Sad</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={normal}>
      <Image style={styles.image} source={require('./assets/normal_bart.jpg')}  />
      <Text style={styles.text}>Normal</Text> 
      </TouchableOpacity>

      <TouchableOpacity onPress={angry}>
      <Image style={styles.image} source={require('./assets/angry_bart.jpg')}  />
      <Text style={styles.text}>Angry</Text> 
      </TouchableOpacity>

      <TouchableOpacity onPress={surprised}>
      <Image style={styles.image} source={require('./assets/surprised_bart.jpg')}  />
      <Text style={styles.text}>Surprised</Text> 
      </TouchableOpacity>

      <TouchableOpacity onPress={anxious}>
      <Image style={styles.image} source={require('./assets/anx.webp')}  />
      <Text style={styles.text}>Anxious</Text> 
      </TouchableOpacity>
      </ScrollView>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label:{
    fontSize:20,
    letterSpacing: 2,
    color:'white',
    fontWeight: 'bold',
    marginLeft: 90
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop: 10,
    padding:10,
    width:'100%',
    backgroundColor: 'grey'
  },
  icon:{
    marginLeft: 51
  },
  icon2:{
    marginLeft: 10

  },
  body:{
    flex:3,
    marginTop: 10,
    width:'100%',
    height:'80%',
    backgroundColor: 'grey',
  
  },
  footer: {
    flex:1,
    backgroundColor:'#212121',
    width:'100%',
    flexDirection: 'row',
    padding:10,
    justifyContent: 'space-between'
  },

  image:{  
    height:90,
    width: 90,
    borderRadius:8,
    margin: 5 
    },

  text:{
    fontSize: 15,
    alignSelf:'center',
    fontWeight: 'bold',
    color: "white",
    letterSpacing: 2
  }  
});
