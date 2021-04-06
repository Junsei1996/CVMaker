import { Component } from 'react'
import React from 'react';
import { TextInput, View } from 'react-native';
import { COLORS } from '../styles/Colors';
import { styles } from '../styles/styles';

class EducationContainer extends Component {
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
                    placeholder="Qualification"
                    placeholderTextColor={COLORS.grey}
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Institution"
                    placeholderTextColor={COLORS.grey}
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />

                <View style={{
                    flexDirection:'row'
                }}>
                    <TextInput style={styles.input2}
                        underlineColorAndroid="transparent"
                        placeholder="Start date"
                        placeholderTextColor={COLORS.grey}
                        autoCapitalize="none"
                        onChangeText={this.handleEmail} />
                    <TextInput style={styles.input2}
                        underlineColorAndroid="transparent"
                        placeholder="End date"
                        placeholderTextColor={COLORS.grey}
                        autoCapitalize="none"
                        onChangeText={this.handleEmail} />
                </View>
            </View>
        )
    }
}

export default EducationContainer;
