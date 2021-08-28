(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{347:function(t,s,a){},388:function(t,s,a){"use strict";a(347)},437:function(t,s,a){"use strict";a.r(s);var n={data:function(){return{demoOpts:{autostart:!0,weboji:!1,hands:!0,facemesh:!1,pose:!1,handpose:!1,plugin:{pinchScroll:{enabled:!0},palmPointers:{enabled:!0}}},tabs:{installing:["CDN","NPM"]}}},mounted:function(){},methods:{startDemo:function(){this.$root.handsfree.update(this.demoOpts)}}},e=(a(388),a(43)),o=Object(e.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticStyle:{position:"relative"},attrs:{id:"hero-video"}},[a("h1",{staticClass:"mb-0"},[a("img",{attrs:{alt:"Handsfree.js",title:"Handsfree.js",src:"/branding/handsfree.png"}})]),t._v(" "),a("video",{staticStyle:{width:"100%"},attrs:{muted:"",loop:"",autoplay:"",src:"/model-wall.mp4"},domProps:{muted:!0}})]),t._v(" "),a("h3",{staticStyle:{"padding-top":"2em"}},[t._v("Build handsfree User Experiences and add face, hand, and pose tracking to your projects in a snap ✨👌")]),t._v(" "),a("p",{staticClass:"verticle-middle-children space-children text-center"},[a("a",{attrs:{href:"https://github.com/midiblocks/handsfree"}},[a("img",{attrs:{src:"https://img.shields.io/github/stars/midiblocks/handsfree?style=social"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/midiblocks/handsfree"}},[a("img",{attrs:{src:"https://img.shields.io/github/last-commit/handsfreejs/handsfree.svg"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/midiblocks/handsfree"}},[a("img",{attrs:{src:"https://img.shields.io/github/tag/handsfreejs/handsfree.svg"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/midiblocks/handsfree"}},[a("img",{attrs:{src:"https://img.shields.io/github/repo-size/handsfreejs/handsfree.svg"}})])]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Enable Mediapipe\'s "Hands" model')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handsfree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsfree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("hands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Enable plugins tagged with "browser"')]),t._v("\nhandsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enablePlugins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'browser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Start tracking")]),t._v("\nhandsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("Window",{attrs:{title:"Demo: Scroll pages handsfree"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("img",{attrs:{src:"https://media4.giphy.com/media/tQ1vFtoMWWpgdCoJJj/giphy.gif"}})]),t._v(" "),a("div",{staticClass:"col-6"},[a("h2",[t._v("Scroll pages handsfree!")]),t._v(" "),a("ul",[a("li",[t._v("👌 Pinch your thumb and index to grab the page")]),t._v(" "),a("li",[t._v("↕ While pinched, move hand up and down to scroll page")])]),t._v(" "),a("HandsfreeToggle",{staticClass:"full-width handsfree-hide-when-started-without-hands",attrs:{"text-off":"Scroll page with hands","text-on":"Stop Hands",opts:t.demoOpts}}),t._v(" "),a("button",{staticClass:"handsfree-show-when-started-without-hands handsfree-show-when-loading",attrs:{disabled:""}},[a("Fa-Spinner",{attrs:{spin:""}}),t._v(" Loading...")],1),t._v(" "),a("button",{staticClass:"handsfree-show-when-started-without-hands handsfree-hide-when-loading",on:{click:t.startDemo}},[a("Fa-Video"),t._v(" Scroll page with hands")],1)],1)])]),t._v(" "),a("blockquote",[a("div",{staticClass:"verticle-middle-children space-children text-center"},[a("strong",[t._v("Powered by")]),t._v(" "),a("a",{attrs:{href:"https://www.tensorflow.org/js/"}},[a("img",{attrs:{src:"/branding/tensorflow.png",height:"30"}})]),t._v(" "),a("a",{attrs:{href:"https://mediapipe.dev/"}},[a("img",{attrs:{src:"/branding/mediapipe.png",height:"30"}})]),t._v(" "),a("a",{attrs:{href:"https://github.com/jeeliz/jeelizWeboji"}},[a("img",{attrs:{src:"/branding/jeeliz.png",height:"30"}})])]),t._v(" "),a("hr",{staticStyle:{margin:"20px auto"}}),t._v(" "),a("div",{staticClass:"text-center"},[a("strong",[t._v("Special thanks to:")]),t._v(" "),a("a",{attrs:{href:"https://studioforcreativeinquiry.org/"}},[t._v("The STUDIO for Creative Inquiry")]),t._v(", "),a("a",{attrs:{href:"https://glitch.com"}},[t._v("Glitch.com")]),t._v(", "),a("a",{attrs:{href:"https://research.google/teams/brain/pair/"}},[t._v("Google PAIR")]),t._v(", and you!\n  ")])]),t._v(" "),a("h2",{attrs:{id:"installing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing"}},[t._v("#")]),t._v(" Installing")]),t._v(" "),a("TabPanel",{attrs:{tabs:t.tabs.installing}},[a("div",{attrs:{"data-panel":"CDN"}},[a("p",[a("strong",[t._v("Note:")]),t._v(" Some models are over 10Mb+ and may take a few seconds to load.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{staticClass:"language-html"},[a("code",[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("head")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n  "),a("span",{staticClass:"token comment"},[t._v("\x3c!-- Include Handsfree.js --\x3e")]),t._v("\n  "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("rel")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation attr-equals"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("stylesheet"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("href")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation attr-equals"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("https://unpkg.com/handsfree@8.5.1/build/lib/assets/handsfree.css"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"token punctuation"},[t._v("/>")])]),t._v("\n  "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{staticClass:"token attr-name"},[t._v("src")]),a("span",{staticClass:"token attr-value"},[a("span",{staticClass:"token punctuation attr-equals"},[t._v("=")]),a("span",{staticClass:"token punctuation"},[t._v('"')]),t._v("https://unpkg.com/handsfree@8.5.1/build/lib/handsfree.js"),a("span",{staticClass:"token punctuation"},[t._v('"')])]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script"}),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("head")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n \n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("body")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n  "),a("span",{staticClass:"token comment"},[t._v("\x3c!-- Instantiate and start it --\x3e")]),t._v("\n  "),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("<")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),a("span",{staticClass:"token script"},[a("span",{staticClass:"token language-javascript"},[t._v("\n    "),a("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" handsfree "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("new")]),t._v(" "),a("span",{staticClass:"token class-name"},[t._v("Handsfree")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("hands"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token boolean"},[t._v("true")]),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n    handsfree"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("enablePlugins")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v("'browser'")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n    handsfree"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("start")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n  ")])]),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("script")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n"),a("span",{staticClass:"token tag"},[a("span",{staticClass:"token tag"},[a("span",{staticClass:"token punctuation"},[t._v("</")]),t._v("body")]),a("span",{staticClass:"token punctuation"},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("div",{staticClass:"hidden",attrs:{"data-panel":"NPM"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{staticClass:"language-bash"},[a("code",[a("span",{staticClass:"token comment"},[t._v("# From your projects root")]),t._v("\n"),a("span",{staticClass:"token function"},[t._v("npm")]),t._v(" i handsfree\n")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{staticClass:"language-js"},[a("code",[a("span",{staticClass:"token comment"},[t._v("// Inside your app")]),t._v("\n"),a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" Handsfree "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'handsfree'")]),t._v("\n \n"),a("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" handsfree "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("new")]),t._v(" "),a("span",{staticClass:"token class-name"},[t._v("Handsfree")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("hands"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token boolean"},[t._v("true")]),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\nhandsfree"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("enablePlugins")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v("'browser'")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\nhandsfree"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("start")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n")])])]),t._v(" "),a("h3",[t._v("Hosting the models yourself")]),t._v(" "),a("p",[t._v("By default, and for simplicity, the above will load models from the "),a("a",{attrs:{href:"https://unpkg.com/browse/handsfree@8.5.1/build/lib/assets"}},[t._v("Unpkg CDN")]),t._v(". This can be very slow. To host the models yourself (and to use offline) you can eject the models from the npm package into your project's public folder:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{staticClass:"language-bash"},[a("code",[a("span",{staticClass:"token comment"},[t._v("# Move the models into your project's public directory")]),t._v("\n"),a("span",{staticClass:"token comment"},[t._v("# - change PUBLIC below to where you keep your project's assets")]),t._v("\n \n"),a("span",{staticClass:"token comment"},[t._v("# ON WINDOWS")]),t._v("\nxcopy /e node_modules"),a("span",{staticClass:"token punctuation"},[t._v("\\")]),t._v("handsfree"),a("span",{staticClass:"token punctuation"},[t._v("\\")]),t._v("build"),a("span",{staticClass:"token punctuation"},[t._v("\\")]),t._v("lib PUBLIC\n"),a("span",{staticClass:"token comment"},[t._v("# EVERYWHERE ELSE")]),t._v("\n"),a("span",{staticClass:"token function"},[t._v("cp")]),t._v(" -r node_modules/handsfree/build/lib/* PUBLIC\n")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{staticClass:"language-js"},[a("code",[a("span",{staticClass:"token keyword"},[t._v("import")]),t._v(" Handsfree "),a("span",{staticClass:"token keyword"},[t._v("from")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'handsfree'")]),t._v("\n \n"),a("span",{staticClass:"token keyword"},[t._v("const")]),t._v(" handsfree "),a("span",{staticClass:"token operator"},[t._v("=")]),t._v(" "),a("span",{staticClass:"token keyword"},[t._v("new")]),t._v(" "),a("span",{staticClass:"token class-name"},[t._v("Handsfree")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v("{")]),t._v("\n  hands"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token boolean"},[t._v("true")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n  "),a("span",{staticClass:"token comment"},[t._v("// Set this to your where you moved the models into")]),t._v("\n  assetsPath"),a("span",{staticClass:"token operator"},[t._v(":")]),t._v(" "),a("span",{staticClass:"token string"},[t._v("'/PUBLIC/assets'")]),a("span",{staticClass:"token punctuation"},[t._v(",")]),t._v("\n"),a("span",{staticClass:"token punctuation"},[t._v("}")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\nhandsfree"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("enablePlugins")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token string"},[t._v("'browser'")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\nhandsfree"),a("span",{staticClass:"token punctuation"},[t._v(".")]),a("span",{staticClass:"token function"},[t._v("start")]),a("span",{staticClass:"token punctuation"},[t._v("(")]),a("span",{staticClass:"token punctuation"},[t._v(")")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"models"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[t._v("#")]),t._v(" Models")]),t._v(" "),a("ModelList"),t._v(" "),a("h2",{attrs:{id:"quickstart-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quickstart-workflow"}},[t._v("#")]),t._v(" Quickstart Workflow")]),t._v(" "),a("p",[t._v("The following workflow demonstrates how to use all features of Handsfree.js. Check out the "),a("RouterLink",{attrs:{to:"/guides/"}},[t._v("Guides")]),t._v(" and "),a("RouterLink",{attrs:{to:"/ref/"}},[t._v("References")]),t._v(" to dive deeper, and feel free to post on the "),a("a",{attrs:{href:"https://groups.google.com/g/handsfreejs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google Groups"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://discord.gg/JeevWjTEdu",target:"_blank",rel:"noopener noreferrer"}},[t._v("Discord"),a("OutboundLink")],1),t._v(" if you get stuck!")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Let's enable face tracking with the default Face Pointer")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handsfree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsfree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("weboji"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhandsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enablePlugins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'browser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Now let's start things up")]),t._v("\nhandsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Let\'s create a plugin called "logger"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// - Plugins run on every frame and is how you "plug in" to the main loop')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// - "this" context is the plugin itself. In this case, handsfree.plugin.logger')]),t._v("\nhandsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logger'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("morphs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pointer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Let's switch to hand tracking now. To demonstrate that you can do this live,")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let's create a plugin that switches to hand tracking when both eyebrows go up")]),t._v("\nhandsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handTrackingSwitcher'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("weboji"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("weboji"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("browsUp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Disable this plugin")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Same as handsfree.plugin.handTrackingSwitcher.disable()")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Turn off face tracking and enable hand tracking")]),t._v("\n    handsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      weboji"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      hands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can enable and disable any combination of models and plugins")]),t._v("\nhandsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Disable weboji which is currently running")]),t._v("\n  weboji"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Start the pose model")]),t._v("\n  pose"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This is also how you configure (or pre-configure) a bunch of plugins at once")]),t._v("\n  plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fingerPointer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("enabled"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    faceScroll"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      vertScroll"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        scrollSpeed"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.01")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Disable all plugins")]),t._v("\nhandsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disablePlugins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Enable only the plugins for making music (not actually implemented yet)")]),t._v("\nhandsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enablePlugins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'music'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Overwrite our logger to display the original model APIs")]),t._v("\nhandsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onFrame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pose"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pose"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?.")]),t._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=o.exports}}]);