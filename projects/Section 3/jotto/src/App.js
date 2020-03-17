import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions';

export class UnconnectedApp extends Component {

  componentDidMount() {

    const { getSecretWord = () => {}} = this.props;

    getSecretWord();
  };

  test() {
    
  }

  render() {
    const { guessedWords , success, secretWord } = this.props;

    return (
      <div className="container">
        <h1>Jotto</h1>
    <div>The secret word is {secretWord}</div>
        <Congrats success={success}/>
        <Input />
        <GuessedWords guessedWords={guessedWords}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {  guessedWords, success, secretWord } = state;

  return {
    guessedWords,
    success,
    secretWord
  };

}

export default connect(mapStateToProps,{ getSecretWord })(UnconnectedApp);
