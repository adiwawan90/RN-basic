import React, { useState } from 'react';
import { View, Text, Button } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)

    return (
        <View>
            <Button title="INCREASE" onPress={() => { setCounter(counter + 1) }}/>
            <Button title="DECREASE" onPress={() => { setCounter(counter - 1) }}/>
            <View style={{alignItems:"center"}}>
                <Text>Counter: {counter}</Text>
            </View>
        </View>
    );
}

export default CounterScreen; 