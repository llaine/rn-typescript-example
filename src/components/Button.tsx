import * as React from 'react';
import {
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

interface Props {
    text: string,
    onPress: () => void
}

export default class Button extends React.Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight onPress={this.props.onPress} style={styles.button}>
                <Text >{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 3,
        backgroundColor: 'green'
    }
})