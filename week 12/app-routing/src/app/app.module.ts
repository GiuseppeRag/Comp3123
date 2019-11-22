import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student/student-list.component';
import { StudentDetailComponent } from './student/student-detail.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './admin/admin.guard';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'students', component: StudentListComponent},
      { path: 'students/:id', component: StudentDetailComponent},
      { path: 'admin', canActivate: [AdminGuard, AuthGuard], component: AdminComponent},
      { path: '', redirectTo: 'students', pathMatch: 'full'},
      { path: '**', redirectTo: 'students', pathMatch: 'full'}
    ], { useHash:true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
