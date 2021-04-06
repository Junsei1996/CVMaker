import { Component } from 'react'
import React from 'react';
import { TextInput, View ,Text} from 'react-native';
import { COLORS } from '../styles/Colors';
import { styles } from '../styles/styles';

class Summary extends Component {
    state = {
        email: '',
        password: '' 
    }

    handleEmail = (text) => {
        this.setState({ email: text })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Summary"
                    placeholderTextColor={COLORS.grey}
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />
            </View>
        )
    }
}

export default Summary;
