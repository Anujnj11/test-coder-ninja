"use strict";(self.webpackChunkninja_coder_app=self.webpackChunkninja_coder_app||[]).push([[88],{2088:(O,s,i)=>{i.r(s),i.d(s,{HomeModule:()=>_});var p=i(6895),m=i(8176),e=i(433),n=i(4650),c=i(6272),d=i(3679),u=i(6616),h=i(7044),z=i(1664),f=i(5635),v=i(1971),l=i(6704);function x(o,r){1&o&&(n.ynx(0),n._uU(1,"Invalid Email!"),n.BQk())}function C(o,r){1&o&&(n.ynx(0),n._uU(1,"Required E-mail!"),n.BQk())}function M(o,r){if(1&o&&(n.YNc(0,x,2,0,"ng-container",18),n.YNc(1,C,2,0,"ng-container",18)),2&o){const t=r.$implicit;n.Q6J("ngIf",t.hasError("email")),n.xp6(1),n.Q6J("ngIf",t.hasError("required"))}}const y=[{path:"",children:[{path:"",component:(()=>{class o{constructor(t,a,g){this.fb=t,this.router=a,this.commonService=g,this.errMsg="",this.isLogin=!1}ngOnInit(){this.initForm()}ngAfterViewInit(){this.isLoggedIn()}isLoggedIn(){this.commonService.getToken()&&this.router.navigate(["/dashboard"])}initForm(){this.loginForm=this.fb.group({email:["temp@gmail.com  ",[e.kI.required,e.kI.email]],password:["temp@12345",[e.kI.required]]})}get f(){return this.loginForm.controls}checkLogin(){this.loginForm.valid?(this.errMsg="",this.validateLogin(this.loginForm.getRawValue())):Object.values(this.loginForm.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})}validateLogin(t){this.isLogin=!this.isLogin,this.commonService.checkLogin(t).subscribe(a=>{this.isLogin=!this.isLogin,a?.statusCode?(this.commonService.setToken(a?.data),this.router.navigate(["/dashboard/"])):(this.errMsg=a?.message,this.commonService.showNotification(a?.message,"error"))})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(e.QS),n.Y36(m.F0),n.Y36(c.v_))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-login"]],decls:24,vars:6,consts:[["nz-col",""],[1,"terminal"],[1,"prompt"],[1,"prompt","new-output"],["nz-row","","nzJustify","center","nzAlign","middle",1,"inner-content"],["nz-col","",3,"nzSpan"],["nzHoverable","","nzTitle","Login"],["nz-row","","nzJustify","center"],["nz-form","",1,"login-form",3,"formGroup","ngSubmit"],[3,"nzErrorTip"],["nzPrefixIcon","user"],["type","email","formControlName","email","nz-input","","placeholder","Email"],["emailErrorTpl",""],["nzErrorTip","Required Password!"],["nzPrefixIcon","lock"],["type","password","formControlName","password","nz-input","","placeholder","Password"],["nz-row","",1,"login-form-margin"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzLoading","nzType"],[4,"ngIf"]],template:function(t,a){if(1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"p",2),n._uU(3,"Welcome, to Ninja Coder"),n.qZA(),n._UZ(4,"p",3),n.qZA(),n.TgZ(5,"div",4)(6,"div",5)(7,"nz-card",6)(8,"div",7)(9,"form",8),n.NdJ("ngSubmit",function(){return a.checkLogin()}),n.TgZ(10,"nz-form-item")(11,"nz-form-control",9)(12,"nz-input-group",10),n._UZ(13,"input",11),n.YNc(14,M,2,2,"ng-template",null,12,n.W1O),n.qZA()()(),n.TgZ(16,"nz-form-item")(17,"nz-form-control",13)(18,"nz-input-group",14),n._UZ(19,"input",15),n.qZA()()(),n.TgZ(20,"div",16),n._UZ(21,"div",5),n.qZA(),n.TgZ(22,"button",17),n._uU(23,"Log in"),n.qZA()()()()()()()),2&t){const g=n.MAs(15);n.xp6(6),n.Q6J("nzSpan",6),n.xp6(3),n.Q6J("formGroup",a.loginForm),n.xp6(2),n.Q6J("nzErrorTip",g),n.xp6(10),n.Q6J("nzSpan",12),n.xp6(1),n.Q6J("nzLoading",a.isLogin)("nzType","primary")}},dependencies:[p.O5,e._Y,e.Fj,e.JJ,e.JL,e.sg,e.u,d.t3,d.SK,u.ix,h.w,z.dQ,f.Zp,f.gB,v.bd,l.Lr,l.Nx,l.Fd],styles:['nz-content[_ngcontent-%COMP%]{padding:0 50px}.inner-content[_ngcontent-%COMP%]{background:#fff;padding:24px;min-height:100vh}.login-form[_ngcontent-%COMP%]{max-width:300px}.login-form-margin[_ngcontent-%COMP%]{margin-bottom:16px}.login-form-forgot[_ngcontent-%COMP%]{float:right}.login-form-button[_ngcontent-%COMP%]{width:100%}@keyframes _ngcontent-%COMP%_cursor-blink{0%{opacity:0}50%{opacity:1}to{opacity:0}}.terminal[_ngcontent-%COMP%]{background-color:#000;position:relative;padding:4rem;text-align:left;position:absolute;width:100%;height:100vh}.terminal[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]{color:#1ff042;display:block;font-family:AndaleMono,monospace;font-weight:700;text-transform:uppercase;font-size:.9em;letter-spacing:.15em;white-space:pre-wrap;text-shadow:0 0 2px rgba(31,240,66,.75);line-height:1;margin-bottom:.75em}.terminal[_ngcontent-%COMP%]   .prompt[_ngcontent-%COMP%]:before{content:"> ";display:inline-block}.terminal[_ngcontent-%COMP%]   .new-output[_ngcontent-%COMP%]{display:inline-block}.terminal[_ngcontent-%COMP%]   .new-output[_ngcontent-%COMP%]:after{display:inline-block;vertical-align:-.15em;width:.75em;height:1em;margin-left:5px;background:#1ff042;box-shadow:1px 1px 1px #1ff042a6,-1px -1px 1px #1ff042a6,1px -1px 1px #1ff042a6,-1px 1px 1px #1ff042a6;animation:_ngcontent-%COMP%_cursor-blink 1.25s steps(1) infinite;content:""}.kittens[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{letter-spacing:0;opacity:0;line-height:1rem}.kitten-gif[_ngcontent-%COMP%]{margin:20px;max-width:300px}.four-oh-four-form[_ngcontent-%COMP%]{opacity:0;position:fixed;top:0;left:0}']}),o})()}]}];let L=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[m.Bz.forChild(y),m.Bz]}),o})(),_=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[p.ez,L,c.m8]}),o})()}}]);