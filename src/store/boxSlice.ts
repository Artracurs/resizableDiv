import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number
}

const boxSlice = createSlice({
  name: 'box',
  initialState: {
    box: [{
      width: '100px',
      height: '100px',
    }]
  },
  reducers: {
    changeWidth(state, action) {
      state.box.push({
        width: '350px',
        height: '350px',
      })
    },
    changeHight(state, action) {
      state.box.push({
        width: '350px',
        height: '350px',
      })
    }
  }

})

export const 