import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter()});

/**
 * Factory function to create a ShallowWrapper fo the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {any} state - Initial state for setup.
 * @returns {ShallowWrapper} 
 */
const setup = (props = {}, state=null) => {
  const wrapper = shallow(<App {...props}/>);

  if(state) wrapper.setState(state);

  return wrapper;
}

/**
 * Return ShawllowWrapper containing node(s) with given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attritbute for search.
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`)
}

test('renders without error', () => {
  const wrapper = setup();

  const appComponent = findByTestAttr(wrapper,'component-app');

  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();

  const button = findByTestAttr(wrapper,'increment-button');

  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();

  const counterDisplay = findByTestAttr(wrapper,'counter-display');

  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();

  const initialCounterState = wrapper.state('counter');

  expect(initialCounterState).toBe(0)

});

test('clicking increment button increments coutner display', () => {
    const counter = 7;

    const wrapper = setup(null, {counter});

    // Find button and click
    const button = findByTestAttr(wrapper, 'increment-button');
    button.simulate('click');

    // Find display and test value
    const counterDisplay = findByTestAttr(wrapper, 'counter-display');
    expect(counterDisplay.text()).toContain(counter+1);


});


test('clicking decrement button decrements display', () => {

  const counter = 7;
  const wrapper = setup(null,{counter});

  // Find Decrement Button
  const button = findByTestAttr(wrapper,'decrement-button');
  button.simulate('click');

  // Find displaya and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.text()).toContain(counter-1);


});

test('No Count Below Zero', () => {
  
  const counter = 0;

  const wrapper = setup(null,{counter});

  // Find Decrement Button
  const button = findByTestAttr(wrapper,'decrement-button');

  button.simulate('click');

  // Find displaya and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');

  expect(counterDisplay.text()).toContain(counter);
});


test('Error message is displayed at zero', () => {
  const counter = 0;

  const wrapper = setup(null,{counter});

  const errorMessage = findByTestAttr(wrapper,'error-message');

  expect(errorMessage.length).toBe(1);
})


test('Error message is not displayed above zero', () => {
  const counter = 0;

  const wrapper = setup(null,{counter});

  const errorMessageBefore = findByTestAttr(wrapper,'error-message');

  expect(errorMessageBefore.length).toBe(1);

  // Find Decrement Button
  const button = findByTestAttr(wrapper,'increment-button');

  button.simulate('click');

  const errorMessageAfter = findByTestAttr(wrapper,'error-message');

  expect(errorMessageAfter.length).toBe(0);
});

