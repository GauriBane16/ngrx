import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RepositoryService } from 'src/app/services/repository.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  users:User[]=[];
  count:number;
  constructor(private repositoryService:RepositoryService) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData(){
    const observer$=this.repositoryService.getUerList();
    const userData$=observer$[1];
    const userCount$=observer$[3];
   userData$.subscribe(data=>{
      this.users=data;
   })
   userCount$.subscribe(data=>{
    this.count=data;
 })
  }



  resetData(){
    this.repositoryService.resetUerList()
  }

}
