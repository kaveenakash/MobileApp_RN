import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);
  const[isAddMode,setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle) => {
    // setCourseGoals([...courseGoals,enteredGoal])
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false)
  };

  const removeGoalHandler = goalId =>{
    console.log(goalId)
    setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoalAddditionHandler = () =>{
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput  onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelGoalAddditionHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
 
});
