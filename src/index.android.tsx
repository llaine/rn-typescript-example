import * as React from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';

import App from './containers/App'

export default class badgeExplorerTS extends React.Component<{}, {}> {
    render() {
        return (
            <App />
        )
    }
}

AppRegistry.registerComponent('badgeExplorerTS', () => badgeExplorerTS);
