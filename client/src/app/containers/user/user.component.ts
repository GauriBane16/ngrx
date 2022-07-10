import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:User[]=[];
  loading:boolean=false;
  error:boolean=false;
  constructor(private repositoryService:RepositoryService) { }

  ngOnInit() {
    this.fetchData()
  }

  fetchData(){
    const observer$=this.repositoryService.getUerList()
   const loading$=observer$[0];
   const userData$=observer$[1];
   const error$=observer$[2];
   userData$.subscribe(data=>{
      this.users=data;
   })
   loading$.subscribe(data=>{
    this.loading=data;
 })
 error$.subscribe(data=>{
  this.error=data;
})
  }

  tryAgain(){
    this.repositoryService.getUerList(true)
  }

 

}

// root reducer userReducer,postReducer
// reducer ->it contain a state (global state)
// reducer -> It will receive action and according to that action it will return state

// action->it will conatain payload and type

// Dependency Injection Principle
// You should not depend on soemthing directly
//component -> repository -> apiService -> httpService ->httpClient