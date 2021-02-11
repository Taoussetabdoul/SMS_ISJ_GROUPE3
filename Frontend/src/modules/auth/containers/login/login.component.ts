import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    @ViewChild('username', { static: false })
    email?: ElementRef;
  
    authenticationError = false;
  
    loginForm = this.fb.group({
      username: [''],
      password: [''],
      rememberMe: [false],
    });

    constructor( private router: Router, public activeModal: NgbActiveModal, private fb: FormBuilder) {}
    ngOnInit() {}

/*     login(): void {
        this.loginService
        .login({
        username: this.loginForm.get('email')!.value,
        password: this.loginForm.get('password')!.value,
        rememberMe: this.loginForm.get('rememberPasswordCheck')!.value,
        })
    }
 */

    register(): void {
        this.activeModal.dismiss('to state register');
        this.router.navigate(['/auth/register']);
      }
    
      requestResetPassword(): void {
        this.activeModal.dismiss('to state requestReset');
        this.router.navigate(['/auth/forgot-password', 'request']);
      }


}
