import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'sb-register',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrls: ['register.component.scss'],
})
export class RegisterComponent implements OnInit {
    @ViewChild('login', { static: false })
  login?: ElementRef;

  doNotMatch = false;
  error = false;
  errorEmailExists = false;
  errorUserExists = false;
  success = false;

  registerForm = this.fb.group({
    email: ['', [Validators.required]],
    firstName: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    lastName: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    phoneNumber: [null, [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
  });

  constructor(
    private fb: FormBuilder
  ) {}
    ngOnInit() {}
}
