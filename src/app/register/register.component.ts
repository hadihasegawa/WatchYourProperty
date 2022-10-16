import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.myForm!.valid) {
      this.authService.regUser(this.myForm.value.name,
      this.myForm.value.password, this.myForm.value.role).subscribe();
    this.router.navigateByUrl('/login');
    }
  }
}
