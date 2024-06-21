import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name : 'Cart',
    initialState:[],
    reducers:{
        addItem : (state,action)=>{
            state.push(action.payload)
        },
        delItem:(state, action)=>{
            const index = action.payload;
            if (index >= 0 && index < state.length) {
                state.splice(index, 1);
            }  
        //    return state.filter(item=> item.id !== action.payload.id)
        }
    }
})


export const {addItem, delItem} = cartSlice.actions

export default cartSlice.reducer