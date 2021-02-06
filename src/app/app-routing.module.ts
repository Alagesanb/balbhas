import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreatebankaccountComponent} from '../app/components/createbankaccount/createbankaccount.component';
import { HomeComponent } from '../app/components/home/home.component';
import { AccountbalanceComponent } from '../app/components/accountbalance/accountbalance.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'createaccount', component: CreatebankaccountComponent},
  { path: 'accountbalance', component: AccountbalanceComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
