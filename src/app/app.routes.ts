import { Routes } from '@angular/router';
import { HomeComponent } from '../componants/home/home.component';
import { AboutComponent } from '../componants/about/about.component';
import { ContactComponent } from '../componants/contact/contact.component';
import { PortofolioComponent } from '../componants/portofolio/portofolio.component';
import { ErrorComponent } from '../componants/error/error.component';

export const routes: Routes = [

    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    { path: "contact", component: ContactComponent },
    { path: "portofolio", component: PortofolioComponent },
    { path: "**", component: ErrorComponent },


];
