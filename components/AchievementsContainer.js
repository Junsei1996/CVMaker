import { Component } from 'react'
import React from 'react';
import { TextInput, View } from 'react-native';
import { COLORS } from '../styles/Colors';
import { styles } from '../styles/styles';

class AchievementsContainer extends Component {
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
                    placeholder="Achievement"
                    placeholderTextColor={COLORS.grey}
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Event"
                    placeholderTextColor={COLORS.grey}
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />
                <TextInput style={styles.input }
                    underlineColorAndroid="transparent"
                    placeholder="Dated"
                    placeholderTextColor={COLORS.grey}
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />

            </View>
        )
    }
}

export default AchievementsContainer;
