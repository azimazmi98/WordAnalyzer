import React, {Component} from 'react';
import {Text, View, Button, TextInput, Alert} from 'react-native';
import {Styles} from './Styles';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      word: 0,
      vowel: 0,
      consonant: 0,
      character: 0
    }
  }

  analyzeWord = () => {
    let totalVowel = 0;
    let totalConsonant = 0;
    let totalCharacter = 0;
        for (let count = 0; count < this.state.word.length; count++){
          var char = this.state.word.toLowerCase().charAt(count);
            if(char.match(/[aeiou]/)){
              switch (char) {
                case 'a':
                  totalVowel++;
                  break;
                case 'e':
                  totalVowel++;
                  break;
                case 'i':
                  totalVowel++;
                  break;
                case 'o':
                  totalVowel++;
                  break;
                case 'u':
                  totalVowel++;
                  break;
              }
            } else 
              totalConsonant++;
          totalCharacter = count + 1;
        }

    this.setState({vowel: totalVowel}, () => {
      totalVowel = this.state.vowel;
    });
    this.setState({consonant: totalConsonant}, () => {
      totalConsonant = this.state.consonant;
    });
    this.setState({character: totalCharacter}, () => {
      totalCharacter = this.state.character;
    });

  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.container}>
        <Text style={Styles.welcome}>Word Analyzer</Text>
        </View>
        <View style={Styles.container}>
        <TextInput onChangeText={(word) => this.setState({word})} style={Styles.instructions} placeholder='Insert Word'/>
        <Text></Text>
        <Text></Text>
        </View>
        <View style={Styles.container}>
        <Button color="#841584" onPress={this.analyzeWord} title='Analyze'/>
        <Text></Text>
        <Text style={Styles.instructions}>Vowel: {this.state.vowel}</Text>
        <Text style={Styles.instructions}>Consonants: {this.state.consonant}</Text>
        <Text style={Styles.instructions}>Characters: {this.state.character}</Text>
        </View>
      </View>
    );
  }
}