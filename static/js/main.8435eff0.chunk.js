(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{20:function(e,t,i){},71:function(e,t,i){},73:function(e,t,i){},84:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),c=i(13),r=i.n(c),s=(i(71),i(19)),o=i.n(s),l=i(33),d=(i(73),i(20),i(120)),j=i(110),h=i(16),b=i(124),m=i(125),x=i(116),g=i(87),O=i(117),u=i(123),p=i(118),f=i(119),y=i(105),w=i(108),v=i(50);function k(){var e=new URLSearchParams(window.location.search);return{address:e.get("address"),contract:e.get("contract"),page:e.get("page")}}var S=i(0),I=Object(a.createContext)({globalState:{},setGlobalState:{}}),C=function(e){var t=e.children,i=e.value,n=void 0===i?{}:i,c=Object(a.useState)(n),r=Object(h.a)(c,2),s=r[0],o=r[1];return Object(S.jsx)(I.Provider,{value:{globalState:s,setGlobalState:function(e){var t=Object(v.a)(Object(v.a)({},s),e);k().page===t.page||!k().page&&"home"===t.page||window.history.pushState(null,"","".concat(window.location.pathname).concat("home"===t.page?"":"?page=".concat(t.page))),o(t)}},children:t})},M=function(){var e=Object(a.useContext)(I);if(!e)throw new Error("useGlobalState must be used within a GlobalStateContext");return e},P=i(107),T=i.p+"static/media/darkModeResume.dea7ef58.png",N=i.p+"static/media/lightModeResume.cfcb99b1.png",L=i.p+"static/media/aper1.2daf6b18.png",A=i.p+"static/media/danielv1.1b7e1421.JPG",D=i.p+"static/media/paperAirplane.e8a7d690.jpg";function R(){var e=M(),t=(e.globalState,e.setGlobalState);Object(a.useEffect)((function(){setTimeout((function(){sessionStorage.setItem("animPlayed","true")}),4500)}),[]);var i=!sessionStorage.getItem("animPlayed"),n=function(e,a,n,c){return Object(S.jsx)(y.a,{item:!0,xs:12,sm:6,md:6,className:"category ".concat(i?"c".concat(c):""),children:Object(S.jsxs)(P.a,{className:"categoryContent",elevation:10,onClick:function(){t({page:n})},children:[Object(S.jsx)("img",{className:"categoryContentImage",src:a}),Object(S.jsx)("div",{className:"categoryContentText",children:Object(S.jsx)(g.a,{variant:"h4",style:{},children:e})})]})})};return Object(S.jsxs)(y.a,{container:!0,children:[Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)("br",{}),Object(S.jsx)("div",{style:{display:"inline-block",verticalAlign:"top"},children:Object(S.jsx)(g.a,{variant:"h2",className:i?"typewriter":"",children:"Hi! I'm Daniel."})}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{style:{display:"inline-block",verticalAlign:"top"},children:Object(S.jsx)(g.a,{variant:"h4",className:i?"typewriter2":"",children:"Thanks for checking out my site!"})})]}),n("About Me",A,"about",0),n("Contact",D,"contact",1),n("Resume",window.darkMode?T:N,"resume",2),n("Portfolio",L,"portfolio",3)]})}var F=i(109),E=i.p+"static/media/daniel.db78ff83.jpg";function G(){var e=M(),t=(e.globalState,e.setGlobalState);return Object(S.jsxs)(y.a,{container:!0,children:[Object(S.jsxs)(y.a,{item:!0,xs:12,style:{marginBottom:"2vh"},children:[Object(S.jsx)(g.a,{variant:"h4",children:"Hi! I'm Daniel."}),Object(S.jsx)("br",{}),Object(S.jsx)(w.a,{})]}),Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsx)(P.a,{style:{padding:"2vw",width:"100%"},children:Object(S.jsxs)(y.a,{container:!0,children:[Object(S.jsx)(y.a,{item:!0,sm:4,xs:12,children:Object(S.jsx)("img",{src:E,className:"danielImage"})}),Object(S.jsxs)(y.a,{item:!0,sm:8,xs:12,style:{padding:"0vh 2vw 0vh 2vw"},children:[Object(S.jsxs)(g.a,{align:"left",children:["I'm a 3rd year Computer Science student at Colorado State University, and an aspiring Software Engineer.",Object(S.jsx)("br",{}),"As a software engineer, I am most interested in the following:"]}),Object(S.jsx)("div",{className:"MuiTypography-alignLeft MuiTypography-root MuiTypography-body1",children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"Full-Stack Software Engineering"}),Object(S.jsx)("li",{children:"Clever Frontend Engineering (Like this site!)"}),Object(S.jsx)("li",{children:"Backend/Server Engineering which functions harmoniously with a frontend application"}),Object(S.jsx)("li",{children:"3D Worlds and Simulations"}),Object(S.jsxs)("li",{children:["The integration of AI ","&"," ML into physical things"]}),Object(S.jsx)("li",{children:"Geospatial-Temporal data visualization"})]})}),Object(S.jsxs)(g.a,{align:"left",children:["I'm currently on the hunt for Summer 2022 internships, so if you like my stuff,",Object(S.jsx)("br",{})]}),Object(S.jsx)(y.a,{container:!0,children:Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsx)(F.a,{variant:"contained",color:"primary",style:{margin:"15px"},onClick:function(){t({page:"contact"})},children:"Contact Me!"})})})]})]})})})]})}var H=i(111),z=i(112),B=i(113),U=i(114),J=i(115),W=i.p+"static/media/linkedin.7a5eab93.png",V=i.p+"static/media/github.ff264807.png",_=i.p+"static/media/youtube.6f9e32ba.png",q=i.p+"static/media/instagram.30c4a6fe.png";function Q(){var e=M(),t=(e.globalState,e.setGlobalState,function(e,t){return Object(S.jsx)("img",{className:"socialImage",src:e,onClick:function(){window.open(t)}})});return Object(S.jsxs)(y.a,{container:!0,children:[Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)(g.a,{variant:"h4",align:"center",children:"How to contact me."}),Object(S.jsx)("br",{}),Object(S.jsx)(w.a,{}),Object(S.jsx)("br",{}),Object(S.jsx)(j.a,{maxWidth:"sm",children:Object(S.jsx)(H.a,{component:P.a,children:Object(S.jsx)(z.a,{children:Object(S.jsxs)(B.a,{children:[Object(S.jsxs)(U.a,{children:[Object(S.jsx)(J.a,{children:"By Email"}),Object(S.jsx)(J.a,{children:Object(S.jsx)("a",{href:"mailto: danielreynolds101@gmail.com",style:{textDecoration:"none"},target:"_blank",children:Object(S.jsx)(g.a,{color:"textPrimary",children:"danielreynolds101@gmail.com"})})})]}),Object(S.jsxs)(U.a,{children:[Object(S.jsx)(J.a,{children:"LinkedIn"}),Object(S.jsx)(J.a,{children:Object(S.jsx)("a",{href:"https://linkedin.com/in/daniel-reynolds-software-engineer",style:{textDecoration:"none"},target:"_blank",children:Object(S.jsx)(g.a,{color:"textPrimary",children:"linkedin.com/in/daniel-reynolds-software-engineer"})})})]})]})})})}),Object(S.jsx)("br",{})]}),Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)(w.a,{}),Object(S.jsx)("br",{}),Object(S.jsx)(g.a,{variant:"h4",children:"My Various Socials."}),Object(S.jsx)("br",{}),t(W,"https://www.linkedin.com/in/daniel-reynolds-software-engineer"),t(V,"https://github.com/drg101"),t(_,"https://www.youtube.com/channel/UCN4FI-F77dgfh-CI5zt9s4w"),t(q,"https://www.instagram.com/danielreynolds101/?hl=en")]})]})}function Y(){var e=M(),t=(e.globalState,e.setGlobalState);return Object(S.jsxs)(y.a,{container:!0,justify:"flex-start",children:[Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)(g.a,{variant:"h4",align:"center",children:"My Resume."}),Object(S.jsx)("br",{}),Object(S.jsx)(w.a,{}),Object(S.jsx)("br",{})]}),Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsxs)(P.a,{style:{padding:"2vw"},children:[Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsx)(g.a,{variant:"h4",align:"left",children:"Daniel Reynolds"})}),Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsx)(y.a,{container:!0,children:Object(S.jsx)(y.a,{item:!0,children:Object(S.jsx)(F.a,{variant:"contained",color:"primary",style:{margin:"15px",marginLeft:"0"},onClick:function(){t({page:"contact"})},children:"Contact Me!"})})})}),Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsxs)(g.a,{align:"left",children:["Hard-working, fast learning, and self-driven Computer Science student looking to implement relevant technologies and gain critical skills through Software Engineering internships. Knowledge and interest in Frontend ","& ","Full Stack Software Engineering, AI/ML, 3d Worlds and simulations, and the integration of well-designed software into physical things."]})})]})}),Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)("br",{}),Object(S.jsx)(w.a,{}),Object(S.jsx)("br",{})]}),Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsx)(P.a,{style:{padding:"2vw"},children:Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)(g.a,{variant:"h5",align:"left",children:"Experience"}),Object(S.jsx)("br",{}),Object(S.jsxs)(g.a,{align:"left",children:[Object(S.jsx)("b",{children:"Full-Stack Software Engineer"})," - ",Object(S.jsx)("i",{children:"Project Sustain, Colorado State University"}),Object(S.jsx)("br",{}),"Feburary 2020 \u2192 Present"]}),Object(S.jsx)("div",{className:"resumeBullets",children:Object(S.jsxs)(g.a,{align:"left",children:[Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"\ud83d\uddfa\ufe0f Engineered ","&"," developed an innovative geospatial visualization system for the web.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"\ud83d\udc68\u200d\ud83d\udcbb Sourced, downloaded, curated, ingested, queried, processed, and rendered hundreds of diverse datasets.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"\ud83c\udf93 Learned & Applied relevant Full-Stack skills including JavaScript, ReactJS, TypeScript, gRPC, Express, Bash, Envoy, MongoDB, Java, GitHub, CI, Code Climate, ZenHub and more.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"\u26a1 Accelerated client performance by leveraging modern web features, pushing the boundaries for what is possible for a web app."]})}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsxs)(g.a,{align:"left",children:[Object(S.jsxs)("b",{children:["Web Developer ","&"," Video Creator"]})," - ",Object(S.jsx)("i",{children:"Digital Learning With Infospaces, Colorado State University"}),Object(S.jsx)("br",{}),"Feburary 2020 \u2192 May 2020"]}),Object(S.jsx)("div",{className:"resumeBullets",children:Object(S.jsxs)(g.a,{align:"left",children:[Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"\u200d\ud83d\udcbb Responsible for adding features to a how-to video site created for CSU Computer Science students.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"\ud83c\udfa5 Learned and consolidated complex topics into 2-minute videos that contained essential content."]})})]})})}),Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)("br",{}),Object(S.jsx)(w.a,{}),Object(S.jsx)("br",{})]}),Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsx)(P.a,{style:{padding:"2vw"},children:Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)(g.a,{variant:"h5",align:"left",children:"Education"}),Object(S.jsx)("br",{}),Object(S.jsxs)(g.a,{align:"left",children:[Object(S.jsx)("b",{children:"Colorado State University, Fort Collins"})," - ",Object(S.jsx)("i",{children:"Bachelor of Science in Computer Science, Artificial Intelligence and Machine Learning Concentration with a Minor in Mathematics"}),Object(S.jsx)("br",{}),"August 2019 \u2192 Present \u2192 December 2022"]}),Object(S.jsx)("div",{className:"resumeBullets",children:Object(S.jsxs)(g.a,{align:"left",children:[Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"\ud83c\udf93 GPA: 3.97",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"\u270f\ufe0f Learned relevant skills and technologies for the modern job-scape through hands-on coursework and projects."]})})]})})}),Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)("br",{}),Object(S.jsx)(w.a,{}),Object(S.jsx)("br",{})]}),Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsx)(P.a,{style:{padding:"2vw"},children:Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)(g.a,{variant:"h5",align:"left",children:"Skills"}),Object(S.jsx)("br",{}),Object(S.jsxs)(g.a,{align:"left",children:[Object(S.jsx)("b",{children:"Technical Skills"}),Object(S.jsx)("br",{}),"JavaScript \u25cf TypeScript \u25cf ReactJS \u25cf NodeJS \u25cf Webpack \u25cf Express \u25cf Envoy \u25cf SocketIO \u25cf gRPC \u25cf MongoDB \u25cf Git/Github \u25cf CI \u25cf Python \u25cf Numpy \u25cf OpenCV \u25cf PyTorch \u25cf Python \u25cf  Unity \u25cf C# \u25cf C++ \u25cf C \u25cf Java \u25cf HTML/CSS",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)("b",{children:"Soft Skills"}),Object(S.jsx)("br",{}),"Team worker \u25cf Critical Thinker \u25cf Self Motivated \u25cf Problem Solver \u25cf Dependable \u25cf Adaptable \u25cf Hard Worker"]})]})})}),Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)("br",{}),Object(S.jsx)(w.a,{}),Object(S.jsx)("br",{})]}),Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsx)(P.a,{style:{padding:"2vw"},children:Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)(g.a,{variant:"h5",align:"left",children:"Projects"}),Object(S.jsx)("br",{}),Object(S.jsx)(y.a,{container:!0,children:Object(S.jsx)(y.a,{item:!0,children:Object(S.jsx)(F.a,{variant:"contained",color:"primary",onClick:function(){t({page:"portfolio"})},children:"View My Portfolio"})})})]})})})]})}var K=i.p+"static/media/bobv1.cb176fbc.jpg",Z=i.p+"static/media/bobPlan.2268ad4d.jpg",X=i.p+"static/media/fastLoad.a565f6a1.gif",$=i.p+"static/media/infospaces.5abddf6a.png",ee=i.p+"static/media/TrueNorthHQ.35b93812.jpg",te=i.p+"static/media/aper2.377948a8.PNG",ie=i.p+"static/media/algosJupy.8584e922.png",ae=i.p+"static/media/githubHQ.eeb8324d.png";function ne(){var e,t=M(),i=(t.globalState,t.setGlobalState),n=Object(a.useState)("newToOld"),c=Object(h.a)(n,2),r=c[0],s=(c[1],{content:Object(S.jsx)(y.a,{container:!0,children:Object(S.jsxs)(y.a,{container:!0,alignItems:"center",children:[Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("img",{src:ee,style:{width:"50%"}})}),Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsxs)("div",{className:"textPadded",children:[Object(S.jsxs)(g.a,{align:"left",children:["In the first half of 2019 as I was finishing high school, I decided it was time to put my self-taught Unity skills to work. In high school, I played quite alot of first person shooter (FPS) games, so I decided that would be the type of game I would make.",Object(S.jsx)("br",{}),"Looking at this project in hindsight, it definetly is a bit silly, but hey, I was in high school.",Object(S.jsx)("br",{}),"For this project, I:"]}),Object(S.jsx)("div",{className:"MuiTypography-alignLeft MuiTypography-root MuiTypography-body1",children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"Created an entire ~2h playthrough videogame."}),Object(S.jsx)("li",{children:"Designed and Implemented an entire logic system for the game, from destructable environmets to A.I. bots. (Theres alot to talk about here!)."}),Object(S.jsx)("li",{children:"Poured 1000+ hours of development into the game."}),Object(S.jsx)("li",{children:"Created procedural generation systems to design worlds for me."})]})}),Object(S.jsx)(g.a,{align:"left",children:"I am honestly proud of what I created at such a young age and with so little experience. The game now has over 500+ downloads on itch.io and Steam, which I think is pretty cool."})]})})]})}),timeStart:new Date("1/01/2019").valueOf(),name:"True North, Published Video game",dates:"January 2019 \u2192 July 2019"}),o={content:Object(S.jsx)(y.a,{container:!0,children:Object(S.jsxs)(y.a,{container:!0,alignItems:"center",children:[Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("img",{src:ie,style:{width:"100%"}})}),Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsxs)("div",{className:"textPadded",children:[Object(S.jsx)(g.a,{align:"left",children:'\u2003\u2003For the spring semester of 2021, I decided to take the "Mathematic of Information Security," also known as cryptography. The proffessor for this class was awesome, and let us build our own programming libraries to use for homework and tests.'}),Object(S.jsx)(g.a,{align:"left",children:"\u2003\u2003So logically, I started writing an absolutely massive amount of Python for this class, implementing every single algorithm, theorem, and formula we learned. This code is now all available on GitHub, totaling to over 60+ files. This library features some cool stuff like:"}),Object(S.jsx)("div",{className:"MuiTypography-alignLeft MuiTypography-root MuiTypography-body1",children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"RSA from scratch."}),Object(S.jsx)("li",{children:"Diffie-Hellman from scratch."}),Object(S.jsx)("li",{children:"Zero-Knowledge-Proofs from scratch."}),Object(S.jsx)("li",{children:"Optimized methods for the fast execution of cryptographic functions."}),Object(S.jsx)("li",{children:"Fast, giant prime creation."})]})}),Object(S.jsx)(y.a,{container:!0,children:Object(S.jsx)(y.a,{item:!0,children:Object(S.jsx)(F.a,{variant:"contained",color:"primary",style:{margin:"15px",marginLeft:"0"},onClick:function(){window.open("https://github.com/drg101/M360-algos","_blank")},children:"View it On GitHub"})})})]})})]})}),timeStart:new Date("1/23/2021").valueOf(),name:"Cryptography Python Library",dates:"January 2021 \u2192 May 2021"},l={content:Object(S.jsx)(y.a,{container:!0,children:Object(S.jsxs)(y.a,{container:!0,alignItems:"center",children:[Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("img",{src:$,style:{width:"100%"}})}),Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsxs)("div",{className:"textPadded",children:[Object(S.jsx)(g.a,{align:"left",children:"In the spring of 2020, before I transitioned primarily to research, I worked on a video site specifically for CSU Computer Science Students. For this site, I:"}),Object(S.jsx)("div",{className:"MuiTypography-alignLeft MuiTypography-root MuiTypography-body1",children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"Added short but concise 2-minute videos for entry-level CS students. Topics for these videos included SSH'ing into the CS Department's Machines, getting started with the Unix/Linux Shell, and Git."}),Object(S.jsx)("li",{children:"Designed and implemented high-quality features for the website. These included: video deletion, video editing, a playlist system (Which is now a really big deal!), and a admin account."}),Object(S.jsx)("li",{children:"Learned PHP, SQL, ffmpeg, and other monolithic technologies that make up a huge part of systems today."})]})}),Object(S.jsx)(g.a,{align:"left",children:"I am super proud of what I accomplished in a short time on this project. Some of my videos now have over 1,000 views, just from CS students at CSU! I also was the creator of our playlist system, which has functioned flawlessly since I created it."})]})})]})}),timeStart:new Date("2/01/2020").valueOf(),name:"Video Creation & Web Developing",dates:"Febuary 2020 \u2192 May 2020"},d={content:Object(S.jsxs)(y.a,{container:!0,children:[Object(S.jsxs)(y.a,{container:!0,alignItems:"center",children:[Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("img",{src:X,style:{width:"100%"}})}),Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("div",{className:"textPadded",children:Object(S.jsxs)(g.a,{align:"left",children:["For the past year and a half, my primary work as been on an urban sustainablity project, called Project Sustain here at Colorado State Univeristies' Computer Science Department.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"A great example of what I've been doing is illustrated by this animation, in which 50+ megabytes of county income information is rendered at blisteringly fast speeds onto a Leaflet map, all on a mediocre internet connection. Much of this acceleration is due to novel hashing techniques which I implemented on the server and client.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"If you want to hear more about what I've been doing in this project,",Object(S.jsx)(F.a,{variant:"contained",color:"primary",style:{margin:"15px",marginLeft:"0"},onClick:function(){i({page:"contact"})},children:"Contact Me!"})]})})})]}),Object(S.jsxs)(y.a,{container:!0,alignItems:"center",children:[Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("img",{src:te,style:{width:"100%"}})}),Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("div",{className:"textPadded",children:Object(S.jsxs)(g.a,{align:"left",children:["Here is another example of my work, in which flood ","&"," trail data that I curated is being rendered onto a Leaflet map through a visualization system which I designed."]})})}),Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsx)("br",{})})]}),Object(S.jsxs)(y.a,{container:!0,alignItems:"center",children:[Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("iframe",{width:"100%",height:"300",src:"https://www.youtube.com/embed/7B3mC9E3kK0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("div",{className:"textPadded",children:Object(S.jsx)(g.a,{align:"left",children:"Here is a video which I made for the project outlining how to use our services to identify vulnerable places."})})})]})]}),timeStart:new Date("2/02/2020").valueOf(),name:"Urban Sustainabilty Research & Software Engineering",dates:"Febuary 2020 \u2192 Present"},j={content:Object(S.jsxs)(y.a,{container:!0,children:[Object(S.jsxs)(y.a,{container:!0,alignItems:"center",children:[Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("img",{src:K,style:{width:"100%"}})}),Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsxs)("div",{className:"textPadded",children:[Object(S.jsx)(g.a,{align:"left",children:"For our Introduction to Artificial Intelligence Class' term research project, my friend Joe and I decided to go above and beyond. This project started with one goal: turn some physical thing into a self driving car."}),Object(S.jsx)("br",{}),Object(S.jsx)(g.a,{align:"left",children:"Wi-fi controlled self driving car kits tend to be very expensive, so we decided to build something from (nearly) scratch. The car itself consists of:"}),Object(S.jsx)("div",{className:"MuiTypography-alignLeft MuiTypography-root MuiTypography-body1",children:Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:"A $20 RC car from Walmart that has been stripped down to its chassis and motors."}),Object(S.jsx)("li",{children:"Two 9v batteries, one for the steering and one for drive."}),Object(S.jsx)("li",{children:"A Raspberry Pi to receive communications from a control server, and relay the controls to the engines."}),Object(S.jsx)("li",{children:"A webcam for eyesight."}),Object(S.jsx)("li",{children:"A ton of wires, hotglue, duct-tape, and popsicle sticks to link everything together."})]})}),Object(S.jsx)(g.a,{align:"left",children:"Through building the internals of this car, I gained some basic electrical engineering knowledge, an understanding of motor controllers, and a serous appreciaction for hardware engineers."})]})})]}),Object(S.jsxs)(y.a,{container:!0,alignItems:"center",children:[Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("img",{src:Z,style:{width:"100%"}})}),Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsxs)("div",{className:"textPadded",children:[Object(S.jsx)(g.a,{align:"left",children:'This project might be one of the widest "stacks" that is possible software and hardware wise. The engineering stack for this project includes, but is not limited to.'}),Object(S.jsx)("br",{}),Object(S.jsx)("div",{className:"MuiTypography-alignLeft MuiTypography-root MuiTypography-body1",children:Object(S.jsxs)("ol",{children:[Object(S.jsx)("li",{children:"The RC car itself, which runs Python on its Raspberry Pi. The car sends video information to the intermediary server over UDP sockets, and recieves motor control information from the intermediary server over TCP sockets."}),Object(S.jsx)("li",{children:"An intermediary server, written in Python. This server communicates with the aformentioned RC car through UDP and TCP sockets, and communicated with a web client through socket.io."}),Object(S.jsx)("li",{children:"A database, which is linked to the itermediary server. This part is still in progress."}),Object(S.jsx)("li",{children:'A ReactJS Typescript web-client, which communicates with the intermediary server using socket.io. This client has the "control pad" which is our sole way of controlling the car itself.'})]})})]})})]}),Object(S.jsxs)(y.a,{container:!0,alignItems:"center",children:[Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("iframe",{width:"100%",height:"600px",src:"https://www.youtube.com/embed/_NIIsQdZSgM",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,frameBorder:"0"})}),Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsxs)("div",{className:"textPadded",children:[Object(S.jsx)(g.a,{align:"left",children:"This video was taken right after we implemented the most basic configuration of this stack, in which the client was controlling the RC car through an intermediary server over LAN."}),Object(S.jsx)("br",{}),Object(S.jsx)(g.a,{align:"left",children:"This project is currently a work in progress, so check back to see how the progress in going!"})]})})]})]}),timeStart:new Date("8/30/2021").valueOf(),name:"Self Driving Car",dates:"August 2021 \u2192 Present"},b={content:Object(S.jsx)(y.a,{container:!0,children:Object(S.jsxs)(y.a,{container:!0,alignItems:"center",children:[Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsx)("img",{src:ae,style:{width:"100%"}})}),Object(S.jsx)(y.a,{item:!0,xs:12,md:6,children:Object(S.jsxs)("div",{className:"textPadded",children:[Object(S.jsxs)(g.a,{align:"left",children:["\u2003\u2003You can find the rest of my Projects on GitHub. I try to put all of my projects there, and all of my work projects are hosted there aswell.",Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),"\u2003\u2003You also can see what I've been up to in the last few days there. With over 2000 (and counting) contributions in 2021 alone, im probably up to something!"]}),Object(S.jsx)(y.a,{container:!0,children:Object(S.jsx)(y.a,{item:!0,children:Object(S.jsx)(F.a,{variant:"contained",color:"primary",style:{margin:"15px",marginLeft:"0"},onClick:function(){window.open("https://github.com/drg101","_blank")},children:"Go To My GitHub"})})})]})})]})}),timeStart:new Date("3/01/2018").valueOf(),name:"Other, More Minor Projects",dates:"March 2018 \u2192 Present"};return Object(S.jsxs)(y.a,{container:!0,justify:"flex-start",children:[Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsx)(g.a,{variant:"h4",children:"My (Proudest) Projects."})}),(e=[j,d,l,s,o,b],e.sort((function(e,t){return"newToOld"!==r?e.timeStart-t.timeStart:t.timeStart-e.timeStart})).map((function(e){return Object(S.jsx)(y.a,{container:!0,children:Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)("br",{}),Object(S.jsx)(w.a,{}),Object(S.jsx)("br",{}),Object(S.jsxs)(P.a,{style:{padding:"1vw"},children:[Object(S.jsx)("a",{href:"#".concat(e.name),style:{textDecoration:"none"},children:Object(S.jsx)(g.a,{variant:"h5",color:"textPrimary",children:e.name})}),Object(S.jsx)(g.a,{variant:"caption",children:e.dates}),e.content]})]})},e.timeStart)})))]})}var ce=i(59),re=i.n(ce),se=Object(b.a)(m.a)((function(e){e.theme;return{width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>\')')},"& + .MuiSwitch-track":{opacity:1,backgroundColor:window.darkMode?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:window.darkMode?"#003892":"#001e3c",width:32,height:32,"&:before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="'.concat(encodeURIComponent("#fff"),'" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>\')')}},"& .MuiSwitch-track":{opacity:1,backgroundColor:window.darkMode?"#8796A5":"#aab4be",borderRadius:10}}}));function oe(e){switch(e){case"home":return Object(S.jsx)(R,{});case"about":return Object(S.jsx)(G,{});case"contact":return Object(S.jsx)(Q,{});case"resume":return Object(S.jsx)(Y,{});case"portfolio":return Object(S.jsx)(ne,{})}}function le(){var e,t=M(),i=t.globalState,n=t.setGlobalState,c=i.page,r=Object(a.useState)(null!==(e=window.darkMode)&&void 0!==e&&e),s=Object(h.a)(r,2),o=s[0],l=(s[1],Object(x.a)("(max-width:960px)")),d=Object(a.useState)(!1),j=Object(h.a)(d,2),b=j[0],m=j[1];Object(a.useEffect)((function(){window.onpopstate=function(){var e=k();e.page?n({page:e.page}):n({page:"home"})}}),[]),Object(a.useEffect)((function(){window.scrollTo(0,0)}),[c]);var v=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=i?{fontWeight:"bold"}:{};return Object(S.jsx)("div",{style:{display:"inline-block"},className:"headerItemLeft",children:Object(S.jsx)("div",{className:"headerItem",onClick:function(){b&&m(!1),n({page:t})},children:Object(S.jsx)(g.a,{variant:"h5",style:a,children:e})})})};return Object(S.jsxs)(y.a,{container:!0,className:"content",alignItems:"center",alignContent:"center",justify:"center",children:[Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)(y.a,{container:!0,children:Object(S.jsx)(y.a,{item:!0,xs:12,children:l?Object(S.jsx)("div",{className:"header",children:Object(S.jsxs)(u.a,{style:{borderRadius:0,boxShadow:"none",backgroundColor:"inherit"},expanded:b,onClick:function(){m(!b)},children:[Object(S.jsx)(p.a,{style:{display:"block"},expandIcon:Object(S.jsx)(re.a,{}),children:Object(S.jsx)(g.a,{variant:"h4",children:Object(S.jsx)("b",{children:"Daniel Reynolds"})})}),Object(S.jsxs)(f.a,{style:{display:"block"},children:[v("Home","home",!0),v("About","about"),v("Contact","contact"),v("Resume","resume"),v("Portfolio","portfolio"),Object(S.jsx)("div",{className:"headerItemRight",style:{display:"inline-block"},onClick:function(){localStorage.setItem("darkMode",o?"false":"true"),window.location.reload()},children:Object(S.jsx)("div",{className:"headerItem",children:Object(S.jsx)(O.a,{control:Object(S.jsx)(se,{checked:o}),label:o?"Dark Mode":"Light Mode"})})})]})]})}):Object(S.jsxs)("div",{className:"header",children:[v("Daniel Reynolds","home",!0),v("About","about"),v("Contact","contact"),v("Resume","resume"),v("Portfolio","portfolio"),Object(S.jsx)("div",{className:"headerItemRight",style:{display:"inline-block"},onClick:function(){localStorage.setItem("darkMode",o?"false":"true"),window.location.reload()},children:Object(S.jsx)("div",{className:"headerItem",children:Object(S.jsx)(O.a,{control:Object(S.jsx)(se,{checked:o}),label:o?"Dark Mode":"Light Mode"})})})]})})}),Object(S.jsx)("div",{className:"header",children:Object(S.jsx)(w.a,{})})]}),Object(S.jsx)(y.a,{item:!0,xs:12,children:Object(S.jsx)("div",{style:{minHeight:"87vh"},children:Object(S.jsx)("div",{className:"header",style:{paddingTop:"home"!==i.page?"2vh":"0",paddingBottom:"home"!==i.page?"2vh":"0"},children:oe(c)})})}),Object(S.jsxs)(y.a,{item:!0,xs:12,children:[Object(S.jsx)("div",{className:"header",children:Object(S.jsx)(w.a,{})}),Object(S.jsx)(y.a,{container:!0,className:"header",children:Object(S.jsxs)(y.a,{item:!0,children:[Object(S.jsx)("div",{className:"footerItemContainer",children:Object(S.jsx)("div",{className:"footerItem",children:Object(S.jsx)(g.a,{children:"Copyright \xa9 2021 Daniel Reynolds"})})}),Object(S.jsx)("div",{className:"footerItemContainer",children:Object(S.jsx)("div",{className:"footerItem",children:Object(S.jsx)("a",{href:"https://github.com/drg101/personal-site",target:"_blank",style:{textDecoration:"none"},children:Object(S.jsx)(g.a,{color:"textPrimary",children:"View Source"})})})})]})})]})]})}var de="home",je=i(61),he=i(126);window.darkMode=window.darkMode||!1;var be=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches;localStorage.getItem("darkMode")&&(be="true"===localStorage.getItem("darkMode")),window.darkMode=be;var me=Object(je.a)({typography:{fontFamily:"Roboto, sans-serif"},palette:{type:be?"dark":"light"}}),xe=me=Object(he.a)(me),ge=i.p+"static/media/bgMain.117ff3cc.JPG",Oe=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var i=new Image;i.onload=function(){var t=i.height,a=i.width;e({height:t,width:a})},i.src=t})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();i(85),i(82);var ue=i(121),pe=k();var fe=function(){var e;return function(){var e=Object(a.useState)({width:1600,height:900}),t=Object(h.a)(e,2),i=t[0],n=t[1];Object(a.useEffect)((function(){function e(){n({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[])}(),Object(a.useEffect)((function(){Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe("".concat(ge));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))()}),[]),Object(S.jsx)(C,{value:{page:null!==(e=pe.page)&&void 0!==e?e:de,user:null},children:Object(S.jsxs)(d.a,{theme:xe,children:[Object(S.jsx)(ue.a,{}),Object(S.jsx)("div",{className:"App",children:Object(S.jsx)(j.a,{maxWidth:"lg",className:"siteContainer",children:Object(S.jsx)(le,{})})})]})})},ye=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,127)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;i(e),a(e),n(e),c(e),r(e)}))};r.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(fe,{})}),document.getElementById("root")),ye()}},[[84,1,2]]]);
//# sourceMappingURL=main.8435eff0.chunk.js.map