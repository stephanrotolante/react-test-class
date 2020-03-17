import React from 'react';
import { shallow, ShallowWrapper } from  'enzyme';

import {storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

/**
 * @function setup
 * @param {object} state 
 * @returns {ShallowWrapper}
 */
const setup = (state={}) => {

    const store = storeFactory(state);

    const wrapper = shallow(<App store={store} />).dive().dive();

    return wrapper
}

describe('redux properties', () => {
    test('has access to `success` state', () => {
        const success = true;

        const wrapper = setup({success});

        const successProp = wrapper.instance().props.success

        expect(successProp).toBe(success);
    });
    test('has access to `secretWord` state', () => {

        const secretWord = 'party';

        const wrapper = setup({secretWord});

        const secretWordProp = wrapper.instance().props.secretWord

        expect(secretWordProp).toBe(secretWord);
    });
    test('has access to `guessedWord` state', () => {

        const guessedWords = [{ guessedWord: 'train', letterMatchCount:3}];

        const wrapper = setup({guessedWords});

        const guessedWordsProp = wrapper.instance().props.guessedWords

        expect(guessedWordsProp).toBe(guessedWords);
    });

    test('`getSecretWord` action creator is a function on the props',() => {
        const wrapper = setup();

        const getSecretWordProp = wrapper.instance().props.getSecretWord;

        expect(getSecretWordProp).toBeInstanceOf(Function);
    })
});

test('`getSecretWord` runs on app mount', () => {
    
    const getSecretWordMock = jest.fn();

    const props = {
        success: true,
        getSecretWord:getSecretWordMock,
        guessedWords: []
    };

    //Setup app with mock function as prop
    const wrapper = shallow(<UnconnectedApp {...props} />);

    // run lifecycle method
    wrapper.instance().componentDidMount();
    
    //Check to see if function ran
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

    expect(getSecretWordCallCount).toBe(1);
});
