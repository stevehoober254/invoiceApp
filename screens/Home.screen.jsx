import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const clearCache = () => {
    AsyncStorage.clear();
    navigation.replace("OnboardingScreen");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>You are Home Now!</Text>
      <View style={styles.btnContainer}>
        <Button title='Clear Cache & Start' color={'red'} onPress={clearCache}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title:{
    fontSize:30,
    fontWeight:'bold'
  },
  btnContainer:{
    marginTop:30,
  }
})

export default Home
