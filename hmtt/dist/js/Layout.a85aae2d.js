(self["webpackChunkhmtt"]=self["webpackChunkhmtt"]||[]).push([[496],{791:function(t,e,n){"use strict";n.d(e,{Z:function(){return m}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-cell",{scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"title-box"},[n("span",[t._v(t._s(t.article.title))]),1===t.article.cover.type?n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.article.cover.images[0],expression:"article.cover.images[0]"}],staticClass:"thumb",attrs:{alt:""}}):t._e()]),3===t.article.cover.type?n("div",{staticClass:"thumb-box"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.article.cover.images[0],expression:"article.cover.images[0]"}],staticClass:"thumb",attrs:{alt:""}}),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.article.cover.images[1],expression:"article.cover.images[1]"}],staticClass:"thumb",attrs:{alt:""}}),n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.article.cover.images[2],expression:"article.cover.images[2]"}],staticClass:"thumb",attrs:{alt:""}})]):t._e()]},proxy:!0},{key:"label",fn:function(){return[n("div",{staticClass:"label-box"},[n("span",[t._v(t._s(t.article.aut_name)+"    "+t._s(t.article.comm_count)+"评论    发布日期 "+t._s(t.formatTime(t.article.pubdate)))]),t.isShow?n("van-icon",{attrs:{name:"cross"},on:{click:function(e){e.stopPropagation(),t.show=!0}}}):t._e()],1)]},proxy:!0}])}),n("van-action-sheet",{attrs:{actions:t.actions,"cancel-text":t.bottomText},on:{select:t.onSelect,cancel:t.onCancel,close:t.closeFn},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},s=[];const a=[{name:"不感兴趣"},{name:"反馈垃圾内容"}],r=[{value:0,name:"其他问题"},{value:1,name:"标题夸张"},{value:2,name:"低俗色情"},{value:3,name:"错别字多"},{value:4,name:"就问重复"},{value:6,name:"内容不实"},{value:8,name:"侵权"},{value:5,name:"广告"},{value:7,name:"涉嫌违法"}];var o=n(1709),c=n(693),l=n(7758),u={props:{article:[],isShow:{default:!0,type:Boolean}},data(){return{bottomText:"取消",formatTime:o.S,show:!1,actions:[{name:"不感兴趣"},{name:"反馈垃圾信息"}]}},methods:{async onSelect(t){if("反馈垃圾信息"===t.name)this.actions=r,this.bottomText="返回";else if("不感兴趣"===t.name){await(0,c.AJ)(this.article.art_id);this.show=!1,(0,l.Z)({message:"反馈成功",background:"#57ff5d"})}else{const e=await(0,c.sk)({artId:this.article.art_id,type:t.value});console.log(e),this.show=!1,(0,l.Z)({message:"反馈成功",background:"#57ff5d"})}},onCancel(){"返回"===this.bottomText?(this.show=!0,this.actions=a,this.bottomText="取消"):this.show=!1},closeFn(){this.actions=a}}},h=u,d=n(1001),f=(0,d.Z)(h,i,s,!1,null,"1f8d964d",null),m=f.exports},3461:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return l}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("keep-alive",[n("router-view")],1),n("van-tabbar",{attrs:{route:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"home-o",to:"/layout/home"}},[t._v("首页")]),n("van-tabbar-item",{attrs:{icon:"setting-o",to:"/layout/user"}},[t._v("我的")])],1)],1)},s=[],a={name:"layout",data(){return{active:0}}},r=a,o=n(1001),c=(0,o.Z)(r,i,s,!1,null,null,null),l=c.exports},4401:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return M}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box",staticStyle:{"padding-bottom":"44px"}},[n("div",[n("van-nav-bar",{staticStyle:{"background-color":"#007bff"},attrs:{fixed:""}},[n("template",{staticClass:"text",slot:"left"},[t._v(" 论坛头条 ")]),n("van-icon",{attrs:{slot:"right",name:"search",color:"#ffffff"},on:{click:function(e){return t.$router.push("/search")}},slot:"right"})],2)],1),n("div",{staticClass:"main"},[n("van-tabs",{attrs:{sticky:"","offset-top":"44px"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.userList,(function(t,e){return n("van-tab",{key:t.id,attrs:{title:t.name,name:t.id}},[n("ArticleList",{staticStyle:{"margin-top":"44px"},attrs:{articleListID:t.id}})],1)})),1),n("van-icon",{staticClass:"moreChannels",attrs:{name:"plus",size:"14px"},on:{click:t.showPopup}})],1),n("van-popup",{staticClass:"popup",model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("ChannelIEdit",{attrs:{userList:t.userList,unCheckList:t.unCheckList},on:{addChannelEV:t.addChannelFn,channelShow:t.channelShow,removeChannelEV:t.removeChannelFn},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}})],1)],1)},s=[],a=n(693),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1,offset:"50"},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.articleList,(function(e){return n("item",{key:e.art_id,attrs:{article:e},nativeOn:{click:function(n){return t.$router.push("/detail?art_id="+e.art_id)}}})})),1)],1)],1)},o=[],c=n(791),l={components:{item:c.Z},props:{articleListID:Number},created(){this.getArticleList()},data(){return{articleList:[],loading:!1,finished:!1,theTime:(new Date).getTime(),isLoading:!1}},methods:{async getArticleList(){const{data:t}=await(0,a.Us)({channel_id:this.articleListID,timestamp:this.theTime});this.articleList=[...this.articleList,...t.data.results],this.theTime=t.data.pre_timestamp,this.loading=!1,this.isLoading=!1,null!==t.data.pre_timestamp||(this.finished=!0)},onLoad(){0!==this.articleList.length?this.getArticleList():this.loading=!1},async onRefresh(){this.articleList=[],this.getArticleList(),this.$toast("刷新成功")}}},u=l,h=n(1001),d=(0,h.Z)(u,r,o,!1,null,null,null),f=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"挑选频道","right-text":"X"},on:{"click-right":t.onClickRight}}),n("div",{staticClass:"my"},[n("van-cell",{attrs:{title:"我的频道",value:t.titleText},on:{click:t.checkText}}),t._l(t.userList,(function(e){return n("van-button",{key:e.id,attrs:{type:"default"},on:{click:function(n){return t.userDeChannel(e)}}},[t._v(t._s(e.name)+" "),n("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.iconShow&&0!==e.id,expression:"iconShow && item.id !== 0"}],attrs:{name:"cross"}})],1)}))],2),n("div",{staticClass:"more"},[n("van-cell",{attrs:{title:"点击添加更多频道"}}),t._l(t.unCheckList,(function(e){return n("van-button",{key:e.id,attrs:{type:"default"},on:{click:function(n){return t.moreFn(e)}}},[t._v(" "+t._s(e.name)+" ")])}))],2)],1)},v=[],p={name:"channeliedit",data(){return{iconShow:!1,titleText:"编辑"}},methods:{onClickRight(){this.iconShow=!1,this.titleText="编辑",this.$emit("channelShow",!1)},checkText(){this.iconShow?(this.iconShow=!1,this.titleText="编辑"):(this.iconShow=!0,this.titleText="完成")},moreFn(t){this.iconShow&&this.$emit("addChannelEV",t)},userDeChannel(t){!0===this.iconShow?0!==t.id&&this.$emit("removeChannelEV",t.id):!1===this.iconShow&&(this.$emit("channelShow",!1),this.$emit("input",t.id))}},props:{userList:Array,unCheckList:Array}},_=p,$=(0,h.Z)(_,m,v,!1,null,"14e8c2c6",null),y=$.exports,w={name:"home",data(){return{active:0,userList:[],allList:[],show:!1}},async created(){const{data:t}=await(0,a.lS)();this.userList=t.data.channels;const{data:e}=await(0,a.Of)();this.allList=e.data.channels},components:{ArticleList:f,ChannelIEdit:y},mounted(){window.addEventListener("scroll",this.scrollListen)},methods:{scrollListen(){this.$route.meta.scrollT=document.documentElement&&document.documentElement.scrollTop},showPopup(){this.show=!0},async addChannelFn(t){this.userList.push(t);const e=this.userList.filter((t=>0!==t.id));await(0,a.w0)(e)},async removeChannelFn(t){const e=this.userList.findIndex((e=>e.id===t));this.userList.splice(e,1);await(0,a.Mz)({channelID:t});this.active=t},channelShow(t){this.show=t}},computed:{unCheckList(){const t=this.allList.filter((t=>{const e=this.userList.some((e=>e.id===t.id));return!e}));return t}},deactivated(){window.removeEventListener("scroll",this.scrollListen)},activated(){this.$route.meta.scrollT>0&&(window.scrollTo(0,this.$route.meta.scrollT),this.$route.meta.scrollT=0,window.addEventListener("scroll",this.scrollListen))}},g=w,L=(0,h.Z)(g,i,s,!1,null,"62641cfa",null),M=L.exports},3084:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"top"},[n("div",{staticClass:"user"},[n("img",{attrs:{src:t.userphoto,alt:""}}),n("div",{staticClass:"user-name"},[n("span",[t._v(t._s(t.username))]),n("button",[t._v("申请认证")])])]),n("div",{staticClass:"top-bot"},[n("ul",[n("li",[n("p",[t._v(t._s(t.user.art_count))]),n("p",[t._v("动态")])]),n("li",[n("p",[t._v(t._s(t.user.follow_count))]),n("p",[t._v("关注")])]),n("li",[n("p",[t._v(t._s(t.user.fans_count))]),n("p",[t._v("粉丝")])])])])]),n("div",{staticClass:"bottom"},[n("div",{on:{click:function(e){return t.$router.push("/edit")}}},[n("van-nav-bar",[n("van-icon",{attrs:{slot:"left",name:"edit"},slot:"left"},[t._v(" 编辑资料")]),n("van-icon",{attrs:{slot:"right",name:"arrow"},slot:"right"})],1)],1),n("div",{on:{click:function(e){return t.$router.push("/chat")}}},[n("van-nav-bar",[n("van-icon",{attrs:{slot:"left",name:"chat-o"},slot:"left"},[t._v(" 小思同学")]),n("van-icon",{attrs:{slot:"right",name:"arrow"},slot:"right"})],1)],1),n("div",{on:{click:t.quitFn}},[n("van-nav-bar",[n("van-icon",{attrs:{slot:"left",name:"warning-o"},slot:"left"},[t._v(" 退出登录")]),n("van-icon",{attrs:{slot:"right",name:"arrow"},slot:"right"})],1)],1)])])},s=[],a=n(7906),r=n(693),o=n(629),c={name:"user",data(){return{user:{}}},async activated(){const t=await(0,r._q)();this.user=t.data.data,this.set_userphoto(this.user.photo),this.set_username(this.user.name)},methods:{...(0,o.OI)(["set_userphoto","set_username"]),quitFn(){a.Z.confirm({title:"提示",message:"确定要退出登陆吗"}).then((()=>{localStorage.clear(),this.set_username(""),this.$router.replace("/layout/home")})).catch((()=>{}))}},computed:{...(0,o.rn)(["userphoto","username"])}},l=c,u=n(1001),h=(0,u.Z)(l,i,s,!1,null,"8d6dec80",null),d=h.exports},7484:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",s="second",a="minute",r="hour",o="day",c="week",l="month",u="quarter",h="year",d="date",f="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},_=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},$={s:_,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+_(i,2,"0")+":"+_(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,l),a=n-s<0,r=e.clone().add(i+(a?-1:1),l);return+(-(i+(n-s)/(a?s-r:r-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:h,w:c,d:o,D:d,h:r,m:a,s:s,ms:i,Q:u}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",w={};w[y]=p;var g=function(t){return t instanceof b},L=function t(e,n,i){var s;if(!e)return y;if("string"==typeof e){var a=e.toLowerCase();w[a]&&(s=a),n&&(w[a]=n,s=a);var r=e.split("-");if(!s&&r.length>1)return t(r[0])}else{var o=e.name;w[o]=e,s=o}return!i&&s&&(y=s),s||!i&&y},M=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new b(n)},S=$;S.l=L,S.i=g,S.w=function(t,e){return M(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function p(t){this.$L=L(t.locale,null,!0),this.parse(t)}var _=p.prototype;return _.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var s=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},_.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},_.$utils=function(){return S},_.isValid=function(){return!(this.$d.toString()===f)},_.isSame=function(t,e){var n=M(t);return this.startOf(e)<=n&&n<=this.endOf(e)},_.isAfter=function(t,e){return M(t)<this.startOf(e)},_.isBefore=function(t,e){return this.endOf(e)<M(t)},_.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(t,e){var n=this,i=!!S.u(e)||e,u=S.p(t),f=function(t,e){var s=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?s:s.endOf(o)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},v=this.$W,p=this.$M,_=this.$D,$="set"+(this.$u?"UTC":"");switch(u){case h:return i?f(1,0):f(31,11);case l:return i?f(1,p):f(0,p+1);case c:var y=this.$locale().weekStart||0,w=(v<y?v+7:v)-y;return f(i?_-w:_+(6-w),p);case o:case d:return m($+"Hours",0);case r:return m($+"Minutes",1);case a:return m($+"Seconds",2);case s:return m($+"Milliseconds",3);default:return this.clone()}},_.endOf=function(t){return this.startOf(t,!1)},_.$set=function(t,e){var n,c=S.p(t),u="set"+(this.$u?"UTC":""),f=(n={},n[o]=u+"Date",n[d]=u+"Date",n[l]=u+"Month",n[h]=u+"FullYear",n[r]=u+"Hours",n[a]=u+"Minutes",n[s]=u+"Seconds",n[i]=u+"Milliseconds",n)[c],m=c===o?this.$D+(e-this.$W):e;if(c===l||c===h){var v=this.clone().set(d,1);v.$d[f](m),v.init(),this.$d=v.set(d,Math.min(this.$D,v.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},_.set=function(t,e){return this.clone().$set(t,e)},_.get=function(t){return this[S.p(t)]()},_.add=function(i,u){var d,f=this;i=Number(i);var m=S.p(u),v=function(t){var e=M(f);return S.w(e.date(e.date()+Math.round(t*i)),f)};if(m===l)return this.set(l,this.$M+i);if(m===h)return this.set(h,this.$y+i);if(m===o)return v(1);if(m===c)return v(7);var p=(d={},d[a]=e,d[r]=n,d[s]=t,d)[m]||1,_=this.$d.getTime()+i*p;return S.w(_,this)},_.subtract=function(t,e){return this.add(-1*t,e)},_.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||f;var i=t||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),a=this.$H,r=this.$m,o=this.$M,c=n.weekdays,l=n.months,u=function(t,n,s,a){return t&&(t[n]||t(e,i))||s[n].slice(0,a)},h=function(t){return S.s(a%12||12,t,"0")},d=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:S.s(o+1,2,"0"),MMM:u(n.monthsShort,o,l,3),MMMM:u(l,o),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,c,2),ddd:u(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(a),HH:S.s(a,2,"0"),h:h(1),hh:h(2),a:d(a,r,!0),A:d(a,r,!1),m:String(r),mm:S.s(r,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:s};return i.replace(v,(function(t,e){return e||m[t]||s.replace(":","")}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(i,d,f){var m,v=S.p(d),p=M(i),_=(p.utcOffset()-this.utcOffset())*e,$=this-p,y=S.m(this,p);return y=(m={},m[h]=y/12,m[l]=y,m[u]=y/3,m[c]=($-_)/6048e5,m[o]=($-_)/864e5,m[r]=$/n,m[a]=$/e,m[s]=$/t,m)[v]||$,f?y:S.a(y)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return w[this.$L]},_.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=L(t,e,!0);return i&&(n.$L=i),n},_.clone=function(){return S.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},p}(),x=b.prototype;return M.prototype=x,[["$ms",i],["$s",s],["$m",a],["$H",r],["$W",o],["$M",l],["$y",h],["$D",d]].forEach((function(t){x[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),M.extend=function(t,e){return t.$i||(t(e,b,M),t.$i=!0),M},M.locale=L,M.isDayjs=g,M.unix=function(t){return M(1e3*t)},M.en=w[y],M.Ls=w,M.p={},M}))},2009:function(t,e,n){!function(e,i){t.exports=i(n(7484))}(0,(function(t){"use strict";function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t),i={name:"zh",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,e){return"W"===e?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s后",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,e){var n=100*t+e;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return n.default.locale(i,null,!0),i}))},4110:function(t){!function(e,n){t.exports=n()}(0,(function(){"use strict";return function(t,e,n){t=t||{};var i=e.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(t,e,n,s){return i.fromToBase(t,e,n,s)}n.en.relativeTime=s,i.fromToBase=function(e,i,a,r,o){for(var c,l,u,h=a.$locale().relativeTime||s,d=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],f=d.length,m=0;m<f;m+=1){var v=d[m];v.d&&(c=r?n(e).diff(a,v.d,!0):a.diff(e,v.d,!0));var p=(t.rounding||Math.round)(Math.abs(c));if(u=c>0,p<=v.r||!v.r){p<=1&&m>0&&(v=d[m-1]);var _=h[v.l];o&&(p=o(""+p)),l="string"==typeof _?_.replace("%d",p):_(p,i,v.l,u);break}}if(i)return l;var $=u?h.future:h.past;return"function"==typeof $?$(l):$.replace("%s",l)},i.to=function(t,e){return a(t,e,this,!0)},i.from=function(t,e){return a(t,e,this)};var r=function(t){return t.$u?n.utc():n()};i.toNow=function(t){return this.to(r(this),t)},i.fromNow=function(t){return this.from(r(this),t)}}}))},1709:function(t,e,n){"use strict";n.d(e,{S:function(){return o}});var i=n(7484),s=n.n(i),a=n(4110),r=n.n(a);n(2009);const o=t=>{s().extend(r()),s().locale("zh");var e=s()(),n=s()(t);return e.to(n)}}}]);
//# sourceMappingURL=Layout.a85aae2d.js.map