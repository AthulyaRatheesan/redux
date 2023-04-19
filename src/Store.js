import { configureStore } from '@reduxjs/toolkit'
import counterSlice  from './Slice'
import  counterSlice1  from './Slice1'
import  counterSlice2  from './Slice2'
import  strSlice1  from './Task'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    counter1: counterSlice1,
    counter2:counterSlice2,
    counter3:strSlice1
  
  },
})