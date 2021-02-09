import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { IconsComponent } from './icons/icons.component';
import { WelcomeComponent} from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent

  },

    {path:'icons',
    component: IconsComponent
  },
  {
    path:'forms',
    component: FormsComponent
  },
  {
    path:'welcome',
    component: WelcomeComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
