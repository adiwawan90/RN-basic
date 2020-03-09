import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
    const name = 'Wagiman'
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.textStyle}>This is component screen</Text>
            <Text>Helo my name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})

export default ComponentScreen;