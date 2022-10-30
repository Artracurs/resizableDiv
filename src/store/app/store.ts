import { configureStore } from '@reduxjs/toolkit';
import {BoxSlice} from '../features/BoxSlice'

export const store = configureStore({
  reducer: {
    box: BoxSlice;
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
