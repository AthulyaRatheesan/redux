import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    num:2,
    num1:5,
    result:0}
  

export const counterSlice2 = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    add: (state) => {
      
      state.result=state.num+state.num1
    },
      sub: (state) => {
        state.result=state.num1-state.num
      },
      mul: (state) => {
        state.result=state.num1*state.num
      },
      div:(state) => {
        state.result=state.num1/state.num
      }

    
    
    },
    
})

// Action creators are generated for each case reducer function
export const { add,sub,mul,div } = counterSlice2.actions

export default counterSlice2.reducer