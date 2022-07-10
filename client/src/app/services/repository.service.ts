import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable} from 'rxjs';
import { take } from 'rxjs/operators';
import { userDeleteAction, userListErrorAction, userListRequestAction, userListSuccessAction } from '../actions/user-action';
import { APIResponse } from '../models/apiResponse';
import { User } from '../models/user';
import { getUserCount, getUserError, getUserLoaded, getUserLoading, getUsers, RootReducerState } from '../reducers';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private apiService:ApiService,private store:Store<RootReducerState>) { }

  getUerList(force=false):[Observable<boolean>,Observable<User[]>,Observable<boolean>,Observable<number>]{
    const loading$=this.store.select(getUserLoading);
    const loaded$=this.store.select(getUserLoaded);
    const userData$=this.store.select(getUsers);
    const getError$=this.store.select(getUserError);
    const getUserCount$=this.store.select(getUserCount);
    combineLatest([loaded$,loading$]).pipe(take(1)).subscribe(data=>{
      if((!data[0] && !data[1]) || force){
        this.store.dispatch(new userListRequestAction());
        this.apiService.getAllUser().subscribe((res:APIResponse)=>{
          this.store.dispatch(new userListSuccessAction({data:res.data}));
        },error=>{
          this.store.dispatch(new userListErrorAction())
        })
        // force=false;
      }
    });
    
    return [loading$,userData$,getError$,getUserCount$];
  }

   deleteUser(id:number){
    // first we will call api
    
        this.apiService.deleteUser(id).subscribe((res:APIResponse)=>{
          this.store.dispatch(new userListSuccessAction({data:res.data}));
          this.store.dispatch(new userDeleteAction())
        },error=>{
          this.store.dispatch(new userListErrorAction())
        })
    
  }


  resetUerList(){
        this.store.dispatch(new userListRequestAction());
        this.apiService.resetAllUser().subscribe((res:APIResponse)=>{
          this.store.dispatch(new userListSuccessAction({data:res.data}));
        },error=>{
          this.store.dispatch(new userListErrorAction())
        })
  }
}
