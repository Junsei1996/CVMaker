import React from 'react';
import { Text } from 'react-native';
import Education from './components/Education';
import GeneralInfo from './components/GeneralInfo';
import Summary from './components/Summary';
import Achievement from './components/Achievements';
import Experience from './components/Experience';
import AdditionalInfo from './components/AdditionalInfo';
import { ScrollView } from 'react-native';
import { styles } from './styles/styles';

export default function App() {
  return (
    <ScrollView style={{marginTop:40}}>
      <Text style={styles.title,{marginStart:20}}>General Information</Text>
      <GeneralInfo/>
      <Text style={styles.title,{marginStart:20}}>Career Summary</Text>
      <Summary/>
      <Text style={styles.title,{marginStart:20}}>Experience</Text>
      <Experience/>
      <Text style={styles.title,{marginStart:20}}>Education</Text>
      <Education/>
      <Text style={styles.title,{marginStart:20}}>Achievements</Text>
      <Achievement/>
      <Text style={styles.title,{marginStart:20}}>Additional Information</Text>
      <AdditionalInfo/>
    </ScrollView>
    // <AdditionalInfo/>
  );
}