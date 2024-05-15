
import { NotfoundComponent } from './shared/pages/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { CommonModule } from '@angular/common';


import { NavbarComponent } from './shared/pages/partials/navbar/navbar.component';
import { AddEditAlumnoComponent } from './core/admin/alumno/add-edit-alumno/add-edit-alumno.component';
import { ListAlumnosComponent } from './core/admin/alumno/list-alumnos/list-alumnos.component';
import { DashboardComponent } from './core/admin/pages/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './shared/pages/partials/footer/footer.component';
import { SidebarComponent } from './shared/pages/partials/sidebar/sidebar.component';

import { LoginComponent } from './core/auth/login/login.component';

import { LogoutComponent } from './core/auth/logout/logout.component';





@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
    NotfoundComponent,
    LoginComponent,
    NavbarComponent,
    LogoutComponent,
  ],
  imports: [
    ListAlumnosComponent,
    CommonModule,
    AddEditAlumnoComponent,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right'
    }), // ToastrModule added
    FormsModule,

  ],
  exports: [

  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
