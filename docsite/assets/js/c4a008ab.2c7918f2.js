"use strict";(self.webpackChunkwhen=self.webpackChunkwhen||[]).push([[236],{6608:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(4848),i=t(8453);const o={sidebar_position:2},s="Getting Started",l={id:"starting",title:"Getting Started",description:"Installing",source:"@site/docs/starting.md",sourceDirName:".",slug:"/starting",permalink:"/When/docsite/docs/starting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"About",permalink:"/When/docsite/docs/intro"},next:{title:"When",permalink:"/When/docsite/docs/API/when"}},a={},c=[{value:"Installing",id:"installing",level:3},{value:"Creating Your First Event",id:"creating-your-first-event",level:2},{value:"A Useful Event",id:"a-useful-event",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(n.h3,{id:"installing",children:"Installing"}),"\n",(0,r.jsx)(n.p,{children:"It doesn't have to be complicated. To install, you don't need any package manager or any other confusing stuff. You just need to directly grab it from the source and it is ready to be used."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Hosted on Roblox"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Get ",(0,r.jsx)(n.a,{href:"https://create.roblox.com/store/asset/17849512692",children:"When"})," from the Roblox library."]}),"\n",(0,r.jsx)(n.li,{children:"Place When anywhere accessible... to both the client and the server."}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Due to Roblox's issues on the backend preventing packages from being distributed, When is currently unobtainable through the Roblox library. Consider looking through the GitHub option."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Hosted on GitHub"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Obtain ",(0,r.jsx)(n.a,{href:"https://raw.githubusercontent.com/nvthane/When/main/src/When.lua",children:"When.lua"})," from the ",(0,r.jsx)(n.a,{href:"https://github.com/nvthane/When/tree/main",children:"Github Repository"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Obtain the ",(0,r.jsx)(n.a,{href:"https://github.com/nvthane/When/tree/main/src/Extensions",children:"extensions"})," as you wish."]}),"\n",(0,r.jsx)(n.li,{children:"Place it in a folder where modules are usually required by you."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"creating-your-first-event",children:"Creating Your First Event"}),"\n",(0,r.jsx)(n.p,{children:"Requiring is one thing, but When is as easy to use as solving 2+2. The usual pattern is to create a scripting interface event which can then be connected and fired throughout the script, or possibly through multiple scripts. You are the controller, and it is up to you."}),"\n",(0,r.jsx)(n.p,{children:"To create your first event, it would go like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'local when = require(game:GetService("ReplicatedStorage").When)\n-- Location may vary as you choose where to place the library\n\nwhen.new()\n-- Returns an event object\n'})}),"\n",(0,r.jsx)(n.h3,{id:"a-useful-event",children:"A Useful Event"}),"\n",(0,r.jsxs)(n.p,{children:["Cool. You created your first event, but now let's actually put it to use. Because ",(0,r.jsx)(n.code,{children:"when.new()"})," returns an object event, you'll have to store it."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'local when = require(game:GetService("ReplicatedStorage").When)\n-- Location may vary as you choose where to place the library\n\nlocal score = 0\nlocal int = 0\n-- Setup your data\n\nlocal scoreController = when.new()\n-- Returns an event object\n\nscoreController:Rule(function()\n    if int >  6 then return true end\nend)\n-- Set a rule\n\nscoreController:Connect(function()\n    score += 1\n    print("You scored 1! Current score is "..score)\nend)\n-- Connect a function to handle\n\n\n\nwhile true do\n    task.wait(2)\n    int = math.random(1, 10)\n    print("Number received: "..int)\n    scoreController:Fire()\nend\n-- Make a random number generator that fires the event\n'})}),"\n",(0,r.jsxs)(n.p,{children:["What we did is basically store the event into the ",(0,r.jsx)(n.code,{children:"scoreController"})," variable which dictates when the function will be fired."]}),"\n",(0,r.jsxs)(n.p,{children:["We then set up a rule that will be place to ensure the integer is over 6 in order for it to be handled. If the rules returns ",(0,r.jsx)(n.code,{children:"true"}),", then it will fire the connections. If it returns ",(0,r.jsx)(n.code,{children:"false"})," or nothing, it will not be dealt with."]}),"\n",(0,r.jsx)(n.p,{children:"We connected a function that'll handle increasing the score everytime the event is successfully fired."}),"\n",(0,r.jsx)(n.p,{children:"We set up an random number generator for numbers from 1 to 10 that fires the event and it repeats indefinitely until the process is terminated."}),"\n",(0,r.jsx)(n.p,{children:"Multiple handling functions to connect will be very useful to connect the event from anywhere in one script, and so are rules when you do not want to apply requirements for multiple connections."}),"\n",(0,r.jsxs)(n.p,{children:["You basically just understood Roblox bindable events in a form of scripting interface with flexibility. ",(0,r.jsx)(n.strong,{children:"Congratulations!"})]})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(6540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);