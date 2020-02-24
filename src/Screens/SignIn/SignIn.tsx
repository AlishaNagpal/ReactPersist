import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface SignInProps {
}

export interface SignInState {
}

export default class SignInComponent extends React.Component<SignInProps, SignInState> {
    constructor(props: SignInProps) {
        super(props);
        this.state = {
        };

    }

    public render() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
                <Text>SignIn Component</Text>
                <TouchableOpacity onPress={() => this.onBugCheck4()}>
                    <Text>BugTrace Check</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
