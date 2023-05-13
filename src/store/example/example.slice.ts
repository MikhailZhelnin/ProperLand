import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitialState {
  items: []
}

const initialState: IInitialState = {
  items: []
}

export const example = createSlice({
  name: 'example',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction) => {
      return state
    }
  }
})

export const exampleReducer = example.reducer
export const exampleActions = example.actions