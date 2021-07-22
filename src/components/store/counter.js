import { createSlice } from "@reduxjs/toolkit";

export const INCREMENT = 'increment';

const initiaCounterlState = {counter: 0, showCounter: true}
const counterSlice = createSlice({
    name: 'counter', 
    initialState: initiaCounterlState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        togglecounter(state) {
            state.showCounter = !state.showCounter;
        }

    }
})
export const counterActions = counterSlice.actions
export default counterSlice.reducer