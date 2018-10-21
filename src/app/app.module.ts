import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AllComponent } from './components/all/all.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DataService } from './services/data.service';
import { HiddenComponent } from './components/hidden/hidden.component';
import { SearchPipe } from './search.pipe';
import { ListItemComponent } from './components/list-item/list-item.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { ListHeadComponent } from './components/list-head/list-head.component';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    FavoriteComponent,
    NavigationComponent,
    HiddenComponent,
    SearchPipe,
    ListItemComponent,
    TooltipDirective,
    ListHeadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
