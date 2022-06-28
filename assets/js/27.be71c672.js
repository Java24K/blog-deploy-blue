(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{651:function(a,t,e){"use strict";e.r(t);var s=e(10),l=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"一-常用git命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一-常用git命令"}},[a._v("#")]),a._v(" 一.常用Git命令")]),a._v(" "),e("h3",{attrs:{id:"git创建仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git创建仓库"}},[a._v("#")]),a._v(" Git创建仓库")]),a._v(" "),e("blockquote",[e("p",[a._v("创建Git仓库即在指定目录下生成一个 .git 目录，该目录包含了资源的所有元数据。")])]),a._v(" "),e("ul",[e("li",[a._v("当前目录创建仓库。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    git init\n")])])]),e("ul",[e("li",[a._v("指定目录创建仓库。")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    git init myrepo\n")])])]),e("h3",{attrs:{id:"将文件添加到暂存区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将文件添加到暂存区"}},[a._v("#")]),a._v(" 将文件添加到暂存区")]),a._v(" "),e("ul",[e("li",[a._v("添加当前目录下的所有文件到暂存区")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    git add .\n")])])]),e("ul",[e("li",[a._v("添加指定目录到暂存区")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    git add [dir]\n")])])]),e("ul",[e("li",[a._v("添加一个或多个文件到暂存区")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    git add [file1] [file2] ...\n")])])]),e("h3",{attrs:{id:"设置提交代码用户信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置提交代码用户信息"}},[a._v("#")]),a._v(" 设置提交代码用户信息")]),a._v(" "),e("ul",[e("li",[a._v("设置本地项目库配置")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('    git config user.name "java24k"\n    git config user.email "772835869@qq.com"\n')])])]),e("ul",[e("li",[a._v("设置全局项目库配置")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('    git config --global user.name "java24k"\n    git config --global user.email "772835869@qq.com"\n')])])]),e("h3",{attrs:{id:"提交暂存区到本地仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交暂存区到本地仓库"}},[a._v("#")]),a._v(" 提交暂存区到本地仓库")]),a._v(" "),e("ul",[e("li",[a._v("提交暂存区到本地仓库中")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('    git commit -m "xxxx"\n\n')])])]),e("ul",[e("li",[a._v("提交暂存区的指定文件到仓库中")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('    git commit [file1] [file2] ... -m "xxxx"\n')])])]),e("h3",{attrs:{id:"创建分支命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建分支命令"}},[a._v("#")]),a._v(" 创建分支命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("   git branch (branchname)\n")])])]),e("h3",{attrs:{id:"重命名分支命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重命名分支命令"}},[a._v("#")]),a._v(" 重命名分支命令")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("   git branch (-m | -M) <oldbranch> <newbranch>\n")])])]),e("blockquote",[e("p",[a._v("-M代表强制重命名，即使新分支已经存在")])]),a._v(" "),e("ul",[e("li",[a._v("git 中一些选项解释")])]),a._v(" "),e("ol",[e("li",[e("p",[a._v("-d --delete：删除")])]),a._v(" "),e("li",[e("p",[a._v("-D --delete --force的快捷键")])]),a._v(" "),e("li",[e("p",[a._v("-f --force：强制")])]),a._v(" "),e("li",[e("p",[a._v("-m --move：移动或重命名")])]),a._v(" "),e("li",[e("p",[a._v("-M --move --force的快捷键")])]),a._v(" "),e("li",[e("p",[a._v("-r --remote：远程")])]),a._v(" "),e("li",[e("p",[a._v("-a --all：所有")])])]),a._v(" "),e("h3",{attrs:{id:"添加远程仓库并指定简写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库并指定简写"}},[a._v("#")]),a._v(" 添加远程仓库并指定简写")]),a._v(" "),e("ul",[e("li",[a._v("添加远程仓库")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    git remote add [shortname] [url]\n")])])]),e("h3",{attrs:{id:"推送内容到远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推送内容到远程仓库"}},[a._v("#")]),a._v(" 推送内容到远程仓库")]),a._v(" "),e("ul",[e("li",[a._v("推送到远程仓库")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("    git push [-u] [remote-name] [branch-name] \n")])])]),e("blockquote",[e("p",[a._v("如果当前分支与多个主机存在追踪关系，那么这个时候-u选项用于指定默认主机，这样后面就可以不加任何参数使用git push。")])])])}),[],!1,null,null,null);t.default=l.exports}}]);