import React,{createContext, useContext,useReducer} from "react";
import reducer from "./Reducer"
import { useEffect } from "react";



const AppContext=createContext();

const API="http://localhost:3000/data";


const intialState={
    name:"",
    image:"",
    services:[],

};

const AppProvider=({ children })=>{
    const [state,dispatch]=useReducer(reducer,intialState);

    const updateHomePage=()=>{
        return dispatch({
            type:"HOME_UPDATE",
            payload:{
                name:"NY Techno home",
                image:"./images/hero.svg"
            },
        });
    };
     
    const updateAboutPage=()=>{
        return dispatch({
            type:"ABOUT_UPDATE",
            payload:{
                name:"NY Techno About",
                image:"./images/about1.svg"
            },
        });
}

//to get api dATA
const getServices=async(url)=>{
    try {
        const res=await fetch(url);
        const data =await res.json();
        dispatch({type:"GET_SERVICES",payload:data})
    } catch (error) {
        console.log(error)
    }
}


// calling api
useEffect(()=>{
    getServices(API);
})






    return        <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
          {children}
        </AppContext.Provider>
      
    }
    
//global custom hook
const useGlobalContext=()=>{
    return useContext(AppContext)
};
export {AppContext,AppProvider,useGlobalContext};