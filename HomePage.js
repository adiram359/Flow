import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, TouchableOpacity} from 'react-native';

const HomePage = ({setPage}) => {
  const buttonTitles = ["Home", "Settings", "Surveys", "Goals", "About Flow"]

  return (
    <View style = {styles.homepage}>
      {buttonTitles.map((buttonTitle) =>

      <TouchableOpacity key = {buttonTitle} activeOpacity={0.5} style={styles.buttonContainer} onPress={() => setPage(buttonTitle)} >
        <Text  style = {styles.buttonText}>
          {buttonTitle}
        </Text>
      </TouchableOpacity>)}
    </View>
  )
}

export default HomePage;

const styles = StyleSheet.create({
  homepage: {
    backgroundColor: "#E8DAEF",
    alignItems:'center',
    justifyContent:'center',
    height: "100%"
  },
  buttonContainer: {
    margin:20,
    backgroundColor:"#28B463",
    width: "60%",
    height: "10%",
    borderRadius: 30,
    borderColor: "#239B56",
    borderWidth: 3
  },
  buttonText: {
    margin:20,
    color: "white",
    textAlign: 'center',
    fontSize: 30,
    fontWeight: "600"
  }





})
