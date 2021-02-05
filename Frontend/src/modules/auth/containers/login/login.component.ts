import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '@modules/auth/services';

@Component({
    selector: 'sb-login',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {

    private jwt;
    private error;
    constructor(private authService : AuthService, private router: Router) {}
    ngOnInit() {}

    signIn(f){
        this.authService.login(f)
          .subscribe(
              resp=>{
                this.jwt = resp.headers.get('Authorization');
                this.authService.saveToken(this.jwt);
                this.router.navigateByUrl("/dashboard")
              },
              err=>{
                this.error = err;
              }
          )
        console.log(f);
    }
}
