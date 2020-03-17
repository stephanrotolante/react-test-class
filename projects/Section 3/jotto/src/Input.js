import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from './actions';

export class UnconnectedInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentGuess: ''
        }
    }

    submitWordGuess(evt) {

        const {guessWord} = this.props;

        const { currentGuess } = this.state;

        evt.preventDefault();

        if(currentGuess &&currentGuess.length > 0){
            guessWord(currentGuess);

            this.setState({currentGuess: ''})
        }
    }
    render() {
        const { success, guessWord = () => {} } = this.props;

        const contents = success?null:( 
            <form className="form-inline">
                    <input 
                        data-test="input-box"
                        className="nb-2 mx-sm-3"
                        type="text"
                        value={this.state.currentGuess}
                        onChange={(evt) => this.setState({currentGuess:evt.target.value})}
                        placeholder="enter guess"
                    />
                    <button 
                        data-test="submit-button"
                        type="submit"
                        className="btn btn-primary mb-2"
                        onClick={(evt) => this.submitWordGuess(evt)}
                    >
                        Submit
                    </button>
            </form>
        )
        return (
            <div data-test="component-input">
                {contents}
            </div>
        );
    }
}

const mapStateToProps = ({success}) => {
    return {
        success
    };
}

export default connect(mapStateToProps,{guessWord})(UnconnectedInput);