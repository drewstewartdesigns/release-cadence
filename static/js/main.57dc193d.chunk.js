(this["webpackJsonprelease-cadence"]=this["webpackJsonprelease-cadence"]||[]).push([[0],[,,,,,,,,,function(e,a,n){e.exports=n(22)},,,,,function(e,a,n){},,function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){},function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(3),s=n.n(l),r=(n(14),n(4)),i=n(5),o=n(7),d=n(6),m=n(8),u=n(1),f=n.n(u),v=[{name:"Week 1",id:1,days:[{id:1},{id:2},{id:3,details:"Small Feature Cutoff",class:"sf-cutoff"},{id:4},{id:5}]},{name:"Week 2",id:2,days:[{id:1,details:"Bugfix Cutoff",class:"bf-cutoff"},{id:2},{id:3},{id:4,details:"Large Feature Cutoff",class:"lf-cutoff"},{id:5,details:"Release Day",class:"release-day"}]}],h=[{name:"Cert Branch",class:"cert-container",id:1,branches:[{name:"Develop",id:1,class:"develop"},{name:"Release",id:2,class:"release"},{name:"Develop",id:3,class:"develop"}],actions:[{class:"develop",id:1,branch:[{name:"Development",class:"action",id:1}]},{class:"release",id:2,branch:[{name:"Go Live State Regression",class:"action regression",id:1},{name:"All Defects",class:"action defects",id:2},{name:"Blockers Only",class:"action blockers",id:3}]},{class:"develop",id:3,branch:[{name:"Development",class:"action",id:1}]}]}],p=(n(16),f()("2020-01-02")),E=f()(),y=Math.abs(p.week()-E.week()),b=E.clone().day(2);y%2>0&&b.day(-5);var k=null,N=0,w=function(e){return c.a.createElement("div",{className:"day-list"},e.days.map((function(e,a){return function(e){var a=b.clone(),n="";null!==k&&(a=k.clone()),a.add(1,"d"),"sat"===a.format("ddd").toLowerCase()&&a.add(2,"d"),E.isSame(a)&&(n="active");var t=c.a.createElement("div",{className:"day-container",key:e.id},n.length>0&&c.a.createElement("div",{className:"active-column","data-col-position":N+1}),c.a.createElement("div",{className:"day-details "+(e.details?e.class:"")+n},e.details&&c.a.createElement("p",null,e.details)),c.a.createElement("div",{className:"day-number "+n},a.format("MMM Do")),c.a.createElement("div",{className:"day-name "+n},a.format("dddd")));return k=a.clone(),N++,t}(e)})))},g=(n(17),function(e){return c.a.createElement("div",{className:"week-list"},e.weeks.map((function(e){return c.a.createElement("div",{className:"week-container",key:e.id},c.a.createElement("p",null,e.name),c.a.createElement(w,{days:e.days}))})))}),C=(n(18),function(e){return c.a.createElement("div",{className:"branch-container"},e.branches.map((function(e){return c.a.createElement("div",{key:e.id,className:"branch-"+e.class},c.a.createElement("div",{className:e.class},c.a.createElement("p",null,"CERT is building the ",e.name," branch")))})))}),D=(n(19),function(e){return c.a.createElement("div",{className:"action-container"},e.actions.map((function(e){return c.a.createElement("div",{className:"action-wrapper-"+e.class,key:e.id},function(e){var a=e.branch.map((function(e){return c.a.createElement("div",{className:e.class,key:e.id},c.a.createElement("p",null,e.name))}));return e.branch.length>1&&(a=c.a.createElement("div",{className:"nested-action"},a)),a}(e))})))}),O=(n(20),function(e){return c.a.createElement(c.a.Fragment,null,e.cadence.map((function(e){return c.a.createElement("div",{className:e.class,key:e.id},c.a.createElement("div",{className:"cert-branch"},c.a.createElement(C,{branches:e.branches})),c.a.createElement(D,{actions:e.actions}))})))}),W=(n(21),function(e){function a(){var e;return Object(r.a)(this,a),(e=Object(o.a)(this,Object(d.a)(a).call(this))).state={currentDate:f()()},e}return Object(m.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.intervalId=setInterval((function(){return window.location.reload()}),216e5)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"WCS Release Cadence")),c.a.createElement(g,{weeks:v}),c.a.createElement(O,{cadence:h}))}}]),a}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.57dc193d.chunk.js.map