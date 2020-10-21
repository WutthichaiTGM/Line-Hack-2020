import { Component, OnInit } from "@angular/core";
import liff from "@line/liff";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-camera-man",
  templateUrl: "./camera-man.component.html",
  styleUrls: ["./camera-man.component.css"]
})
export class CameraManComponent implements OnInit {
  constructor(private afs: AngularFirestore) {}

  name = new FormControl("");

  ngOnInit() {
    // this.main();
  }

  async getUserProfile() {
    const profile = await liff.getProfile();
    const ImageUrl = profile.pictureUrl;
    const Uid = profile.userId;
    const statusMessage = profile.statusMessage;
    const DisplayName = profile.displayName;
    const Emsil = liff.getDecodedIDToken().email;
    console.log("profile", profile);
  }

  async adduser() {
    const profile = await liff.getProfile();
    const DisplayName = profile.displayName;
    const Uid = profile.userId;
    this.afs
      .collection("CameraMan")
      .doc(Uid)
      .set({
        uid: Uid,
        name: DisplayName
      });
  }

  async main() {
    await liff.init({ liffId: "1655102649-oxL8EWBj" });
    liff.ready.then(() => {
      if (liff.isLoggedIn()) {
        this.getUserProfile();
        // this.adduser();
      } else {
        liff.login();
      }
    });
  }
}
