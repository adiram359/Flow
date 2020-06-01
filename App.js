import React, { useState } from 'react';
import GoalBar from "./GoalBar.js";
import GoalsPage from "./GoalsPage.js";
import HomePage from "./HomePage.js";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
// import SwipeableViews from 'react-swipeable-views';

export default function App() {

  const [currentPage, setcurrentPage] = useState('Home')

  if (currentPage === 'Home') {
    return (
      <HomePage setPage={setcurrentPage}/>
    )
  } else if (currentPage === 'Goals') {
    return (<GoalsPage />)

  }

}
