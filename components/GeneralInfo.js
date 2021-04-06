import { Component } from 'react'
import React from 'react';
import { TextInput, View } from 'react-native';
import { COLORS } from '../styles/Colors';
import { styles } from '../styles/styles';

class GeneralInfo extends Component {
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
          placeholder="Name"
          placeholderTextColor={COLORS.grey}
          autoCapitalize="none"
          onChangeText={this.handleEmail} />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Title"
          placeholderTextColor={COLORS.grey}
          autoCapitalize="none"
          onChangeText={this.handleEmail} />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Contact"
          placeholderTextColor={COLORS.grey}
          autoCapitalize="none"
          onChangeText={this.handleEmail} />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor={COLORS.grey}
          autoCapitalize="none"
          onChangeText={this.handleEmail} />
        <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Address"
          placeholderTextColor={COLORS.grey}
          autoCapitalize="none"
          onChangeText={this.handleEmail} />
      </View>
    )

  }

}

export default GeneralInfo;
