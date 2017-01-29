import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routes';
import { SensorService } from './sensor.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InboxComponent } from './inbox/inbox.component';
import { DeleteComponent } from './delete/delete.component';
import { ReportComponent } from './report/report.component';
import { ForumComponent } from './forum/forum.component';
import { FlagComponent } from './flag/flag.component';
import { LocalofferComponent } from './localoffer/localoffer.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { PeopleComponent } from './people/people.component';
import { HelpComponent } from './help/help.component';
import { SensorconfigureComponent } from './sensorconfigure/sensorconfigure.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    UserprofileComponent,
    MenuComponent,
    DashboardComponent,
    InboxComponent,
    DeleteComponent,
    ReportComponent,
    ForumComponent,
    FlagComponent,
    LocalofferComponent,
    ShoppingcartComponent,
    PeopleComponent,
    HelpComponent,
    SensorconfigureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [SensorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
