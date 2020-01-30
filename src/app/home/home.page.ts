import { Component, ErrorHandler } from '@angular/core';
import { AlertController,ToastController } from "@ionic/angular";
import {Router} from "@angular/router";
import * as moment from "moment";

import {AngularFirestore,AngularFirestoreCollection} from "@angular/fire/firestore";
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";

import {Post} from "../models/post";
import { async } from 'rxjs/internal/scheduler/async';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';
import { present } from '@ionic/core/dist/types/utils/overlays';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message:string;
  post: Post;
  posts:Post[]; 
    postsCollection:AngularFirestoreCollection<Post>;
    constructor(private alertCtrl: AlertController,private toastCtrl: ToastController,private afstore: AngularFirestore,private afAuth: AngularFireAuth,private router: Router) {}
    ngOnInit() {this.afstore.firestore.enableNetwork();this.getPosts();}
    addPost() {
      this.post = {
        id: "",
        userName: this.afAuth.auth.currentUser.displayName,
        message: this.message,
        created: firebase.firestore.FieldValue.serverTimestamp()
      };
this.afstore.collection("posts").add(this.post).then(docRef => {this.postsCollection.doc(docRef.id).update({id: docRef.id});this.message = "";})
.catch(async error => {const toast = await this.toastCtrl.create({message:error.toString(),duration:3000});await toast.present();});
    }
getPosts() {this.postsCollection = this.afstore.collection("posts",ref => ref.orderBy("created","desc"));
this.postsCollection.valueChanges().subscribe(data => {this.posts = data;});}
async presentPrompt(post: Post) {
  const alert = await this.alertCtrl.create({
    header:"メッセージ変更画面",
    inputs: [
      {
        name:"message",
        type:"text",
        placeholder:"メッセージ"
      }
    ],
    buttons: [
      {
        text:"キャンセル",
        role: "cancel",
        handler: () => {
          console.log("キャンセルが選択されたよ。");
        }
      },
      {
        text: "更新",
        handler:data => {
          console.log(data);
          this.updatePost(post , data.message);
        }
      }
    ]
  });
  await alert.present();
  }
  updatePost(post:Post,message:string){this.postsCollection.doc(post.id).update({message: message}).then(async () =>{const toast = await this.toastCtrl.create({message:"更新っ",duration: 3000});
  await toast.present();
  }).catch(async error => {const toast = await this.toastCtrl.create({message: error.toString(),duration:3000});
  await toast.present();});}

  deletepost(post:Post) {
    this.postsCollection.doc(post.id).delete().then(async () =>{const toast = await this.toastCtrl.create({message:"削除ぅ",duration:3000});
  await toast.present();
  }).catch(async error => {const toast = await this.toastCtrl.create({message: error.toString(),duration:3000});
  await toast.present();
  });
  }
  differenceTime(time: Date): string {moment.locale("ja");
  return moment(time).fromNow();}
  logout() {this.afstore.firestore.disableNetwork();this.afAuth.auth.signOut().then(async () => {const toast = await this.toastCtrl.create({message: "ログアウト　乙　乙　\(・＞・)/　\('o')/<(・。・)< <(^ O ^)> ", duration:3000});
  await toast.present();this.router.navigateByUrl("/login");}).catch(async error => {const toast = await this.toastCtrl.create({message: error.toString(),duration: 3000});await toast.present();});
 }
}

