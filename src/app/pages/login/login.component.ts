import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  submittedForm: boolean;
  userNotFound: boolean;
  loading: boolean;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authServive: AuthService,
  ) {
    this.form = formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    this.submittedForm = false;
    this.loading = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submittedForm = true;
    if (this.form.valid) {
      const data = {
        email: this.form.get('email').value,
        password: this.form.get('password').value
      };
      this.loading = true;
      this.authServive.login(data).subscribe(
        (res) => {
          this.userNotFound = false;
          this.loading = false;
          window.localStorage.setItem('user', JSON.stringify(res));
          this.router.navigateByUrl('/');
        },
        err => {
          this.loading = false;
          this.userNotFound = true;
        }
      );
    }
  }

  isValidValueInput(name) {
    return this.submittedForm && this.form.get(name).errors;
  }

}
