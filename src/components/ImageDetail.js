import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    return (
        <View style={styles.viewDetail}>
            <Image source={props.imageSource} />
            <Text>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewDetail: {
        flexDirection: 'row',
        marginTop: 20,
    }
});

export default ImageDetail;