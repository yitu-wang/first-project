"use strict";(self["webpackChunkhmtt"]=self["webpackChunkhmtt"]||[]).push([[438],{5559:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"box"},[a("van-nav-bar",{attrs:{title:"论坛头条—登录"}}),a("van-cell-group",[a("van-field",{attrs:{required:"",clearable:"",label:"手机号",placeholder:"请输入手机号",error:e.flag},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}}),a("van-field",{attrs:{type:"password",label:"密码",placeholder:"请输入密码",required:""},on:{blur:e.leave},model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}})],1),a("van-button",{staticStyle:{"margin-top":"16px",height:"40px"},attrs:{round:"",type:"primary",loading:e.flag1,disabled:e.flag1},on:{click:e.onSubmit}},[e._v("登录")])],1)},l=[],n=a(7673),o=a(6198),s=(a(4916),a(5306),a(7042),a(693)),u=a(7758),c=a(4224),i={name:"login",data:function(){return{user:{mobile:"13812345678",code:"246810"},flag:!1,flag1:!1}},methods:{leave:function(){11===this.user.mobile.length&&246810==this.user.code?this.flag=!1:this.flag=!0},onSubmit:function(){var e=this;return(0,o.Z)((0,n.Z)().mark((function t(){var a,r;return(0,n.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.flag1=!0,t.prev=1,t.next=4,(0,s.UO)(e.user);case 4:a=t.sent,(0,c.o4)(a.data.data.token),localStorage.setItem("refresh_token",a.data.data.refresh_token),void 0===localStorage.getItem("hash")?e.$router.replace("/layout/home"):(r=localStorage.getItem("hash"),r=r.slice(1),e.$router.push(r)),localStorage.removeItem("hash"),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),(0,u.Z)("账号或密码错误");case 14:e.flag1=!1;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}}},h=i,d=a(1001),f=(0,d.Z)(h,r,l,!1,null,"0b5e1a49",null),m=f.exports}}]);
//# sourceMappingURL=Login-legacy.2a074eb1.js.map