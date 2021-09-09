import React, { useState } from 'react'
import {View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const GoalInput = props => {
    const [goal, setGoal] = useState('');

  // a const which gets its value from a function 
  const onGoalTextChangedHandler = (enteredText) => {
    setGoal(enteredText);
  }
    return (
        <View style={styles.containerTop}>
            <TextInput placeholder="New Course Goal..."
                style={styles.styleTextInput}
                onChangeText={onGoalTextChangedHandler}
                value={goal}
            />
            <TouchableOpacity
                style={styles.btnContainer}
                onPress={props.onAddPressed.bind(this, goal)} >
                    <Text style={styles.btnText}>Add</Text></TouchableOpacity>
        </View>
    );

};



const styles = StyleSheet.create({
    containerTop: {
        flexDirection: 'row',
        alignItems: 'center'
      },
    styleTextInput: {
        paddingBottom: 2, paddingTop: 4, paddingStart: 16, paddingEnd: 16,
        width: '80%', borderBottomColor: '#c3c3c3', borderBottomWidth: 1,
        marginEnd: 16, marginStart: 16
    },

    btnContainer: { marginEnd: 16 },
    btnText: { color: '#00BBFFff', fontSize: 20 },
});

export default GoalInput;

