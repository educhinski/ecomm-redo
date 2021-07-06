(self.webpackChunkecomm_redo=self.webpackChunkecomm_redo||[]).push([[767],{7767:(t,o,n)=>{"use strict";n.r(o),n.d(o,{UserModule:()=>R});var r=n(1116),e=n(5424),i=n(1041),s=n(5366);function c(t,o){1&t&&(s.TgZ(0,"div"),s._uU(1,"Email is required"),s.qZA())}function g(t,o){1&t&&(s.TgZ(0,"div"),s._uU(1," Email must be a valid email address "),s.qZA())}function a(t,o){if(1&t&&(s.TgZ(0,"div",24),s.YNc(1,c,2,0,"div",25),s.YNc(2,g,2,0,"div",25),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.email.errors.required),s.xp6(1),s.Q6J("ngIf",t.f.email.errors.email)}}function u(t,o){1&t&&(s.TgZ(0,"div"),s._uU(1,"Password is required"),s.qZA())}function d(t,o){1&t&&(s.TgZ(0,"div"),s._uU(1," Password must be at least 6 characters "),s.qZA())}function l(t,o){if(1&t&&(s.TgZ(0,"div",24),s.YNc(1,u,2,0,"div",25),s.YNc(2,d,2,0,"div",25),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.password.errors.required),s.xp6(1),s.Q6J("ngIf",t.f.password.errors.minlength)}}const m=function(){return["/user/login"]},f=function(){return["/user/register"]},p=function(t){return{"is-invalid":t}},b=function(){return["/user/account/password"]};let Z=(()=>{class t{constructor(t){this.formBuilder=t,this.submitted=!1}ngOnInit(){this.userLoginForm=this.formBuilder.group({email:["",[i.kI.required,i.kI.email]],password:["",[i.kI.required,i.kI.minLength(6)]],checkbox:[""]})}get f(){return this.userLoginForm.controls}onSubmit(){this.submitted=!0}}return t.\u0275fac=function(o){return new(o||t)(s.Y36(i.qu))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-login"]],decls:40,vars:17,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-6","col-md-8","col-sm-12"],["role","group","aria-label","User Account",1,"btn-group","d-flex"],["type","button",1,"btn","btn-lg","login","border","top-btn",3,"routerLink"],["type","button",1,"btn","btn-lg","register","border","top-btn",3,"routerLink"],[1,"form-login","pt-5","pb-3",3,"formGroup","ngSubmit"],[1,"form-group"],[1,"form-row"],[1,"col"],["type","email","formControlName","email","placeholder","Email Address",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"sr-only"],["type","password","formControlName","password","placeholder","Password",1,"form-control",3,"ngClass"],[1,"form-group","form-check","checkbox","mb-3"],["type","checkbox","formControlName","checkbox","id","rememberMe",1,"form-check-input"],["for","acceptTerms",1,"form-check-label"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","btn-default"],[1,"my-3","strike"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","btn-fb"],["type","submit",1,"btn","btn-lg","btn-outline-dark","btn-block"],[1,"first-time","mt-5","text-center"],[3,"routerLink"],[1,"first-time","mt-2","text-center"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,o){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"button",4),s._uU(5," Login "),s.qZA(),s.TgZ(6,"button",5),s._uU(7," Register "),s.qZA(),s.qZA(),s.TgZ(8,"form",6),s.NdJ("ngSubmit",function(){return o.onSubmit()}),s.TgZ(9,"div",7),s.TgZ(10,"div",8),s.TgZ(11,"div",9),s._UZ(12,"input",10),s.qZA(),s.YNc(13,a,3,2,"div",11),s.qZA(),s.qZA(),s.TgZ(14,"div",7),s.TgZ(15,"div",8),s.TgZ(16,"label",12),s._uU(17,"Password"),s.qZA(),s._UZ(18,"input",13),s.YNc(19,l,3,2,"div",11),s.qZA(),s.qZA(),s.TgZ(20,"div",14),s._UZ(21,"input",15),s.TgZ(22,"label",16),s._uU(23,"Remember Me"),s.qZA(),s.qZA(),s.TgZ(24,"button",17),s._uU(25," Sign in "),s.qZA(),s.TgZ(26,"div",18),s.TgZ(27,"span"),s._uU(28,"or"),s.qZA(),s.qZA(),s.TgZ(29,"button",19),s._uU(30," Login with Facebook "),s.qZA(),s.TgZ(31,"button",20),s._uU(32," Login with Google "),s.qZA(),s.TgZ(33,"p",21),s.TgZ(34,"a",22),s._uU(35,"Forgot Password"),s.qZA(),s.qZA(),s.TgZ(36,"p",23),s._uU(37," First time here? "),s.TgZ(38,"a",22),s._uU(39,"Register"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(4),s.Q6J("routerLink",s.DdM(9,m)),s.xp6(2),s.Q6J("routerLink",s.DdM(10,f)),s.xp6(2),s.Q6J("formGroup",o.userLoginForm),s.xp6(4),s.Q6J("ngClass",s.VKq(11,p,o.submitted&&o.f.email.errors)),s.xp6(1),s.Q6J("ngIf",o.submitted&&o.f.email.errors),s.xp6(5),s.Q6J("ngClass",s.VKq(13,p,o.submitted&&o.f.password.errors)),s.xp6(1),s.Q6J("ngIf",o.submitted&&o.f.password.errors),s.xp6(15),s.Q6J("routerLink",s.DdM(15,b)),s.xp6(4),s.Q6J("routerLink",s.DdM(16,f)))},directives:[e.rH,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,r.mk,r.O5,i.Wl,e.yS],styles:['.container[_ngcontent-%COMP%]{background:#f5f5f5}.top-btn[_ngcontent-%COMP%]{background-color:var(--theme-color,orange)}.login[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]{color:#fff;background:var(--theme-color,orange);border-width:2px!important;border-radius:2px}.login[_ngcontent-%COMP%]:active, .login[_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]:hover, .register[_ngcontent-%COMP%]:active, .register[_ngcontent-%COMP%]:focus, .register[_ngcontent-%COMP%]:hover{background:#fff;color:var(--theme-color,orange)}.form-login[_ngcontent-%COMP%]{width:100%;padding:1px;margin:0 auto}.form-login[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{font-weight:400}.form-login[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{position:relative;box-sizing:border-box;height:auto;padding:.7em;font-size:1rem}.form-login[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{z-index:2}.form-login[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-width:0;border-bottom:.1em solid #c0c0c6;outline-color:#c0c0c6}.form-login[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{margin-bottom:1em;border-bottom-right-radius:0;border-bottom-left-radius:0}.form-login[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{margin-bottom:.7em;border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-default[_ngcontent-%COMP%]{background-color:var(--theme-color,orange);outline-color:var(--theme-color,orange);border-color:var(--theme-color,orange)}.btn-default[_ngcontent-%COMP%]:hover{color:var(--theme-color,orange);background-color:initial}.btn-fb[_ngcontent-%COMP%]:hover{background-color:initial;color:#1e7df7}.first-time[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--theme-color,orange);font-weight:700}.first-time[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.strike[_ngcontent-%COMP%]{display:block;text-align:center;overflow:hidden;white-space:nowrap}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:relative;display:inline-block}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after, .strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;width:9999px;height:.1em;background:#c0c0c6}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before{right:100%;margin-right:1em}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after{left:100%;margin-left:1em}']}),t})();var _=n(6231);function h(t,o){1&t&&(s.TgZ(0,"div"),s._uU(1," First Name is required "),s.qZA())}function v(t,o){if(1&t&&(s.TgZ(0,"div",25),s.YNc(1,h,2,0,"div",26),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.firstName.errors.required)}}function C(t,o){1&t&&(s.TgZ(0,"div"),s._uU(1," Last Name is required "),s.qZA())}function q(t,o){if(1&t&&(s.TgZ(0,"div",25),s.YNc(1,C,2,0,"div",26),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.lastName.errors.required)}}function P(t,o){1&t&&(s.TgZ(0,"div"),s._uU(1,"Email is required"),s.qZA())}function M(t,o){1&t&&(s.TgZ(0,"div"),s._uU(1," Email must be a valid email address "),s.qZA())}function O(t,o){if(1&t&&(s.TgZ(0,"div",25),s.YNc(1,P,2,0,"div",26),s.YNc(2,M,2,0,"div",26),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.email.errors.required),s.xp6(1),s.Q6J("ngIf",t.f.email.errors.email)}}function k(t,o){1&t&&(s.TgZ(0,"div"),s._uU(1,"Password is required"),s.qZA())}function w(t,o){1&t&&(s.TgZ(0,"div"),s._uU(1," Password must be at least 6 characters "),s.qZA())}function A(t,o){if(1&t&&(s.TgZ(0,"div",25),s.YNc(1,k,2,0,"div",26),s.YNc(2,w,2,0,"div",26),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.password.errors.required),s.xp6(1),s.Q6J("ngIf",t.f.password.errors.minlength)}}function T(t,o){1&t&&(s.TgZ(0,"div"),s._uU(1," Confirm Password is required "),s.qZA())}function x(t,o){1&t&&(s.TgZ(0,"div"),s._uU(1," Passwords must match "),s.qZA())}function U(t,o){if(1&t&&(s.TgZ(0,"div",25),s.YNc(1,T,2,0,"div",26),s.YNc(2,x,2,0,"div",26),s.qZA()),2&t){const t=s.oxw();s.xp6(1),s.Q6J("ngIf",t.f.confirmPassword.errors.required),s.xp6(1),s.Q6J("ngIf",t.f.confirmPassword.errors.mustMatch)}}const N=function(){return["/user/login"]},y=function(){return["/user/register"]},J=function(t){return{"is-invalid":t}};let I=(()=>{class t{constructor(t){this.formBuilder=t,this.submitted=!1}ngOnInit(){this.userRegisterForm=this.formBuilder.group({firstName:["",i.kI.required],lastName:["",i.kI.required],email:["",[i.kI.required,i.kI.email]],phoneNumber:["",i.kI.required],password:["",[i.kI.required,i.kI.minLength(6)]],confirmPassword:["",i.kI.required]},{validators:[(0,_.Y)("password","confirmPassword")]})}get f(){return this.userRegisterForm.controls}onSubmit(){this.submitted=!0}}return t.\u0275fac=function(o){return new(o||t)(s.Y36(i.qu))},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-register"]],decls:54,vars:30,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-lg-6","col-md-8","col-sm-12"],["role","group","aria-label","User Account",1,"btn-group","d-flex"],["type","button",1,"btn","btn-lg","login","border","top-btn",3,"routerLink"],["type","button",1,"btn","btn-lg","register","border","top-btn",3,"routerLink"],[1,"form-register","pt-5","pb-3",3,"formGroup","ngSubmit"],[1,"h3","mb-4","font-weight-normal"],[1,"form-group"],[1,"form-row","mb-3"],[1,"col"],[1,"sr-only"],["type","text","formControlName","firstName","placeholder","First Name",1,"form-control",3,"ngClass"],["type","text","formControlName","lastName","placeholder","Last Name",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"form-row"],["type","email","formControlName","email","placeholder","Email Address",1,"form-control",3,"ngClass"],["type","tel","formControlName","phoneNumber","placeholder","Phone Number",1,"form-control",3,"ngClass"],["type","password","formControlName","password","placeholder","Password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword","placeholder","Confirm Password",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","btn-default","mt-2"],[1,"my-3","strike"],["type","submit",1,"btn","btn-lg","btn-primary","btn-block","btn-fb"],[1,"with-account","mt-5"],[3,"routerLink"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(t,o){1&t&&(s.TgZ(0,"div",0),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"button",4),s._uU(5," Login "),s.qZA(),s.TgZ(6,"button",5),s._uU(7," Register "),s.qZA(),s.qZA(),s.TgZ(8,"form",6),s.NdJ("ngSubmit",function(){return o.onSubmit()}),s.TgZ(9,"h1",7),s._uU(10," Please enter your details to register "),s.qZA(),s.TgZ(11,"div",8),s.TgZ(12,"div",9),s.TgZ(13,"div",10),s.TgZ(14,"label",11),s._uU(15,"First Name"),s.qZA(),s._UZ(16,"input",12),s.qZA(),s.TgZ(17,"div",10),s.TgZ(18,"label",11),s._uU(19,"Last Name"),s.qZA(),s._UZ(20,"input",13),s.qZA(),s.YNc(21,v,2,1,"div",14),s.YNc(22,q,2,1,"div",14),s.qZA(),s.qZA(),s.TgZ(23,"div",8),s.TgZ(24,"div",15),s.TgZ(25,"div",10),s._UZ(26,"input",16),s.qZA(),s.YNc(27,O,3,2,"div",14),s.qZA(),s.qZA(),s.TgZ(28,"div",8),s.TgZ(29,"div",9),s.TgZ(30,"div",10),s._UZ(31,"input",17),s.qZA(),s.qZA(),s.qZA(),s.TgZ(32,"div",8),s.TgZ(33,"div",15),s.TgZ(34,"label",11),s._uU(35,"Password"),s.qZA(),s._UZ(36,"input",18),s.YNc(37,A,3,2,"div",14),s.qZA(),s.TgZ(38,"div",15),s.TgZ(39,"label",11),s._uU(40,"Confirm Password"),s.qZA(),s._UZ(41,"input",19),s.YNc(42,U,3,2,"div",14),s.qZA(),s.qZA(),s.TgZ(43,"button",20),s._uU(44," Register "),s.qZA(),s.TgZ(45,"div",21),s.TgZ(46,"span"),s._uU(47,"or"),s.qZA(),s.qZA(),s.TgZ(48,"button",22),s._uU(49," Register with Facebook "),s.qZA(),s.TgZ(50,"p",23),s._uU(51," Have an account? "),s.TgZ(52,"a",24),s._uU(53,"Login"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&t&&(s.xp6(4),s.Q6J("routerLink",s.DdM(15,N)),s.xp6(2),s.Q6J("routerLink",s.DdM(16,y)),s.xp6(2),s.Q6J("formGroup",o.userRegisterForm),s.xp6(8),s.Q6J("ngClass",s.VKq(17,J,o.submitted&&o.f.firstName.errors)),s.xp6(4),s.Q6J("ngClass",s.VKq(19,J,o.submitted&&o.f.lastName.errors)),s.xp6(1),s.Q6J("ngIf",o.submitted&&o.f.firstName.errors),s.xp6(1),s.Q6J("ngIf",o.submitted&&o.f.lastName.errors),s.xp6(4),s.Q6J("ngClass",s.VKq(21,J,o.submitted&&o.f.email.errors)),s.xp6(1),s.Q6J("ngIf",o.submitted&&o.f.email.errors),s.xp6(4),s.Q6J("ngClass",s.VKq(23,J,o.submitted&&o.f.phoneNumber.errors)),s.xp6(5),s.Q6J("ngClass",s.VKq(25,J,o.submitted&&o.f.password.errors)),s.xp6(1),s.Q6J("ngIf",o.submitted&&o.f.password.errors),s.xp6(4),s.Q6J("ngClass",s.VKq(27,J,o.submitted&&o.f.confirmPassword.errors)),s.xp6(1),s.Q6J("ngIf",o.submitted&&o.f.confirmPassword.errors),s.xp6(10),s.Q6J("routerLink",s.DdM(29,N)))},directives:[e.rH,i._Y,i.JL,i.sg,i.Fj,i.JJ,i.u,r.mk,r.O5,e.yS],styles:['.container[_ngcontent-%COMP%]{background:#f5f5f5}.top-btn[_ngcontent-%COMP%]{background-color:var(--theme-color,orange)}.login[_ngcontent-%COMP%], .register[_ngcontent-%COMP%]{color:#fff;background:var(--theme-color,orange);border-width:2px!important;border-radius:2px}.login[_ngcontent-%COMP%]:active, .login[_ngcontent-%COMP%]:focus, .login[_ngcontent-%COMP%]:hover, .register[_ngcontent-%COMP%]:active, .register[_ngcontent-%COMP%]:focus, .register[_ngcontent-%COMP%]:hover{background:#fff;color:var(--theme-color,orange)}.form-register[_ngcontent-%COMP%]{width:100%;padding:1px;margin:0 auto}.form-register[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{font-weight:400}.form-register[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{position:relative;box-sizing:border-box;height:auto;padding:.7em;font-size:1rem}.form-register[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus{z-index:2}.form-register[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border-width:0;border-bottom:.1em solid #c0c0c6;outline-color:#c0c0c6}.form-register[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]{margin-bottom:1em;border-bottom-right-radius:0;border-bottom-left-radius:0}.form-register[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]{margin-bottom:.7em;border-bottom-left-radius:0;border-bottom-right-radius:0}.btn-default[_ngcontent-%COMP%]{background-color:var(--theme-color,orange);outline-color:var(--theme-color,orange);border-color:var(--theme-color,orange)}.btn-default[_ngcontent-%COMP%]:hover{color:var(--theme-color,orange);background-color:initial}.btn-fb[_ngcontent-%COMP%]:hover{background-color:initial;color:#1e7df7}.with-account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--theme-color,orange);font-weight:700}.with-account[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{cursor:pointer;text-decoration:underline}.strike[_ngcontent-%COMP%]{display:block;text-align:center;overflow:hidden;white-space:nowrap}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:relative;display:inline-block}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after, .strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before{content:"";position:absolute;top:50%;width:9999px;height:.1em;background:#c0c0c6}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:before{right:100%;margin-right:1em}.strike[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:after{left:100%;margin-left:1em}']}),t})();var Q=n(570),L=n(2370);let Y=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s.Xpm({type:t,selectors:[["app-user-default"]],decls:4,vars:0,consts:[[1,"container"]],template:function(t,o){1&t&&(s._UZ(0,"app-header"),s.TgZ(1,"main",0),s._UZ(2,"router-outlet"),s.qZA(),s._UZ(3,"app-footer"))},directives:[Q.G,e.lC,L.c],styles:[""]}),t})();var F=n(2345);const S=[{path:"account",loadChildren:()=>n.e(24).then(n.bind(n,8024)).then(t=>t.AccountModule)},{path:"",component:Y,children:[{path:"login",component:Z},{path:"register",component:I},{path:"",redirectTo:"login",pathMatch:"full"}]}];let R=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[r.ez,i.u5,F.m,i.UX,e.Bz.forChild(S)]]}),t})()}}]);