import { Component, OnInit } from '@angular/core';
import { DataBDService } from '../../data-bd.service';
import { Post } from '../Post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name:string='julio';
  age:number=26;
  
  users: string[] = ['pablo','escobar','gaviria'];

  posts:any = [];

  constructor(private dataBDService: DataBDService){
    this.dataBDService.getData().subscribe(data =>{
      this.posts= data ;
    });
  }

 
  sayPuto(nameUser:string){
    for(let i = 0; i < this.users.length;i++){
      if(this.users[0]===nameUser)this.users.splice(i,1);
    }
  }

  addUser(nameUser:any){
    this.users.unshift(nameUser.value);
    nameUser.value='';
    return false;
  }

  ngOnInit(): void {
  }

}
