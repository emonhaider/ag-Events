import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';

export const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

// export const appRouting = RouterModule.forRoot(routes);