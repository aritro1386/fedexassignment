import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
