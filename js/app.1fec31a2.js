(function(e){function a(a){for(var i,o,r=a[0],l=a[1],c=a[2],d=0,h=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(a);while(h.length)h.shift()();return n.push.apply(n,c||[]),t()}function t(){for(var e,a=0;a<n.length;a++){for(var t=n[a],i=!0,r=1;r<t.length;r++){var l=t[r];0!==s[l]&&(i=!1)}i&&(n.splice(a--,1),e=o(o.s=t[0]))}return e}var i={},s={app:0},n=[];function o(a){if(i[a])return i[a].exports;var t=i[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=i,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)o.d(t,i,function(a){return e[a]}.bind(null,i));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/check-my-repo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var u=l;n.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";t("85ec")},1771:function(e,a,t){var i={"./box.svg":"404f","./check-circle.svg":"f15c","./external-link.svg":"6a16","./logo.png":"cf05","./ospo-bot-new.svg":"e03f","./x-circle.svg":"9343"};function s(e){var a=n(e);return t(a)}function n(e){if(!t.o(i,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return i[e]}s.keys=function(){return Object.keys(i)},s.resolve=n,e.exports=s,s.id="1771"},"1b37":function(e,a,t){},2966:function(e,a,t){},"404f":function(e,a,t){e.exports=t.p+"img/box.26a4ab40.svg"},"523b":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var i=t("2b0e"),s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("Navbar"),t("router-view"),t("Footer")],1)},n=[],o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("nav",{staticClass:"navbar"},[t("ul",[t("li",[t("router-link",{staticClass:"name",attrs:{to:{path:"/"}}},[e._v("CHECK MY REPO")])],1),t("li",[t("router-link",{staticClass:"pages",attrs:{to:{path:"/about"}}},[e._v("About")])],1),t("li",[t("router-link",{staticClass:"pages",attrs:{to:{path:"/rules"}}},[e._v("Rules")])],1)])])},r=[],l={name:"Navbar",data:function(){return{}}},c=l,u=(t("bed5"),t("2877")),d=Object(u["a"])(c,o,r,!1,null,"18dcf8b1",null),h=d.exports,m=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",[i("img",{staticClass:"bot",attrs:{src:t("1771")("./"+e.config.logo)}}),i("a",{attrs:{href:"https://github.com/saucelabs/check-my-repo",target:"_blank",rel:"noopener"}},[e._v("GitHub")]),i("p",{staticClass:"break-line"},[e._v("Open source automated tool daily checking our public")]),i("p",{staticClass:"break-line p-bottom"},[e._v("repositories health and quality")])])},p=[],f=t("8058"),g={name:"Footer",data:function(){return{config:f}}},b=g,v=(t("ab75"),Object(u["a"])(b,m,p,!1,null,"7fe5fb7e",null)),y=v.exports,E={name:"app",components:{Navbar:h,Footer:y}},M=E,D=(t("034f"),Object(u["a"])(M,s,n,!1,null,null,null)),_=D.exports,C=t("9483");Object(C["a"])("".concat("/check-my-repo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var R=t("8c4f"),w=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"square content"},[t("h1",[e._v("About")]),t("p",[e._v(" A demanding and complex Open Source Program Offices’ task is to guarantee the health of its organization repositories. ")]),t("p",[e._v(" Aiming to help Open Source Program Offices OSPO and Open Source communities, we, at "),t("a",{attrs:{href:"https://opensource.saucelabs.com/",target:"_blank",rel:"noopener"}},[e._v("Sauce Labs OSPO")]),e._v(", created Check-My-Repo, an automated tool built upon "),t("a",{attrs:{href:"https://www.npmjs.com/package/repolinter",target:"_blank",rel:"noopener"}},[e._v("Repolinter")]),e._v(", that verifies the main necessary parameters to comply with OS best practices: from Readme to License. By automating this verification OSPO’s maintenance is more effective and effortless, and can help your organization to have compliant software projects easier to service, test, upgrade, and maintain. ")]),t("p",[e._v(" Built with Node.js, Repolinter and Vue.js, it is designed to run local and automated, displaying results on GitHub page. Just fork it and adjust it to your own configurations using a simple json file. ")]),t("p",[e._v(" To know more about it, fork it and use it, go to the "),t("a",{attrs:{href:"https://github.com/saucelabs/check-my-repo",target:"_blank",rel:"noopener"}},[e._v("project repository on GitHub")]),e._v(". ")])])])}],T={components:{},name:"About"},k=T,L=(t("c544"),Object(u["a"])(k,w,A,!1,null,"05719f78",null)),x=L.exports,j=function(){var e=this,a=e.$createElement,i=e._self._c||a;return i("div",[i("div",{staticClass:"square"},[i("button",{staticClass:"content total",on:{click:function(a){return e.goToRepo()}}},[i("img",{staticClass:"icon-space",attrs:{src:t("404f"),alt:"Feather Icon Box"}}),i("h4",[e._v("Total Repos")]),i("div",{staticClass:"result"},[e._v(e._s(e.frontend.length))]),i("p",{staticClass:"text"},[e._v("Repository "),i("img",{staticClass:"icon",attrs:{src:t("6a16"),alt:"Feather External Link"}})])]),i("button",{staticClass:"content passed",class:{"state-healthy":!e.buttonPassedOff},attrs:{role:"switch"},on:{click:function(a){e.hideHealthy=!e.hideHealthy,e.buttonPassedOff=!e.buttonPassedOff}}},[i("img",{staticClass:"icon-space",attrs:{src:t("f15c"),alt:"Feather Icon Check"}}),i("h4",[e._v("Healthy Repos")]),i("div",{staticClass:"result"},[e._v(e._s(e.allPassed))]),i("p",[e._v("View repos")])]),i("button",{staticClass:"content failed",class:{"state-failed":!e.buttonFailedOff},attrs:{role:"switch"},on:{click:function(a){e.hideRepos=!e.hideRepos,e.buttonFailedOff=!e.buttonFailedOff}}},[i("img",{staticClass:"icon-space",attrs:{src:t("9343"),alt:"Feather Icon No Check"}}),i("h4",[e._v("Failing Repos")]),i("div",{staticClass:"result"},[e._v(e._s(e.frontend.length-e.allPassed))]),i("p",[e._v("View repos")])])]),e.hideRepos?e._e():i("div",[i("Details")],1),e.hideHealthy?e._e():i("div",[i("Healthy")],1)])},O=[],S=(t("4de4"),t("0481"),t("d81d"),t("4069"),t("f839")),F=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"square-detail"},[t("table",{staticClass:"table-content"},[t("tr",e._l(e.columns,(function(a){return t("th",{key:a.key},[e._v(e._s(a.name))])})),0),e._l(e.frontend,(function(a){return t("tr",{key:a},[0!==a.failed.length?[t("td",{staticClass:"td-left"},[t("a",{attrs:{href:a.url,target:"_blank",rel:"noopener"}},[e._v(e._s(a.name))])]),e._l(a.failed,(function(a){return t("td",{key:a},[a.includes("Changelog")?t("spam",{staticClass:"badge low"},[e._v(" Changelog ")]):e._e(),a.includes("Code of conduct")?t("spam",{staticClass:"badge low"},[e._v(" Code of Conduct ")]):e._e(),a.includes("Contributor guidelines")?t("spam",{staticClass:"badge low"},[e._v(" Contributor ")]):e._e(),a.includes("License")?t("spam",{staticClass:"badge high"},[e._v(" License ")]):e._e(),a.includes("Maintainers email")?t("spam",{staticClass:"badge medium"},[e._v(" Ownership ")]):e._e(),a.includes("README.md file")?t("spam",{staticClass:"badge low"},[e._v(" Readme ")]):e._e(),a.includes("Do not have binaries files")?t("spam",{staticClass:"badge high"},[e._v(" Security ")]):e._e(),a.includes("Test directory")?t("spam",{staticClass:"badge medium"},[e._v(" Test Dir ")]):e._e()],1)}))]:e._e()],2)}))],2)])},P=[],H={name:"Details",data:function(){return{frontend:S,columns:[{key:"name",name:"Repository name"},{key:"failed",name:"Failed rules"}]}}},N=H,I=(t("ff4d"),Object(u["a"])(N,F,P,!1,null,"08506e10",null)),q=I.exports,$=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"square-healthy"},[t("table",{staticClass:"table-healthy"},[t("tr",e._l(e.columns,(function(a){return t("th",{key:a},[e._v(e._s(a))])})),0),t("tr",[t("td",[e._v(" "+e._s(e.healthy)+" ")])])])])},B=[],G=(t("a15b"),t("b0c0"),{name:"Healthy",data:function(){return{frontend:S,columns:{name:"Healthy Repos"}}},computed:{healthy:function(){return this.frontend.filter((function(e){return e.passed&&e.failed.length<1})).map((function(e){return e.name})).join("\n")}}}),V=G,z=(t("f42c"),Object(u["a"])(V,$,B,!1,null,"273c9c66",null)),J=z.exports,W={components:{Details:q,Healthy:J},name:"Home",data:function(){return{frontend:S,hideRepos:!0,hideHealthy:!0,config:f,buttonPassedOff:!0,buttonFailedOff:!0}},computed:{allPassed:function(){return this.frontend.filter((function(e){return e.passed&&e.failed.length<1})).length},failedRepo:function(){return this.frontend.map((function(e){var a=e.failed;return a})).flat().length}},methods:{goToRepo:function(){window.open(f.github,"_blank","noopener")}}},U=W,Y=(t("6db3"),Object(u["a"])(U,j,O,!1,null,"ff53aa46",null)),K=Y.exports,Q=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{staticClass:"square content"},[t("h1",[e._v("Rules")]),t("p",[e._v("This application is built upon "),t("a",{attrs:{href:"https://www.npmjs.com/package/repolinter",target:"_blank",rel:"noopener"}},[e._v("Repolinter")]),e._v(". For detail explanation about all rules available, please refer to the "),t("a",{attrs:{href:"https://github.com/todogroup/repolinter/blob/master/docs/rules.md",target:"_blank",rel:"noopener"}},[e._v("documentation")]),e._v(".")]),t("p",[e._v("Check My Repo uses a shorter ruleset, as all Sauce Labs public repositories are under the same Code of Conduct. However, you can easily choose the ruleset that fits you by changing config.file parameters. Follow a brief explanation of why such rules are important to comply with: ")]),t("ul",[t("li",[e._v("License")]),t("p",[e._v("Compliance with open source software (OSS) license requirements is necessary, and complex. Most open source projects today use several components, each with its own type of license. Mixing these licenses can be legally complex. But ensuring what kinds of permissions you, as the project maintainer, want is essential in order for those who use your project to be able to make these combinations properly. It is also important to protect you legally. If you want to understand it better, we highly recommend you to take the free certificate from "),t("a",{attrs:{href:"https://training.linuxfoundation.org/training/open-source-licensing-basics-for-software-developers/",target:"_blank",rel:"noopener"}},[e._v("Linux Foundation")])]),t("li",[e._v("Readme")]),t("p",[e._v("A friendly README and clear code examples will make it easier for anyone who lands on your project to get started. It is about knowing your audience and their needs. The "),t("a",{attrs:{href:"https://opensource.guide/",target:"_blank",rel:"noopener"}},[e._v("Open Source Guide")]),e._v(" reminds us that the README is more than just a set of instructions, it’s a place to talk about the project goals, product vision, and roadmap, which serves as a compass to have a constructive discussion. ")]),t("li",[e._v("Changelog")]),t("p",[e._v(" The main purpose of this rule is to make it easier for users and contributors to see precisely what notable changes have been made between each release (or version) of the project. While Changelog is a file, a "),t("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener"}},[e._v("SemVer")]),e._v(", a semantic version, may be a better choice in systems with many dependencies. Doesn't matter what you choose, this makes it easier por people to understand the development speed of the project, or it's lack of maintenance. ")]),t("li",[e._v("Code Ownership")]),t("p",[e._v("The main purpose of this archive is to make sure that someone is put in charge of the project and to prevent it from being forgotten. Another point is to provide a contact for potential collaborators. When no one but the original author have administration rights or access to the publishing accounts, project continuation through forking can lead to confusion about the state and reliablility of the project. ")]),t("li",[e._v("Security")]),t("p",[e._v("The security rule looks for binary files, executables and passwords, which should not be contained in an open project.")]),t("li",[e._v("Test Directory")]),t("p",[e._v("Having tests on your project can avoid regresion, breaks and so many issues. A few reasons why testing is important: when bugs are caught in the earlier stages it costs much less to fix them; you add security; helps assure quality and the digital confidence; which leads to users satisfaction. ")])]),t("h2",[e._v("Rules you should implement when it is not default by your organization")]),t("ul",[t("li",[e._v("Code of Conduct")]),t("p",[e._v("A code of conduct establishes expectations and facilitate healthy and constructive community.")]),t("p",{staticClass:"quote"},[e._v("When a project seems hostile or unwelcoming, even if it’s just one person whose behavior is tolerated by others, you risk losing many more contributors, some of whom you may never even meet. It’s not always easy to adopt or enforce a code of conduct, but fostering a welcoming environment will help your community grow.")]),t("p",[e._v("You can read more about it at "),t("a",{attrs:{href:"https://opensource.guide/code-of-conduct/#:~:text=as%20a%20maintainer-,Why%20do%20I%20need%20a%20code%20of%20conduct%3F,just%20your%20participants%2C%20but%20yourself.",target:"_blank",rel:"noopener"}},[e._v("Open Source Guide")]),e._v(".")]),t("li",[e._v("Contributors Guidelines")]),t("p",[e._v("A guideline save lots of time from both maintainers and contributors. Eager contributors rely on it to be their guiding hand. ")])])])])}],Z={components:{},name:"Rules"},ee=Z,ae=(t("a489"),Object(u["a"])(ee,Q,X,!1,null,"4233ea96",null)),te=ae.exports;i["a"].use(R["a"]);var ie=[{path:"/",name:"Home",component:K},{path:"/about",name:"About",component:x},{path:"/rules",name:"Rules",component:te}],se=new R["a"]({mode:"history",base:"/check-my-repo/",routes:ie}),ne=se,oe=t("2f62");i["a"].use(oe["a"]);var re=new oe["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:ne,store:re,render:function(e){return e(_)}}).$mount("#app")},"67b3":function(e,a,t){},"6a16":function(e,a,t){e.exports=t.p+"img/external-link.f729e99d.svg"},"6db3":function(e,a,t){"use strict";t("8b9c")},8058:function(e){e.exports=JSON.parse('{"github":"https://github.com/saucelabs?q=&type=public&language=&sort=","logo":"ospo-bot-new.svg"}')},"85ec":function(e,a,t){},"8b9c":function(e,a,t){},9343:function(e,a,t){e.exports=t.p+"img/x-circle.6d2ee7ef.svg"},a489:function(e,a,t){"use strict";t("1b37")},ab75:function(e,a,t){"use strict";t("523b")},bda3:function(e,a,t){},be84:function(e,a,t){},bed5:function(e,a,t){"use strict";t("bda3")},c544:function(e,a,t){"use strict";t("67b3")},cf05:function(e,a,t){e.exports=t.p+"img/logo.82b9c7a5.png"},e03f:function(e,a,t){e.exports=t.p+"img/ospo-bot-new.d16ebdb9.svg"},f15c:function(e,a,t){e.exports=t.p+"img/check-circle.d6824ff7.svg"},f42c:function(e,a,t){"use strict";t("be84")},f839:function(e){e.exports=JSON.parse('[{"name":"monocle","url":"https://github.com/saucelabs/monocle.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"saucerest-java","url":"https://github.com/saucelabs/saucerest-java.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"bamboo_sauce","url":"https://github.com/saucelabs/bamboo_sauce.git","failed":["Changelog","License"],"passed":["README.md file","Maintainers email","Do not have binaries files","Test directory"]},{"name":"ci-sauce","url":"https://github.com/saucelabs/ci-sauce.git","failed":["License"],"passed":["README.md file","Changelog","Maintainers email","Do not have binaries files","Test directory"]},{"name":"node-saucelabs","url":"https://github.com/saucelabs/node-saucelabs.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"sauce-java","url":"https://github.com/saucelabs/sauce-java.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"sauce_whisk","url":"https://github.com/saucelabs/sauce_whisk.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"the-internet","url":"https://github.com/saucelabs/the-internet.git","failed":["Test directory"],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files"]},{"name":"diagnoss","url":"https://github.com/saucelabs/diagnoss.git","failed":["Changelog","Test directory"],"passed":["README.md file","Maintainers email","License","Do not have binaries files"]},{"name":"appium-getting-started-code-exampes","url":"https://github.com/saucelabs/appium-getting-started-code-exampes.git","failed":["README.md file","Test directory"],"passed":["Changelog","Maintainers email","License","Do not have binaries files"]},{"name":"vso-sauce-ondemand-plugin","url":"https://github.com/saucelabs/vso-sauce-ondemand-plugin.git","failed":["Changelog","License","Do not have binaries files"],"passed":["README.md file","Maintainers email","Test directory"]},{"name":"jenkins-sauce-ondemand-plugin","url":"https://github.com/saucelabs/jenkins-sauce-ondemand-plugin.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"noVNC","url":"https://github.com/saucelabs/noVNC.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"testobject-appium-ruby-api","url":"https://github.com/saucelabs/testobject-appium-ruby-api.git","failed":["Changelog","License"],"passed":["README.md file","Maintainers email","Do not have binaries files","Test directory"]},{"name":"teamcity-sauce-ondemand-plugin","url":"https://github.com/saucelabs/teamcity-sauce-ondemand-plugin.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"training-test-page","url":"https://github.com/saucelabs/training-test-page.git","failed":["Changelog","License"],"passed":["README.md file","Maintainers email","Do not have binaries files","Test directory"]},{"name":"foxdriver","url":"https://github.com/saucelabs/foxdriver.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"ios-apps-for-testing","url":"https://github.com/saucelabs/ios-apps-for-testing.git","failed":["Changelog","License","Test directory"],"passed":["README.md file","Maintainers email","Do not have binaries files"]},{"name":"extended-debugging-demo","url":"https://github.com/saucelabs/extended-debugging-demo.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"oboe.js","url":"https://github.com/saucelabs/oboe.js.git","failed":["Changelog","License"],"passed":["README.md file","Maintainers email","Do not have binaries files","Test directory"]},{"name":"sauce-connect-docker","url":"https://github.com/saucelabs/sauce-connect-docker.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"sample-app-web","url":"https://github.com/saucelabs/sample-app-web.git","failed":["Changelog","Maintainers email"],"passed":["README.md file","License","Do not have binaries files","Test directory"]},{"name":"sample-app-mobile","url":"https://github.com/saucelabs/sample-app-mobile.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"CircleCI-SauceLabs-ORB","url":"https://github.com/saucelabs/CircleCI-SauceLabs-ORB.git","failed":["Changelog","License"],"passed":["README.md file","Maintainers email","Do not have binaries files","Test directory"]},{"name":"runsauce","url":"https://github.com/saucelabs/runsauce.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"dirty-json","url":"https://github.com/saucelabs/dirty-json.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"performance-js-examples","url":"https://github.com/saucelabs/performance-js-examples.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"performance-python-examples","url":"https://github.com/saucelabs/performance-python-examples.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"extended-debugging-Ruby-examples","url":"https://github.com/saucelabs/extended-debugging-Ruby-examples.git","failed":["README.md file","Changelog","Test directory"],"passed":["Maintainers email","License","Do not have binaries files"]},{"name":"headless-demo-ruby","url":"https://github.com/saucelabs/headless-demo-ruby.git","failed":["Changelog","License","Test directory"],"passed":["README.md file","Maintainers email","Do not have binaries files"]},{"name":"speedo","url":"https://github.com/saucelabs/speedo.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"performance-CI-demo","url":"https://github.com/saucelabs/performance-CI-demo.git","failed":["Changelog","License"],"passed":["README.md file","Maintainers email","Do not have binaries files","Test directory"]},{"name":"screener-runner","url":"https://github.com/saucelabs/screener-runner.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"sauce-elixir","url":"https://github.com/saucelabs/sauce-elixir.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"sauce_bindings","url":"https://github.com/saucelabs/sauce_bindings.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"simple_sauce_js","url":"https://github.com/saucelabs/simple_sauce_js.git","failed":["Changelog","License","Test directory"],"passed":["README.md file","Maintainers email","Do not have binaries files"]},{"name":"tracelib","url":"https://github.com/saucelabs/tracelib.git","failed":["Maintainers email"],"passed":["README.md file","Changelog","License","Do not have binaries files","Test directory"]},{"name":"performance-samples","url":"https://github.com/saucelabs/performance-samples.git","failed":["Changelog","Test directory"],"passed":["README.md file","Maintainers email","License","Do not have binaries files"]},{"name":"sauce-connect-action","url":"https://github.com/saucelabs/sauce-connect-action.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"docker-ubuntu1804-ansible","url":"https://github.com/saucelabs/docker-ubuntu1804-ansible.git","failed":["Changelog","Test directory"],"passed":["README.md file","Maintainers email","License","Do not have binaries files"]},{"name":"1password-teams-open-source","url":"https://github.com/saucelabs/1password-teams-open-source.git","failed":["Changelog","License","Test directory"],"passed":["README.md file","Maintainers email","Do not have binaries files"]},{"name":"network-viewer","url":"https://github.com/saucelabs/network-viewer.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"sauce-connect-launcher","url":"https://github.com/saucelabs/sauce-connect-launcher.git","failed":["License"],"passed":["README.md file","Changelog","Maintainers email","Do not have binaries files","Test directory"]},{"name":"sauce-puppeteer-runner","url":"https://github.com/saucelabs/sauce-puppeteer-runner.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"testrunner-toolkit","url":"https://github.com/saucelabs/testrunner-toolkit.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"saucectl","url":"https://github.com/saucelabs/saucectl.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"homebrew-saucectl","url":"https://github.com/saucelabs/homebrew-saucectl.git","failed":["Changelog","Test directory"],"passed":["README.md file","Maintainers email","License","Do not have binaries files"]},{"name":"sauce-playwright-runner","url":"https://github.com/saucelabs/sauce-playwright-runner.git","failed":["Do not have binaries files"],"passed":["README.md file","Changelog","Maintainers email","License","Test directory"]},{"name":"sauce_labs_ranorex","url":"https://github.com/saucelabs/sauce_labs_ranorex.git","failed":["Changelog","License","Do not have binaries files","Test directory"],"passed":["README.md file","Maintainers email"]},{"name":"node-saucectl","url":"https://github.com/saucelabs/node-saucectl.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"salsa_verde","url":"https://github.com/saucelabs/salsa_verde.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"saucelabs.github.io","url":"https://github.com/saucelabs/saucelabs.github.io.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"sauce-testcafe-runner","url":"https://github.com/saucelabs/sauce-testcafe-runner.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"logcluster","url":"https://github.com/saucelabs/logcluster.git","failed":["Changelog","Test directory"],"passed":["README.md file","Maintainers email","License","Do not have binaries files"]},{"name":"sauce-cypress-runner","url":"https://github.com/saucelabs/sauce-cypress-runner.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"new-project","url":"https://github.com/saucelabs/new-project.git","failed":["Changelog","Test directory"],"passed":["README.md file","Maintainers email","License","Do not have binaries files"]},{"name":".github","url":"https://github.com/saucelabs/.github.git","failed":["README.md file","Changelog","License","Test directory"],"passed":["Maintainers email","Do not have binaries files"]},{"name":"sauce-docs","url":"https://github.com/saucelabs/sauce-docs.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"kafka_exporter","url":"https://github.com/saucelabs/kafka_exporter.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"cascadia-workshop","url":"https://github.com/saucelabs/cascadia-workshop.git","failed":["Changelog","License","Test directory"],"passed":["README.md file","Maintainers email","Do not have binaries files"]},{"name":"cddl","url":"https://github.com/saucelabs/cddl.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"testcafe-reporter-prometheus-multi","url":"https://github.com/saucelabs/testcafe-reporter-prometheus-multi.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"charts","url":"https://github.com/saucelabs/charts.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"selenium","url":"https://github.com/saucelabs/selenium.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"check-my-repo","url":"https://github.com/saucelabs/check-my-repo.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"docusaurus-theme-github-codeblock","url":"https://github.com/saucelabs/docusaurus-theme-github-codeblock.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"repolinter","url":"https://github.com/saucelabs/repolinter.git","failed":["Maintainers email"],"passed":["README.md file","Changelog","License","Do not have binaries files","Test directory"]},{"name":"screener-storybook","url":"https://github.com/saucelabs/screener-storybook.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"timeline-viewer","url":"https://github.com/saucelabs/timeline-viewer.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"playwright-test-demo","url":"https://github.com/saucelabs/playwright-test-demo.git","failed":["Changelog","Do not have binaries files"],"passed":["README.md file","Maintainers email","License","Test directory"]},{"name":"sauce-runners","url":"https://github.com/saucelabs/sauce-runners.git","failed":["Changelog","License","Test directory"],"passed":["README.md file","Maintainers email","Do not have binaries files"]},{"name":"zap-api-nodejs","url":"https://github.com/saucelabs/zap-api-nodejs.git","failed":["Test directory"],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files"]},{"name":"saucectl-run-action","url":"https://github.com/saucelabs/saucectl-run-action.git","failed":["License"],"passed":["README.md file","Changelog","Maintainers email","Do not have binaries files","Test directory"]},{"name":"testcafe-browser-provider-ios","url":"https://github.com/saucelabs/testcafe-browser-provider-ios.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"saucectl-run-orb","url":"https://github.com/saucelabs/saucectl-run-orb.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"sauce-runner-utils","url":"https://github.com/saucelabs/sauce-runner-utils.git","failed":[],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"mobilenativefoundation.org","url":"https://github.com/saucelabs/mobilenativefoundation.org.git","failed":["Changelog","Test directory"],"passed":["README.md file","Maintainers email","License","Do not have binaries files"]},{"name":"py-ccloud","url":"https://github.com/saucelabs/py-ccloud.git","failed":["Test directory"],"passed":["README.md file","Changelog","Maintainers email","License","Do not have binaries files"]},{"name":"saucectl-cypress-example","url":"https://github.com/saucelabs/saucectl-cypress-example.git","failed":["Changelog","Test directory"],"passed":["README.md file","Maintainers email","License","Do not have binaries files"]},{"name":"saucectl-playwright-example","url":"https://github.com/saucelabs/saucectl-playwright-example.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"saucectl-testcafe-example","url":"https://github.com/saucelabs/saucectl-testcafe-example.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"Selenium_Course_Example_Code","url":"https://github.com/saucelabs/Selenium_Course_Example_Code.git","failed":["README.md file","Changelog","License"],"passed":["Maintainers email","Do not have binaries files","Test directory"]},{"name":"saucectl-puppeteer-example","url":"https://github.com/saucelabs/saucectl-puppeteer-example.git","failed":["Changelog"],"passed":["README.md file","Maintainers email","License","Do not have binaries files","Test directory"]},{"name":"saucectl-espresso-example","url":"https://github.com/saucelabs/saucectl-espresso-example.git","failed":["Changelog","Test directory"],"passed":["README.md file","Maintainers email","License","Do not have binaries files"]}]')},ff4d:function(e,a,t){"use strict";t("2966")}});
//# sourceMappingURL=app.1fec31a2.js.map