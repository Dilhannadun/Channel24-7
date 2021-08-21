import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions} from '@angular/router';
import { DashboardHospitalmanagerComponent } from './components/hospitalmanager/dashboard-hospitalmanager/dashboard-hospitalmanager.component';
import { RegistrationhomeComponent } from './components/admin/hospital-registration/registration-home/registrationhome.component';
import { HomepgComponent } from './components/patient/homepg/homepg.component';
import { HospitalmanagerComponent } from './components/hospitalmanager/hospitalmanager/hospitalmanager.component';
import { DoctorsComponent } from './components/hospitalmanager/doctors/doctors.component';
import { AddDoctorComponent } from './components/hospitalmanager/add-doctor/add-doctor.component';

import { SingleDoctorComponent } from './components/hospitalmanager/single-doctor/single-doctor.component';
import { RegisterHospitalmanagerComponent } from './components/hospitalmanager/register-hospitalmanager/register-hospitalmanager.component';

import { HomeComponentsComponent } from './components/patient/home-components/home-components.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: "registerhospitalmanager",
    component: RegisterHospitalmanagerComponent
  },
  {
    path: "hospitalmanager",
    redirectTo: 'hospitalmanager/dashboard',
    pathMatch: "full"
  },
  {
    path: 'hospitalmanager',
    component: HospitalmanagerComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardHospitalmanagerComponent
      },
      {
        path: "doctors",
        component: DoctorsComponent
      },
      {
        path: "adddoctor",
        component: AddDoctorComponent
      },
      {
        path: "doctors/:id",
        component: SingleDoctorComponent
      }
    ]
  },
  {
    path: 'admin/registerHospital',
    component: RegistrationhomeComponent,
  },
  {
    path: 'patient/home',
    component: HomepgComponent,
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
