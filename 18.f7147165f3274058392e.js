(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"f+ep":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("mrSG"),o=u("ZZ/e"),i=u("gIcY"),a=u("HMbF"),r=u("l9vU"),s=u("kScs"),b=function(){function l(l,n,u,t,e,o,a){this.menuCtrl=l,this.router=n,this.userservice=u,this.toast=t,this.md5=e,this.loadingController=o,this.navCtrl=a,localStorage.getItem("id"),null!=localStorage.getItem("id")&&this.navCtrl.navigateRoot(["/home"]),this.loginform=new i.e({password1:new i.c("",{validators:[i.q.required,i.q.minLength(6)],updateOn:"blur"}),email:new i.c("",{validators:[i.q.required,i.q.pattern(".+@.+..+"),i.q.email],updateOn:"blur"})})}return l.prototype.ngOnInit=function(){this.email="",this.password1="",this.menuCtrl.enable(!1)},l.prototype.onlogin=function(){return e.b(this,void 0,void 0,function(){var l,n,u,t,o,i,r=this;return e.e(this,function(e){switch(e.label){case 0:return[4,this.toast.create({message:"User Login Successfully",duration:5e3,position:"bottom",cssClass:"toast-login",translucent:!0,animated:!0})];case 1:return l=e.sent(),[4,this.toast.create({message:"Email Or Password incorrect Or Email Is Not Verified",duration:5e3,position:"bottom",cssClass:"toast_login_fail",translucent:!0,animated:!0})];case 2:return n=e.sent(),[4,this.toast.create({message:"Email Is Not Verified, We Sent You a OTP Check Your Registered Mail",duration:5e3,position:"bottom",cssClass:"toast_login_fail",translucent:!0,animated:!0})];case 3:return u=e.sent(),[4,this.loadingController.create({message:"Redirecting ...",showBackdrop:!0,id:"login"})];case 4:return t=e.sent(),o=new s.Md5,i=o.appendStr(this.password1).end(),this.userservice.userlogin(new a.a(null,"",i.toString(),this.email,"",null,0)).subscribe(function(e){e.length>0?1==e[0].verify?(r.id=e[0].user_id,localStorage.setItem("id",r.id),localStorage.setItem("name",e[0].user_name),l.present(),console.log("verifird"),r.router.navigate(["/home"]),r.navCtrl.navigateRoot(["/home"])):(localStorage.setItem("flag","true"),localStorage.setItem("mail",r.email),console.log("not verifird"),t.present(),u.present(),r.userservice.resend(new a.a(null,null,null,r.email,null,null,null)).subscribe(function(l){t.dismiss(),r.router.navigate(["/verification-user"])},function(l){console.log(l)},function(){})):n.present()},function(l){},function(){}),[2]}})})},l.prototype.forgetpassword=function(){this.router.navigate(["/forgetpassword"])},l.prototype.ngOnDestroy=function(){this.menuCtrl.enable(!0)},l}(),g=function(){return function(){}}(),d=u("pMnS"),c=u("oBZk"),p=u("Ip0R"),m=u("ZYCi"),h=t.vb({encapsulation:0,styles:[["app-login[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{--background:url('city-map-abstract-seamless-pattern-background-vector-2510863.b063ac7e8ff9cd0e20ef.jpg') 0 0/50% 10% no-repeat}app-login[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{font-weight:700}"]],data:{}});function f(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,1,"div",[["style","color:red;"]],null,null,null,null,null)),(l()(),t.Pb(-1,null,[" Please Enter a Valid Email. "]))],null,null)}function v(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,3,"div",[["style","color:red;"]],null,null,null,null,null)),(l()(),t.Pb(-1,null,[" Please Enter a Valid Password "])),(l()(),t.xb(2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.Pb(-1,null,["Minmum 6 Charactor "]))],null,null)}function w(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,6,"ion-header",[],null,null,null,c.hb,c.q)),t.wb(1,49152,null,0,o.B,[t.h,t.n],null,null),(l()(),t.xb(2,0,null,0,4,"ion-toolbar",[],null,null,null,c.Gb,c.P)),t.wb(3,49152,null,0,o.Bb,[t.h,t.n],null,null),(l()(),t.xb(4,0,null,0,2,"ion-title",[["text-wrap",""]],null,null,null,c.Fb,c.O)),t.wb(5,49152,null,0,o.zb,[t.h,t.n],null,null),(l()(),t.Pb(-1,0,["Login"])),(l()(),t.xb(7,0,null,null,56,"ion-content",[["padding",""]],null,null,null,c.db,c.m)),t.wb(8,49152,null,0,o.u,[t.h,t.n],null,null),(l()(),t.xb(9,0,null,0,54,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0;return"submit"===n&&(e=!1!==t.Hb(l,11).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Hb(l,11).onReset()&&e),e},null,null)),t.wb(10,16384,null,0,i.s,[],null,null),t.wb(11,540672,null,0,i.f,[[8,null],[8,null]],{form:[0,"form"]},null),t.Mb(2048,null,i.a,null,[i.f]),t.wb(13,16384,null,0,i.l,[[4,i.a]],null,null),(l()(),t.xb(14,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.xb(15,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.xb(16,0,null,null,11,"ion-item",[],null,null,null,c.pb,c.v)),t.wb(17,49152,null,0,o.H,[t.h,t.n],null,null),(l()(),t.xb(18,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,c.qb,c.z)),t.wb(19,49152,null,0,o.N,[t.h,t.n],{position:[0,"position"]},null),(l()(),t.Pb(-1,0,["Email ID"])),(l()(),t.xb(21,0,null,0,6,"ion-input",[["formControlName","email"],["id","email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Hb(l,22)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.Hb(l,22)._handleInputEvent(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(o.email=u)&&e),e},c.lb,c.u)),t.wb(22,16384,null,0,o.Qb,[t.n],null,null),t.Mb(1024,null,i.i,function(l){return[l]},[o.Qb]),t.wb(24,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.i],[2,i.u]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Mb(2048,null,i.j,null,[i.d]),t.wb(26,16384,null,0,i.k,[[4,i.j]],null,null),t.wb(27,49152,null,0,o.G,[t.h,t.n],{type:[0,"type"]},null),(l()(),t.xb(28,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ob(16777216,null,null,1,null,f)),t.wb(30,16384,null,0,p.l,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.xb(31,0,null,null,11,"ion-item",[],null,null,null,c.pb,c.v)),t.wb(32,49152,null,0,o.H,[t.h,t.n],null,null),(l()(),t.xb(33,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,c.qb,c.z)),t.wb(34,49152,null,0,o.N,[t.h,t.n],{position:[0,"position"]},null),(l()(),t.Pb(-1,0,["Password"])),(l()(),t.xb(36,0,null,0,6,"ion-input",[["formControlName","password1"],["id","password1"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==t.Hb(l,37)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==t.Hb(l,37)._handleInputEvent(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(o.password1=u)&&e),e},c.lb,c.u)),t.wb(37,16384,null,0,o.Qb,[t.n],null,null),t.Mb(1024,null,i.i,function(l){return[l]},[o.Qb]),t.wb(39,671744,null,0,i.d,[[3,i.a],[8,null],[8,null],[6,i.i],[2,i.u]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Mb(2048,null,i.j,null,[i.d]),t.wb(41,16384,null,0,i.k,[[4,i.j]],null,null),t.wb(42,49152,null,0,o.G,[t.h,t.n],{type:[0,"type"]},null),(l()(),t.xb(43,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.ob(16777216,null,null,1,null,v)),t.wb(45,16384,null,0,p.l,[t.W,t.S],{ngIf:[0,"ngIf"]},null),(l()(),t.xb(46,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.xb(47,0,null,null,1,"a",[["style","float:right;font-size:12px;"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.forgetpassword()&&t),t},null,null)),(l()(),t.Pb(-1,null,["Forget Password??"])),(l()(),t.xb(49,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.xb(50,0,null,null,4,"ion-button",[["expand","full"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onlogin()&&t),t},c.U,c.d)),t.wb(51,49152,null,0,o.k,[t.h,t.n],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(l()(),t.Pb(-1,0,[" Login "])),(l()(),t.xb(53,0,null,0,1,"ion-icon",[["name","log-in"],["slot","end"]],null,null,null,c.ib,c.r)),t.wb(54,49152,null,0,o.C,[t.h,t.n],{name:[0,"name"]},null),(l()(),t.xb(55,0,null,null,7,"a",[["routerLinkActive","router-link-active"],["style","float:right;font-size:15px;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Hb(l,56).onClick(u)&&e),"click"===n&&(e=!1!==t.Hb(l,57).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e},null,null)),t.wb(56,737280,null,0,o.Ob,[p.i,o.Ib,t.n,m.m,[2,m.n]],null,null),t.wb(57,671744,[[2,4]],0,m.p,[m.m,m.a,p.i],{routerLink:[0,"routerLink"]},null),t.Ib(58,1),t.wb(59,1720320,null,2,m.o,[m.m,t.n,t.K,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.Nb(603979776,1,{links:1}),t.Nb(603979776,2,{linksWithHrefs:1}),(l()(),t.Pb(-1,null,["Don't have an account??"])),(l()(),t.xb(63,0,null,null,0,"br",[],null,null,null,null,null))],function(l,n){var u=n.component;l(n,11,0,u.loginform),l(n,19,0,"floating"),l(n,24,0,"email",u.email),l(n,27,0,"text"),l(n,30,0,!u.loginform.controls.email.valid&&u.loginform.controls.email.dirty),l(n,34,0,"floating"),l(n,39,0,"password1",u.password1),l(n,42,0,"password"),l(n,45,0,!u.loginform.controls.password1.valid&&u.loginform.controls.password1.dirty),l(n,51,0,!u.loginform.valid,"full"),l(n,54,0,"log-in"),l(n,56,0);var t=l(n,58,0,"/login/signup");l(n,57,0,t),l(n,59,0,"router-link-active")},function(l,n){l(n,9,0,t.Hb(n,13).ngClassUntouched,t.Hb(n,13).ngClassTouched,t.Hb(n,13).ngClassPristine,t.Hb(n,13).ngClassDirty,t.Hb(n,13).ngClassValid,t.Hb(n,13).ngClassInvalid,t.Hb(n,13).ngClassPending),l(n,21,0,t.Hb(n,26).ngClassUntouched,t.Hb(n,26).ngClassTouched,t.Hb(n,26).ngClassPristine,t.Hb(n,26).ngClassDirty,t.Hb(n,26).ngClassValid,t.Hb(n,26).ngClassInvalid,t.Hb(n,26).ngClassPending),l(n,36,0,t.Hb(n,41).ngClassUntouched,t.Hb(n,41).ngClassTouched,t.Hb(n,41).ngClassPristine,t.Hb(n,41).ngClassDirty,t.Hb(n,41).ngClassValid,t.Hb(n,41).ngClassInvalid,t.Hb(n,41).ngClassPending),l(n,55,0,t.Hb(n,57).target,t.Hb(n,57).href)})}function C(l){return t.Rb(0,[(l()(),t.xb(0,0,null,null,1,"app-login",[],null,null,null,w,h)),t.wb(1,245760,null,0,b,[o.Gb,m.m,r.a,o.Rb,s.Md5,o.Fb,o.Ib],null,null)],function(l,n){l(n,1,0)},null)}var H=t.tb("app-login",b,C,{},{},[]),x=u("t/Na");u.d(n,"LoginPageModuleNgFactory",function(){return k});var k=t.ub(g,[],function(l){return t.Eb([t.Fb(512,t.k,t.jb,[[8,[d.a,H]],[3,t.k],t.C]),t.Fb(4608,p.n,p.m,[t.y,[2,p.x]]),t.Fb(4608,i.t,i.t,[]),t.Fb(4608,i.b,i.b,[]),t.Fb(4608,o.b,o.b,[t.E,t.g]),t.Fb(4608,o.Hb,o.Hb,[o.b,t.k,t.u,p.d]),t.Fb(4608,o.Mb,o.Mb,[o.b,t.k,t.u,p.d]),t.Fb(4608,r.a,r.a,[x.c]),t.Fb(1073742336,p.b,p.b,[]),t.Fb(1073742336,i.r,i.r,[]),t.Fb(1073742336,i.g,i.g,[]),t.Fb(1073742336,i.o,i.o,[]),t.Fb(1073742336,o.Db,o.Db,[]),t.Fb(1073742336,m.q,m.q,[[2,m.w],[2,m.m]]),t.Fb(1073742336,g,g,[]),t.Fb(1024,m.k,function(){return[[{path:"",component:b,pathMatch:"full"},{path:"signup",loadChildren:"./signup/signup.module#SignupPageModule"}]]},[])])})}}]);