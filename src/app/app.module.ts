import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './features/shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { FirebaseModule } from './features/module/firebase/firebase.module';
import { OfficeService } from './core/service/office.service';
import { DatabaseService } from './core/service/database.service';
import { NgrxModule } from './core/ngrx/ngrx.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './features/shared/component/header/header.component';
import { HomeComponent } from './features/components/home/home.component';
import { CardSliderComponent } from './features/shared/card-slider/card-slider.component';
// import { StoreModule } from '@ngrx/store';
// import { simpleReducer } from './core/ngrx/reducer/simple.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CardSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirebaseModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    NgrxModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [OfficeService, DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule {}
