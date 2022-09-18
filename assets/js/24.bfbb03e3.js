(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{404:function(t,e,n){t.exports=n.p+"assets/img/prototype.ee1baff1.png"},405:function(t,e,n){t.exports=n.p+"assets/img/prototype01.d0f56b5b.jpg"},497:function(t,e,n){"use strict";n.r(e);var r=n(0),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"一-原型模式介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一-原型模式介绍"}},[t._v("#")]),t._v(" 一.原型模式介绍")]),t._v(" "),r("p",[t._v("概念：")]),t._v(" "),r("ul",[r("li",[t._v("通过给出一个原型对象来指明所有创建的对象的类型，然后用复制这个原型对象的办法创建出更多同类型的对象。")])]),t._v(" "),r("br"),t._v(" "),r("p",[t._v("原型模式特点：")]),t._v(" "),r("ul",[r("li",[t._v("用于创建重复的对象，同时又能"),r("font",{attrs:{color:"red"}},[t._v("保证性能")]),t._v("。")],1)]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"二-原型模式作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二-原型模式作用"}},[t._v("#")]),t._v(" 二.原型模式作用")]),t._v(" "),r("ol",[r("li",[t._v("基本就是你需要从A的实例得到一份与A内容相同，但是又互不干扰的实例的话，就需要使用原型模式。")])]),t._v(" "),r("br"),t._v(" "),r("h2",{attrs:{id:"三-原型模式类图与角色"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三-原型模式类图与角色"}},[t._v("#")]),t._v(" 三.原型模式类图与角色")]),t._v(" "),r("blockquote",[r("p",[t._v("原型模式角色")])]),t._v(" "),r("ol",[r("li",[t._v("客户(Client)角色：客户类提出创建对象的请求。")]),t._v(" "),r("li",[t._v("抽象原型(Prototype)角色：这是一个抽象角色，通常由一个Java接口或Java抽象类实现。此角色给出所有的具体原型类所需的接口。")]),t._v(" "),r("li",[t._v("具体原型（Concrete Prototype）角色：被复制的对象。此角色需要实现抽象的原型角色所要求的接口。")])]),t._v(" "),r("br"),t._v(" "),r("blockquote",[r("p",[t._v("原型模式类图")])]),t._v(" "),r("ul",[r("li",[t._v("简单形式的原型模式")])]),t._v(" "),r("p",[r("img",{attrs:{src:n(404),alt:"图1"}})]),t._v(" "),r("ul",[r("li",[t._v("登记形原型模式")])]),t._v(" "),r("p",[r("img",{attrs:{src:n(405),alt:"图2"}})]),t._v(" "),r("h2",{attrs:{id:"四-原型模式实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四-原型模式实现"}},[t._v("#")]),t._v(" 四.原型模式实现")]),t._v(" "),r("ul",[r("li",[r("font",{attrs:{color:"red"}},[t._v("具体原型")]),t._v(" ： 实现了Cloneable接口, 并重写了"),r("font",{attrs:{color:"red"}},[t._v("Object(抽象原型)")]),t._v("的clone()方法。")],1)]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("@Data\npublic class Prototype implements Cloneable{\n\n    private String name;\n\n    private int age;\n\n    private String sex;\n\n    public Prototype(String name, int age, String sex) {\n        this.name = name;\n        this.age = age;\n        this. sex = sex;\n    }\n\n\n    /**\n     * 重写object的clone()方法, 并将其作用域设置为public\n     * @return\n     * @throws CloneNotSupportedException\n     */\n    @Override\n    public Object clone() throws CloneNotSupportedException {\n        return super.clone();\n    }\n\n    @Override\n    public String toString() {\n        return \"Prototype{\" +\n                \"name='\" + name + '\\'' +\n                \", age=\" + age +\n                \", sex='\" + sex + '\\'' +\n                '}';\n    }\n}\n\n")])])]),r("ul",[r("li",[r("font",{attrs:{color:"red"}},[t._v("客户角色")])],1)]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('public class PrototypeTest {\n\n    public static void main(String[] args) throws CloneNotSupportedException {\n        Prototype prototype = new Prototype("张三", 8, "男");\n        Prototype cloneObject = (Prototype)prototype.clone();\n\n        System.out.println(cloneObject);\n    }\n}\n\n')])])])])}),[],!1,null,null,null);e.default=o.exports}}]);