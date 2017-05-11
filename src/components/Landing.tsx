import React, { Component } from 'react';
import { ViewStyle, View, Text, StyleSheet, Image } from 'react-native';

import { avatar } from 'resources/images';
import Test from 'components/base/Test';
import { Client, Configuration } from 'bugsnag-react-native';

const styles = StyleSheet.create({
    container: {} as ViewStyle,
});

interface Props {
}

export default class Landing extends Component<Props, void> {
    render() {
        const configuration = new Configuration('API_KEY');
        // configuration.notifyReleaseStages =  ['development'];
        // configuration.releaseStage = 'development';
        // const bugsnag = new Client(configuration);
        // const t = false;
        // if (t) {
        //     bugsnag.notify(new Error());
        // }

        return (
            <View style={styles.container}>
                <Text>fefefe</Text>
                <Test/>
                <Image source={avatar} />
            </View>
        );
    }
}