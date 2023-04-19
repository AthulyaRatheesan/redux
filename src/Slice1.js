import { createSlice } from '@reduxjs/toolkit'

const initialState = {num:1}
  

export const counterSlice1 = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    printnums: (state) => {
      
      state.num *= 2
    },
    
    },
    
})

// Action creators are generated for each case reducer function
export const { printnums } = counterSlice1.actions

export default counterSlice1.reducer