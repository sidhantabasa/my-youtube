import { createSlice } from "@reduxjs/toolkit";
 
const appsclice= createSlice({
    name:"app",  
    initialState:{
        isMenuOpen: true, 
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        }
    },
});

export const  {toggleMenu, closeMenu}= appsclice.actions
export default appsclice.reducer;
