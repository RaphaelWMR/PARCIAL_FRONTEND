import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ListAlumnosComponent } from './core/admin/alumno/list-alumnos/list-alumnos.component';
import { AddEditAlumnoComponent } from './core/admin/alumno/add-edit-alumno/add-edit-alumno.component';
import { DashboardComponent } from './core/admin/pages/dashboard/dashboard.component';
import { NotfoundComponent } from './shared/pages/notfound/notfound.component';
import { LoginComponent } from './core/auth/login/login.component';
import { LogoutComponent } from './core/auth/logout/logout.component';

const routes: Routes = [
  // Home
  { path: '', component: LoginComponent },
  // Auth *************************************************************************
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  //Admin *************************************************************************
  { path: 'dashboard', component: DashboardComponent },
  // Alumnos
  { path: 'alumnos', component: ListAlumnosComponent },
  { path: 'alumnos/add', component: AddEditAlumnoComponent },
  { path: 'alumnos/edit/:id', component: AddEditAlumnoComponent },
  // Pages ************************************************************************
  { path: '**', component: NotfoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
