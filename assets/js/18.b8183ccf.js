(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{614:function(t,r,s){t.exports=s.p+"assets/img/Oauth2Flow.b6fc884e.png"},615:function(t,r,s){t.exports=s.p+"assets/img/QQLogin.a45b9457.png"},616:function(t,r,s){t.exports=s.p+"assets/img/QQOauthFlow.648f9715.png"},660:function(t,r,s){"use strict";s.r(r);var a=s(10),o=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("🔥 写在前面：Oauth2系列配套视频地址 https://t.hk.uy/bdr8 🔥")])]),t._v(" "),a("h2",{attrs:{id:"一-oauth2概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一-oauth2概念"}},[t._v("#")]),t._v(" 一.OAuth2概念")]),t._v(" "),a("p",[a("strong",[t._v("定位：OAuth 2.0是一个授权协议(不涉及认证)。")])]),t._v(" "),a("p",[a("strong",[t._v("概念：OAuth2提供了Access Token来解决 授权第三方应用 访问受保护资源的问题；")])]),t._v(" "),a("p",[a("strong",[t._v("阐述：")])]),t._v(" "),a("p",[a("strong",[t._v("它允许第三方应用(Oauth2客户端)代表资源拥有者(用户)去访问资源。")])]),t._v(" "),a("p",[a("strong",[t._v("它允许资源所有者（Resource Owner）授权给第三方应用（Oauth2客户端）去资源服务器（ResorceServer）访问资源所有者（Resource Owner）的资源。")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"二-oauth2角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二-oauth2角色"}},[t._v("#")]),t._v(" 二.OAuth2角色")]),t._v(" "),a("p",[a("strong",[t._v("资源所有者(Resource Owner)：能够许可受保护资源访问权限的实体。")])]),t._v(" "),a("p",[a("strong",[t._v("用户代理(User Agent)：如浏览器。")])]),t._v(" "),a("p",[a("strong",[t._v("第三方应用(Client Application)：OAuth2客户端，以资源所有者行为向资源服务器发起请求的应用。")])]),t._v(" "),a("p",[a("strong",[t._v("资源服务器(Resource Server)：受限资源持有者。")])]),t._v(" "),a("p",[a("strong",[t._v("授权服务器(Authorization Server)：为第三方应用发放令牌。")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"三-oauth2运行流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三-oauth2运行流程"}},[t._v("#")]),t._v(" 三.OAuth2运行流程")]),t._v(" "),a("p",[a("strong",[t._v("请求授权， 取得令牌（token），访问资源。")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(614),alt:"clipboard.png"}})]),t._v(" "),a("p",[a("strong",[t._v("（A）用户打开客户端以后，客户端要求用户给予授权。")])]),t._v(" "),a("p",[a("strong",[t._v("（B）用户同意给予客户端授权。")])]),t._v(" "),a("p",[a("strong",[t._v("（C）客户端使用上一步获得的授权，向认证服务器申请令牌。")])]),t._v(" "),a("p",[a("strong",[t._v("（D）认证服务器对客户端进行认证以后，确认无误，同意发放令牌。")])]),t._v(" "),a("p",[a("strong",[t._v("（E）客户端使用令牌，向资源服务器申请获取资源。")])]),t._v(" "),a("p",[a("strong",[t._v("（F）资源服务器确认令牌无误，同意向客户端开放资源。")])]),t._v(" "),a("p",[a("strong",[t._v("OAuth 的核心就是向第三方应用颁发令牌。")])]),t._v(" "),a("p",[a("strong",[t._v("OAuth令牌可以限制客户端只能执行资源拥有者授权的操作。")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"四-oauth2授权模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四-oauth2授权模式"}},[t._v("#")]),t._v(" 四.OAuth2授权模式")]),t._v(" "),a("p",[a("strong",[t._v("授权码模式（authorization code）：最完整、最严格的模式。用于Web应用。")])]),t._v(" "),a("p",[a("strong",[t._v("简化模式（implicit）：不通过第三方应用程序的服务器，直接在浏览器中向认证服务器申请令牌，跳过了“授权码”步骤。用于移动应用。")])]),t._v(" "),a("p",[a("strong",[t._v("密码模式（resource owner password credentials）：用户向客户端提供自己的用户名和密码。客户端使用这些信息，向服务提供商索要授权。")])]),t._v(" "),a("p",[a("strong",[t._v("客户端模式（client credentials）：客户端以自己的名义，而不是用户的名义，向服务提供商进行认证。")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"五-实现oauth2协议框架"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五-实现oauth2协议框架"}},[t._v("#")]),t._v(" 五.实现OAuth2协议框架")]),t._v(" "),a("p",[a("strong",[t._v("Apache Oltu(不活跃已退休)、Spring Security OAuth、Nimbus OAuth 2.0 SDK with OpenID Connect extensions")]),t._v(" "),a("br")]),t._v(" "),a("h2",{attrs:{id:"六-oauth2应用场景举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六-oauth2应用场景举例"}},[t._v("#")]),t._v(" 六.OAuth2应用场景举例")]),t._v(" "),a("p",[a("strong",[t._v("使用QQ授权登录第三方应用。")])]),t._v(" "),a("p",[a("img",{attrs:{src:s(615),alt:"image.png"}})]),t._v(" "),a("p",[t._v("https://wiki.open.qq.com/wiki/mobile/OAuth2.0%E5%BC%80%E5%8F%91%E6%96%87%E6%A1%A3")]),t._v(" "),a("p",[a("img",{attrs:{src:s(616),alt:"clipboard.png"}})])])}),[],!1,null,null,null);r.default=o.exports}}]);