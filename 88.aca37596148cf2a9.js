"use strict";(self.webpackChunkninja_coder_app=self.webpackChunkninja_coder_app||[]).push([[88],{2088:(J,s,i)=>{i.r(s),i.d(s,{HomeModule:()=>M});var c=i(6895),g=i(5263),r=i(433),n=i(4650),d=i(3458),p=i(3679),f=i(6616),h=i(7044),z=i(1664),u=i(5635),v=i(1971),l=i(6704);function C(o,e){1&o&&(n.ynx(0),n._uU(1,"Invalid Email!"),n.BQk())}function L(o,e){1&o&&(n.ynx(0),n._uU(1,"Required E-mail!"),n.BQk())}function T(o,e){if(1&o&&(n.YNc(0,C,2,0,"ng-container",15),n.YNc(1,L,2,0,"ng-container",15)),2&o){const t=e.$implicit;n.Q6J("ngIf",t.hasError("email")),n.xp6(1),n.Q6J("ngIf",t.hasError("required"))}}const y=[{path:"",children:[{path:"",component:(()=>{class o{constructor(t,a,m){this.fb=t,this.router=a,this.commonService=m,this.errMsg=""}ngOnInit(){this.initForm()}ngAfterViewInit(){this.isLoggedIn()}isLoggedIn(){this.commonService.getToken()&&this.router.navigate(["/dashboard"])}initForm(){this.loginForm=this.fb.group({email:["guptaanuj0811@gmail.com  ",[r.kI.required,r.kI.email]],password:["temp@12345",[r.kI.required]]})}get f(){return this.loginForm.controls}checkLogin(){this.loginForm.valid?(this.errMsg="",this.validateLogin(this.loginForm.getRawValue())):Object.values(this.loginForm.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})}validateLogin(t){console.log(t),this.router.navigate(["/interview-panel"]),this.commonService.checkLogin(t).subscribe(a=>{a?.statusCode||(this.errMsg=a?.message,this.commonService.showNotification(a?.message,"error"))})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(r.QS),n.Y36(g.F0),n.Y36(d.v_))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:20,vars:5,consts:[["nz-col",""],["nz-row","","nzJustify","center","nzAlign","middle",1,"inner-content"],["nz-col","",3,"nzSpan"],["nzHoverable","","nzTitle","Login"],["nz-row","","nzJustify","center"],["nz-form","",1,"login-form",3,"formGroup","ngSubmit"],[3,"nzErrorTip"],["nzPrefixIcon","user"],["type","email","formControlName","email","nz-input","","placeholder","Email"],["emailErrorTpl",""],["nzErrorTip","Required Password!"],["nzPrefixIcon","lock"],["type","password","formControlName","password","nz-input","","placeholder","Password"],["nz-row","",1,"login-form-margin"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzType"],[4,"ngIf"]],template:function(t,a){if(1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"nz-card",3)(4,"div",4)(5,"form",5),n.NdJ("ngSubmit",function(){return a.checkLogin()}),n.TgZ(6,"nz-form-item")(7,"nz-form-control",6)(8,"nz-input-group",7),n._UZ(9,"input",8),n.YNc(10,T,2,2,"ng-template",null,9,n.W1O),n.qZA()()(),n.TgZ(12,"nz-form-item")(13,"nz-form-control",10)(14,"nz-input-group",11),n._UZ(15,"input",12),n.qZA()()(),n.TgZ(16,"div",13),n._UZ(17,"div",2),n.qZA(),n.TgZ(18,"button",14),n._uU(19,"Log in"),n.qZA()()()()()()()),2&t){const m=n.MAs(11);n.xp6(2),n.Q6J("nzSpan",6),n.xp6(3),n.Q6J("formGroup",a.loginForm),n.xp6(2),n.Q6J("nzErrorTip",m),n.xp6(10),n.Q6J("nzSpan",12),n.xp6(1),n.Q6J("nzType","primary")}},dependencies:[c.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,p.t3,p.SK,f.ix,h.w,z.dQ,u.Zp,u.gB,v.bd,l.Lr,l.Nx,l.Fd],styles:["nz-content[_ngcontent-%COMP%]{padding:0 50px}.inner-content[_ngcontent-%COMP%]{background:#fff;padding:24px;min-height:100vh}.login-form[_ngcontent-%COMP%]{max-width:300px}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}"]}),o})()}]}];let x=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[g.Bz.forChild(y),g.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[c.ez,x,d.m8]}),o})()}}]);