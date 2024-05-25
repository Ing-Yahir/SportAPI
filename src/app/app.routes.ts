import { Routes } from '@angular/router';
import { IndexComponent } from './core/index/index.component';
import { ContactComponent } from './core/contact/contact.component';

export const routes: Routes = [
    {path: '', title: 'index', component: IndexComponent},
    {path: 'index', title: 'index', component: IndexComponent},
    {path: 'contact', title: 'contact', component: ContactComponent},
];

