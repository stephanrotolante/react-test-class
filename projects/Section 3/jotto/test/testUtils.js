import { ShallowWrapper } from "enzyme";
import checkPropTypes from 'check-prop-types';

import rootReducer from '../src/reducers';
import { createStore, applyMiddleware } from "redux";
import {  middlewares, middleware } from "../src/configureStore";

/**
 * Create a testing store with imported reducers, middleware, and initial state.
 * globals: rootReducer
 * @param {object} initialState - Initial State for store
 * @function storeFactory
 * @returns {Store} from Redux store
 */
export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
    return createStoreWithMiddleware(rootReducer,initialState);
}
/**
 * @function findByTestAttr - Finds attribute within the wrapper
 * @param {ShallowWrapper} wrapper - Enzyme Shallow Wrapper
 * @param {string} val - Value of data-test attribute for search.
 * @returns {ShallowWrapper} 
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (component, conformingProps) => {
    return checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);
}