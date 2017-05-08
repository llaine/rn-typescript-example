import * as React from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';

import Button from '../components/Button'

export default class App extends React.Component<{}, {}> {

    onButtonPress() {
        console.log('Hello pressed!')
    }

    render() {
        return (
            <View
                style={{
                    flex: 1, justifyContent: 'center', alignItems: 'center'
                }}
            >
                <Text>Hello, there typed world</Text>
                <Button text="Hello button" onPress={this.onButtonPress} />
            </View>
        )
    }
}
