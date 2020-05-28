import React, {useState} from 'react';
import GoalBar from "./GoalBar.jsx";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInput = (goal) => {
    setEnteredGoal(goal)
  }
  const addGoal = () => {
    console.log(enteredGoal)
    setEnteredGoal('')
  }
  return (
    <View style = {styles.container}>
      <TextInput
        placeholder="Type in Your Goal ..."
        onChangeText={goalInput}
        style={styles.goalinput}
        value = {enteredGoal}
        />
      <View style={styles.buttonView}>
        <Button
          title="Add Goal!"
          color="#17202A"
          onPress={addGoal}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    justifyContent:"center",
    height:"100%",
    width:"100%",
  },
  goalinput: {
    fontSize:25,
    borderWidth:1,
    width:"90%",
    height:80,
    borderRadius:10,
    borderWidth: 2,
    backgroundColor: "#D6EAF8"
  },
  buttonView: {
    margin: 10,
    backgroundColor: "#58D68D",
    borderWidth: 2,
    borderRadius: 10,
  }
});
