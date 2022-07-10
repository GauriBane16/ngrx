
import { ActionReducerMap, createSelector, MetaReducer } from '@ngrx/store';
// import { UserReducer, UserReducerState } from './user-reducer';
import * as fromUser from './user-reducer';
import { environment } from '../../environments/environment';

export interface RootReducerState{
  users:fromUser.UserReducerState
}

export const rootReducer:ActionReducerMap<RootReducerState>={
  users:fromUser.UserReducer
}

export const getUserState=(state:RootReducerState)=>state.users;

export const getUserLoaded=createSelector(getUserState,fromUser.getLoaded);
export const getUserLoading=createSelector(getUserState,fromUser.getLoading);
export const getUsers=createSelector(getUserState,fromUser.getUsers);
export const getUserError=createSelector(getUserState,fromUser.getUserError);
export const getUserCount=createSelector(getUserState,fromUser.getUserCount);

export const metaReducers: MetaReducer<RootReducerState>[] = !environment.production ? [] : [];
