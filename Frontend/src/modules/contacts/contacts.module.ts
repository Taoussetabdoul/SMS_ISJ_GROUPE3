/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@common/app-common.module';
import { NavigationModule } from '@modules/navigation/navigation.module';


import { CreateContactComponent } from './containers/createContact/createContact.component';
import { ContactService } from './services/contact-services';
import { ConsultContactComponent } from './containers/consultContact/consultContact.component';
import { ImportContactComponent } from './containers/importContact/importContact.component';
import { HttpClientModule} from '@angular/common/http';
import { ExportService } from './services/export-service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        AppCommonModule,
        NavigationModule,
        HttpClientModule
    ],
    providers: [ContactService,ExportService],
    declarations: [CreateContactComponent,ConsultContactComponent,ImportContactComponent],
    exports: [CreateContactComponent,ConsultContactComponent,ImportContactComponent],
})
export class ContactsModule {}