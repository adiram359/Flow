import React, { useState } from 'react';
import { StyleSheet, Text, Modal, View,TouchableOpacity} from 'react-native';

const Goal = ({text, removeGoal, goalInfo}) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
      <Modal  animationType="slide" visible={modalVisible}transparent={true} >
        <View style={styles.goalInfoModal}>
          <TouchableOpacity style={styles.exitModalButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.xButton}> X </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.removeGoalButton} onPress={() => removeGoal()}>
            <Text style={styles.removeGoalText}> Remove Goal </Text>
          </TouchableOpacity>
        </View>
      </Modal>


      <TouchableOpacity activeOpacity={0.5} style={styles.goalContainer} onPress={() => setModalVisible(true)}>
        <Text style={styles.goal}>
          {text}
        </Text>

      </TouchableOpacity>
    </>
  );
}
export default Goal;
const styles = StyleSheet.create({
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
    marginTop:580,
    backgroundColor: "#E74C3C",
    height: 60,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignSelf:"center",

  },
  removeGoalText: {
    color:"white",
    fontWeight:"bold",
    fontSize: 20,
  }
});
