import React, { Component } from 'react';
import { ViewStyle, View, Text, StyleSheet, Image } from 'react-native';

import { avatar } from 'resources/images';
import Test from 'components/base/Test';

const styles = StyleSheet.create({
    container: {} as ViewStyle,
});

interface Props {
}

export default class Landing extends Component<Props, void> {
    render() {
        return (
            <View style={styles.container}>
                <Text>fefefe</Text>
                <Test/>
                <Image source={avatar} />
            </View>
        );
    }
}