import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import VConsole from "vconsole";
import liff from "@line/liff";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  vConsole = new VConsole();
  constructor() {}

  ngOnInit() {
    // this.main;
  }

  async getUserProfile() {
    const profile = await liff.getProfile();
    const ImageUrl = profile.pictureUrl;
    const Uid = profile.userId;
    const statusMessage = profile.statusMessage;
    const DisplayName = profile.displayName;
    const Emsil = liff.getDecodedIDToken().email;
  }

  async main() {
    await liff.init({ liffId: "1655102649-yvP1R5wB" });
    liff.ready.then(() => {
      if (liff.isLoggedIn()) {
        this.getUserProfile();
      } else {
        liff.login();
      }
    });
  }
}
