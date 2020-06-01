import React from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';

const GoalBar = (props) => {
  return (
    <TextInput
      placeholder="Type in Your Goal ..."
      style={styles.goalinput}
      onChangeText={props.goalInput}
      value = {props.enteredGoal}
    />)

};
const styles = StyleSheet.create({
  goalinput: {
    marginTop:130,
    fontSize:25,
    borderWidth:1,
    width:"90%",
    height:80,
    borderRadius:10,
    borderWidth: 2,
    backgroundColor: "#D6EAF8"
  }
});

export default GoalBar;
