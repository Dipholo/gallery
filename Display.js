import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function Display({image}) {
    return (
        <View style={styles.container}>
          <Image style={styles.image} source = {image}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
    },
  image:{  
    height:'100%',
    width: '95%',
    borderRadius:10
  }
})
