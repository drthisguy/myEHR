(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/Logo.dfab9e19.png"},39:function(e,a,t){e.exports=t(73)},44:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(32),c=t.n(r),s=(t(44),t(2)),o=t(12),m=function(e){var a=e.classes,t=e.children;return l.a.createElement("div",{className:"container ".concat(a)},t)},i=function(e){var a=e.classes,t=e.children;return l.a.createElement("div",{className:"row ".concat(a)},t)},u=function(e){var a=e.size,t=e.classes,n=e.children;return l.a.createElement("div",{className:a.split(" ").map(function(e){return"col-".concat(e)}).join(" ")+" "+t},n)},d=function(e){var a=e.navState,t=e.children,n=e.id,r=a?"navbar-collapse collapse show":"navbar-collapse collapse";return l.a.createElement("div",{className:r,id:n},t)};function E(e){return l.a.createElement("input",Object.assign({className:"form-control"},e))}function f(e){return l.a.createElement("textarea",Object.assign({className:"form-control"},e))}function g(e){return l.a.createElement("button",e,e.children)}function p(e){var a=e.btnType;return l.a.createElement(g,{className:"btn btn-primary btn-lg btn-block",type:"submit"},a)}function b(){return l.a.createElement(m,null,l.a.createElement("div",{class:"jumbotron"},l.a.createElement("h1",{class:"display-4"},"My EHR"),l.a.createElement("p",{class:"lead"},"All your medical records in one place."),l.a.createElement("hr",{class:"my-4"}),l.a.createElement("p",null),l.a.createElement("a",{class:"btn btn-primary btn-lg",href:"../SignUp",role:"button"},"Get Started")))}var v,h=t(4),y=t(11),N=t(1),w=t(10),z=t.n(w);t(29).config();var k="f57f85fe-8b49-4bf7-a104-d906698dec04",O=(v={getDrugs:function(){return z.a.get("/api/drugs")},getDrugInfo:function(){return z.a.get("https://www.dictionaryapi.com/api/v3/references/medical/json/cetirizine?key=".concat(k))},getConditionNames:function(e){return z.a.get("https://clinicaltables.nlm.nih.gov/api/conditions/v3/search?terms=".concat(e,"&sf=primary_name,consumer_name&df=primary_name,consumer_name,info_link_data")).catch(function(e){return console.log(e)})},fetchCondition:function(e){return z.a.get("https://www.dictionaryapi.com/api/v3/references/medical/json/".concat(e,"?key=").concat(k)).catch(function(e){return console.log(e)})}},Object(h.a)(v,"fetchCondition",function(e){return z.a.get("https://www.dictionaryapi.com/api/v3/references/medical/json/".concat(e,"?key=").concat(k)).catch(function(e){return console.log(e)})}),Object(h.a)(v,"fetchPatients",function(){return z.a.get("/load")}),Object(h.a)(v,"getUser",function(){return z.a.get("/api/users").then(function(e){return e})}),Object(h.a)(v,"register",function(e){var a=e.email,t=e.password;return z.a.post("api/users/register",{email:a,password:t})}),Object(h.a)(v,"login",function(e){var a=e.email,t=e.password;return z.a.post("/api/users/login",{email:a,password:t})}),v),j=t(33),x=t(34),C=new(function(){function e(){Object(j.a)(this,e),this.authenticated=!1}return Object(x.a)(e,[{key:"login",value:function(e){this.authenticated=!0,e()}},{key:"logout",value:function(e){this.authenticated=!1,e()}},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}());function S(e){var a=Object(o.f)(),r=Object(n.useState)({}),c=Object(N.a)(r,2),d=c[0],f=c[1],g=function(e){console.log(e.target.name);var a=e.target,t=a.name,n=a.value;f(Object(y.a)({},d,Object(h.a)({},t,n)))};return l.a.createElement(m,{classes:"box-shadow sign"},l.a.createElement(i,null,l.a.createElement(u,{size:"md-12"},l.a.createElement(i,null,l.a.createElement("div",{className:"mt-5"},l.a.createElement("h5",{style:P},l.a.createElement("img",{style:A,src:t(31),alt:"Logo"}),"Log-in to your account"))),l.a.createElement(i,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.target.reset(),O.login(d).then(function(e){"success"===e.data.status?C.login(function(){a.push("/profiles")}):console.log("Login failed.  Please try again.")}).catch(function(e){return e})},className:"card-body"},l.a.createElement("div",{className:"form-group usr-inpt"},l.a.createElement("label",null,"Email:"),l.a.createElement("span",{className:"fa fa-user"}),l.a.createElement(E,{onChange:g,name:"email",type:"email",placeholder:"E-mail address"})),l.a.createElement("div",{className:"form-group usr-inpt"},l.a.createElement("label",null,"Password:"),l.a.createElement("span",{className:"fa fa-lock"}),l.a.createElement(E,{onChange:g,name:"password",type:"password",placeholder:"Password"})),l.a.createElement(p,{btnType:"log in"}))),l.a.createElement(i,{classes:"justify-content-center"},l.a.createElement("p",null," New here?",l.a.createElement(s.b,{to:"/signup"}," Sign up."))))))}var A={width:"100px",height:"auto"},P={color:"#a1deb6",textShadow:"1px 1px #000"};function D(){var e=Object(n.useState)({}),a=Object(N.a)(e,2),r=a[0],c=a[1],o=function(e){var a=e.target,t=a.name,n=a.value;c(Object(y.a)({},r,Object(h.a)({},t,n)))};Object(n.useEffect)(function(){d()},[]);var d=function(){O.getUser().then(function(e){return console.log(e.data)})};return l.a.createElement(m,{classes:"box-shadow sign"},l.a.createElement(i,null,l.a.createElement(u,{size:"md-12"},l.a.createElement(i,null,l.a.createElement("div",{className:"mt-5"},l.a.createElement("h5",{style:L},l.a.createElement("img",{style:B,src:t(31),alt:"Logo"}),"Create your account"))),l.a.createElement(i,null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(r),O.register(r).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)})},className:"card-body"},l.a.createElement("div",{className:"form-group usr-inpt"},l.a.createElement("label",null,"Email:"),l.a.createElement("span",{className:"fa fa-user"}),l.a.createElement(E,{onChange:o,name:"email",type:"email",placeholder:"E-mail address"})),l.a.createElement("div",{className:"form-group usr-inpt"},l.a.createElement("label",null,"Password:"),l.a.createElement("span",{className:"fa fa-lock"}),l.a.createElement(E,{onChange:o,name:"password",type:"password",placeholder:"Password"})),l.a.createElement(p,{btnType:"Sign Up"}))),l.a.createElement(i,{classes:"justify-content-center"},l.a.createElement("p",null," Already have an account?",l.a.createElement(s.b,{to:"/SignIn"}," Log In."))))))}var B={width:"100px",height:"auto"},L={color:"#a1deb6",textShadow:"1px 1px #000"},I=t(37),R=t(7),F=t.n(R),T=t(14);function _(e){var a=e.data,t=e.target,n=e.editState,r=e.toggleState,c=e.formSubmit;return n?l.a.createElement("div",{className:"mt-5"},l.a.createElement(u,{size:"md-12"},l.a.createElement(g,{className:"fas fa-backspace fa-2x",style:W,onClick:r})),l.a.createElement("form",{onSubmit:c},l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"First Name"),l.a.createElement(E,{value:a.firstName,name:"firstName",style:Y,onChange:t})),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Last Name"),l.a.createElement(E,{value:a.lastName,name:"lastName",style:Y,onChange:t})),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Nickname"),l.a.createElement(E,{value:a.nickname,name:"nickname",style:Y,placeholder:"e.g. 'Mom'",onChange:t}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Address Line 1"),l.a.createElement(E,{value:a.addressOne,name:"addressOne",style:Y,onChange:t}),"                    "),l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Address Line 2"),l.a.createElement(E,{value:a.addressTwo,name:"addressTwo",style:Y,onChange:t}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"City"),l.a.createElement(E,{value:a.city,name:"city",style:Y,onChange:t})),l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"State/Providence"),l.a.createElement(E,{value:a.state,name:"state",style:Y,onChange:t})),l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"Zip/Postal Code"),l.a.createElement(E,{value:a.zip,name:"zip",style:Y,onChange:t})),l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"Country"),l.a.createElement(E,{value:a.country,name:"country",style:Y,onChange:t}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Phone Number"),l.a.createElement(E,{value:a.phone,name:"phone",style:Y,onChange:t})),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Email"),l.a.createElement(E,{value:a.email,name:"email",style:Y,onChange:t}))),l.a.createElement(u,{size:"md-12"},l.a.createElement(g,{className:"btn",style:H,type:"submit"}," ",l.a.createElement("i",{className:"fas fa-sync-alt fa-2x mr-2"})," "," "," "," update")))):l.a.createElement("div",{className:"mt-5 gen-info"},l.a.createElement(u,{size:"md-12",classes:"gen-edit"},l.a.createElement(g,{className:"fas fa-user-edit fa-2x",style:M,onClick:r})),l.a.createElement("form",null,l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"First Name:"),l.a.createElement("div",{style:U},a.firstName)),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Last Name:"),l.a.createElement("div",{style:U},a.lastName)),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Nickname:"),l.a.createElement("div",{style:U},a.nickname))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Address line 1:"),l.a.createElement("div",{style:U},a.addressOne)),l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Address line 2:"),l.a.createElement("div",{style:U},a.addressTwo))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"City:"),l.a.createElement("div",{style:U},a.city)),l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"State/Providence:"),l.a.createElement("div",{style:U},a.state)),l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"Zip/Postal Code:"),l.a.createElement("div",{style:U},a.zip)),l.a.createElement(u,{size:"md-3",classes:"form-group"},l.a.createElement("label",null,"Country:"),l.a.createElement("div",{style:U},a.country))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Phone Number:"),l.a.createElement("div",{style:U},a.phone)),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Email:"),l.a.createElement("div",{style:U},a.email)))))}var U={fontStyle:"italic",fontWeight:"1000",fontSize:"100%",padding:"10px",paddingLeft:"0",color:"black"},M={float:"right",border:"none",margin:"0",color:"white",backgroundColor:"white"},W={float:"right",border:"none",margin:"0",color:"tomato",backgroundColor:"white"},H={float:"right",margin:"0",backgroundColor:"#214c91",color:"white"},Y={borderBottom:"1px solid rgba(0, 0, 0, .2)",transition:"all 0.30s ease-in-out"};function q(e){var a,t=e.data,n=e.target,r=e.editState,c=e.toggleState,s=e.formSubmit,o=function(e){var a=new Date,t=new Date(e),n=a.getMonth()-t.getMonth(),l=isNaN(l)?"??":a.getFullYear()-t.getFullYear();return n<0||0===n&&a.getDate()<t.getDate()?l-1:l};return r?l.a.createElement("div",{className:"mt-5"},l.a.createElement(u,{size:"md-12"},l.a.createElement(g,{className:"fas fa-backspace fa-2x",style:Z,onClick:c})),l.a.createElement("form",{onSubmit:s},l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Date of Birth"),l.a.createElement(E,{name:"dob",placeholder:"MM/DD/YYYY",value:t.dob,style:$,onChange:n})),l.a.createElement(u,{size:"md-2",classes:"form-group"},l.a.createElement("label",null,"Age"),l.a.createElement("div",{style:G},o("06/12/1929"))),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Blood Type"),l.a.createElement("select",{style:$,name:"bloodType",class:"form-control"},(a=t.bloodType,["Unknown","A-Positive","A-Negative","B-Positive","B-Negative","AB-Positive","AB-Negative","O-Positive","O-Negative"].map(function(e){return e===a?l.a.createElement("option",{selected:!0},a):l.a.createElement("option",null,e)}))))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Insurance Plan"),l.a.createElement(E,{value:t.insurance,name:"insurance",style:$,onChange:n})),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Number"),l.a.createElement(E,{value:t.insNumber,name:"insNumber",style:$,onChange:n})),l.a.createElement(u,{size:"md-2",classes:"form-group"},l.a.createElement("label",null,"Rx BIN"),l.a.createElement(E,{value:t.rxBin,name:"rxBin",style:$,onChange:n})),l.a.createElement(u,{size:"md-2",classes:"form-group"},l.a.createElement("label",null,"Rx PCN"),l.a.createElement(E,{value:t.rxPcn,name:"rcPcn",style:$,onChange:n}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Allergies"),l.a.createElement(f,{value:t.allergies,name:"allergies",style:$,onChange:n})),l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Immunizations (include dates received)"),l.a.createElement(f,{value:t.immunizations,name:"immunizations",style:$,onChange:n}))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Family History & Other Notes"),l.a.createElement(f,{value:t.notes,name:"notes",style:$,onChange:n}))),l.a.createElement(u,{size:"md-12"},l.a.createElement(g,{className:"btn",style:Q,type:"submit"}," ",l.a.createElement("i",{className:"fas fa-sync-alt fa-2x mr-2"})," "," "," "," update")))):l.a.createElement("div",{className:"mt-5 health-info"},l.a.createElement(u,{size:"md-12",classes:"gen-edit"},l.a.createElement(g,{className:"fas fa-user-edit fa-2x",style:J,onClick:c})),l.a.createElement("form",null,l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Date of Birth:"),l.a.createElement("div",{style:G},t.dob)),l.a.createElement(u,{size:"md-2",classes:"form-group"},l.a.createElement("label",null,"Age:"),l.a.createElement("div",{style:G},o(t.dob))),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Blood Type:"),l.a.createElement("div",{style:G},t.bloodType))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Insurance Plan:"),l.a.createElement("div",{style:G},t.insurance)),l.a.createElement(u,{size:"md-4",classes:"form-group"},l.a.createElement("label",null,"Number:"),l.a.createElement("div",{style:G},t.insNumber)),l.a.createElement(u,{size:"md-2",classes:"form-group"},l.a.createElement("label",null,"Rx BIN:"),l.a.createElement("div",{style:G},t.rxBin)),l.a.createElement(u,{size:"md-2",classes:"form-group"},l.a.createElement("label",null,"Rx PCN:"),l.a.createElement("div",{style:G},t.rxPcn))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Allergies:"),l.a.createElement("div",{style:G},t.allergies)),l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Immunizations (include dates received):"),l.a.createElement("div",{style:G},t.immunizations))),l.a.createElement("div",{className:"form-row"},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Family History & Other Notes:"),l.a.createElement("div",{style:G},t.notes)))))}var G={fontStyle:"italic",fontWeight:"1000",fontSize:"100%",padding:"10px",paddingLeft:"0",color:"black"},J={float:"right",border:"none",margin:"0",color:"white",backgroundColor:"white"},Z={float:"right",border:"none",margin:"0",color:"tomato",backgroundColor:"white"},Q={float:"right",margin:"0",backgroundColor:"#214c91",color:"white"},$={borderBottom:"1px solid rgba(0, 0, 0, .2)",transition:"all 0.30s ease-in-out"};function K(e){var a=e.data,t=e.target,n=e.editState,r=e.toggleState,c=e.formSubmit,s=e.renderSuggestions,o=e.text,m=e.toggleDescState,i=e.editDescState;var d=function(e){return e.length>250?e.length/100:3};return!n&&0!==a.length||i?i?l.a.createElement("div",{className:"mt-5"},l.a.createElement(u,{size:"md-12"},l.a.createElement(g,{className:"fas fa-backspace fa-2x",style:ae,onClick:r})),l.a.createElement("form",{onSubmit:c},l.a.createElement("div",{className:"form-row",style:{background:"white"}},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Add New Condition"),l.a.createElement("div",null,l.a.createElement(E,{type:"text",style:X,value:o,onChange:t}),s())),l.a.createElement(u,{size:"md-3"},l.a.createElement(g,{className:"btn",style:te,type:"submit"}," ",l.a.createElement("i",{className:"fa fa-plus fa-2x mr-2"})," "," Add"))),l.a.createElement("div",{className:"form-row"},function(e){var a=this;return console.log(e),e.map(function(e,t){return l.a.createElement(u,{key:t,size:"md-12",classes:"form-group"},l.a.createElement("label",{style:V},e.name," "," ",l.a.createElement(g,{className:"fas fa-pen",style:{border:"none"},onClick:m.bind(a,t)}),l.a.createElement(g,{className:"fas fa-times",style:le,onClick:r}),l.a.createElement(g,{className:"fas fa-sync-alt",style:ne,onClick:r})),l.a.createElement("form",null,l.a.createElement(f,{value:e.description,name:"desc",rows:d(e.description),style:X})))})}(a)))):l.a.createElement("div",{className:"mt-5 condition-info"},l.a.createElement(u,{size:"md-12",classes:"condition-edit"},l.a.createElement(g,{className:"fas fa-user-edit fa-2x",style:ee,onClick:r})),l.a.createElement("form",null,l.a.createElement("div",{className:"form-row"},function(e){return e.map(function(e,a){return l.a.createElement(u,{key:a,size:"md-12",classes:"form-group"},l.a.createElement("label",{style:V},e.name," "),l.a.createElement("div",null,e.description))})}(a)))):l.a.createElement("div",{className:"mt-5"},l.a.createElement(u,{size:"md-12"},l.a.createElement(g,{className:"fas fa-backspace fa-2x",style:ae,onClick:r})),l.a.createElement("form",{onSubmit:c},l.a.createElement("div",{className:"form-row",style:{background:"white"}},l.a.createElement(u,{size:"md-6",classes:"form-group"},l.a.createElement("label",null,"Add New Condition"),l.a.createElement("div",null,l.a.createElement(E,{type:"text",style:X,value:o,onChange:t}),s())),l.a.createElement(u,{size:"md-3"},l.a.createElement(g,{className:"btn",style:te,type:"submit"}," ",l.a.createElement("i",{className:"fa fa-plus fa-2x mr-2"})," "," Add"))),l.a.createElement("div",{className:"form-row"},a.map(function(e,a){return l.a.createElement(u,{key:a,size:"md-12",classes:"form-group"},l.a.createElement("label",{style:V},e.name," "," ",l.a.createElement(g,{className:"fas fa-pen",style:{border:"none"},onClick:m}),l.a.createElement(g,{className:"fas fa-times",style:le,onClick:r})),l.a.createElement("div",null,e.description))}))))}var V={fontStyle:"italic",fontWeight:"1000",fontSize:"100%",padding:"10px",paddingLeft:"0",color:"black"},X={borderBottom:"1px solid rgba(0, 0, 0, .2)",transition:"all 0.30s ease-in-out"},ee={float:"right",border:"none",margin:"0",color:"white",backgroundColor:"white"},ae={float:"right",border:"none",margin:"0",color:"tomato",backgroundColor:"white"},te={marginTop:"30px",color:"#214c91",focus:"none",size:"10em"},ne={border:"none",color:"#214c91"},le={border:"none",color:"red"};function re(e){e.usrId;var a=Object(n.useState)({first_name:"Anne",last_name:"Frank",nickname:"Mrs. Quack",address_one:"555 Somewhere",address_two:"Apt 7",city:"Frankfurt",state:"Darmstadt",zip:"12345",country:"Germany",phone:"(264) 224-1234",email:"quacky123@gmail.com"}),t=Object(N.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)({}),o=Object(N.a)(s,2),d=o[0],E=o[1],f=Object(n.useState)([]),g=Object(N.a)(f,2),p=g[0],b=g[1],v=Object(n.useState)(!1),w=Object(N.a)(v,2),z=w[0],k=w[1],j=Object(n.useState)(!1),x=Object(N.a)(j,2),C=x[0],S=x[1],A=Object(n.useState)(!1),P=Object(N.a)(A,2),D=P[0],B=P[1],L=Object(n.useState)(!1),R=Object(N.a)(L,2),U=R[0],M=R[1],W=Object(n.useState)([]),H=Object(N.a)(W,2),Y=H[0],G=H[1],J=Object(n.useState)(""),Z=Object(N.a)(J,2),Q=(Z[0],Z[1],function(){var e=Object(T.a)(F.a.mark(function e(a){var t,n,l,r;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.target.value,e.next=3,$(t);case 3:n=e.sent,l=[],t.length>0&&(r=new RegExp("^".concat(t),"i"),l=n.sort().filter(function(e){return r.test(e)})),G({suggestions:l,text:t});case 7:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()),$=function(){var e=Object(T.a)(F.a.mark(function e(a){var t,n;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getConditionNames(a);case 2:return t=e.sent,n=t.data,e.abrupt("return",n[3].map(function(e){return e[0]}));case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),V=function(){O.updateEHR().then(function(e){console.log(e)}).catch(function(e){return console.log(e)})},X=function(){var e=Object(T.a)(F.a.mark(function e(a){var t,n,l,r,c,s,o;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),G([]),a.target.reset(),t=Y.text){e.next=6;break}return e.abrupt("return");case 6:return n=t.split("-"),l=Object(N.a)(n,1),r=l[0],e.next=11,O.fetchCondition(r);case 11:c=e.sent,s=c.data,o=s[0].shortdef?s[0].shortdef.join("\n"):"",b([].concat(Object(I.a)(p),[{name:t,description:o}]));case 15:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();function ee(){O.fetchPatients().then(function(e){return console.log(e.data)}).catch(function(e){return console.log(e)})}return Object(n.useEffect)(function(){ee()},[]),l.a.createElement(m,null,l.a.createElement(i,{classes:"my-5"},l.a.createElement(u,{size:"md-8",classes:"offset-md-2"},l.a.createElement(_,{toggleState:function(){return k(!z)},editState:z,data:r,target:function(e){var a=e.target,t=a.name,n=a.value;c(Object(y.a)({},r,Object(h.a)({},t,n))),ee()},formSubmit:V}))),l.a.createElement(i,{classes:"my-5"},l.a.createElement(u,{size:"md-8",classes:"offset-md-2"},l.a.createElement(q,{toggleState:function(){return S(!C)},editState:C,data:d,target:function(e){var a=e.target,t=a.name,n=a.value;E(Object(y.a)({},d,Object(h.a)({},t,n)))},formSubmit:V}))),l.a.createElement(i,{classes:"my-5"},l.a.createElement(u,{size:"md-8",classes:"offset-md-2"},l.a.createElement(K,{toggleState:function(){return B(!D)},editState:D,toggleDescState:function(){return M(!U)},editDescState:U,data:p,target:Q,renderSuggestions:function(){var e=Y.suggestions;if(e&&0!==e.length)return l.a.createElement("ul",null,e.map(function(e,a){return l.a.createElement("li",{onClick:function(){G({suggestions:[],text:e})},key:a},e)}))},text:Y.text,formSubmit:X}))))}t(70);var ce=function(){var e=Object(n.useState)([]),a=Object(N.a)(e,2);return a[0],a[1],Object(n.useEffect)(function(){O.getDrugInfo().then(function(e){return console.log(e.data)}).catch(function(e){return console.log(e)})},[]),l.a.createElement(m,null,l.a.createElement("div",{class:"table-responsive"},l.a.createElement("table",{class:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",{class:"accordion-toggle collapsed",id:"accordion1","data-toggle":"collapse","data-parent":"#accordion1",href:"#collapseOne"},l.a.createElement("td",{class:"expand-button"}),l.a.createElement("td",null,"Amlodipine")),l.a.createElement("tr",{class:"hide-table-padding"},l.a.createElement("td",null),l.a.createElement("td",{colspan:"3"},l.a.createElement("div",{id:"collapseOne",class:"collapse in p-3"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Pill Description"),l.a.createElement("div",{class:"col-6"},"value 1")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Dosage"),l.a.createElement("div",{class:"col-6"},"value 2")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Frequency"),l.a.createElement("div",{class:"col-6"},"value 3")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Reason"),l.a.createElement("div",{class:"col-6"},"value 4")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Pharmacy"),l.a.createElement("div",{class:"col-6"},"value 3"))))),l.a.createElement("tr",{class:"accordion-toggle collapsed",id:"accordion1","data-toggle":"collapse","data-parent":"#accordion1",href:"#collapseOne"},l.a.createElement("td",{class:"expand-button"}),l.a.createElement("td",null,"Metformin")),l.a.createElement("tr",{class:"hide-table-padding"},l.a.createElement("td",null),l.a.createElement("td",{colspan:"3"},l.a.createElement("div",{id:"collapseOne",class:"collapse in p-3"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Drug Code"),l.a.createElement("div",{class:"col-6"},"value 1")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Dosage"),l.a.createElement("div",{class:"col-6"},"value 2")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Frequency"),l.a.createElement("div",{class:"col-6"},"value 3")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Reason"),l.a.createElement("div",{class:"col-6"},"value 4")),l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col-2"},"Pharmacy"),l.a.createElement("div",{class:"col-6"},"value 3")))))))))};function se(e){var a=e.name;return l.a.createElement(s.b,{to:"/ehr",style:{textDecoration:"none"}},l.a.createElement("div",{className:"card box-shadow mt-5"},l.a.createElement("div",{className:"card-body text-center"},l.a.createElement("h2",{className:"card-title"},a),l.a.createElement("p",{className:"card-text"}," Access First_Name's information here"))))}function oe(e){Object(o.f)();var a=Object(n.useState)(),t=Object(N.a)(a,2),r=t[0],c=t[1],s=Object(n.useState)(),d=Object(N.a)(s,2),E=d[0];d[1];Object(n.useEffect)(function(){f()},[]),Object(n.useEffect)(function(){g()},[r]);var f=function(){var e=Object(T.a)(F.a.mark(function e(){var a,t;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getUser();case 2:a=e.sent,t=a.user,c(t);case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(T.a)(F.a.mark(function e(){var a;return F.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(C.isAuthenticated()),e.next=3,O.fetchPatients();case 3:a=e.sent,a.data;case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return l.a.createElement(m,null,l.a.createElement(i,null,l.a.createElement(u,{size:"md-8",classes:"offset-md-2"},l.a.createElement(se,{props:E,name:"User's Name"}),l.a.createElement(se,{name:"First Care Recipient"}),l.a.createElement(se,{name:"Second Care Recipient"}))),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement("button",{type:"button",class:"btn"},"+ patients")))}function me(){var e=Object(o.f)(),a=Object(n.useState)(!1),t=Object(N.a)(a,2),r=t[0],c=t[1],m=function(){C.logout(function(){e.push("/")})},i=Object(o.g)().pathname;return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement(s.b,{to:"/",className:"navbar-brand"},l.a.createElement("em",null,"my"),"EHR"),l.a.createElement("button",{onClick:function(){return c(r=!r)},className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#target-collapse"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(d,{navState:r,id:"target-collapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"},l.a.createElement("li",{className:"/"===i?"nav-item active":"nav-item"},l.a.createElement(s.b,{to:"/",className:"nav-link"},"Home")),l.a.createElement("li",{className:"/profiles"===i?"nav-item active":"nav-item",style:C.isAuthenticated()?{display:"block"}:{display:"none"}},l.a.createElement(s.b,{to:"/profiles",className:"nav-link"},"profiles")),l.a.createElement("li",{className:"/ehr"===i?"nav-item active":"nav-item",style:C.isAuthenticated()?{display:"block"}:{display:"none"}},l.a.createElement(s.b,{to:"/ehr",className:"nav-link"},"health record")),l.a.createElement("li",{className:"/contacts"===i?"nav-item active":"nav-item",style:C.isAuthenticated()?{display:"block"}:{display:"none"}},l.a.createElement(s.b,{to:"/contacts",className:"nav-link"},"contacts"))),C.isAuthenticated()?l.a.createElement(g,{className:"btn btn-outline-primary m-2",type:"button",onClick:m},"Log Out"):l.a.createElement("div",null,l.a.createElement(s.b,{to:"/signin"},l.a.createElement(g,{className:"btn btn-outline-primary m-2",type:"button"},"Log In")),l.a.createElement(s.b,{to:"/signup"},l.a.createElement(g,{className:"btn btn-outline-primary m-2",type:"button"},"Sign Up")))))}var ie=t(38);function ue(e){var a=e.component,t=Object(ie.a)(e,["component"]);return l.a.createElement(o.b,Object.assign({},t,{render:function(e){return C.isAuthenticated()?l.a.createElement(a,e):l.a.createElement(o.a,{to:{pathname:"/",state:{from:e.location}}})}}))}t(71),t(72);var de=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(o.b,{path:"/"},l.a.createElement(me,null)," "),l.a.createElement(o.b,{exact:!0,path:"/"}," ",l.a.createElement(b,null)," "),l.a.createElement(o.b,{exact:!0,path:"/signin"}," ",l.a.createElement(S,null)," "),l.a.createElement(o.b,{exact:!0,path:"/signup"}," ",l.a.createElement(D,null)," "),l.a.createElement(ue,{exact:!0,path:"/profiles",component:oe}),l.a.createElement(ue,{exact:!0,path:"/ehr",component:re}),l.a.createElement(o.b,{exact:!0,path:"/medications"}," ",l.a.createElement(ce,null)," ")))},Ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}t(29).config(),c.a.render(l.a.createElement(de,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Ee?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):fe(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):fe(e)})}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.3fc6d512.chunk.js.map