import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GoalInput from './Components/AppComponenets/GoalInput';
import GoalItem from './Components/AppComponenets/ListItemGoal';


export default function App() {

  const [goalsList, setGoalsList] = useState([]);

  const [k, setK] = useState(0);
  // btnAdd onPress handler 
  const onBtnAddPressed = (goalVal) => {
    setK(k + 1);
    setGoalsList(currentGoalsList => [...goalsList, { key: k + "", value: goalVal }]);
  }

  const creatListItem = (itemData) => {
    return (
      <GoalItem id={itemData.index} title={itemData.item.value} onItemDeletePressed={deleteItem} />
    )
  }

  const deleteItem = (itemId) => {
    setGoalsList(
      (currentGoalsList) => {
        return (currentGoalsList.filter((goal) => goal.key != itemId));
      });
  }

  return (
    <View style={styles.root}>

      <GoalInput onAddPressed={onBtnAddPressed} />

      <View style={styles.containerList}>

        {/* // contentContainerStyle={{ paddingBottom: 56 }} */}
        <FlatList data={goalsList} renderItem={creatListItem} />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  root: { marginTop: 128, paddingTop: 16 },

  containerList: {
    height: '85%',
    marginStart: 16,
    marginEnd: 16,
    marginTop: 64,
  },


});
