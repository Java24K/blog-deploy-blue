(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{413:function(t,e,a){t.exports=a.p+"assets/img/apptoken.1b68f1ba.png"},414:function(t,e,a){t.exports=a.p+"assets/img/scanCodeLogin.2876ce25.png"},503:function(t,e,a){"use strict";a.r(e);var n=a(0),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"一-app扫码登录网站"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一-app扫码登录网站"}},[t._v("#")]),t._v(" 一.App扫码登录网站")]),t._v(" "),n("blockquote",[n("p",[t._v("扫码登录的从本质上讲就是设备间授权，通过已经登录的移动端App授权PC端应用登录。\n我们先来了解移动端的认证机制。")])]),t._v(" "),n("h3",{attrs:{id:"移动端基于token认证机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#移动端基于token认证机制"}},[t._v("#")]),t._v(" 移动端基于token认证机制")]),t._v(" "),n("p",[n("img",{attrs:{src:a(413),alt:"移动端认证机制"}})]),t._v(" "),n("blockquote",[n("p",[t._v("第一次登录输入账号密码，还需要传入手机的设备信息。传入后服务端做三件事：")])]),t._v(" "),n("ul",[n("li",[t._v("验证账号、密码正确性。")]),t._v(" "),n("li",[t._v("将账号与设备信息关联起来。在某种意义上，设备信息就代表着账号。")]),t._v(" "),n("li",[t._v("生成一个 token 令牌，并且在 token 与账号id、设备id关联。类似于key/value，token 作为 key ，账号id、设备id信息作为value，持久化在磁盘上。")])]),t._v(" "),n("blockquote",[n("p",[t._v("得到token以后就可以拿着token访问api了。这就是基于 token 的认证机制，将账号密码换成了 token、设备信息，从而提高了安全系数，可别小看这个 token ，token 是身份凭证，在扫码登录的时候也会用到。")])]),t._v(" "),n("h3",{attrs:{id:"二维码扫码登录原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二维码扫码登录原理"}},[t._v("#")]),t._v(" 二维码扫码登录原理")]),t._v(" "),n("p",[n("img",{attrs:{src:a(414),alt:"二维码扫码登录"}})]),t._v(" "),n("blockquote",[n("p",[t._v("如上面的时序图，扫码登录可以分为三个阶段：待扫描、已扫描待确认、已确认。\n另外，二维码是有有效期的，当过期以后需要在pc端点击更新二维码来重新获取。")])])])}),[],!1,null,null,null);e.default=o.exports}}]);