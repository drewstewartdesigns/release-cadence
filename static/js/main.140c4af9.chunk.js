(this["webpackJsonprelease-cadence"]=this["webpackJsonprelease-cadence"]||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(3),s=t.n(r),i=(t(14),t(4)),l=t(5),o=t(7),d=t(6),m=t(8),u=t(1),f=t.n(u),p=(t(16),f()("2020-02-12")),h=f()(),E=h.diff(p,"days")/7,v=h.clone().day(2),k=Math.round(E%2);1===k?v.day(-5):k>1&&h.day()<=2&&v.day(-12);var y=null,N=0,b=function(e){return c.a.createElement("div",{className:"day-list"},e.days.map((function(e,a){return function(e){var a=v.clone(),t="";null!==y&&(a=y.clone()),a.add(1,"d"),"sat"===a.format("ddd").toLowerCase()&&a.add(2,"d"),h.isSame(a)&&(t="active");var n=c.a.createElement("div",{className:"day-container",key:e.id},t.length>0&&c.a.createElement("div",{className:"active-column","data-col-position":N+1}),c.a.createElement("div",{className:"day-details "+(e.title?e.class:"")+" "+t},e.title&&c.a.createElement("p",null,e.title),e.description&&c.a.createElement("p",{className:"day-description"},e.description)),c.a.createElement("div",{className:"day-number "+t},a.format("MMM Do")),c.a.createElement("div",{className:"day-name "+t},a.format("dddd")));return y=a.clone(),N++,n}(e)})))},w=(t(17),function(e){return c.a.createElement("div",{className:"week-list"},e.weeks.map((function(e){return c.a.createElement("div",{className:"week-container",key:e.id},c.a.createElement("p",null,e.name),c.a.createElement(b,{days:e.days}))})))}),g=(t(18),function(e){return c.a.createElement("div",{className:"branch-container"},e.branches.map((function(e){return c.a.createElement("div",{key:e.id,className:"branch-"+e.class},c.a.createElement("div",{className:e.class},c.a.createElement("p",null,"CERT is building the ",e.name," branch")))})))}),D=(t(19),function(e){return c.a.createElement("div",{className:"action-container"},e.actions.map((function(e){return c.a.createElement("div",{className:"action-wrapper-"+e.class,key:e.id},function(e){var a=e.branch.map((function(e){return c.a.createElement("div",{className:e.class,key:e.id},c.a.createElement("p",null,e.name))}));return e.branch.length>1&&(a=c.a.createElement("div",{className:"nested-action"},a)),a}(e))})))}),j=(t(20),function(e){return c.a.createElement(c.a.Fragment,null,e.cadence.map((function(e){return c.a.createElement("div",{className:e.class,key:e.id},c.a.createElement("div",{className:"cert-branch"},c.a.createElement(g,{branches:e.branches})),c.a.createElement(D,{actions:e.actions}))})))}),I=(t(21),t(22),function(e){return c.a.createElement("li",null,e.quantity," ",e.type)}),M=function(e){return c.a.createElement("div",{className:"drink-wrapper"},e.drinks.map((function(e){return function(e){for(var a=[],t=1;t<=15;)null!==e["strIngredient"+t]&&a.push({type:e["strIngredient"+t],quantity:e["strMeasure"+t]}),t++;return c.a.createElement("div",{className:"drink-container"},c.a.createElement("div",{className:"drink-image"},c.a.createElement("img",{src:e.strDrinkThumb,alt:e.strDrink})),c.a.createElement("div",{className:"drink-info"},c.a.createElement("p",{className:"drink-title"},e.strDrink),c.a.createElement("p",{className:"drink-glass"},"glass type: ",e.strGlass),c.a.createElement("ul",{className:"drink-ingredients"},a.map((function(e){return I(e)}))),c.a.createElement("p",{className:"drink-instructions"},e.strInstructions)))}(e)})))},C=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(o.a)(this,Object(d.a)(a).call(this))).state={weeksData:[],cadenceData:[],drinksData:[]},e}return Object(m.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.jsonbin.io/b/5e965671435f5604bb418da0/2",{headers:{"secret-key":"$2b$10$MQuD7G12QB6V.MOYR5ipmumeCn5gd6lcfG/A3IPAvWYsSpElwD5Pe"}}).then((function(e){return e.json()})).then((function(a){return e.setState({weeksData:a.weeks,cadenceData:a.cadence})})).catch((function(e){console.log("Error: ",e)})),this.intervalId=setInterval((function(){return window.location.reload()}),144e5),fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then((function(e){return e.json()})).then((function(a){return e.setState({drinksData:a.drinks})}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"WCS Release Cadence")),c.a.createElement(w,{weeks:this.state.weeksData}),c.a.createElement(j,{cadence:this.state.cadenceData}),c.a.createElement(M,{drinks:this.state.drinksData}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.140c4af9.chunk.js.map