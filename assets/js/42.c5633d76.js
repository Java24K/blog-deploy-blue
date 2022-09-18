(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{504:function(t,v,_){"use strict";_.r(v);var a=_(0),l=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"一-超大文件查重与去重"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一-超大文件查重与去重"}},[t._v("#")]),t._v(" 一.超大文件查重与去重")]),t._v(" "),_("blockquote",[_("p",[t._v("扫码登录的从本质上讲就是设备间授权，通过已经登录的移动端App授权PC端应用登录。\n我们先来了解移动端的认证机制。")])]),t._v(" "),_("h3",{attrs:{id:"大文件查重"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大文件查重"}},[t._v("#")]),t._v(" 大文件查重")]),t._v(" "),_("ul",[_("li",[t._v("方案1: 布隆过滤器")])]),t._v(" "),_("ol",[_("li",[t._v("每一条数据进行n次独立的hash处理，每次处理得到一个整数，总共得到n个整数。")]),t._v(" "),_("li",[t._v("使用一个很长的数组表示不同的整数，每一次插入操作把这n个整数对应的位置的0设置为1（如果已经被设置为1则不变）。")]),t._v(" "),_("li",[t._v("查找的时候经过同样的计算，如果这几个位置都是1则说明已经存在。")])]),t._v(" "),_("blockquote",[_("p",[t._v("通过布隆过滤器判断不存在一定不存在，判断存在可能不存在，也就是布隆有一定的误判率。误判率计算可以用网址 https://krisives.github.io/bloom-calculator/")])]),t._v(" "),_("ul",[_("li",[t._v("方案2: BitMap")])]),t._v(" "),_("ol",[_("li",[t._v("我们只需要2bits就可以对一个数字的状态进行存储了，假设我们设定一个数字不存在为00，存在一次01，存在两次及其以上为11。")]),t._v(" "),_("li",[t._v("当我们查重时候找到相应位数组的下标中的值，如果是00就说明不存在，否则重复。")])]),t._v(" "),_("blockquote",[_("p",[t._v("这种方式适合对数字的查重。详细了解BitMap可以参考 https://www.cnblogs.com/cjsblog/p/11613708.html")])]),t._v(" "),_("ul",[_("li",[t._v("方案3: Hash分组")])]),t._v(" "),_("ol",[_("li",[t._v("数据分别做hash%1000，分成1000个文件。 将1000个文件分别加载进来，一一比对是否有hash重复。")])]),t._v(" "),_("blockquote",[_("p",[t._v("如果有重复，那么A和B的重复数据一定在相对同一个文件内，因为hash结果是一样的。")])]),t._v(" "),_("h3",{attrs:{id:"大文件去重"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#大文件去重"}},[t._v("#")]),t._v(" 大文件去重")]),t._v(" "),_("ul",[_("li",[t._v("大文件去重可以使用布隆过滤器，当通过hash在布隆过滤器中没有查到时候就说明不存在，否则大概率存在，注意布隆过滤器有误判率。")])]),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"二-大文件10g读写的处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二-大文件10g读写的处理"}},[t._v("#")]),t._v(" 二.大文件10G读写的处理")]),t._v(" "),_("blockquote",[_("p",[t._v("有一份10G以上大文本文件，需要替换里面的一些文本信息（每一行都有），如何高效读并替换掉生成新的文件。")])]),t._v(" "),_("ul",[_("li",[t._v("方案1：使用 Java内存映射 的方式 ，MappedByteBuffer 使用到了 虚拟内存。")]),t._v(" "),_("li",[t._v("方案2：分治思想（分割--读取--写入--合并）\n"),_("ol",[_("li",[t._v("split 先分割成多个文件：split -b 500m log.txt newfile")]),t._v(" "),_("li",[t._v("多个线程操作多个文件，避免两个线程操作同一个文件")]),t._v(" "),_("li",[t._v("按行读文件并按行写入新的文件")]),t._v(" "),_("li",[t._v("cat 合并所有文件：cat file1.txt file2.txt > file.txt")])])])]),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"三-大数据文件中最大-最小-的n个数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三-大数据文件中最大-最小-的n个数"}},[t._v("#")]),t._v(" 三.大数据文件中最大（最小）的n个数")]),t._v(" "),_("blockquote",[_("p",[t._v("比如，一个1亿个整数的文件，求最大（最小）的10000个数")])]),t._v(" "),_("h3",{attrs:{id:"局部淘汰法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#局部淘汰法"}},[t._v("#")]),t._v(" 局部淘汰法")]),t._v(" "),_("ol",[_("li",[t._v("用一个容器保存前10000个数，然后将剩余的所有数字——与容器内的最小数字相比，如果所有后续的元素都比容器内的10000个数还小，那么容器内这个10000个数就是最大10000个数。")])]),t._v(" "),_("h3",{attrs:{id:"分治思想-快速排序"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分治思想-快速排序"}},[t._v("#")]),t._v(" 分治思想 + 快速排序")]),t._v(" "),_("ol",[_("li",[t._v("将1亿个数据分成100份，每份100万个数据，找到每份数据中最大的10000个，最后在剩下的100*10000个数据里面找出最大的10000个。")]),t._v(" "),_("li",[t._v("100万个数据里面查找最大的10000个数据的方法如下：用快速排序的方法，将数据分为2堆，如果大的那堆个数N大于10000个，继续对大堆快速排序一次分成2堆，如果大的那堆个数N大于10000个，继续对大堆快速排序一次分成2堆，如果大堆个数N小于10000个，就在小的那堆里面快速排序一次，找第10000-n大的数字；递归以上过程，就可以找到第1w大的数。")])]),t._v(" "),_("h3",{attrs:{id:"采用最小堆-最大堆"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#采用最小堆-最大堆"}},[t._v("#")]),t._v(" 采用最小堆/最大堆")]),t._v(" "),_("ol",[_("li",[t._v("首先读入前10000个数来创建大小为10000的最小堆，建堆的时间复杂度为O（mlogm）（m为数组的大小即为10000）。")]),t._v(" "),_("li",[t._v("然后遍历后续的数字，并于堆顶（最小）数字进行比较。如果比最小的数小，则继续读取后续数字；如果比堆顶数字大，则替换堆顶元素并重新调整堆为最小堆。")]),t._v(" "),_("li",[t._v("整个过程直至1亿个数全部遍历完为止。然后按照中序遍历的方式输出当前堆中的所有10000个数字。该算法的时间复杂度为O（nmlogm），空间复杂度是10000（常数）。")])]),t._v(" "),_("br"),t._v(" "),_("h2",{attrs:{id:"四-大文件小内存排序问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四-大文件小内存排序问题"}},[t._v("#")]),t._v(" 四.大文件小内存排序问题")]),t._v(" "),_("blockquote",[_("p",[t._v("外部排序：内存极少的情况下，利用分治策略，利用外存保存中间结果，再用多路归并来排序;比如外存中有100G的字符串文件，1G的内存，对字符串进行排序操作。")])]),t._v(" "),_("ol",[_("li",[t._v("首先将100G的内容分成若干个小部分，每个部分不超过500MB。分别读取这些小部分进行排序，然后写入到外存中。这样就得到了若干个已经排好序的k小部分。")]),t._v(" "),_("li",[t._v("多路归并排序(相对二路归并而言）。对于k个已经排好序的小部分，每次取出它们各自的最小值，找到k个最小值中的最小值，写入到外存，同时将最小值所在外存区域指针向右移动。然后继续比较最小值。\n每次比较最小值需要比较k-1次，总共有n-1轮，所以时间复杂度为O((n-1)*(k-1))。")])])])}),[],!1,null,null,null);v.default=l.exports}}]);