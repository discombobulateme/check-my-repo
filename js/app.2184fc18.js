(function(e){function t(t){for(var i,s,r=t[0],c=t[1],u=t[2],d=0,m=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&m.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],i=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var i={},n={app:0},a=[];function s(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=i,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(o,i,function(t){return e[t]}.bind(null,i));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/check-my-repo/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"0b72":function(e,t,o){},"27e1":function(e,t,o){"use strict";o("893a")},"2a8a":function(e,t,o){},"3ed9":function(e,t,o){"use strict";o("da30")},"404f":function(e,t,o){e.exports=o.p+"img/box.26a4ab40.svg"},"51f5":function(e,t,o){"use strict";o("f0a9")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Navbar"),o("router-view"),o("Footer")],1)},a=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nav",{staticClass:"navbar"},[o("ul",[o("li",[o("router-link",{staticClass:"name",attrs:{to:{path:"/"}}},[e._v("CHECK MY REPO")])],1),o("li",[o("router-link",{staticClass:"pages",attrs:{to:{path:"/about"}}},[e._v("About")])],1),o("li",[o("router-link",{staticClass:"pages",attrs:{to:{path:"/rules"}}},[e._v("Rules")])],1)])])},r=[],c={name:"Navbar",data:function(){return{}}},u=c,l=(o("3ed9"),o("2877")),d=Object(l["a"])(u,s,r,!1,null,"744edaf4",null),m=d.exports,p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("img",{staticClass:"bot",attrs:{src:o("7f01"),alt:"Logo image"}}),i("a",{attrs:{href:"https://github.com/saucelabs/check-my-repo",target:"_blank",rel:"noopener"}},[e._v("GitHub")]),i("p",{staticClass:"break-line"},[e._v("Open source automated tool daily checking our public")]),i("p",{staticClass:"break-line p-bottom"},[e._v("repositories health and quality")])])},h=[],b={name:"Footer",data:function(){}},g=b,f=(o("9ddd"),Object(l["a"])(g,p,h,!1,null,"ac0c29c8",null)),C=f.exports,v={name:"app",components:{Navbar:m,Footer:C}},y=v,M=(o("034f"),Object(l["a"])(y,n,a,!1,null,null,null)),_=M.exports,S=o("9483");Object(S["a"])("".concat("/check-my-repo/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var E=o("8c4f"),D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},w=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"square content"},[o("h1",[e._v("About")]),o("p",[e._v(" Aiming to help Open Source Software OSS maintainers we, at the "),o("a",{attrs:{href:"https://opensource.saucelabs.com",target:"_blank",rel:"noopener"}},[e._v("Sauce Labs Open Source Program Office")]),e._v(", created Check-My-Repo. "),o("br"),o("br"),e._v(" An automated tool built upon "),o("a",{attrs:{href:"https://todogroup.github.io/repolinter/",target:"_blank",rel:"noopener"}},[e._v("Repolinter")]),e._v(", that verifies if the main necessary parameters to comply with "),o("a",{attrs:{href:"https://opensource.guide/building-community/",target:"_blank",rel:"noopener"}},[e._v("open source best practices")]),e._v(", from Readme to License, are present in the organization's repositories. "),o("br"),o("br"),e._v(" By automating this verification open source projects maintenance is more effective and effortless, and can help you and your organization to have compliant software projects easier to service, test, upgrade, and maintain. "),o("br"),o("br"),e._v(" To implement it in your organization all you need to do is to "),o("a",{attrs:{href:"https://github.com/saucelabs/check-my-repo",target:"_blank",rel:"noopener"}},[e._v("fork the repository on GitHub")]),e._v(". It's that easy. ")])])])}],k={components:{},name:"About"},A=k,R=(o("27e1"),Object(l["a"])(A,D,w,!1,null,"62cecab0",null)),T=R.exports,L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"square"},[i("button",{staticClass:"content total",attrs:{"aria-label":"Total repos"},on:{click:function(t){return e.goToRepo(e.frontend[0].repo)}}},[i("img",{staticClass:"icon-space",attrs:{src:o("404f"),alt:"Feather Icon Box"}}),i("h4",[e._v("Total Repos")]),i("div",{staticClass:"result"},[e._v(e._s(e.frontend.length))]),i("p",{staticClass:"text"},[e._v("Repository "),i("img",{staticClass:"icon",attrs:{src:o("6a16"),alt:"Feather External Link"}})])]),i("button",{staticClass:"content passed",class:{"state-healthy":!e.buttonPassedOff},attrs:{"aria-label":"List healthy repos",role:"switch","aria-checked":"false"},on:{click:function(t){e.hideHealthy=!e.hideHealthy,e.buttonPassedOff=!e.buttonPassedOff}}},[i("img",{staticClass:"icon-space",attrs:{src:o("f15c"),alt:"Feather Icon Check"}}),i("h4",[e._v("Healthy Repos")]),i("div",{staticClass:"result"},[e._v(e._s(e.allPassed))]),i("p",[e._v("View repos")])]),i("button",{staticClass:"content failed",class:{"state-failed":!e.buttonFailedOff},attrs:{"aria-label":"List failing repos",role:"switch","aria-checked":"false"},on:{click:function(t){e.hideRepos=!e.hideRepos,e.buttonFailedOff=!e.buttonFailedOff}}},[i("img",{staticClass:"icon-space",attrs:{src:o("9343"),alt:"Feather Icon No Check"}}),i("h4",[e._v("Failing Repos")]),i("div",{staticClass:"result"},[e._v(e._s(e.frontend.length-e.allPassed))]),i("p",[e._v("View repos")])])]),e.hideRepos?e._e():i("div",[i("Details")],1),e.hideHealthy?e._e():i("div",[i("Healthy")],1)])},O=[],j=(o("4de4"),o("0481"),o("d81d"),o("4069"),o("f839")),x=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"square-detail"},[o("table",{staticClass:"table-content"},[o("tr",e._l(e.columns,(function(t){return o("th",{key:t.key},[e._v(e._s(t.name))])})),0),e._l(e.frontend,(function(t){return o("tr",{key:t},[0!==t.failed.length?[o("td",{staticClass:"td-left"},[o("a",{attrs:{href:t.url,target:"_blank",rel:"noopener"}},[e._v(e._s(t.name))])]),o("td",e._l(t.failed,(function(t){return o("span",{key:t},[t.includes("Do not have binaries")?o("span",{staticClass:"badge high"},[e._v(" Binaries ")]):e._e(),t.includes("License")?o("span",{staticClass:"badge high"},[e._v(" License ")]):e._e(),t.includes("README.md")?o("span",{staticClass:"badge hight"},[e._v(" Readme ")]):e._e(),t.includes("Changelog")?o("span",{staticClass:"badge medium"},[e._v(" Changelog ")]):e._e(),t.includes("Contributing")?o("span",{staticClass:"badge medium"},[e._v(" Contributing ")]):e._e(),t.includes("Maintainers email")?o("span",{staticClass:"badge medium"},[e._v(" Ownership ")]):e._e(),t.includes("Test directory")?o("span",{staticClass:"badge medium"},[e._v(" TestDir ")]):e._e(),t.includes("Code of Conduct")?o("span",{staticClass:"badge low"},[e._v(" CodeOfConduct ")]):e._e(),t.includes("Mention")?o("span",{staticClass:"badge low"},[e._v(" LicenseOnReadme ")]):e._e(),t.includes("Security")?o("span",{staticClass:"badge low"},[e._v(" Security ")]):e._e(),t.includes("Support")?o("span",{staticClass:"badge low"},[e._v(" Support ")]):e._e()])})),0)]:e._e()],2)}))],2)])},P=[],F={name:"Details",data:function(){return{frontend:j,columns:[{key:"name",name:"Repository name"},{key:"failed",name:"Failed rules"}]}}},H=F,I=(o("7995"),Object(l["a"])(H,x,P,!1,null,"46de00a2",null)),N=I.exports,q=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"square-healthy"},[o("table",{staticClass:"table-healthy"},[o("tr",e._l(e.columns,(function(t){return o("th",{key:t},[e._v(e._s(t))])})),0),o("tr",[o("td",[e._v(e._s(e.healthy))])])])])},B=[],$=(o("a15b"),o("b0c0"),{name:"Healthy",data:function(){return{frontend:j,columns:{name:"Healthy Repos"}}},computed:{healthy:function(){return this.frontend.filter((function(e){return e.passed&&e.failed.length<1})).map((function(e){return e.name})).join("\n")}}}),G=$,J=(o("9a6e"),Object(l["a"])(G,q,B,!1,null,"46394d7b",null)),z=J.exports,U={components:{Details:N,Healthy:z},name:"Home",data:function(){return{frontend:j,hideRepos:!0,hideHealthy:!0,buttonPassedOff:!0,buttonFailedOff:!0}},computed:{allPassed:function(){return this.frontend.filter((function(e){return e.passed&&e.failed.length<1})).length},failedRepo:function(){return this.frontend.map((function(e){var t=e.failed;return t})).flat().length}},methods:{goToRepo:function(e){window.open(e,"_blank","noopener")}}},W=U,K=(o("51f5"),Object(l["a"])(W,L,O,!1,null,"5fe54dbc",null)),V=K.exports,Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"square content"},[o("h1",[e._v("Rules")]),e._v(" Check-My-Repo uses a ruleset that searches for files considered essential in an open source project, according to best practices. In order to help filter the emergence of necessary actions on the missing of those files, we have separated the rules into: low, medium or high priority. Badges help to visually understand these priorities. "),o("br"),o("br"),e._v(" Following is a brief explanation of what each of these rules means and the importance of complying with them: "),o("br"),o("br"),o("span",{staticClass:"badge high"},[e._v("Binaries")]),o("p",[e._v("The security rule looks for binary files, executables and passwords, which should not be contained in an open project.")]),o("span",{staticClass:"badge high"},[e._v("License")]),o("p",[e._v("Compliance with open source software (OSS) license requirements is necessary, and complex. Most open source projects today use several components, each with its own type of license. Mixing these licenses can be legally complex. But ensuring what kinds of permissions you, as the project maintainer, want is essential in order for those who use your project to be able to make these combinations properly. It is also important to protect you legally. If you want to understand it better, we highly recommend you to take the free certificate from "),o("a",{attrs:{href:"https://training.linuxfoundation.org/training/open-source-licensing-basics-for-software-developers/",target:"_blank",rel:"noopener"}},[e._v("Linux Foundation")]),e._v(". Check-my-repo searches for a License file or a license mentioned on README file. ")]),o("span",{staticClass:"badge high"},[e._v("Readme")]),o("p",[e._v("A friendly README and clear code examples will make it easier for anyone who lands on your project to get started. It is about knowing your audience and their needs. The "),o("a",{attrs:{href:"https://opensource.guide/",target:"_blank",rel:"noopener"}},[e._v("Open Source Guide")]),e._v(" reminds us that the README is more than just a set of instructions, it’s a place to talk about the project goals, product vision, and roadmap, which serves as a compass to have a constructive discussion. ")]),o("span",{staticClass:"badge medium"},[e._v("Changelog")]),o("p",[e._v("The main purpose of this rule is to make it easier for users and contributors to see precisely what notable changes have been made between each release (or version) of the project. While Changelog is a file, a "),o("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener"}},[e._v("SemVer")]),e._v(", a semantic version, may be a better choice in systems with many dependencies. Doesn't matter what you choose, this makes it easier for people to understand the development speed of the project, or it's lack of maintenance. Check-my-repo searches if the project has a CHANGELOG.md file in the project root or if it contains a release tag on GitHub. ")]),o("span",{staticClass:"badge medium"},[e._v("Contributing")]),o("p",[e._v("A contributor guideline saves lots of time from both maintainers and contributors. Eager contributors rely on it to be their guiding hand. ")]),o("span",{staticClass:"badge medium"},[e._v("Ownership")]),o("p",[e._v("The main purpose of this file is to ensure someone is assigned to the project and to prevent it from going into the forgetful mode. Another reason is to provide a contact for potential contributors. When no one other than the original author has maintenance rights, continuation of the project through bifurcation can lead to confusion about the status and reliability of the project. ")]),o("span",{staticClass:"badge medium"},[e._v("TestDir")]),o("p",[e._v("Having tests on your project can avoid regresion, breaks and so many issues. A few reasons why testing is important: when bugs are caught in the earlier stages it costs much less to fix them; you add security; helps assure quality and digital confidence; which leads to users satisfaction. ")]),o("span",{staticClass:"badge low"},[e._v("CodeOfConduct")]),o("p",[e._v("A code of conduct establishes expectations and facilitates a healthy and constructive community. ")]),o("p",{staticClass:"quote"},[e._v("When a project seems hostile or unwelcoming, even if it’s just one person whose behavior is tolerated by others, you risk losing many more contributors, some of whom you may never even meet. It’s not always easy to adopt or enforce a code of conduct, but fostering a welcoming environment will help your community grow.")]),o("p",[e._v("You can read more about it at "),o("a",{attrs:{href:"https://opensource.guide/code-of-conduct/#:~:text=as%20a%20maintainer-,Why%20do%20I%20need%20a%20code%20of%20conduct%3F,just%20your%20participants%2C%20but%20yourself.",target:"_blank",rel:"noopener"}},[e._v("Open Source Guide")]),e._v(".")]),o("span",{staticClass:"badge low"},[e._v("LicenseOnReadme")]),o("p",[e._v("Although the license is valid in any format, as long as it is added to the project, having it in the main file ensures it will be clearly visible. So even if the license exists in a separate file it is important to have a mention of it in the README. Some projects add copyright and license on the first line of every file of the project. ")]),o("span",{staticClass:"badge low"},[e._v("Security")]),o("p",[e._v("A SECURITY.md is where a security policy goes, a place to instruct users how to report a security vulnerability. This allows users to easily report and maintainers to quickly take actions upon vulnerabilities. ")]),o("span",{staticClass:"badge low"},[e._v("Support")]),o("p",[e._v("A SUPPORT.md file is used to describe how the project is being maintained and how responsible a maintainer will be on issues. A SUPPORT.md file is used to describe how the project is being maintained and how responsible a maintainer will be on issues. It can include: how and where can a user get help and support, which communication channels should be used and what not to do to avoid communication noise. This file helps both users and maintainers to communicate to each other having their needs to get into the right channel. ")])])}],Q={components:{},name:"Rules"},X=Q,ee=(o("c48e"),Object(l["a"])(X,Y,Z,!1,null,"0a6ce5cc",null)),te=ee.exports;i["a"].use(E["a"]);var oe=[{path:"/",name:"Home",component:V},{path:"/about",name:"About",component:T},{path:"/rules",name:"Rules",component:te}],ie=new E["a"]({mode:"history",base:"/check-my-repo/",routes:oe,linkActiveClass:"active",linkExactActiveClass:"exact-active"}),ne=ie,ae=o("2f62");i["a"].use(ae["a"]);var se=new ae["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:ne,store:se,render:function(e){return e(_)}}).$mount("#app")},"6a16":function(e,t,o){e.exports=o.p+"img/external-link.f729e99d.svg"},7995:function(e,t,o){"use strict";o("0b72")},"7f01":function(e,t,o){e.exports=o.p+"img/logo.d16ebdb9.svg"},"85ec":function(e,t,o){},"893a":function(e,t,o){},9343:function(e,t,o){e.exports=o.p+"img/x-circle.6d2ee7ef.svg"},"9a6e":function(e,t,o){"use strict";o("b68d")},"9ddd":function(e,t,o){"use strict";o("d866")},b68d:function(e,t,o){},c48e:function(e,t,o){"use strict";o("2a8a")},d866:function(e,t,o){},da30:function(e,t,o){},f0a9:function(e,t,o){},f15c:function(e,t,o){e.exports=o.p+"img/check-circle.d6824ff7.svg"},f839:function(e){e.exports=JSON.parse('[{"repo":"https://github.com/discombobulateme","name":"advent-of-code","url":"https://github.com/discombobulateme/advent-of-code.git","failed":["Changelog","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","License","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"base_webdoc","url":"https://github.com/discombobulateme/base_webdoc.git","failed":["Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"BeTheHero","url":"https://github.com/discombobulateme/BeTheHero.git","failed":["Changelog","License","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries","Test directory"]},{"repo":"https://github.com/discombobulateme","name":"check-my-repo","url":"https://github.com/discombobulateme/check-my-repo.git","failed":["Changelog"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory","Contributing","Code of Conduct","Security","Support","Mention"]},{"repo":"https://github.com/discombobulateme","name":"continuoustestingmeetup.github.io","url":"https://github.com/discombobulateme/continuoustestingmeetup.github.io.git","failed":["Changelog","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","License","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"coyotiv-stack","url":"https://github.com/discombobulateme/coyotiv-stack.git","failed":["Changelog","Contributing","Code of Conduct","Security","Support"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory","Mention"]},{"repo":"https://github.com/discombobulateme","name":"coyotiv-twitter-clone","url":"https://github.com/discombobulateme/coyotiv-twitter-clone.git","failed":["Changelog","Contributing","Code of Conduct","Security","Support"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory","Mention"]},{"repo":"https://github.com/discombobulateme","name":"creative-react-portfolio","url":"https://github.com/discombobulateme/creative-react-portfolio.git","failed":["Changelog","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","License","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"daily-logs","url":"https://github.com/discombobulateme/daily-logs.git","failed":["Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"databaseUploadNodeJs","url":"https://github.com/discombobulateme/databaseUploadNodeJs.git","failed":["Changelog","License","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries","Test directory"]},{"repo":"https://github.com/discombobulateme","name":"dataverse-previewers","url":"https://github.com/discombobulateme/dataverse-previewers.git","failed":["Changelog","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","License","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"desafio07","url":"https://github.com/discombobulateme/desafio07.git","failed":["README.md","Changelog","License","Contributing","Code of Conduct","Security","Support"],"passed":["Maintainers email","Do not have binaries","Test directory","Mention"]},{"repo":"https://github.com/discombobulateme","name":"desafio6","url":"https://github.com/discombobulateme/desafio6.git","failed":["README.md","Changelog","License","Contributing","Code of Conduct","Security","Support"],"passed":["Maintainers email","Do not have binaries","Test directory","Mention"]},{"repo":"https://github.com/discombobulateme","name":"DevFinderApp","url":"https://github.com/discombobulateme/DevFinderApp.git","failed":["Changelog","License","Do not have binaries","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Test directory"]},{"repo":"https://github.com/discombobulateme","name":"discombobulateme.github.io","url":"https://github.com/discombobulateme/discombobulateme.github.io.git","failed":["README.md","Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support"],"passed":["Maintainers email","Do not have binaries","Mention"]},{"repo":"https://github.com/discombobulateme","name":"ecosiaSummerOfCode2020","url":"https://github.com/discombobulateme/ecosiaSummerOfCode2020.git","failed":["Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support"],"passed":["README.md","Maintainers email","Do not have binaries","Mention"]},{"repo":"https://github.com/discombobulateme","name":"frauenloop-code-challenges","url":"https://github.com/discombobulateme/frauenloop-code-challenges.git","failed":["Changelog","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","License","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"gh-docs-boilerplate","url":"https://github.com/discombobulateme/gh-docs-boilerplate.git","failed":["Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support"],"passed":["README.md","Maintainers email","Do not have binaries","Mention"]},{"repo":"https://github.com/discombobulateme","name":"github-issue-templates","url":"https://github.com/discombobulateme/github-issue-templates.git","failed":["Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support"],"passed":["README.md","Maintainers email","Do not have binaries","Mention"]},{"repo":"https://github.com/discombobulateme","name":"githubExplorerApp","url":"https://github.com/discombobulateme/githubExplorerApp.git","failed":["Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"goBarber2","url":"https://github.com/discombobulateme/goBarber2.git","failed":["README.md","Changelog","License","Do not have binaries","Contributing","Code of Conduct","Security","Support"],"passed":["Maintainers email","Test directory","Mention"]},{"repo":"https://github.com/discombobulateme","name":"goFinances","url":"https://github.com/discombobulateme/goFinances.git","failed":["README.md","Changelog","License","Do not have binaries","Contributing","Code of Conduct","Security","Support"],"passed":["Maintainers email","Test directory","Mention"]},{"repo":"https://github.com/discombobulateme","name":"goMarketPlace_desafio08","url":"https://github.com/discombobulateme/goMarketPlace_desafio08.git","failed":["Changelog","License","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries","Test directory"]},{"repo":"https://github.com/discombobulateme","name":"ifme","url":"https://github.com/discombobulateme/ifme.git","failed":["Changelog","Security","Support"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory","Contributing","Code of Conduct","Mention"]},{"repo":"https://github.com/discombobulateme","name":"IOTworkshop","url":"https://github.com/discombobulateme/IOTworkshop.git","failed":["Changelog","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","License","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"JS-SmallAppsPortfolio","url":"https://github.com/discombobulateme/JS-SmallAppsPortfolio.git","failed":["Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"magnificent-challenge","url":"https://github.com/discombobulateme/magnificent-challenge.git","failed":["Changelog","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory"]},{"repo":"https://github.com/discombobulateme","name":"Meals-Database","url":"https://github.com/discombobulateme/Meals-Database.git","failed":["Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support"],"passed":["README.md","Maintainers email","Do not have binaries","Mention"]},{"repo":"https://github.com/discombobulateme","name":"my-first-blog","url":"https://github.com/discombobulateme/my-first-blog.git","failed":["README.md","Changelog","License","Contributing","Code of Conduct","Security","Support"],"passed":["Maintainers email","Do not have binaries","Test directory","Mention"]},{"repo":"https://github.com/discombobulateme","name":"oppia","url":"https://github.com/discombobulateme/oppia.git","failed":["README.md","Maintainers email","Security","Support"],"passed":["Changelog","License","Do not have binaries","Test directory","Contributing","Code of Conduct","Mention"]},{"repo":"https://github.com/discombobulateme","name":"optout_frontend","url":"https://github.com/discombobulateme/optout_frontend.git","failed":["README.md","Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support"],"passed":["Maintainers email","Do not have binaries","Mention"]},{"repo":"https://github.com/discombobulateme","name":"osaltodabase.github.io","url":"https://github.com/discombobulateme/osaltodabase.github.io.git","failed":["Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"patchwork","url":"https://github.com/discombobulateme/patchwork.git","failed":["Changelog","Test directory","Code of Conduct","Security","Support"],"passed":["README.md","Maintainers email","License","Do not have binaries","Contributing","Mention"]},{"repo":"https://github.com/discombobulateme","name":"povPlayground","url":"https://github.com/discombobulateme/povPlayground.git","failed":["README.md","Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support"],"passed":["Maintainers email","Do not have binaries","Mention"]},{"repo":"https://github.com/discombobulateme","name":"python-prometheus-workshop","url":"https://github.com/discombobulateme/python-prometheus-workshop.git","failed":["Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"pythonGamesPortfolio","url":"https://github.com/discombobulateme/pythonGamesPortfolio.git","failed":["Changelog","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","License","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"pyweb.github.io","url":"https://github.com/discombobulateme/pyweb.github.io.git","failed":["README.md","Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support"],"passed":["Maintainers email","Do not have binaries","Mention"]},{"repo":"https://github.com/discombobulateme","name":"rainbow-penguin","url":"https://github.com/discombobulateme/rainbow-penguin.git","failed":["Changelog","Contributing","Code of Conduct","Security","Support"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory","Mention"]},{"repo":"https://github.com/discombobulateme","name":"reactStack_concepts","url":"https://github.com/discombobulateme/reactStack_concepts.git","failed":["Changelog","License","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries","Test directory"]},{"repo":"https://github.com/discombobulateme","name":"repolinter","url":"https://github.com/discombobulateme/repolinter.git","failed":["Maintainers email"],"passed":["README.md","Changelog","License","Do not have binaries","Test directory","Contributing","Code of Conduct","Security","Support","Mention"]},{"repo":"https://github.com/discombobulateme","name":"saucebotgame","url":"https://github.com/discombobulateme/saucebotgame.git","failed":["Changelog","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","License","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"sauceCon_API_in_120_minutes","url":"https://github.com/discombobulateme/sauceCon_API_in_120_minutes.git","failed":["Changelog","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory"]},{"repo":"https://github.com/discombobulateme","name":"saucelabs.github.io","url":"https://github.com/discombobulateme/saucelabs.github.io.git","failed":["Changelog","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory"]},{"repo":"https://github.com/discombobulateme","name":"Selenium_Course_Example_Code","url":"https://github.com/discombobulateme/Selenium_Course_Example_Code.git","failed":["README.md","Changelog","License","Contributing","Code of Conduct","Security","Support"],"passed":["Maintainers email","Do not have binaries","Test directory","Mention"]},{"repo":"https://github.com/discombobulateme","name":"stack","url":"https://github.com/discombobulateme/stack.git","failed":["Changelog","Contributing","Code of Conduct","Security","Support"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory","Mention"]},{"repo":"https://github.com/discombobulateme","name":"test","url":"https://github.com/discombobulateme/test.git","failed":["Changelog","Contributing","Code of Conduct","Security","Support"],"passed":["README.md","Maintainers email","License","Do not have binaries","Test directory","Mention"]},{"repo":"https://github.com/discombobulateme","name":"test-automated-check","url":"https://github.com/discombobulateme/test-automated-check.git","failed":["README.md","Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support"],"passed":["Maintainers email","Do not have binaries","Mention"]},{"repo":"https://github.com/discombobulateme","name":"testJS-2021","url":"https://github.com/discombobulateme/testJS-2021.git","failed":["Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"webdoc","url":"https://github.com/discombobulateme/webdoc.git","failed":["Changelog","License","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries","Test directory"]},{"repo":"https://github.com/discombobulateme","name":"webdriverio","url":"https://github.com/discombobulateme/webdriverio.git","failed":[],"passed":["README.md","Changelog","Maintainers email","License","Do not have binaries","Test directory","Contributing","Code of Conduct","Security","Support","Mention"]},{"repo":"https://github.com/discombobulateme","name":"welcome-guide","url":"https://github.com/discombobulateme/welcome-guide.git","failed":["Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support","Mention"],"passed":["README.md","Maintainers email","Do not have binaries"]},{"repo":"https://github.com/discombobulateme","name":"ZentrumFurNetzKunst","url":"https://github.com/discombobulateme/ZentrumFurNetzKunst.git","failed":["README.md","Changelog","License","Test directory","Contributing","Code of Conduct","Security","Support"],"passed":["Maintainers email","Do not have binaries","Mention"]}]')}});
//# sourceMappingURL=app.2184fc18.js.map