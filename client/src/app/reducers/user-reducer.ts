
import { Action } from "../actions";
import { USER_DELETE, USER_LIST_ERROR, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../actions/user-action";
import { User } from "../models/user";


export interface UserReducerState {
    loading:boolean;
    loaded:boolean;
    error:boolean;
    users:User[];
    userCount:number;
}

const initialState:UserReducerState={
    loading:false,
    loaded:false,
    error:false,
    users:[],
    userCount:0
}

export const UserReducer = (state=initialState,action:Action):UserReducerState=>{
    switch(action.type){
        case USER_LIST_REQUEST:{
            return {...state,loading:true};
        }
        case USER_LIST_SUCCESS:{
            // const updatedUsers=state.users.concat(action.payload.data);
            const users=action.payload.data;
            const userCount=users.length;
            return {...state,loading:false,loaded:true,users:users,userCount,error:false};
        }
        case USER_LIST_ERROR:{
            return {...state,error:true,loading:false}
        } 
        case USER_DELETE:{
            const users=state.users;
            const userCount=state.userCount;
            //.filter(data=>data.id!==action.payload.id)
            return {...state,...{users}}
        } 
        default:{
            return state;
        }
    }

}

// Selectors Behavioural Subject
export const getLoading=(state:UserReducerState)=>state.loading;
export const getLoaded=(state:UserReducerState)=>state.loaded;
export const getUsers=(state:UserReducerState)=>state.users;
export const getUserError=(state:UserReducerState)=>state.error;
export const getUserCount=(state:UserReducerState)=>state.userCount;
