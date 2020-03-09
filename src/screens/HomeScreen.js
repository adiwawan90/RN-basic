import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.text}>HomeScreen</Text>
      <View>
        <TouchableOpacity style={styles.buttonView} title="List" onPress={() => navigation.navigate  ('List')}><Text style={{color: 'white'}}>List Component</Text></TouchableOpacity>
        <TouchableOpacity style={styles.buttonView} title="Comp" onPress={() => navigation.navigate  ('Comp')}><Text style={{color: 'white'}}>Component screen</Text></TouchableOpacity>
        <Button style={styles.buttonView} title="Go to Image Screen" onPress={() => navigation.navigate  ('Image')}/>
        <Button style={styles.buttonView} title="Go to Counter Screen" onPress={() => navigation.navigate  ('Counter')}/>
        <Button style={styles.buttonView} title="Go to Color Screen" onPress={() => navigation.navigate  ('Color')}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonView: {
    backgroundColor: 'tomato',
    width: 120,
    height: 20,
    paddingHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 4,
  }
});

export default HomeScreen;


