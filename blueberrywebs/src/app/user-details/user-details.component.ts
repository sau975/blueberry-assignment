import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetails: any;
  loggedInEmail: any;

  constructor(
    private userService: UserService,
    private router: Router
  ){this.loggedInEmail = localStorage.getItem('loggedInEmail')}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
      if(res.status == true){
        this.userDetails = res.data.find((u:any) => u.email == this.loggedInEmail);
      }
    })
  }

  logOut(){
    this.userService.Logout().subscribe(res => {
      if(res){
        this.router.navigate(['login']);
        localStorage.clear();  
      }
    })
  }
}
