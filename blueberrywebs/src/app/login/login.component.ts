import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [""],
      password: ['']
    });
  }

  patchData(login:Login){
    this.form.patchValue({
      email: login.email,
      password: login.password
    });
  }

  submit(){
    let data:Login = Object.assign({}, this.form.value);
    this.userService.Login(data).subscribe(res => {
      if(res.status == true){
        this.router.navigate(['user-details']);
        localStorage.setItem('token', res.token);  
      }
    })
  }
}
