import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { SignupRequestPayload } from './singup-request.payload';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

    signupRequestPayload : SignupRequestPayload;
    signupForm!: FormGroup;

    constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
      this.signupRequestPayload = {
        username:'',
        email: '',
        password: ''
      }
     }

    ngOnInit(): void {
      this.signupForm = new FormGroup({
        username: new FormControl('', Validators.required),
        email : new FormControl('', [Validators.required, Validators.email, Validators.pattern("^[a-z0-9._%+-]+@accolitedigital.com$")]),
        password: new FormControl('', Validators.required),
      });
    }

    signUp(){
      this.signupRequestPayload.username = this.signupForm.get('username')?.value;
      this.signupRequestPayload.email = this.signupForm.get('email')?.value;
      this.signupRequestPayload.password = this.signupForm.get('password')?.value;

      this.authService.signUp(this.signupRequestPayload)
      .subscribe(data => {
        this.router.navigate(['/login'],
          { queryParams: { registered: 'true' } });
      }, error => {
        console.log(error);
        this.toastr.error('Registration Failed! Please try again');
      });
    }


}
