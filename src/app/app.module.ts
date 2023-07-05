import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NoOpenDirective } from './todo-list/no-open.directive';
import { ConfirmDirective } from './todo-list/confirm.directive';

const routes: Routes = [{ path: 'todo', component: TodoListComponent }];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    NoOpenDirective,
    ConfirmDirective,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
