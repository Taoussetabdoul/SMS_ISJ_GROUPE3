/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';



import { ContactsModule } from './contacts.module';
import { ConsultContactComponent } from './containers/consultContact/consultContact.component';
import { CreateContactComponent } from './containers/createContact/createContact.component';
import { ImportContactComponent } from './containers/importContact/importContact.component';

/* Routes */
export const ROUTES: Routes = [
    {
        path: 'create',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'contacts',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: CreateContactComponent,
    },
    {
        path: 'consult',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'contacts',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: ConsultContactComponent,
    },
    {
        path: 'import',
        data: {
            title: 'Dashboard - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'contacts',
                    active: true,
                },
            ],
        } as SBRouteData,
        canActivate: [],
        component: ImportContactComponent,
    },
];

@NgModule({
    imports: [ContactsModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class ContactRoutingModule {}