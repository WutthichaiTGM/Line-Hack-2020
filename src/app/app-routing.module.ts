import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { ReviewComponent } from "./review/review.component";
import { MainComponent } from "./main/main.component";
import { APP_BASE_HREF } from "@angular/common";
import { CameraManComponent } from "./camera-man/camera-man.component";

const routes: Routes = [
  // { path: "", component: MainComponent },
  { path: "review", component: ReviewComponent },
  { path: "", component: CameraManComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{ provide: APP_BASE_HREF, useValue: "/" }],
  exports: [RouterModule]
})
export class AppRoutingModule {}
