import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule } from "@angular/fire";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { environment } from "./environments/environments.component";
import { CameraManComponent } from './camera-man/camera-man.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  declarations: [AppComponent, MainComponent, CameraManComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
