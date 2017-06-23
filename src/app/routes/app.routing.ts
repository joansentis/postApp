import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Main modules
import { postsListComponent } from '../pages/postsList/postsList.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'postsList', pathMatch: 'full' },
    { path: 'postsList', component: postsListComponent },
    { path: '**', redirectTo: 'postsList', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
