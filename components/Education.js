import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet, TouchableOpacity, Animated, ScrollView, Image } from 'react-native';
import EducationContainer from './EducationContainer';
import { COLORS } from '../styles/Colors';

export default class Education extends Component {
    constructor() {
        super();

        this.state = { valueArray: [], disabled: false }

        this.index = 0;

        this.animatedValue = new Animated.Value(0);
    }

    addMore = () => {
        this.animatedValue.setValue(0);

        let newlyAddedValue = { index: this.index }

        this.setState({ disabled: true, valueArray: [...this.state.valueArray, newlyAddedValue] }, () => {
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                }
            ).start(() => {
                this.index = this.index + 1;
                this.setState({ disabled: false });
            });
        });
    }

    render() {
        const animationValue = this.animatedValue.interpolate(
            {
                inputRange: [0, 1],
                outputRange: [-59, 0]
            });

        let newArray = this.state.valueArray.map((item, key) => {
            if ((key) == this.index) {
                return (
                    <Animated.View key={key} style={[styles.viewHolder, { opacity: this.animatedValue, transform: [{ translateY: animationValue }] }]}>
                        <EducationContainer />
                    </Animated.View>
                );
            }
            else {
                return (
                    <EducationContainer />
                );
            }
        });

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={{ padding: 4 }}>
                        {
                            newArray
                        }
                    </View>
                </ScrollView>

                <TouchableOpacity activeOpacity={0.8} style={styles.btn} disabled={this.state.disabled} onPress={this.addMore}>
                    <Text>Add Education</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container:
        {
            backgroundColor: '#fff',
            alignItems: 'center',
            marginStart: 20,
            marginEnd: 20
        },

        viewHolder:
        {
            height: 55,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 4
        },

        text:
        {
            color: 'white',
            fontSize: 25
        },

        btn:
        {
            
            width: '100%',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.grey,
            padding: 15
        },

        btnImage:
        {
            resizeMode: 'contain',
            width: '100%',
            tintColor: 'white'
        }
    });