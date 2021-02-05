import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { TodoComponent } from './components/todo/todo.component'
import { AboutComponent } from './components/pages/about/about.component'

const routes: Routes = [
  { path: '', component: TodoComponent},
  { path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
