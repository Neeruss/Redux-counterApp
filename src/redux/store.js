import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";


export const store=configureStore({
    //reducer can only update value or state in store
    //reducer key is predefine(object which can hold more than one reducer)
    reducer:{
        //reducer is coming from counterSlice since we are export reducer as export default
        counter:counterSlice
    }
})