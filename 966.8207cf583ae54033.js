"use strict";(self.webpackChunkninja_coder_app=self.webpackChunkninja_coder_app||[]).push([[966],{1966:(tn,F,r)=>{r.r(F),r.d(F,{DashboardModule:()=>nn});var u=r(6895),g=r(8176),p=r(6272),n=r(4650),b=r(1102),C=r(8284),Z=r(3325),f=r(7044),v=r(7570);let U=(()=>{class o{constructor(e,t){this.commonService=e,this.router=t,this.isCollapsed=!1}toggleCollapsed(){this.isCollapsed=!this.isCollapsed}logout(){this.commonService.removeToken(),this.router.navigate(["/"])}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(p.v_),n.Y36(g.F0))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-layout"]],decls:30,vars:8,consts:[[1,"app-layout"],["nzCollapsible","","nzWidth","220px","nzBreakpoint","lg",1,"menu-sidebar",3,"nzCollapsed","nzTrigger","nzCollapsedChange"],[1,"sidebar-logo"],["target","_blank"],["src","assets/images/ninja-head.png","alt","Ninja-coder","srcset",""],["nz-menu","","nzTheme","dark","nzMode","inline",3,"nzInlineCollapsed"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","",3,"nzTooltipTitle"],["nz-icon","","nzType","usergroup-add"],["routerLink","/"],["nz-submenu","","nzTitle","Admin","nzIcon","home","nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right",3,"nzTooltipTitle"],["routerLink","/dashboard/users"],["nz-icon","","nzType","logout"],[3,"click"],[1,"app-header"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],[1,"inner-content"],[2,"width","100%"]],template:function(e,t){1&e&&(n.TgZ(0,"nz-layout",0)(1,"nz-sider",1),n.NdJ("nzCollapsedChange",function(l){return t.isCollapsed=l}),n.TgZ(2,"div",2)(3,"a",3),n._UZ(4,"img",4),n.qZA()(),n.TgZ(5,"ul",5)(6,"li",6),n._UZ(7,"span",7),n.TgZ(8,"span")(9,"a",8),n._uU(10," Candidates"),n.qZA()()(),n.TgZ(11,"li",9)(12,"ul")(13,"li",10)(14,"a",11),n._uU(15,"Users"),n.qZA()()()(),n.TgZ(16,"li",10),n._UZ(17,"span",12),n.TgZ(18,"span")(19,"a",13),n.NdJ("click",function(){return t.logout()}),n._uU(20," Logout"),n.qZA()()()()(),n.TgZ(21,"nz-layout")(22,"nz-header")(23,"div",14)(24,"span",15),n.NdJ("click",function(){return t.isCollapsed=!t.isCollapsed}),n._UZ(25,"span",16),n.qZA()()(),n.TgZ(26,"nz-content")(27,"div",17)(28,"nz-layout",18),n._UZ(29,"router-outlet"),n.qZA()()()()()),2&e&&(n.xp6(1),n.Q6J("nzCollapsed",t.isCollapsed)("nzTrigger",null),n.xp6(4),n.Q6J("nzInlineCollapsed",t.isCollapsed),n.xp6(1),n.Q6J("nzTooltipTitle",t.isCollapsed?"Candidates":""),n.xp6(5),n.Q6J("nzTooltipTitle",t.isCollapsed?"Home":""),n.xp6(2),n.Q6J("nzTooltipTitle",t.isCollapsed?"Users":""),n.xp6(3),n.Q6J("nzTooltipTitle",t.isCollapsed?"Logout":""),n.xp6(9),n.Q6J("nzType",t.isCollapsed?"menu-unfold":"menu-fold"))},dependencies:[b.Ls,C.hw,C.E8,C.OK,C.t7,Z.wO,Z.r9,Z.rY,f.w,v.SY,g.lC,g.rH],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.wrapper[_ngcontent-%COMP%]{width:240px}button[_ngcontent-%COMP%]{margin-bottom:12px}.menu-sidebar[_ngcontent-%COMP%]{position:relative;z-index:10;min-height:100vh;box-shadow:2px 0 6px #00152959}.header-trigger[_ngcontent-%COMP%]{height:64px;padding:20px 24px;font-size:20px;cursor:pointer;transition:all .3s,padding 0s}.trigger[_ngcontent-%COMP%]:hover{color:#1890ff}.sidebar-logo[_ngcontent-%COMP%]{position:relative;height:64px;padding-left:24px;overflow:hidden;line-height:64px;background:#001529;transition:all .3s}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:inline-block;height:32px;width:32px;vertical-align:middle}.sidebar-logo[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline-block;margin:0 0 0 20px;color:#fff;font-weight:600;font-size:14px;font-family:Avenir,Helvetica Neue,Arial,Helvetica,sans-serif;vertical-align:middle}nz-header[_ngcontent-%COMP%]{padding:0;width:100%;z-index:2}.app-header[_ngcontent-%COMP%]{position:relative;height:64px;padding:0;background:#fff;box-shadow:0 1px 4px #00152914}nz-content[_ngcontent-%COMP%]{margin:24px}.inner-content[_ngcontent-%COMP%]{padding:24px;background:#fff;height:100%}"]}),o})();var c=r(3679),h=r(6616),_=r(1664),x=r(1971),d=r(6666),T=r(7131),N=r(8800),O=r(545),s=r(433),A=r(7467),S=r(5635),z=r(6704);let J=(()=>{class o{constructor(e,t,i){this.fb=e,this.commonService=t,this.dashboardService=i,this.languages=A.l}ngOnInit(){this.addCandidateForm=this.fb.group({fullName:[null,[s.kI.required]],email:[null,[s.kI.email]],phoneNumber:[null],phoneNumberPrefix:["+91"],panelId:[this.commonService.getUniqueId(4)]})}get f(){return this.addCandidateForm.controls}submitForm(){this.addCandidateForm.valid?this.dashboardService.addCandidate(this.addCandidateForm.value).subscribe(e=>{e?.statusCode?(this.dashboardService.sendDashboardSubject("close-add-candidate",!0),this.commonService.showNotification(e?.message,"success")):this.commonService.showNotification(e?.message,"error")}):Object.values(this.addCandidateForm.controls).forEach(e=>{e.invalid&&(e.markAsDirty(),e.updateValueAndValidity({onlySelf:!0}))})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(s.QS),n.Y36(p.v_),n.Y36(p.sp))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-add-candidate"]],decls:22,vars:15,consts:[["nz-form","",3,"formGroup","ngSubmit"],["nzFor","fullName","nzRequired","","nzTooltipTitle","What do you want other to call you",3,"nzSpan"],["nzErrorTip","Enter fullName!",3,"nzSm","nzXs","nzValidateStatus"],["nz-input","","autocomplete","off","id","fullName","formControlName","fullName"],["nzFor","email",3,"nzSpan"],["nzErrorTip","Invalid E-mail!",3,"nzSm","nzXs"],["nz-input","","autocomplete","off","formControlName","email","id","email"],["nzFor","phoneNumber",3,"nzSpan"],["nzErrorTip","Please input your phone number!",3,"nzSm","nzXs","nzValidateStatus"],["autocomplete","off","formControlName","phoneNumber","id","'phoneNumber'","nz-input",""],[3,"nzOffset","nzSpan"],["nz-button","","nzType","primary",3,"disabled"]],template:function(e,t){1&e&&(n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return t.submitForm()}),n.TgZ(1,"nz-form-item")(2,"nz-form-label",1)(3,"span"),n._uU(4,"Full Name"),n.qZA()(),n.TgZ(5,"nz-form-control",2),n._UZ(6,"input",3),n.qZA()(),n.TgZ(7,"nz-form-item")(8,"nz-form-label",4),n._uU(9,"E-mail"),n.qZA(),n.TgZ(10,"nz-form-control",5),n._UZ(11,"input",6),n.qZA()(),n.TgZ(12,"nz-form-item")(13,"nz-form-label",7),n._uU(14,"Phone Number"),n.qZA(),n.TgZ(15,"nz-form-control",8)(16,"nz-input-group"),n._UZ(17,"input",9),n.qZA()()(),n.TgZ(18,"nz-form-item")(19,"nz-form-control",10)(20,"button",11),n._uU(21,"Submit"),n.qZA()()()()),2&e&&(n.Q6J("formGroup",t.addCandidateForm),n.xp6(2),n.Q6J("nzSpan",7),n.xp6(3),n.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",t.f.fullName),n.xp6(3),n.Q6J("nzSpan",7),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSpan",7),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",t.f.phoneNumber),n.xp6(4),n.Q6J("nzOffset",7)("nzSpan",12),n.xp6(1),n.Q6J("disabled",!t.addCandidateForm.valid))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,c.t3,c.SK,h.ix,f.w,_.dQ,S.Zp,S.gB,z.Lr,z.Nx,z.iK,z.Fd],styles:[".phone-select[_ngcontent-%COMP%]{width:70px}"]}),o})();function q(o,a){1&o&&n._UZ(0,"nz-skeleton")}const P=function(o){return{width:o}};function M(o,a){if(1&o){const e=n.EpF();n.TgZ(0,"th",13),n.NdJ("nzSortOrderChange",function(i){const m=n.CHM(e).$implicit;return n.KtG(m.sortOrder=i)}),n._uU(1),n.qZA()}if(2&o){const e=a.$implicit;n.Q6J("nzSortOrder",e.sortOrder)("ngStyle",n.VKq(7,P,null==e?null:e.width))("nzSortFn",e.sortFn)("nzColumnKey",null==e?null:e.filterColumn)("nzFilters",e.listOfFilter)("nzFilterFn",e.filterFn),n.xp6(1),n.hij(" ",e.name," ")}}function I(o,a){if(1&o){const e=n.EpF();n.TgZ(0,"tr")(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.ALo(5,"date"),n.qZA(),n.TgZ(6,"td"),n._uU(7),n.qZA(),n.TgZ(8,"td"),n._uU(9),n.qZA(),n.TgZ(10,"td")(11,"nz-button-group")(12,"button",14),n.NdJ("click",function(){const i=n.CHM(e),l=i.$implicit,m=i.index,en=n.oxw();return n.KtG(en.generateLink(l,m))}),n._UZ(13,"span",15),n.qZA(),n.TgZ(14,"button",16),n.NdJ("click",function(){const l=n.CHM(e).$implicit,m=n.oxw();return n.KtG(m.copyURL(l))}),n._UZ(15,"span",17),n.qZA()()()()}if(2&o){const e=a.$implicit,t=a.index;n.xp6(2),n.Oqu(t+1),n.xp6(2),n.Oqu(n.lcZ(5,8,null==e?null:e.updatedAt)),n.xp6(3),n.Oqu(null==e?null:e.fullName),n.xp6(2),n.Oqu(null==e||null==e.createdBy?null:e.createdBy.userName),n.xp6(3),n.MGl("nzTooltipTitle","Generate link for ",null==e?null:e.fullName,""),n.Q6J("nzLoading",null==e?null:e.generateLink),n.xp6(2),n.MGl("nzTooltipTitle","Copy link for ",null==e?null:e.fullName,""),n.Q6J("disabled",!(null!=e&&e.jwtToken))}}function Y(o,a){1&o&&(n.ynx(0),n._UZ(1,"app-add-candidate"),n.BQk())}let Q=(()=>{class o{constructor(e,t,i,l){this.dashboardService=e,this.commonService=t,this.interviewService=i,this.userService=l,this.apiCalling=!1,this.candidates=[],this.addCandidate=!1,this.filterCandidate={pageIndex:1,pageSize:20,filter:[],sort:[]},this.totalCandidates=0,this.listOfColumns=[],this.users=[]}ngOnInit(){this.getUsers(),this.subscribedData()}onQueryParamsChange(e){const{pageSize:t,pageIndex:i,sort:l,filter:m}=e;this.filterCandidate={pageSize:t,pageIndex:i,sort:l,filter:m},this.getCandidates()}subscribedData(){this.dashboardService.getDashboardSubject().subscribe(e=>{"close-add-candidate"===e.action&&(this.close(),this.getCandidates())})}getUsers(){this.userService.getUsers().subscribe(e=>{e?.statusCode?(this.users=e?.data,this.setFilter()):this.commonService.showNotification(e?.message,"danger")})}setFilter(){const e=[];this.users.forEach(t=>{e.push({text:t.userName,value:t._id})}),this.listOfColumns=[{name:"Sr",width:"5%"},{name:"Created At",filterColumn:"createdAt",width:"10%",sortFn:(t,i)=>t.createdAt.localeCompare(i.createdAt)},{name:"Name",width:"10%",filterColumn:"fullName",sortFn:(t,i)=>t.fullName.localeCompare(i.fullName)},{name:"Created By",filterColumn:"createdBy",width:"8%",sortFn:(t,i)=>t.createdBy.userName.localeCompare(i.createdBy.userName),sortOrder:null,listOfFilter:e,filterFn:(t,i)=>-1!==i?.createdBy?.userName.indexOf(t)}]}open(){this.addCandidate=!0}close(){this.addCandidate=!1}generateLink(e,t){this.candidates[t].generateLink=!0,this.interviewService.generateLink(e?._id).subscribe(i=>{this.candidates[t].generateLink=!1,i?.statusCode?(this.candidates[t].jwtToken=i?.data,this.commonService.showNotification(i?.message,"success")):this.commonService.showNotification(i?.message,"error")})}copyURL(e){if(e?.jwtToken){const t=this.commonService.prepareInterviewLink(e?.jwtToken,e?.panelId);this.copyText(t),this.commonService.showNotification("Copied To Clipboard","success")}else this.commonService.showNotification("Generate Link First","error")}copyText(e){let t=document.createElement("textarea");t.style.position="fixed",t.style.left="0",t.style.top="0",t.style.opacity="0",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}getCandidates(){const e=this.filterCandidate.sort.find(l=>null!==l.value);this.dashboardService.getCandidates2(this.filterCandidate.pageIndex,this.filterCandidate.pageSize,e&&e.key||null,e&&e.value||null,this.filterCandidate.filter).subscribe(l=>{l?.statusCode?(this.candidates=l?.data?.data,this.totalCandidates=l?.data?.total||0):this.commonService.showNotification(l?.message,"danger")})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(p.sp),n.Y36(p.v_),n.Y36(p.nm),n.Y36(p.KD))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-list"]],decls:20,vars:13,consts:[["nz-row","","nzAlign","middle",1,"inner-content"],["nz-col","",3,"nzSpan"],["nz-typography",""],["nz-row","","nzJustify","end","nzAlign","middle"],["nz-tooltip","","nzTooltipTitle","Add Candidate","nz-button","","nzType","primary","nzShape","round",3,"nzSize","click"],["nz-icon","","nzType","user-add"],[4,"ngIf"],["nzShowSizeChanger","",3,"nzData","nzFrontPagination","nzLoading","nzTotal","nzPageSize","nzPageIndex","nzQueryParams"],[3,"nzSortOrder","ngStyle","nzSortFn","nzColumnKey","nzFilters","nzFilterFn","nzSortOrderChange",4,"ngFor","ngForOf"],["nzRight","",2,"width","8%"],[4,"ngFor","ngForOf"],["nzSize","large","nzPlacement","right","nzTitle","Add Candidate",1,"add-candidate-drawer",3,"nzClosable","nzVisible","nzOnClose"],[4,"nzDrawerContent"],[3,"nzSortOrder","ngStyle","nzSortFn","nzColumnKey","nzFilters","nzFilterFn","nzSortOrderChange"],["nz-tooltip","","nz-button","","nzType","link",3,"nzLoading","nzTooltipTitle","click"],["nz-icon","","nzType","link"],["nz-tooltip","","nz-button","","nzType","link",3,"disabled","nzTooltipTitle","click"],["nz-icon","","nzType","copy"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),n._uU(3,"List of candidates"),n.qZA(),n.TgZ(4,"nz-card")(5,"div",3)(6,"button",4),n.NdJ("click",function(){return t.open()}),n._UZ(7,"span",5),n._uU(8," Add "),n.qZA()(),n.YNc(9,q,1,0,"nz-skeleton",6),n.TgZ(10,"nz-table",7),n.NdJ("nzQueryParams",function(l){return t.onQueryParamsChange(l)}),n.TgZ(11,"thead")(12,"tr"),n.YNc(13,M,2,9,"th",8),n.TgZ(14,"th",9),n._uU(15,"Action"),n.qZA()()(),n.TgZ(16,"tbody"),n.YNc(17,I,16,10,"tr",10),n.qZA()()()()(),n.TgZ(18,"nz-drawer",11),n.NdJ("nzOnClose",function(){return t.close()}),n.YNc(19,Y,2,0,"ng-container",12),n.qZA()),2&e&&(n.xp6(1),n.Q6J("nzSpan",24),n.xp6(5),n.Q6J("nzSize","small"),n.xp6(3),n.Q6J("ngIf",t.apiCalling),n.xp6(1),n.Q6J("nzData",t.candidates)("nzFrontPagination",!1)("nzLoading",t.apiCalling)("nzTotal",t.totalCandidates)("nzPageSize",t.filterCandidate.pageSize)("nzPageIndex",t.filterCandidate.pageIndex),n.xp6(3),n.Q6J("ngForOf",t.listOfColumns),n.xp6(4),n.Q6J("ngForOf",t.candidates),n.xp6(1),n.Q6J("nzClosable",!1)("nzVisible",t.addCandidate))},dependencies:[u.sg,u.O5,u.PC,b.Ls,c.t3,c.SK,h.ix,h.fY,f.w,_.dQ,x.bd,d.N8,d.qD,d.Uo,d._C,d.Om,d.p0,d.$Z,d.qn,T.Vz,T.SQ,v.SY,N.ZU,O.ng,J,u.uU],styles:[".add-candidate-drawer[_ngcontent-%COMP%]{padding:10px}"]}),o})();var w=r(4383),D=r(2804);const E=["ADMIN","SUPERVISOR"];var y=r(8521);function V(o,a){if(1&o&&(n.TgZ(0,"label",15),n._uU(1),n.qZA()),2&o){const e=a.$implicit;n.s9C("nzValue",e),n.xp6(1),n.Oqu(e)}}let L=(()=>{class o{constructor(e,t,i){this.fb=e,this.userService=t,this.commonService=i,this.languages=A.l,this.roles=E}ngOnInit(){this.addUserForm=this.fb.group({userName:[null,[s.kI.required]],email:[null,[s.kI.required,s.kI.email]],phoneNumber:[null],phoneNumberPrefix:["+91"],languageTags:[null],role:[this.roles[1],[s.kI.required]]})}get f(){return this.addUserForm.controls}submitForm(){this.addUserForm.valid?(console.log("submit",this.addUserForm.value),this.userService.addUser(this.addUserForm.value).subscribe(e=>{e?.statusCode?(this.commonService.showNotification(e?.message,"success"),this.addUserForm.reset(),this.userService.sendUserSubject("close-add-user",!0)):this.commonService.showNotification(e?.message,"error")})):Object.values(this.addUserForm.controls).forEach(e=>{e.invalid&&(e.markAsDirty(),e.updateValueAndValidity({onlySelf:!0}))})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(s.QS),n.Y36(p.KD),n.Y36(p.v_))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-add-user"]],decls:28,vars:19,consts:[["nz-form","",3,"formGroup","ngSubmit"],["nzFor","userName","nzRequired","","nzTooltipTitle","What do you want other to call you",3,"nzSpan"],["nzErrorTip","Enter UserName!",3,"nzSm","nzXs","nzValidateStatus"],["nz-input","","autocomplete","off","id","userName","formControlName","userName"],["nzRequired","","nzFor","email",3,"nzSpan"],["nzErrorTip","Invalid E-mail!",3,"nzSm","nzXs"],["nz-input","","autocomplete","off","formControlName","email","id","email"],["nzFor","phoneNumber",3,"nzSpan"],["nzErrorTip","Please input your phone number!",3,"nzSm","nzXs","nzValidateStatus"],["autocomplete","off","formControlName","phoneNumber","id","'phoneNumber'","nz-input",""],["nzErrorTip","Invalid Role!",3,"nzSm","nzXs"],["formControlName","role","nzButtonStyle","solid"],["nz-radio-button","",3,"nzValue",4,"ngFor","ngForOf"],[3,"nzOffset","nzSpan"],["nz-button","","nzType","primary",3,"disabled"],["nz-radio-button","",3,"nzValue"]],template:function(e,t){1&e&&(n.TgZ(0,"form",0),n.NdJ("ngSubmit",function(){return t.submitForm()}),n.TgZ(1,"nz-form-item")(2,"nz-form-label",1)(3,"span"),n._uU(4,"Full Name"),n.qZA()(),n.TgZ(5,"nz-form-control",2),n._UZ(6,"input",3),n.qZA()(),n.TgZ(7,"nz-form-item")(8,"nz-form-label",4),n._uU(9,"E-mail"),n.qZA(),n.TgZ(10,"nz-form-control",5),n._UZ(11,"input",6),n.qZA()(),n.TgZ(12,"nz-form-item")(13,"nz-form-label",7),n._uU(14,"Phone Number"),n.qZA(),n.TgZ(15,"nz-form-control",8)(16,"nz-input-group"),n._UZ(17,"input",9),n.qZA()()(),n.TgZ(18,"nz-form-item")(19,"nz-form-label",4),n._uU(20,"Role"),n.qZA(),n.TgZ(21,"nz-form-control",10)(22,"nz-radio-group",11),n.YNc(23,V,2,2,"label",12),n.qZA()()(),n.TgZ(24,"nz-form-item")(25,"nz-form-control",13)(26,"button",14),n._uU(27,"Submit"),n.qZA()()()()),2&e&&(n.Q6J("formGroup",t.addUserForm),n.xp6(2),n.Q6J("nzSpan",7),n.xp6(3),n.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",t.f.userName),n.xp6(3),n.Q6J("nzSpan",7),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSpan",7),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",t.f.phoneNumber),n.xp6(4),n.Q6J("nzSpan",7),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",t.roles),n.xp6(2),n.Q6J("nzOffset",7)("nzSpan",12),n.xp6(1),n.Q6J("disabled",!t.addUserForm.valid))},dependencies:[u.sg,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,c.t3,c.SK,h.ix,f.w,_.dQ,S.Zp,S.gB,z.Lr,z.Nx,z.iK,z.Fd,y.Of,y.Bq,y.Dg],styles:[".phone-select[_ngcontent-%COMP%]{width:70px}"]}),o})();function j(o,a){1&o&&n._UZ(0,"nz-skeleton")}const B=function(o){return{width:o}};function K(o,a){if(1&o){const e=n.EpF();n.TgZ(0,"th",13),n.NdJ("nzSortOrderChange",function(i){const m=n.CHM(e).$implicit;return n.KtG(m.sortOrder=i)}),n._uU(1),n.qZA()}if(2&o){const e=a.$implicit;n.Q6J("nzSortOrder",e.sortOrder)("ngStyle",n.VKq(6,B,null==e?null:e.width))("nzSortFn",e.sortFn)("nzFilters",e.listOfFilter)("nzFilterFn",e.filterFn),n.xp6(1),n.hij(" ",e.name," ")}}function X(o,a){if(1&o&&n._UZ(0,"nz-avatar",15),2&o){const e=a.$implicit;n.s9C("nzTooltipTitle",e),n.s9C("nzText",e),n.Q6J("code",e)}}function R(o,a){if(1&o&&(n.TgZ(0,"tr")(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA(),n.TgZ(9,"td"),n._uU(10),n.qZA(),n.TgZ(11,"td")(12,"nz-avatar-group"),n.YNc(13,X,1,3,"nz-avatar",14),n.qZA()(),n.TgZ(14,"td"),n._uU(15),n.ALo(16,"date"),n.qZA()()),2&o){const e=a.$implicit,t=a.index;n.xp6(2),n.Oqu(t+1),n.xp6(2),n.Oqu(e.userName),n.xp6(2),n.Oqu(e.email),n.xp6(2),n.Oqu(e.mobileNo),n.xp6(2),n.Oqu(e.role),n.xp6(3),n.Q6J("ngForOf",null==e?null:e.languageTags),n.xp6(2),n.Oqu(n.lcZ(16,7,null==e?null:e.createdAt))}}function G(o,a){1&o&&(n.ynx(0),n._UZ(1,"app-add-user"),n.BQk())}const $=function(){return{x:"1200px",y:"500px"}};const H=[{path:"",canActivate:[p.a1],component:U,children:[{path:"",component:Q},{path:"users",component:(()=>{class o{constructor(e,t){this.userService=e,this.commonService=t,this.apiCalling=!1,this.addUser=!1,this.users=[],this.userColumns=[]}ngOnInit(){this.resetFilter(),this.getUsers(),this.setFilter()}resetFilter(){}ngAfterViewInit(){this.subscribedData()}subscribedData(){this.userService.getUserSubject().subscribe(e=>{"close-add-user"===e.action&&(this.close(),this.getUsers())})}getUsers(){this.apiCalling=!this.apiCalling,this.userService.getUsers().subscribe(e=>{this.apiCalling=!this.apiCalling,e?.statusCode?this.users=e?.data:this.commonService.showNotification(e?.message,"danger")})}setFilter(){this.userColumns=[{name:"Sr"},{name:"Name",sortFn:(e,t)=>e.userName.localeCompare(t.userName)},{name:"Email"},{name:"MobileNo"},{name:"Role"},{name:"Language"},{name:"Created At",sortFn:(e,t)=>e.createdAt.localeCompare(t.createdAt),sortOrder:null}]}open(){this.addUser=!0}close(){this.addUser=!1}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(p.KD),n.Y36(p.v_))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-users"]],decls:19,vars:11,consts:[["nz-row","","nzAlign","middle",1,"inner-content"],["nz-col","",3,"nzSpan"],["nz-typography",""],["nz-row","","nzJustify","end","nzAlign","middle"],["nz-tooltip","","nzTooltipTitle","Add User","nz-button","","nzType","primary","nzShape","round",3,"nzSize","click"],["nz-icon","","nzType","user-add"],[4,"ngIf"],["nzSize","middle",3,"nzData","nzPageSize","nzScroll"],["usersTable",""],[3,"nzSortOrder","ngStyle","nzSortFn","nzFilters","nzFilterFn","nzSortOrderChange",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["nzSize","large","nzPlacement","right","nzTitle","Add User",1,"add-candidate-drawer",3,"nzClosable","nzVisible","nzOnClose"],[4,"nzDrawerContent"],[3,"nzSortOrder","ngStyle","nzSortFn","nzFilters","nzFilterFn","nzSortOrderChange"],["style","background-color: #87d068","nz-tooltip","","appCodeHex","",3,"nzTooltipTitle","nzText","code",4,"ngFor","ngForOf"],["nz-tooltip","","appCodeHex","",2,"background-color","#87d068",3,"nzTooltipTitle","nzText","code"]],template:function(e,t){if(1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),n._uU(3,"All User's"),n.qZA(),n.TgZ(4,"nz-card")(5,"div",3)(6,"button",4),n.NdJ("click",function(){return t.open()}),n._UZ(7,"span",5),n._uU(8," Add "),n.qZA()(),n.YNc(9,j,1,0,"nz-skeleton",6),n.TgZ(10,"nz-table",7,8)(12,"thead")(13,"tr"),n.YNc(14,K,2,8,"th",9),n.qZA()(),n.TgZ(15,"tbody"),n.YNc(16,R,17,9,"tr",10),n.qZA()()()()(),n.TgZ(17,"nz-drawer",11),n.NdJ("nzOnClose",function(){return t.close()}),n.YNc(18,G,2,0,"ng-container",12),n.qZA()),2&e){const i=n.MAs(11);n.xp6(1),n.Q6J("nzSpan",24),n.xp6(5),n.Q6J("nzSize","small"),n.xp6(3),n.Q6J("ngIf",t.apiCalling),n.xp6(1),n.Q6J("nzData",t.users)("nzPageSize",20)("nzScroll",n.DdM(10,$)),n.xp6(4),n.Q6J("ngForOf",t.userColumns),n.xp6(2),n.Q6J("ngForOf",i.data),n.xp6(1),n.Q6J("nzClosable",!1)("nzVisible",t.addUser)}},dependencies:[u.sg,u.O5,u.PC,b.Ls,c.t3,c.SK,h.ix,f.w,_.dQ,x.bd,d.N8,d.qD,d.Uo,d._C,d.Om,d.p0,d.$Z,T.Vz,T.SQ,w.Dz,w.ZM,v.SY,N.ZU,O.ng,D.l,L,u.uU]}),o})()}]}];let W=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[g.Bz.forChild(H),g.Bz]}),o})(),nn=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.ez,p.m8,W]}),o})()}}]);