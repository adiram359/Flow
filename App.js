import React, { useState } from 'react';
import GoalBar from "./GoalBar.js";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [goalList, setGoalList] = useState([])

  const removeGoal = (goalTitle) => {
    setGoalList(goalList.filter((goal) => goal !== goalTitle))

  }

  const goalInput = (goal) => {
    setEnteredGoal(goal)
  }

  const addGoal = () => {
    setGoalList((curr) => [...curr, enteredGoal])
  }

  return (
    <View style = {styles.container}>
      <GoalBar goalInput = {goalInput} enteredGoal = {enteredGoal} />
      <View style={styles.buttonView}>
        <Button
          title="Add Goal!"
          color="#17202A"
          onPress={addGoal}
        />
      </View>

      <ScrollView>
        {goalList.map((goal) =>
          <View key={goal}style={styles.goalContainer}>
            <Text key={goal}style = {styles.goal}>
              {goal}
            </Text>
              <Button onPress={() => removeGoal(goal)} color="#E74C3C" title= "X"/>
          </View>

        )}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    height:"100%",
    width:"100%",
  },
  goalinput: {
    marginTop:130,
    fontSize:25,
    borderWidth:1,
    width:"90%",
    height:80,
    borderRadius:10,
    borderWidth: 2,
    backgroundColor: "#D6EAF8"
  },
  buttonView: {
    margin: 6,
    backgroundColor: "#58D68D",
    borderWidth: 2,
    borderRadius: 10,
  },
  goal: {
    margin:3,
    fontSize: 25,
  },
  goalContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin:3,
    backgroundColor: "#F9E79F",
    borderColor: "#F1C40F",
    borderWidth:1,
    borderRadius: 10,
    width: 300,
    height: 40,
  },
});
