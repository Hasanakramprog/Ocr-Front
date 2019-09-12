import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {FirstpageComponent} from './firstpage/firstpage.component';
import {SecondpageComponent} from './secondpage/secondpage.component';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularCropperjsModule} from 'angular-cropperjs';
import {ToolBarModule} from '@progress/kendo-angular-toolbar';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {FormsModule} from '@angular/forms';
import {BackendApiService} from '../Services/backend-api.service';
import {ConstantsService} from '../Services/constants-service.service';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './navbar/navbar.component';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';
import {ToastrModule} from 'ngx-toastr';


const appRoutes: Routes = [
  {path: 'ocr', component: SecondpageComponent},
  {path: '', component: FirstpageComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ToastrModule.forRoot(),
    AngularCropperjsModule,
    ButtonsModule,
    BrowserAnimationsModule,
    ToolBarModule,
    InputsModule,
    FormsModule,
    DropDownsModule,
  ],
  providers: [BackendApiService,
    ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
