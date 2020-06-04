import React, { useState } from 'react';
import GoalBar from "./GoalBar.js";
import Goal from "./Goal.js";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, Modal} from 'react-native';
// import SwipeableViews from 'react-swipeable-views';

const GoalsPage = ({goHome, goalList, setGoalList, removeGoal}) =>{

  const [enteredGoal, setEnteredGoal] = useState('')
  const goalInput = (goal) => {
    setEnteredGoal(goal)
  }
  const addGoal = () => {
    setGoalList((curr) => [...curr, enteredGoal])
  }


  return (
    <View style={{backgroundColor: "#E8DAEF"}}>




      <TouchableOpacity activeOpacity={0.5} style = {styles.homebutton} onPress={() => goHome('Home')}>
        <Text style = {styles.homebuttontext}> Home </Text>
      </TouchableOpacity>
      <View style = {styles.container}>


        <GoalBar goalInput = {goalInput} enteredGoal = {enteredGoal} />


        <View style={styles.buttonView}>
          <Button
            title="Add Goal!"
            color="#17202A"
            onPress={addGoal}
          />
        </View>

        <ScrollView style={styles.scroll}>
          {goalList.map((goal) =>
            <Goal key={goal} text={goal} removeGoal={() => removeGoal(goal)} />
          )}
        </ScrollView>
      </View>
    </View>
  );
}
export default GoalsPage;
const styles = StyleSheet.create({
  container: {
    marginTop:0,
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
  homebutton: {
    alignItems: 'flex-start',
    marginTop: 50,
    marginLeft: 20,
    width: "20%",
    height: "5%",
    borderRadius: 10,
    backgroundColor: "#E74C3C",
  },
  homebuttontext: {
    fontSize:20,
    marginLeft: 10,
    marginTop: 10,
    color: "white",
    fontWeight: "700"
  },
  goalInfoModal: {
    marginTop: 75,
    alignSelf: 'center',
    width:"80%",
    backgroundColor:"white",
    height: "80%",
    borderRadius:10,

  },
  exitModalButton: {
    width:30,
    height:30,
    borderRadius:20,
    backgroundColor: "#D6DBDF",
    alignSelf: "flex-start",
    marginTop: 10,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  xButton: {
    color: "#5D6D7E",
    fontSize:20,
    fontWeight: "bold",
  },
  removeGoalButton: {
    marginTop:610,
    backgroundColor: "#E74C3C",
    height: 40,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf:"center",

  },
  removeGoalText: {
    color:"white",
    fontWeight:"bold"
  }
});
