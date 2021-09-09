import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import ic_close from '../../assets/ic_close.png';


const GoalItem = props => {
  const ic_close_uri = Image.resolveAssetSource(ic_close).uri;

  return (
    <View style={styles.listItemGoal}>
      <Text style={styles.listItemGoalTextIndex}>{(props.id + 1) + ". "}</Text>
      <Text style={styles.listItemGoalText}> {props.title}</Text>
      <TouchableOpacity onPress={props.onItemDeletePressed.bind(this,props.id)}>
        <Image
          style={styles.iconDelete}
          source={{ uri: ic_close_uri }}
        />
      </TouchableOpacity>
    </View>);
};

const styles = StyleSheet.create({
  listItemGoal: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginBottom: 16,
    backgroundColor: "#f0f4f9ff",
    borderRadius: 50,
  },

  listItemGoalTextIndex:{
    marginEnd:4
  },

  listItemGoalText: {
    flex: 4,
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent:'center'
  },

  iconDelete: {
    marginEnd: 4,
    marginStart: 8,
    tintColor: 'red',
    height: 16,
    width: 16
  }
  
});

export default GoalItem;

