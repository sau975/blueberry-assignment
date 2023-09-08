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

  constructor(
    private userService: UserService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(res => {
      this.userDetails = res.data[1];
    })
  }

  logOut(){
    this.userService.Logout().subscribe(res => {
      if(res){
        this.router.navigate(['login']);
        localStorage.removeItem('token');  
      }
    })
  }
}
