(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{mH0F:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),i=u("mrSG"),t=u("ZZ/e"),r=function(){function l(l,n,u){this.router=l,this.toastCtrl=n,this.afAuth=u,this.signup={email:"",password:"",name:""}}return l.prototype.ngOnInit=function(){},l.prototype.signUp=function(){var l=this;this.afAuth.auth.createUserWithEmailAndPassword(this.signup.email,this.signup.password).then((function(n){n.user.updateProfile({displayName:l.signup.name,photoURL:""}).then((function(){return i.__awaiter(l,void 0,void 0,(function(){return i.__generator(this,(function(l){switch(l.label){case 0:return[4,this.toastCtrl.create({message:"${created.user.displayname}",duration:3e3})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))})).catch((function(n){return i.__awaiter(l,void 0,void 0,(function(){return i.__generator(this,(function(l){switch(l.label){case 0:return[4,this.toastCtrl.create({message:n.toString(),duration:3e3})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))})),l.goBack()})).catch((function(n){return i.__awaiter(l,void 0,void 0,(function(){return i.__generator(this,(function(l){switch(l.label){case 0:return[4,this.toastCtrl.create({message:n.toString(),duration:3e3})];case 1:return[4,l.sent().present()];case 2:return l.sent(),[2]}}))}))}))},l.prototype.goBack=function(){this.router.navigate(["/login"])},l}(),s=function(){return function(){}}(),a=u("pMnS"),o=u("oBZk"),b=u("gIcY"),g=u("ZYCi"),d=u("ZBkt"),c=e.qb({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Ib(0,[(l()(),e.sb(0,0,null,null,7,"ion-header",[],null,null,null,o.y,o.h)),e.rb(1,49152,null,0,t.A,[e.h,e.k,e.z],null,null),(l()(),e.sb(2,0,null,0,5,"ion-toolbar",[],null,null,null,o.H,o.q)),e.rb(3,49152,null,0,t.Bb,[e.h,e.k,e.z],null,null),(l()(),e.sb(4,0,null,0,3,"ion-title",[],null,null,null,o.G,o.p)),e.rb(5,49152,null,0,t.zb,[e.h,e.k,e.z],null,null),(l()(),e.sb(6,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["\u57a2\u767b\u9332page"])),(l()(),e.sb(8,0,null,null,87,"ion-content",[["padding",""]],null,null,null,o.x,o.g)),e.rb(9,49152,null,0,t.t,[e.h,e.k,e.z],null,null),e.rb(10,16384,null,0,t.d,[e.k],null,null),(l()(),e.sb(11,0,null,0,8,"ion-item",[["class","signupHeader"],["lines","none"],["text-center",""]],null,null,null,o.B,o.k)),e.rb(12,49152,null,0,t.G,[e.h,e.k,e.z],{lines:[0,"lines"]},null),e.rb(13,16384,null,0,t.d,[e.k],null,null),(l()(),e.sb(14,0,null,0,5,"ion-label",[],null,null,null,o.C,o.l)),e.rb(15,49152,null,0,t.M,[e.h,e.k,e.z],null,null),(l()(),e.sb(16,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["\u3066\u3063\u3066\u308c\u30fc\u3093\u3000message\u30dc\u30fc\u30c9\u2015"])),(l()(),e.sb(18,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["\u307e\u305a\u306f\u767b\u9332\u304c\u5fc5\u8981\u306a\u3093\u3060\uff01\uff01"])),(l()(),e.sb(20,0,null,0,63,"form",[["class","signupForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==e.Db(l,22).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Db(l,22).onReset()&&i),i}),null,null)),e.rb(21,16384,null,0,b.n,[],null,null),e.rb(22,4210688,[["f",4]],0,b.i,[[8,null],[8,null]],null,null),e.Eb(2048,null,b.a,null,[b.i]),e.rb(24,16384,null,0,b.h,[[4,b.a]],null,null),(l()(),e.sb(25,0,null,null,17,"ion-item",[["class","formItem"]],null,null,null,o.B,o.k)),e.rb(26,49152,null,0,t.G,[e.h,e.k,e.z],null,null),(l()(),e.sb(27,0,null,0,5,"ion-label",[["position","floating"]],null,null,null,o.C,o.l)),e.rb(28,49152,null,0,t.M,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.sb(29,0,null,0,1,"ion-icon",[["name","mail"]],null,null,null,o.z,o.i)),e.rb(30,49152,null,0,t.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.sb(31,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["\u30e1\u30fc\u30eb\u30fc\u30a2\u30fc\uff44\uff4f\u30fc"])),(l()(),e.sb(33,0,null,0,9,"ion-input",[["email",""],["name","signup.email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,37)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,37)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.signup.email=u)&&i),i}),o.A,o.j)),e.rb(34,16384,null,0,b.k,[],{required:[0,"required"]},null),e.rb(35,16384,null,0,b.b,[],{email:[0,"email"]},null),e.Eb(1024,null,b.d,(function(l,n){return[l,n]}),[b.k,b.b]),e.rb(37,16384,null,0,t.Jb,[e.k],null,null),e.Eb(1024,null,b.e,(function(l){return[l]}),[t.Jb]),e.rb(39,671744,null,0,b.j,[[2,b.a],[6,b.d],[8,null],[6,b.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,b.f,null,[b.j]),e.rb(41,16384,null,0,b.g,[[4,b.f]],null,null),e.rb(42,49152,null,0,t.F,[e.h,e.k,e.z],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.sb(43,0,null,null,19,"ion-item",[["class","formItem"]],null,null,null,o.B,o.k)),e.rb(44,49152,null,0,t.G,[e.h,e.k,e.z],null,null),(l()(),e.sb(45,0,null,0,8,"ion-label",[["position","floating"]],null,null,null,o.C,o.l)),e.rb(46,49152,null,0,t.M,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.sb(47,0,null,0,1,"ion-icon",[["name","key"],["padding-right",""]],null,null,null,o.z,o.i)),e.rb(48,49152,null,0,t.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.sb(49,0,null,0,4,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["\ud83d\udd12\u304b\u304e\u3060\u3051\u306b"])),(l()(),e.sb(51,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["\u30ad\u30fc"])),(l()(),e.Hb(-1,null,["\u30ef\u30fc\u30c9w"])),(l()(),e.sb(54,0,null,0,8,"ion-input",[["name","signup.password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,57)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,57)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.signup.password=u)&&i),i}),o.A,o.j)),e.rb(55,16384,null,0,b.k,[],{required:[0,"required"]},null),e.Eb(1024,null,b.d,(function(l){return[l]}),[b.k]),e.rb(57,16384,null,0,t.Jb,[e.k],null,null),e.Eb(1024,null,b.e,(function(l){return[l]}),[t.Jb]),e.rb(59,671744,null,0,b.j,[[2,b.a],[6,b.d],[8,null],[6,b.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,b.f,null,[b.j]),e.rb(61,16384,null,0,b.g,[[4,b.f]],null,null),e.rb(62,49152,null,0,t.F,[e.h,e.k,e.z],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.sb(63,0,null,null,16,"ion-item",[["class","formItem"]],null,null,null,o.B,o.k)),e.rb(64,49152,null,0,t.G,[e.h,e.k,e.z],null,null),(l()(),e.sb(65,0,null,0,5,"ion-label",[["position","floating"]],null,null,null,o.C,o.l)),e.rb(66,49152,null,0,t.M,[e.h,e.k,e.z],{position:[0,"position"]},null),(l()(),e.sb(67,0,null,0,1,"ion-icon",[["name","person"]],null,null,null,o.z,o.i)),e.rb(68,49152,null,0,t.B,[e.h,e.k,e.z],{name:[0,"name"]},null),(l()(),e.sb(69,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["\u304a\u304a\u304a\u304a\u304a\u304a\u304a\u304a\u304a\u540d\u524d"])),(l()(),e.sb(71,0,null,0,8,"ion-input",[["name","signup.name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,t=l.component;return"ionBlur"===n&&(i=!1!==e.Db(l,74)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Db(l,74)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(t.signup.name=u)&&i),i}),o.A,o.j)),e.rb(72,16384,null,0,b.k,[],{required:[0,"required"]},null),e.Eb(1024,null,b.d,(function(l){return[l]}),[b.k]),e.rb(74,16384,null,0,t.Jb,[e.k],null,null),e.Eb(1024,null,b.e,(function(l){return[l]}),[t.Jb]),e.rb(76,671744,null,0,b.j,[[2,b.a],[6,b.d],[8,null],[6,b.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,b.f,null,[b.j]),e.rb(78,16384,null,0,b.g,[[4,b.f]],null,null),e.rb(79,49152,null,0,t.F,[e.h,e.k,e.z],{name:[0,"name"],required:[1,"required"],type:[2,"type"]},null),(l()(),e.sb(80,0,null,null,3,"ion-button",[["class","submitBtn"],["expand","block"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.signUp()&&e),e}),o.s,o.b)),e.rb(81,49152,null,0,t.j,[e.h,e.k,e.z],{disabled:[0,"disabled"],expand:[1,"expand"],size:[2,"size"]},null),(l()(),e.sb(82,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["\u57a2\u767b\u9332"])),(l()(),e.sb(84,0,null,0,11,"ion-button",[["class","subLink"],["fill","clear"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goBack()&&e),e}),o.s,o.b)),e.rb(85,49152,null,0,t.j,[e.h,e.k,e.z],{fill:[0,"fill"]},null),(l()(),e.Hb(-1,0,["\u57a2\u6301\u3063\u3066\u308b\u3051\u3069\u9593\u9055\u3048\u3066\u62bc\u3057\u305f\u3000\u307e\u305f\u3000"])),(l()(),e.sb(87,0,null,0,3,"h1",[],null,null,null,null,null)),(l()(),e.sb(88,0,null,null,2,"h1",[],null,null,null,null,null)),(l()(),e.sb(89,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["\u3067\u3059"])),(l()(),e.Hb(-1,0,["\u306e\u8feb\u529b\u304c\u5927\u304d\u3059\u304e\u3066\u62bc\u3057\u305f\u306a\u3089\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3000\u30af\u30ea\u30c3\u30af\u3059\u308b\u4eba\u2015\u3000"])),(l()(),e.sb(92,0,null,0,3,"h1",[],null,null,null,null,null)),(l()(),e.sb(93,0,null,null,2,"h1",[],null,null,null,null,null)),(l()(),e.sb(94,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["\u306f\u30fc\u3044"]))],(function(l,n){var u=n.component;l(n,12,0,"none"),l(n,28,0,"floating"),l(n,30,0,"mail"),l(n,34,0,""),l(n,35,0,""),l(n,39,0,"signup.email",u.signup.email),l(n,42,0,"signup.email","","email"),l(n,46,0,"floating"),l(n,48,0,"key"),l(n,55,0,""),l(n,59,0,"signup.password",u.signup.password),l(n,62,0,"signup.password","","password"),l(n,66,0,"floating"),l(n,68,0,"person"),l(n,72,0,""),l(n,76,0,"signup.name",u.signup.name),l(n,79,0,"signup.name","","text"),l(n,81,0,!e.Db(n,22).form.valid,"block","large"),l(n,85,0,"clear")}),(function(l,n){l(n,20,0,e.Db(n,24).ngClassUntouched,e.Db(n,24).ngClassTouched,e.Db(n,24).ngClassPristine,e.Db(n,24).ngClassDirty,e.Db(n,24).ngClassValid,e.Db(n,24).ngClassInvalid,e.Db(n,24).ngClassPending),l(n,33,0,e.Db(n,34).required?"":null,e.Db(n,41).ngClassUntouched,e.Db(n,41).ngClassTouched,e.Db(n,41).ngClassPristine,e.Db(n,41).ngClassDirty,e.Db(n,41).ngClassValid,e.Db(n,41).ngClassInvalid,e.Db(n,41).ngClassPending),l(n,54,0,e.Db(n,55).required?"":null,e.Db(n,61).ngClassUntouched,e.Db(n,61).ngClassTouched,e.Db(n,61).ngClassPristine,e.Db(n,61).ngClassDirty,e.Db(n,61).ngClassValid,e.Db(n,61).ngClassInvalid,e.Db(n,61).ngClassPending),l(n,71,0,e.Db(n,72).required?"":null,e.Db(n,78).ngClassUntouched,e.Db(n,78).ngClassTouched,e.Db(n,78).ngClassPristine,e.Db(n,78).ngClassDirty,e.Db(n,78).ngClassValid,e.Db(n,78).ngClassInvalid,e.Db(n,78).ngClassPending)}))}function h(l){return e.Ib(0,[(l()(),e.sb(0,0,null,null,1,"app-signup",[],null,null,null,p,c)),e.rb(1,114688,null,0,r,[g.m,t.Kb,d.a],null,null)],(function(l,n){l(n,1,0)}),null)}var m=e.ob("app-signup",r,h,{},{},[]),f=u("Ip0R");u.d(n,"SignupPageModuleNgFactory",(function(){return k}));var k=e.pb(s,[],(function(l){return e.Ab([e.Bb(512,e.j,e.ab,[[8,[a.a,m]],[3,e.j],e.x]),e.Bb(4608,f.k,f.j,[e.u,[2,f.q]]),e.Bb(4608,b.m,b.m,[]),e.Bb(4608,t.b,t.b,[e.z,e.g]),e.Bb(4608,t.Fb,t.Fb,[t.b,e.j,e.q]),e.Bb(4608,t.Ib,t.Ib,[t.b,e.j,e.q]),e.Bb(1073742336,f.b,f.b,[]),e.Bb(1073742336,b.l,b.l,[]),e.Bb(1073742336,b.c,b.c,[]),e.Bb(1073742336,t.Db,t.Db,[]),e.Bb(1073742336,g.n,g.n,[[2,g.s],[2,g.m]]),e.Bb(1073742336,s,s,[]),e.Bb(1024,g.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);