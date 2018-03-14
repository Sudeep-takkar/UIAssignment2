webpackJsonp(["app"],{"./App.css":function(e,t){},"./App.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("../node_modules/react/react.js"),l=n.n(i),s=n("../node_modules/material-ui/AppBar/index.js"),c=n.n(s),u=n("../node_modules/react-router-dom/es/index.js"),p=n("../node_modules/material-ui/Drawer/index.js"),f=n.n(p),m=n("../node_modules/history/createHashHistory.js"),d=n.n(m),b=n("./App.css"),y=(n.n(b),n("./custom.css")),h=(n.n(y),n("./components/MenuContainer.js")),g=n("./components/MainContent.js"),w=n("./components/Footer.js"),E=n("./components/Usability.js"),v=n("./components/UsabilityTesting.js"),_=n("./images/logo_updated.jpg"),j=n.n(_),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),x=d()();t.a=function(e){function t(e){a(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.toggleSideBar=function(){n.setState({isDrawerOpen:!n.state.isDrawerOpen})},n.state={isDrawerOpen:!1},n}return o(t,e),O(t,[{key:"render",value:function(){var e=this;return l.a.createElement(u.c,{history:x},l.a.createElement("div",null,l.a.createElement(c.a,{title:l.a.createElement(u.a,{className:"textDecorationNone",to:"/",replace:!0},l.a.createElement("img",{style:{width:"68px"},src:j.a,alt:"Conestoga's Web Enthusiasts"})),style:{position:"fixed",top:0,color:"white"},iconElementRight:l.a.createElement("input",{placeholder:"Search",style:{height:"35px",border:"1.25px solid white",background:"transparent",color:"white"}}),onLeftIconButtonTouchTap:this.toggleSideBar}),l.a.createElement(f.a,{open:this.state.isDrawerOpen,containerStyle:{marginTop:"66px"}},l.a.createElement(h.a,{toggleSideBar:this.toggleSideBar})),l.a.createElement(u.d,null,l.a.createElement(u.b,{exact:!0,path:"/",component:function(){return l.a.createElement(g.a,{isDrawerOpen:e.state.isDrawerOpen})}}),l.a.createElement(u.b,{path:"/usability",component:function(){return l.a.createElement(E.a,{isDrawerOpen:e.state.isDrawerOpen})}}),l.a.createElement(u.b,{path:"/usabilityTesting",component:function(){return l.a.createElement(v.a,{isDrawerOpen:e.state.isDrawerOpen})}})),l.a.createElement(w.a,{isDrawerOpen:this.state.isDrawerOpen})))}}]),t}(i.Component)},"./components/Footer.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("../node_modules/react/react.js"),l=n.n(i),s=n("../node_modules/materialize-css/dist/css/materialize.min.css"),c=(n.n(s),n("./images/logo_updated.jpg")),u=n.n(c),p=n("../node_modules/react-router-dom/es/index.js"),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.a=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),f(t,[{key:"render",value:function(){return l.a.createElement("footer",{className:"page-footer",style:{marginLeft:this.props.isDrawerOpen?"256px":"0px"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col l6 s12"},l.a.createElement(p.a,{className:"textDecorationNone",to:"/",replace:!0},l.a.createElement("img",{style:{width:"68px"},src:u.a,alt:"Conestoga's Web Enthusiasts"})),l.a.createElement("p",{className:"grey-text text-lighten-4"},"Conestoga's Web Enthusiasts (CWE) is a Usability tutorial blog that provides practical tutorials of usability and usability testing.")),l.a.createElement("div",{className:"col l4 offset-l2 s12"},l.a.createElement("h5",{className:"white-text"},"Popular Topics"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(p.a,{style:{color:"white"},className:"textDecorationNone",to:"/usability",replace:!0},"Web Usability")),l.a.createElement("li",null,l.a.createElement(p.a,{style:{color:"white"},className:"textDecorationNone",to:"/usabilityTesting",replace:!0},"Web Usability Testing")))))),l.a.createElement("div",{className:"footer-copyright"},l.a.createElement("div",{className:"container"})))}}]),t}(i.Component)},"./components/MainContent.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("../node_modules/react/react.js"),l=n.n(i),s=n("../node_modules/material-ui/RaisedButton/index.js"),c=n.n(s),u=n("../node_modules/grid-styled/dist/index.js"),p=(n.n(u),n("../node_modules/react-router-dom/es/index.js")),f=n("../node_modules/react-typist/dist/Typist.js"),m=n.n(f),d=n("./particles.js"),b=n("../node_modules/particles.js/particles.js"),y=(n.n(b),n("./images/3_updated_new.jpg")),h=n.n(y),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.a=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),g(t,[{key:"componentDidMount",value:function(){window.particlesJS("particles-js",d.a,function(){})}},{key:"render",value:function(){return console.log("this.props",this.props),l.a.createElement("div",{style:{marginLeft:this.props.isDrawerOpen?"256px":"0px"}},l.a.createElement("div",{id:"particles-js",style:{backgroundImage:h.a}},l.a.createElement(m.a,{startDelay:100,stdTypingDelay:70,blink:!0,avgTypingDelay:200,cursor:{show:!0,blink:!0}},l.a.createElement("br",null),l.a.createElement(m.a.Delay,{ms:500}),l.a.createElement("br",null),l.a.createElement("span",null,"Conestoga's Web Enthusiasts..."))),l.a.createElement("div",{style:{padding:"50px",textAlign:"center"}},l.a.createElement("h3",null,"Web Usability"),l.a.createElement(p.a,{className:"textDecorationNone",to:"/usability",replace:!0},l.a.createElement(c.a,{label:"Get Started",primary:!0,buttonStyle:{backgroundColor:"#666666"}}))),l.a.createElement(u.Flex,{style:{margin:"0 40px 35px 60px",padding:"20px"}},l.a.createElement(u.Box,{width:.5,p:10},l.a.createElement("h4",null,"Usability"),"Easy to use web designs with interactive user experience is what we call ",l.a.createElement("i",null,"Usability"),". Usability decides whether user will stick to your website or go for some better options.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(p.a,{className:"textDecorationNone",to:"/usability",replace:!0},"This")," tutorial will help you to gain insight of Web Usability and helps you to build some awesome designs.",l.a.createElement("br",null),l.a.createElement("br",null),"You can also checkout out ",l.a.createElement(p.a,{className:"textDecorationNone",to:"/usabilityTesting",replace:!0},"Web Usability Testing"),"."),l.a.createElement(u.Box,{width:.5,p:10},l.a.createElement("h4",null,"Usability Testing"),"Web/App Development and Testing go hand in hand. Usability Testing does not mean monitoring your application with orthodox, quantitative analytics. Usability is now more of qualitative than quantitative.",l.a.createElement("br",null),l.a.createElement("br",null),"Let's learn how to perform web usability testing on you web apps.",l.a.createElement("br",null),l.a.createElement("br",null),"If you are not familiar with the term Web Usability, then you should checkout our ",l.a.createElement(p.a,{className:"textDecorationNone",to:"/usability",replace:!0},"Web Usability")," Tutorials.")))}}]),t}(i.Component)},"./components/MenuContainer.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("../node_modules/react/react.js"),l=n.n(i),s=n("../node_modules/material-ui/MenuItem/index.js"),c=n.n(s),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.a=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.a,null,"1"),l.a.createElement(c.a,null,"2"),l.a.createElement(c.a,null,"3"))}}]),t}(l.a.Component)},"./components/Usability.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("../node_modules/react/react.js"),l=n.n(i),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.a=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),s(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{marginLeft:this.props.isDrawerOpen?"300px":"50px",marginTop:"66px",width:"90%",padding:"1% 3% 3% 2%"}},l.a.createElement("h3",null,l.a.createElement("b",null,"Intro To Web Usability:")),l.a.createElement("p",null,"Usability means ease of use and the first think that needs to be taken care is the user should not be forced to think about what needs to done. As the questions in user's mind increase, the app becomes less usable.",l.a.createElement("br",null),l.a.createElement("br",null),"Self explanatory pages and flexible layout will increase usability. Below are the few attributes of Usability:"),l.a.createElement("div",null,l.a.createElement("ul",null,l.a.createElement("li",null,"  Useful"),l.a.createElement("li",null,"  Efficient"),l.a.createElement("li",null,"  Desirable"),l.a.createElement("li",null,"  Memorable"),l.a.createElement("li",null,"  Effective"),l.a.createElement("li",null,"  Delightful"))),l.a.createElement("h1",null,"Usability"),l.a.createElement("h1",null,"Usability"),l.a.createElement("h1",null,"Usability"))}}]),t}(i.Component)},"./components/UsabilityTesting.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("../node_modules/react/react.js"),l=n.n(i),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.a=function(e){function t(e){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),s(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{marginLeft:this.props.isDrawerOpen?"256px":"0px"}},l.a.createElement("h1",null,"UsabilityTesting"),l.a.createElement("h1",null,"Usability"),l.a.createElement("h1",null,"Usability"),l.a.createElement("h1",null,"Usability"),l.a.createElement("h1",null,"Usability"))}}]),t}(i.Component)},"./custom.css":function(e,t){},"./images/3_updated_new.jpg":function(e,t,n){e.exports=n.p+"/home/sudeep/Assignments/ui-assignment2images/3_updated_new_7bbffd2.jpg"},"./images/logo_updated.jpg":function(e,t,n){e.exports=n.p+"/home/sudeep/Assignments/ui-assignment2images/logo_updated_b49cf89.jpg"},"./index.css":function(e,t){},"./index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("../node_modules/react/react.js"),r=n.n(a),o=n("../node_modules/react-dom/index.js"),i=n.n(o),l=n("./index.css"),s=(n.n(l),n("./App.js")),c=n("./registerServiceWorker.js"),u=n("../node_modules/material-ui/styles/MuiThemeProvider.js"),p=n.n(u);n.n(n("../node_modules/react-tap-event-plugin/src/injectTapEventPlugin.js"))()(),i.a.render(r.a.createElement(p.a,null,r.a.createElement(s.a,null)),document.getElementById("root")),Object(c.a)()},"./particles.js":function(e,t,n){"use strict";t.a={particles:{number:{value:70,density:{enable:!0,value_area:2600}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:50,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:300,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:800,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:1,speed:3},repulse:{distance:150,duration:.4},push:{particles_nb:1},remove:{particles_nb:2}}},retina_detect:!0}},"./registerServiceWorker.js":function(e,t,n){"use strict";function a(){if("serviceWorker"in navigator){if(new URL(Object({NODE_ENV:"production"}).PUBLIC_URL,window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e=Object({NODE_ENV:"production"}).PUBLIC_URL+"/service-worker.js";i?(o(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):r(e)})}}function r(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}function o(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):r(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}t.a=a;var i=!("localhost"!==window.location.hostname&&"[::1]"!==window.location.hostname&&!window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},0:function(e,t,n){e.exports=n("./index.js")}},[0]);
//# sourceMappingURL=app.623fc3ed.js.map