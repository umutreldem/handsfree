(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{314:function(e,t,n){var s=n(0),i=n(3),o=n(106),a=[].slice,r=function(e){return function(t,n){var s=arguments.length>2,i=s?a.call(arguments,2):void 0;return e(s?function(){("function"==typeof t?t:Function(t)).apply(this,i)}:t,n)}};s({global:!0,bind:!0,forced:/MSIE .\./.test(o)},{setTimeout:r(i.setTimeout),setInterval:r(i.setInterval)})},453:function(e,t,n){"use strict";n.r(t);n(9),n(314);var s={name:"HandsfreeContainer",data:function(){return{opts:{autostart:!0,weboji:!1,hands:!0,pose:!1,handpose:!1,facemesh:!1},hasMovedToggle:!1,isMaximized:!1,isMinimized:!1}},mounted:function(){var e=this;this.hasMovedToggle||setTimeout((function(){console.log("\n    ✨\n    (\\.   \\      ,/)\n      \\(   |\\     )/\n      //\\  | \\   /\\\\\n    (/ /\\_#oo#_/\\ \\)\n      \\/\\  ####  /\\/\n          `##'\n\n\n    🧙‍♂️ Presenting 🧙‍♀️\n\n       Handsfree.js\n          8.5.1\n\nhttps://github.com/midiblocks/handsfree\nhttps://github.com/sponsors/midiblocks\n"),window.Handsfree||Promise.all([n.e(4),n.e(85)]).then(n.bind(null,434)).then((function(t){var n=t.default;window.Handsfree=n,window.handsfree=e.$root.handsfree=new n({showDebug:!0,setup:{wrap:{$parent:document.querySelector("#handsfree-debug-window .window-body")}},assetsPath:"/handsfreejs"}),window.app=e.$root,document.querySelector("header.navbar > .links").appendChild(document.querySelector("#navbar-handsfree-toggle")),document.querySelector("aside.sidebar").appendChild(document.querySelector("#handsfree-debug-window"))})),e.hasMovedToggle=!0}),50)},methods:{startDemo:function(){this.$root.handsfree.update(this.opts)}}},i=n(43),o=Object(i.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"handsfree-container"}},[t("div",{attrs:{id:"handsfree-debugger"}}),t("div",{attrs:{id:"navbar-handsfree-toggle"}},[this._m(0),t("HandsfreeToggle",{staticClass:"handsfree-show-when-started",attrs:{opts:this.opts,"text-off":"Activate Handsfree Mode","text-on":"Stop Handsfree"}})],1),t("Window",{staticClass:"handsfree-show-when-started handsfree-hide-when-not-debugging mb-0",attrs:{id:"handsfree-debug-window",title:"Debugger",minimize:!0,maximize:!0}})],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("a",{attrs:{href:"https://github.com/midiblocks/handsfree"}},[t("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/branding/github.png",height:"28"}})])}],!1,null,null,null);t.default=o.exports}}]);