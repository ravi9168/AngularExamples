import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

import { ErrorStateMatcher } from '@angular/material/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = '';
  password = '';
  matcher = new MyErrorStateMatcher();
  isLoadingResults = false;
constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, 
  private title: Title) { }


ngOnInit() {
   this.title.setTitle("Login");
  this.loginForm = this.formBuilder.group({
    'email' : [null, Validators.required],
    'password' : [null, Validators.required]
  });
}

onFormSubmit(form: NgForm) {
  this.authService.login(form)
    .subscribe(res => {
      console.log(res);
      if (res.token) {
        localStorage.setItem('token', res.token);
        this.router.navigate(['products']);
      }
    }, (err) => {
      console.log(err);
    });
}


register() {
  this.router.navigate(['register']);
}

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}