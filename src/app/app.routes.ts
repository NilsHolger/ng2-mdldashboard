import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SensorconfigureComponent } from './sensorconfigure/sensorconfigure.component';
import { InboxComponent } from './inbox/inbox.component';
import { DeleteComponent } from './delete/delete.component';
import { ReportComponent } from './report/report.component';
import { ForumComponent } from './forum/forum.component';
import { FlagComponent } from './flag/flag.component';
import { LocalofferComponent } from './localoffer/localoffer.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { PeopleComponent } from './people/people.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'sensors', component: SensorconfigureComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'trash', component: DeleteComponent },
  { path: 'report', component: ReportComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'flag', component: FlagComponent },
  { path: 'localoffer', component: LocalofferComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'help', component: HelpComponent },
  { path: '**', component: DashboardComponent }
]

export const Routing = RouterModule.forRoot(routes);
