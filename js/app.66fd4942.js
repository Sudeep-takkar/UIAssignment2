webpackJsonp(["app"],{"./App.css":function(e,t){},"./App.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("../node_modules/react/react.js"),s=n.n(r),l=n("../node_modules/material-ui/AppBar/index.js"),c=n.n(l),u=n("../node_modules/react-router-dom/es/index.js"),p=n("../node_modules/material-ui/Drawer/index.js"),m=n.n(p),d=n("../node_modules/history/createHashHistory.js"),f=n.n(d),h=n("./App.css"),b=(n.n(h),n("./custom.css")),y=(n.n(b),n("./components/MenuContainer.js")),g=n("./components/MainContent.js"),E=n("./components/Footer.js"),w=n("./components/Usability.js"),v=n("./components/UsabilityTesting.js"),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_=f()(),k={};_.listen(function(e){setTimeout(function(){var t=k.pathname!==e.pathname,n=k.hash!==e.hash;(t||n)&&window.scrollTo(0,0),k=e})}),t.a=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.update=function(){console.log("componentDidUpdate()")},n.toggleSideBar=function(){n.setState({isDrawerOpen:!n.state.isDrawerOpen})},n.state={isDrawerOpen:!1},n}return i(t,e),x(t,[{key:"render",value:function(){var e=this;return s.a.createElement(u.c,{history:_,onUpdate:function(){return e.update}},s.a.createElement("div",null,s.a.createElement(c.a,{title:s.a.createElement("div",null,s.a.createElement("a",{className:"skipMain",href:"/usability/"},"Skip to main content"),s.a.createElement(u.a,{className:"textDecorationNone",to:"/",replace:!0},s.a.createElement("img",{style:{width:"68px"},src:"https://image.ibb.co/fjd77x/logo_updated.jpg",alt:"Conestoga's Web Enthusiasts"}))),style:{position:"fixed",top:0,color:"white"},iconElementRight:s.a.createElement("input",{id:"searchInput",placeholder:" Search",style:{height:"33px",border:"1.25px solid white",background:"transparent",color:"white",width:"75%"}}),onLeftIconButtonTouchTap:this.toggleSideBar}),s.a.createElement(m.a,{open:this.state.isDrawerOpen,containerStyle:{marginTop:"65px"}},s.a.createElement(y.a,{toggleSideBar:this.toggleSideBar})),s.a.createElement(u.d,null,s.a.createElement(u.b,{exact:!0,path:"/",component:function(){return s.a.createElement(g.a,{isDrawerOpen:e.state.isDrawerOpen})}}),s.a.createElement(u.b,{path:"/usability",component:function(){return s.a.createElement(w.a,{isDrawerOpen:e.state.isDrawerOpen})}}),s.a.createElement(u.b,{path:"/usabilityTesting",component:function(){return s.a.createElement(v.a,{isDrawerOpen:e.state.isDrawerOpen})}})),s.a.createElement(E.a,{isDrawerOpen:this.state.isDrawerOpen})))}}]),t}(r.Component)},"./components/Footer.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("../node_modules/react/react.js"),s=n.n(r),l=n("../node_modules/materialize-css/dist/css/materialize.min.css"),c=(n.n(l),n("../node_modules/react-router-dom/es/index.js")),u=n("../node_modules/react-icons/lib/ti/export.js"),p=n.n(u),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.a=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),m(t,[{key:"render",value:function(){return s.a.createElement("footer",{className:"page-footer",style:{marginLeft:this.props.isDrawerOpen?"256px":"0px"}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col l6 s12"},s.a.createElement(c.a,{className:"textDecorationNone",to:"/",replace:!0},s.a.createElement("img",{style:{width:"68px"},src:"https://image.ibb.co/fjd77x/logo_updated.jpg",alt:"Conestoga's Web Enthusiasts"})),s.a.createElement("p",{className:"grey-text text-lighten-4"},"Conestoga's Web Enthusiasts (CWE) is a Usability tutorial website that provides tutorials of usability and usability testing.")),s.a.createElement("div",{className:"col l4 offset-l2 s12"},s.a.createElement("h5",{className:"white-text"},"Popular Topics"),s.a.createElement("ul",{style:{marginLeft:"25px"}},s.a.createElement("li",null,s.a.createElement(c.a,{style:{color:"white"},className:"textDecorationNone",to:"/usability",replace:!0},"Web Usability ",s.a.createElement(p.a,{className:"exportLink"}))),s.a.createElement("li",null,s.a.createElement(c.a,{style:{color:"white"},className:"textDecorationNone",to:"/usabilityTesting",replace:!0},"Web Usability Testing",s.a.createElement(p.a,{className:"exportLink"}))))))),s.a.createElement("div",{className:"footer-copyright"},s.a.createElement("div",{className:"container"})))}}]),t}(r.Component)},"./components/MainContent.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("../node_modules/react/react.js"),s=n.n(r),l=n("../node_modules/material-ui/RaisedButton/index.js"),c=n.n(l),u=n("../node_modules/grid-styled/dist/index.js"),p=(n.n(u),n("../node_modules/react-router-dom/es/index.js")),m=n("../node_modules/react-typist/dist/Typist.js"),d=n.n(m),f=n("./particles.js"),h=n("../node_modules/particles.js/particles.js"),b=(n.n(h),n("../node_modules/react-icons/lib/ti/export.js")),y=n.n(b),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.a=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),g(t,[{key:"componentDidMount",value:function(){window.particlesJS("particles-js",f.a,function(){})}},{key:"render",value:function(){return console.log("this.props",this.props),s.a.createElement("div",{style:{marginLeft:this.props.isDrawerOpen?"256px":"0px"}},s.a.createElement("div",{id:"particles-js"},s.a.createElement(d.a,{startDelay:100,stdTypingDelay:70,blink:!0,avgTypingDelay:200,cursor:{show:!0,blink:!0}},s.a.createElement("br",null),s.a.createElement(d.a.Delay,{ms:500}),s.a.createElement("br",null),s.a.createElement("span",null,"Conestoga's Web Enthusiasts..."))),s.a.createElement("div",{style:{padding:"50px",textAlign:"center"}},s.a.createElement("h3",null,"Web Usability"),s.a.createElement(p.a,{className:"textDecorationNone",to:"/usability",replace:!0},s.a.createElement(c.a,{children:s.a.createElement("span",{style:{padding:"10px",color:"white"},key:1},"Get Started ",s.a.createElement(y.a,{className:"exportLink"})),primary:!0,buttonStyle:{backgroundColor:"#666666"}}))),s.a.createElement(u.Flex,{style:{margin:"0 40px 35px 60px",padding:"20px"}},s.a.createElement(u.Box,{width:.5,p:10},s.a.createElement("h4",null,"Usability"),s.a.createElement("p",null,"Easy to use web designs with interactive user experience is what we call ",s.a.createElement("i",null,"Usability"),". Usability decides whether user will stick to your website or go for some better options."),s.a.createElement("p",null,s.a.createElement(p.a,{className:"textDecorationNone",to:"/usability",replace:!0},"This",s.a.createElement(y.a,{className:"exportLink"}))," tutorial will help you to gain insight of Web Usability and helps you to build some awesome designs."),s.a.createElement("p",null,"You can also checkout out ",s.a.createElement(p.a,{className:"textDecorationNone",to:"/usabilityTesting",replace:!0},"Web Usability Testing",s.a.createElement(y.a,{className:"exportLink"}))," tutorial.")),s.a.createElement(u.Box,{width:.5,p:10},s.a.createElement("h4",null,"Usability Testing"),s.a.createElement("p",null,"Web/App Development and Testing go hand in hand. Usability Testing does not mean monitoring your application with orthodox, quantitative analytics. Usability Testing is now more of qualitative than quantitative."),s.a.createElement("p",null,"Let's learn how to perform web usability testing on you web apps."),s.a.createElement("p",null,"If you are not familiar with the term Web Usability, then you should checkout our ",s.a.createElement(p.a,{className:"textDecorationNone",to:"/usability",replace:!0},"Web Usability",s.a.createElement(y.a,{className:"exportLink"}))," Tutorials."))))}}]),t}(r.Component)},"./components/MenuContainer.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("../node_modules/react/react.js"),s=n.n(r),l=n("../node_modules/material-ui/MenuItem/index.js"),c=n.n(l),u=n("../node_modules/react-router-dom/es/index.js"),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.a=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.changeBackGround=function(e){console.log(e),e&&n.setState({backgroundColor:e})},n.state={backgroundColor:0},n}return i(t,e),p(t,[{key:"componentDidMount",value:function(){console.log(window.location.hash,this.state.backgroundColor),this.changeBackGround(0)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(u.a,{className:"textDecorationNone",to:"/usability",replace:!0},s.a.createElement(c.a,null,"Web Usability")),s.a.createElement(u.a,{className:"textDecorationNone",to:"/usabilityTesting",replace:!0},s.a.createElement(c.a,null,"Web Usability Testing")))}}]),t}(s.a.Component)},"./components/Usability.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("../node_modules/react/react.js"),s=n.n(r),l=n("../node_modules/react-router-dom/es/index.js"),c=n("../node_modules/react-icons/lib/ti/export.js"),u=n.n(c),p=n("../node_modules/react-icons/lib/ti/chevron-right.js"),m=n.n(p),d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.a=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),d(t,[{key:"render",value:function(){return s.a.createElement("div",{style:{marginLeft:this.props.isDrawerOpen?"300px":"50px",marginTop:"66px",maxWidth:"90%",padding:"1% 3% 3% 2%"}},s.a.createElement("div",null,s.a.createElement("ul",{className:"breadcrumb",style:{padding:"15px 21px"}},s.a.createElement(l.a,{className:"textDecorationNone",to:"/",replace:!0},s.a.createElement("li",null,"Home")),s.a.createElement(m.a,{style:{color:"#a5abb1"}}),s.a.createElement("li",null,"Web Usability"))),s.a.createElement("h3",{id:"main"},s.a.createElement("b",null,"Introduction To Web Usability:")),s.a.createElement("p",null,"Usability means ease of use and the first think that needs to be taken care is the user should not be forced to think about what needs to done. As the questions in user's mind increase, the app becomes less usable. Self explanatory pages and flexible layout will increase usability."),s.a.createElement("p",null,"Below are the few attributes of Usability:"),s.a.createElement("div",{style:{marginLeft:"45px"}},s.a.createElement("ul",{style:{fontSize:"medium"}},s.a.createElement("li",null," Useful"),s.a.createElement("li",null," Efficient"),s.a.createElement("li",null," Desirable"),s.a.createElement("li",null," Memorable"),s.a.createElement("li",null," Effective"),s.a.createElement("li",null," Delightful"))),s.a.createElement("p",null,"While using web/mobile applications, user scan pages instead of reading them to perform the task in hand."),s.a.createElement("img",{src:"https://image.ibb.co/n1tacx/heatmap.png",alt:"heat map"}),s.a.createElement("p",null,"Such ",s.a.createElement("em",null,"Heatmap")," testing results of Mobile/Web app are very useful to find the areas or keywords which attracts the potential users the most."),s.a.createElement("p",null,"Above Usability Testing result shows that users do not go for the best option, they choose the reasonable options. It is a known fact that humans are good at scanning and we use this ability of scanning while performing day to day tasks using web/mobile apps. Users realize the importance of scanning when users are unable to perform it while completing a task in hand. During this process of scanning, if the questions about the usability of app in user's mind increases, then user will most likely switch to app with better design."),s.a.createElement("h4",null,s.a.createElement("b",null,"Conventions:")),s.a.createElement("p",null,"Conventions play an important role in web usability. Visual hierarchy needs to be clear and prominent. While designing applications, conventions need to be followed unless your idea is better. Self-defined sections of pages and guiding users to achieve their final goal are some conventions that are obvious."),s.a.createElement("p",null,"Make your designs visually busy and always make sure that the background noise is minimum. Users do not mind clicking a wrong link if it is an easy click. Remove less important text and instructions from all pages and make pages self explanatory as user will loiter through app anyway."),s.a.createElement("img",{alt:"Main Page",style:{width:"55%"},src:"https://image.ibb.co/eQRTEc/mainpage.png"}),s.a.createElement("h4",null,s.a.createElement("b",null,"Navigation:")),s.a.createElement("p",null,"Users will stop using your app if they can not navigate through it easily. Some users will look for search box and some will browse the site. Breadcrumbs can be used to navigate through pages of the application. Home page is significantly important before it acts like a reference page and user can start all over again from that page. Always give new user a start like selecting a default active tab so that they can start from somewhere. Make sure the active tab appears different than inactive tabs."),s.a.createElement("img",{src:"https://image.ibb.co/chkAvH/Usability_Assignment_2_1.png",alt:"breadcrumbs for navigation",style:{width:"55%"}}),s.a.createElement("div",{style:{paddingLeft:"15%"}},s.a.createElement("em",null,"Breadcrumbs for smooth navigation")),s.a.createElement("h4",null,s.a.createElement("b",null,"Important points to remember:")),s.a.createElement("div",{style:{marginLeft:"45px"}},s.a.createElement("ul",{style:{fontSize:"medium"}},s.a.createElement("li",null,"Most of the doubts of a user must be cleared by looking at the Home page."),s.a.createElement("li",null,"Tag line must be self descriptive."),s.a.createElement("li",null,"Your app should have persistent navigation."),s.a.createElement("li",null,"User Experience should be common through out the app."),s.a.createElement("li",null,"Design should be accessible to users with accessibility issues."),s.a.createElement("li",null,'There should be a "Skip to Main Content" link at the beginning of each page.'),s.a.createElement("li",null,"Never ask unnecessary personal information like credit card details."),s.a.createElement("li",null,"Response time from the server should not be too long."))),s.a.createElement("h4",null,s.a.createElement("b",null,"Next Step:")),s.a.createElement("p",null,"Now you are aware of the web/mobile Usability concepts. Let's take a look at ",s.a.createElement(l.a,{className:"textDecorationNone",to:"/usabilityTesting",replace:!0},"Usability Testing ",s.a.createElement(u.a,{className:"exportLink"}),".")))}}]),t}(r.Component)},"./components/UsabilityTesting.js":function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("../node_modules/react/react.js"),s=n.n(r),l=n("../node_modules/react-router-dom/es/index.js"),c=n("../node_modules/react-icons/lib/ti/chevron-right.js"),u=n.n(c),p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.a=function(e){function t(e){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),p(t,[{key:"render",value:function(){return s.a.createElement("div",{style:{marginLeft:this.props.isDrawerOpen?"300px":"50px",marginTop:"66px",maxWidth:"90%",padding:"1% 3% 3% 2%"}},s.a.createElement("div",null,s.a.createElement("ul",{className:"breadcrumb",style:{padding:"15px 21px"}},s.a.createElement(l.a,{className:"textDecorationNone",to:"/",replace:!0},s.a.createElement("li",null,"Home")),s.a.createElement(u.a,{style:{color:"#a5abb1"}}),s.a.createElement("li",null,"Web Usability Testing"))),s.a.createElement("h3",{id:"main"},s.a.createElement("b",null,"Introduction To Usability Testing:")),s.a.createElement("p",null,"Usability Testing does not mean monitoring your application with orthodox, quantitative analytics. Usability Testing is now more of qualitative than quantitative. Let's learn how to perform web usability testing on you web apps. If you are not familiar with the term Web Usability, then you should checkout our ",s.a.createElement(l.a,{className:"textDecorationNone",to:"/usability",replace:!0},"Web Usability")," Tutorials."),s.a.createElement("p",null,"Quality Testing is done by focusing on insights. You should focus on serious problems as they are easy to find. Analytical tools indicates user's behaviour, but they do not tell why they are behaving like that."),s.a.createElement("p",null,"Pre-scheduled tests are good for the quality of the app. Initial releases are not presentable but it will be beneficial if we do so."),s.a.createElement("p",null,"It is better to learn from your own mistakes. Also, learning from your competitors' mistakes will keep you one step ahead from them."),s.a.createElement("h4",null,s.a.createElement("b",null,"Finding potential users for Testing:")),s.a.createElement("p",null,"Usability Testing focuses on what users think about the app, but not on their feedback or opinion. Users with domain knowledge must be preferred. Screening of the invited users for testing workshop to find potential users, can give you valuable insights of your app. Also, avoid same users for more than one usability testing workshop. Testing sessions are a joint effort from users, developers and designers with a common goal to find valuable insights of the application."),s.a.createElement("p",null,"According to Andy Zaidman, his son is the best tester in the world. His son throws away stuff in various places and observe what happens. The behaviour of Andy's son can be compared with the playful attitude of a user. Take a look at his ",s.a.createElement("b",null,"Tedx")," speech."),s.a.createElement("iframe",{style:{width:"65%",height:"315px"},src:"https://www.youtube.com/embed/IfXVEz_mMHI",allowFullScreen:!0}),s.a.createElement("div",{style:{width:"65%"}},s.a.createElement("a",{href:"https://www.youtube.com/watch?v=IfXVEz_mMHI",target:"__blank",alt:"TEDxTalks. “Making Testing Fun | Andy Zaidman | TEDxDelft.”"},"Source:"),"TEDxTalks. “Making Testing Fun | Andy Zaidman | TEDxDelft.” YouTube, YouTube, 26 Mar. 2015, www.youtube.com/watch?v=IfXVEz_mMHI. Web. March 14, 2018"),s.a.createElement("h4",null,s.a.createElement("b",null,"Role of Stakeholders:")),s.a.createElement("p",null,"Stakeholders like sponsors must attend testing workshops instead of watching recorded sessions. Inputs from stakeholders are important for the usability testing. Observers play an important role in such testing sessions as their opinions and suggestions are the key to success for usability test sessions."),s.a.createElement("p",null,"An important aspect of testing session is to find as many problems as possible instead of thinking about how to solve them. Once the problems are listed, then you should focus on prioritizing the usability problems. Number of problems are most likely more than the resources required to solve them. All usability problems can not be solved in the initial release."),s.a.createElement("h5",null,s.a.createElement("b",null,"Things to remember about usability testing:")),s.a.createElement("div",{style:{marginLeft:"45px"}},s.a.createElement("ul",{style:{fontSize:"medium"}},s.a.createElement("li",null,"Always try to implement simple and small solutions before going for redesigning the whole prototype."),s.a.createElement("li",null,"Visual differentiation is important as significant things must be accessed easily."),s.a.createElement("li",null,"Remote testing is a cheap but less efficient."))))}}]),t}(r.Component)},"./custom.css":function(e,t){},"./index.css":function(e,t){},"./index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("../node_modules/react/react.js"),o=n.n(a),i=n("../node_modules/react-dom/index.js"),r=n.n(i),s=n("./index.css"),l=(n.n(s),n("./App.js")),c=n("./registerServiceWorker.js"),u=n("../node_modules/material-ui/styles/MuiThemeProvider.js"),p=n.n(u);n.n(n("../node_modules/react-tap-event-plugin/src/injectTapEventPlugin.js"))()(),r.a.render(o.a.createElement(p.a,null,o.a.createElement(l.a,null)),document.getElementById("root")),Object(c.a)()},"./particles.js":function(e,t,n){"use strict";t.a={particles:{number:{value:70,density:{enable:!0,value_area:2600}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:10,random:!0,anim:{enable:!1,speed:50,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:300,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:800,line_linked:{opacity:1}},bubble:{distance:800,size:80,duration:2,opacity:1,speed:3},repulse:{distance:150,duration:.4},push:{particles_nb:1},remove:{particles_nb:2}}},retina_detect:!0}},"./registerServiceWorker.js":function(e,t,n){"use strict";function a(){if("serviceWorker"in navigator){if(new URL(Object({NODE_ENV:"production"}).PUBLIC_URL,window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e=Object({NODE_ENV:"production"}).PUBLIC_URL+"/service-worker.js";r?(i(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):o(e)})}}function o(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}function i(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):o(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}t.a=a;var r=!("localhost"!==window.location.hostname&&"[::1]"!==window.location.hostname&&!window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))},0:function(e,t,n){e.exports=n("./index.js")}},[0]);
//# sourceMappingURL=app.66fd4942.js.map