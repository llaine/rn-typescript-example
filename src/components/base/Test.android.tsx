import React, { Component } from 'react';
import { ViewStyle, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {} as ViewStyle,
});

interface Props {
}

export default class Test extends Component<Props, void> {
    render() {
        return (
            <View style={styles.container}>
                <Text>Text android</Text>
            </View>
        );
    }
}