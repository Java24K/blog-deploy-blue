(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{433:function(t,e,a){t.exports=a.p+"assets/img/redisDistributedID.73bb0efb.png"},434:function(t,e,a){t.exports=a.p+"assets/img/snowflake.c8ef1e63.png"},511:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一-分布式id特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-分布式id特点"}},[t._v("#")]),t._v(" 一.分布式ID特点")]),t._v(" "),s("ul",[s("li",[t._v("全局唯一: 生成的ID编码应该具有全局唯。")]),t._v(" "),s("li",[t._v("趋势递增: 生成的ID编码有序且按规则递增。")]),t._v(" "),s("li",[t._v("扩展性: 生成的ID编码足够业务使用。")])]),t._v(" "),s("h2",{attrs:{id:"二-分布式id生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-分布式id生成"}},[t._v("#")]),t._v(" 二.分布式ID生成")]),t._v(" "),s("h3",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[t._v("#")]),t._v(" Redis")]),t._v(" "),s("p",[s("img",{attrs:{src:a(433),alt:"redis分布式ID"}})]),t._v(" "),s("ol",[s("li",[t._v("每次预先从redis取一批有效的ID，用完后再去redis取，提高性能。")]),t._v(" "),s("li",[t._v("发号器sdk保证线程安全 synchronized 等。")]),t._v(" "),s("li",[t._v("redis保证ID唯一性。")])]),t._v(" "),s("blockquote",[s("p",[t._v("曾经我们在设计费空系统单据号的时候就用的是redis。redis中的值每日0点清零从新计数。单据号格式是 单据类型+YYYYMMDD+时间毫秒值+redis递增值，举例 pay20220528165374644278600001。")])]),t._v(" "),s("h3",{attrs:{id:"数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[t._v("#")]),t._v(" 数据库")]),t._v(" "),s("ol",[s("li",[t._v("利用 MySQL 中的自增属性 auto_increment 来生成全局唯一 ID，也能保证趋势递增。")]),t._v(" "),s("li",[t._v("扩展性可以利用分表机制，分成2个表，当还需要扩容的时候可以使用双倍扩容机制。")])]),t._v(" "),s("h3",{attrs:{id:"zookeeper"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper"}},[t._v("#")]),t._v(" Zookeeper")]),t._v(" "),s("ul",[s("li",[t._v("zookeeper可以通过其znode数据版本来生成序列号，可以生成32位和64位的数据版本号，客户端可以使用这个版本号来作为唯一的序列号。")]),t._v(" "),s("li",[t._v("zookeeper也可以利用ZooKeeper数据模型中的顺序节点作为ID编码。")]),t._v(" "),s("li",[t._v("结合zookeeper客户端cuator实现分布式锁，参考如下url：")])]),t._v(" "),s("blockquote",[s("p",[t._v("https://gitee.com/kaixinshow/springboot-note/blob/master/15SpringBoot-Zookeeper-ID")])]),t._v(" "),s("h3",{attrs:{id:"uuid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uuid"}},[t._v("#")]),t._v(" UUID")]),t._v(" "),s("ul",[s("li",[t._v("采用UUID的方式生成唯一ID，由于是在本地生成没有了网络之类的消耗，所有效率非常高。")]),t._v(" "),s("li",[t._v("生成的ID是无序的，不能做到趋势递增，不太适合做主键。")])]),t._v(" "),s("blockquote",[s("p",[t._v("UUID认识参考脑图 http://naotu.baidu.com/file/8c6a3e665902d2282abe13f82351f3ec?token=9d7fe30a4335d147")])]),t._v(" "),s("h3",{attrs:{id:"雪花算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#雪花算法"}},[t._v("#")]),t._v(" 雪花算法")]),t._v(" "),s("p",[s("img",{attrs:{src:a(434),alt:"雪花算法"}})]),t._v(" "),s("h4",{attrs:{id:"雪花算法解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#雪花算法解析"}},[t._v("#")]),t._v(" 雪花算法解析")]),t._v(" "),s("ol",[s("li",[t._v("第1位：符号位，0 表示正数，1 表示负数，发号器第一位默认为 0。")]),t._v(" "),s("li",[t._v("第2-42位：时间戳，精确到毫秒。")]),t._v(" "),s("li",[t._v("第43-52位：机器 ID（机房 ID+ 服务器 ID）。")]),t._v(" "),s("li",[t._v("第53-64 位：序列号，自增长，支持同一个节点 1ms 可产生 4096 个 ID。")])]),t._v(" "),s("h4",{attrs:{id:"雪花算法优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#雪花算法优点"}},[t._v("#")]),t._v(" 雪花算法优点")]),t._v(" "),s("ol",[s("li",[t._v("不依赖数据库等第三方系统，以服务的方式部署，稳定性更高，生成ID的性能也是非常高的。")]),t._v(" "),s("li",[t._v("可以根据自身业务特性分配bit位，非常灵活。")])]),t._v(" "),s("h4",{attrs:{id:"雪花算法缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#雪花算法缺点"}},[t._v("#")]),t._v(" 雪花算法缺点")]),t._v(" "),s("ol",[s("li",[t._v("它依赖于系统的时间戳，一旦系统时间回拨，就有可能生成重复的 ID。")]),t._v(" "),s("li",[t._v("如果请求发号器的 QPS 不高，比如说发号器每毫秒只发一个 ID，就会造成生成 ID 的末位永远是 1，那么在分库分表时如果使用 ID 作为分区键就会造成库表分配的不均匀。")])]),t._v(" "),s("blockquote",[s("p",[t._v("参考实现：https://github.com/beyondfengyu/SnowFlake")])]),t._v(" "),s("blockquote",[s("p",[t._v("参考文章：")])]),t._v(" "),s("ul",[s("li",[t._v("https://my.oschina.net/u/732520/blog/2231478")])])])}),[],!1,null,null,null);e.default=r.exports}}]);