import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    str:"hello",
    str1:"world",
    str2:""
}
  

export const strSlice1 = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    String1: (state) => {
      
      state.str2=state.str+state.str1
    },
    
    },
    
})

// Action creators are generated for each case reducer function
export const { String1 } = strSlice1.actions

export default strSlice1.reducer