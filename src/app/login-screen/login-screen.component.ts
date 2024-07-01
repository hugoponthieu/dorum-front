import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from "../button/button.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  standalone: true,
  templateUrl: './login-screen.component.html',
  imports: [ButtonComponent, ReactiveFormsModule],
  providers: []
})
export class LoginScreenComponent {
  isSignin!: boolean;
  actionButtonTitle!: string;

  navigationButton!: string;
  constructor(private route: ActivatedRoute, private router: Router) {
  }
  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  ngOnInit() {
    this.route.url.subscribe((url) => {
      this.isSignin = url[0].path == 'signin'
      console.log(this.isSignin)
      this.actionButtonTitle = this.isSignin ? "Sign in" : "Sign up"
      this.navigationButton = this.isSignin ? "Go to sign up" : "Go to sign in"
    })
  }

  onSubmit(): void {
    const loginData = this.form.value;
    console.log('Form Submitted!', loginData);
    if (this.isSignin) this.onSignin()
    else this.onSignup()
  }

  navigateToUpIn() {
    if (this.isSignin) this.router.navigate(['/signup'])
    else this.router.navigate(['/signin'])
  }

  onSignin() {
    const loginData = this.form.value;
    console.log('Signin: ', loginData);
  }
  onSignup() {
    const loginData = this.form.value;
    console.log('Signin up: ', loginData);
  }

}
