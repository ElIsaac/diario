import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: 'auth',
  //declaracion del estado inicial de las variables
  initialState: {
    status: "not-authenticade" ,//"not-authenticade" "authenticade" "checking"
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
     //funciones que modifican el estado
  reducers: {
    login: (state, {payload}) => {

        state.status= "authenticade" ;
        state.uid= payload.uid;
        state.email= payload.email;
        state.displayName= payload.displayName;
        state.photoURL= payload.photoURL;
        state.errorMessage=null;
        
    },
    logout: (state, {payload}) => {
        
            state.status= "not-authenticade" ;
            state.uid= null;
            state.email= null;
            state.displayName= null;
            state.photoURL= null;
            state.errorMessage= payload.errorMessage;
          
        
    },
         //incremeta por una cantidad dada
    checkingCredentials: (state) => {
        state.status='checking'
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
