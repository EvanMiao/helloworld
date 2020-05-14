(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{456:function(t,e,v){"use strict";v.r(e);var a=v(9),_=Object(a.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"概念解释"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#概念解释"}},[t._v("#")]),t._v(" 概念解释")]),t._v(" "),v("blockquote",[v("p",[t._v("每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做"),v("strong",[t._v("生命周期钩子")]),t._v("的函数，这给了用户在不同阶段添加自己的代码的机会。")])]),t._v(" "),v("p",[t._v("官方的图解：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://i.loli.net/2020/05/13/9WEgmzXZQIKljq7.png",alt:"lifecycle.png"}})]),t._v(" "),v("p",[t._v("简单地说， Vue 实例从创建到销毁的过程，就是生命周期。而这个过程中各种各样的事件，就是生命周期钩子函数。这些函数会在实例生命周期的不同阶段被调用，从而让开发人员的代码控制实例的行为。")]),t._v(" "),v("p",[t._v("Vue 的生命周期的思想贯穿在组件开发的始终，通过熟悉其生命周期调用不同的钩子函数，我们可以准确地控制数据流和其对 DOM 的影响； Vue 生命周期的思想是 Vnode 和 MVVM 的生动体现和继承。")]),t._v(" "),v("h2",{attrs:{id:"生命周期与钩子函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生命周期与钩子函数"}},[t._v("#")]),t._v(" 生命周期与钩子函数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("生命周期钩子")]),t._v(" "),v("th",[t._v("详细")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("beforeCreate")]),t._v(" "),v("td",[t._v("在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。")])]),t._v(" "),v("tr",[v("td",[t._v("created")]),t._v(" "),v("td",[t._v("在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，"),v("code",[t._v("$el")]),t._v(" property 目前尚不可用。")])]),t._v(" "),v("tr",[v("td",[t._v("beforeMount")]),t._v(" "),v("td",[t._v("在挂载开始之前被调用：相关的 "),v("code",[t._v("render")]),t._v(" 函数首次被调用。")])]),t._v(" "),v("tr",[v("td",[t._v("mounted")]),t._v(" "),v("td",[t._v("实例被挂载后调用，这时 "),v("code",[t._v("el")]),t._v(" 被新创建的 "),v("code",[t._v("vm.$el")]),t._v(" 替换了。如果根实例挂载到了一个文档内的元素上，当 "),v("code",[t._v("mounted")]),t._v(" 被调用时 "),v("code",[t._v("vm.$el")]),t._v(" 也在文档内。")])]),t._v(" "),v("tr",[v("td",[t._v("beforeUpdate")]),t._v(" "),v("td",[t._v("数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。")])]),t._v(" "),v("tr",[v("td",[t._v("updated")]),t._v(" "),v("td",[t._v("由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用计算属性或 watcher 取而代之。")])]),t._v(" "),v("tr",[v("td",[t._v("activated")]),t._v(" "),v("td",[t._v("被 keep-alive 缓存的组件激活时调用。")])]),t._v(" "),v("tr",[v("td",[t._v("deactivated")]),t._v(" "),v("td",[t._v("被 keep-alive 缓存的组件停用时调用。")])]),t._v(" "),v("tr",[v("td",[t._v("beforeDestroy")]),t._v(" "),v("td",[t._v("实例销毁之前调用。在这一步，实例仍然完全可用。")])]),t._v(" "),v("tr",[v("td",[t._v("destroyed")]),t._v(" "),v("td",[t._v("实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。")])]),t._v(" "),v("tr",[v("td",[t._v("errorCaptured")]),t._v(" "),v("td",[t._v("当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 "),v("code",[t._v("false")]),t._v(" 以阻止该错误继续向上传播。")])])])]),t._v(" "),v("p",[t._v("注：除了 beforeCreate 和 created 钩子之外，其他钩子函数均在服务器端渲染期间不被调用。")]),t._v(" "),v("h3",{attrs:{id:"新建-vue-实例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#新建-vue-实例"}},[t._v("#")]),t._v(" 新建 Vue 实例")]),t._v(" "),v("p",[v("code",[t._v("new Vue()")])]),t._v(" "),v("h3",{attrs:{id:"初始化事件和生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#初始化事件和生命周期"}},[t._v("#")]),t._v(" 初始化事件和生命周期")]),t._v(" "),v("p",[t._v("现在这个实例对象上只有默认的一些生命周期函数和默认的事件。")]),t._v(" "),v("h3",{attrs:{id:"beforecreate-钩子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate-钩子"}},[t._v("#")]),t._v(" beforeCreate 钩子")]),t._v(" "),v("p",[t._v("在实例初始化之后，数据观测和事件配置之前调用。")]),t._v(" "),v("ul",[v("li",[t._v("不能访问 "),v("code",[t._v("data")]),t._v(" "),v("code",[t._v("computed")]),t._v(" "),v("code",[t._v("watch")]),t._v(" "),v("code",[t._v("methods")]),t._v(" 上的方法和数据。")]),t._v(" "),v("li",[v("code",[t._v("$route")]),t._v(" 存在，因此此阶段就可以根据路由信息进行重定向等操作。")])]),t._v(" "),v("p",[v("strong",[t._v("应用场景")])]),t._v(" "),v("ul",[v("li",[t._v("可以在这加个 loading 事件。")]),t._v(" "),v("li",[t._v("用于初始化非响应式变量。")])]),t._v(" "),v("h3",{attrs:{id:"初始化数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#初始化数据"}},[t._v("#")]),t._v(" 初始化数据")]),t._v(" "),v("p",[t._v("通过依赖注入导入依赖项，完成数据（ "),v("code",[t._v("data")]),t._v(" "),v("code",[t._v("props")]),t._v(" 等）的初始化。")]),t._v(" "),v("h3",{attrs:{id:"created-钩子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#created-钩子"}},[t._v("#")]),t._v(" created 钩子")]),t._v(" "),v("p",[t._v("实例已经创建完成之后调用。")]),t._v(" "),v("ul",[v("li",[t._v("可访问 "),v("code",[t._v("data")]),t._v(" "),v("code",[t._v("computed")]),t._v(" "),v("code",[t._v("watch")]),t._v(" "),v("code",[t._v("methods")]),t._v(" 上的方法和数据。")]),t._v(" "),v("li",[v("code",[t._v("DOM")]),t._v(" 未生成， "),v("code",[t._v("$el")]),t._v(" 属性不可访问， "),v("code",[t._v("$ref")]),t._v(" 属性内容为空数组。")]),t._v(" "),v("li",[t._v("注意 "),v("code",[t._v("mounted")]),t._v(" "),v("strong",[t._v("不会")]),t._v("保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 "),v("code",[t._v("mounted")]),t._v(" 内部使用 "),v("code",[t._v("this.$nextTick")]),t._v(" 回调函数。")])]),t._v(" "),v("p",[v("strong",[t._v("应用场景")])]),t._v(" "),v("ul",[v("li",[t._v("可以在这结束 loading 。")]),t._v(" "),v("li",[t._v("对实例进行预处理，操作 "),v("code",[t._v("data")]),t._v(" 数据或操作方法。")]),t._v(" "),v("li",[t._v("推荐这个时候发送请求数据，尤其是返回的数据与绑定事件有关时。")]),t._v(" "),v("li",[t._v("这个周期中是没有什么方法来对实例化过程进行拦截的。因此假如有某些数据必须获取才允许进入页面的话，并不适合在这个页面发请求。建议在组件路由勾子 "),v("code",[t._v("beforeRouteEnter")]),t._v(" 中来完成。")])]),t._v(" "),v("h3",{attrs:{id:"模版编译"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模版编译"}},[t._v("#")]),t._v(" 模版编译")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("检查是否有 "),v("code",[t._v("el")]),t._v(" 属性")]),t._v(" "),v("ul",[v("li",[t._v("检查 "),v("code",[t._v("vue")]),t._v(" 配置，即新建实例 "),v("code",[t._v("new Vue({})")]),t._v(" 时传入的参数对象是否存在 "),v("code",[t._v("el")]),t._v(" 属性，如果有的话就继续向下编译，如果没有则停止编译，直到在该 "),v("code",[t._v("vue")]),t._v(" 实例上调用 "),v("code",[t._v("vm.$mount(el)")]),t._v(" ，代码才会继续执行。")])])]),t._v(" "),v("li",[v("p",[t._v("检查是否有 "),v("code",[t._v("template")]),t._v(" 属性")]),t._v(" "),v("ul",[v("li",[t._v("检查配置中的 "),v("code",[t._v("template")]),t._v(" 属性，如果有则将其作为模板编译成 "),v("code",[t._v("render")]),t._v(" 函数，如果没有则将 "),v("code",[t._v("el")]),t._v(" 的 "),v("code",[t._v("outerHTML")]),t._v(" 作为模板编译。")]),t._v(" "),v("li",[t._v("如果有配置中有 "),v("code",[t._v("render")]),t._v(" 函数，那么 "),v("code",[t._v("render")]),t._v(" 就会替换 "),v("code",[t._v("template")]),t._v(" 。")]),t._v(" "),v("li",[t._v("优先级： render  >  template > el")])])])]),t._v(" "),v("p",[v("strong",[t._v("渲染函数 render")])]),t._v(" "),v("blockquote",[v("p",[t._v("因为 vue 是虚拟 DOM ，所以在拿到 template 模板时也要转译成 VNode （虚拟节点）的函数，而用 render 函数构建 DOM ， vue 就免去了转译的过程。")]),t._v(" "),v("p",[t._v("当使用 render 函数描述虚拟 DOM 时， vue 提供一个函数，这个函数是就构建虚拟 DOM 所需要的工具。官网上给他起了个名字叫 createElement 。还有约定它的简写叫 h 。")])]),t._v(" "),v("div",{staticClass:"language-html line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-html"}},[v("code",[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),v("span",{pre:!0,attrs:{class:"token attr-value"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("app"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("this is outerHTML"),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),v("span",{pre:!0,attrs:{class:"token script"}},[v("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" vm "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    template"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<h1>this is template</h1>"')]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h1'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'this is createElement'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token tag"}},[v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br"),v("span",{staticClass:"line-number"},[t._v("8")]),v("br"),v("span",{staticClass:"line-number"},[t._v("9")]),v("br")])]),v("h3",{attrs:{id:"beforemount-钩子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#beforemount-钩子"}},[t._v("#")]),t._v(" beforeMount 钩子")]),t._v(" "),v("p",[t._v("在挂载开始之前调用。")]),t._v(" "),v("ul",[v("li",[t._v("此时 "),v("code",[t._v("$el")]),t._v(" 属性不可访问。")]),t._v(" "),v("li",[t._v("将 "),v("code",[t._v("HTML")]),t._v(" 解析生成 "),v("code",[t._v("AST")]),t._v(" 节点，再根据 "),v("code",[t._v("AST")]),t._v(" 节点动态生成渲染函数，相关的 "),v("code",[t._v("render")]),t._v(" 函数首次被调用。")])]),t._v(" "),v("h3",{attrs:{id:"挂载"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#挂载"}},[t._v("#")]),t._v(" 挂载")]),t._v(" "),v("p",[t._v("实例创建 "),v("code",[t._v("$el")]),t._v(" 属性并替换所挂载的 DOM 元素( "),v("code",[t._v("el")]),t._v(" )。")]),t._v(" "),v("h3",{attrs:{id:"mounted-钩子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mounted-钩子"}},[t._v("#")]),t._v(" mounted 钩子")]),t._v(" "),v("p",[t._v("实例挂载到页面之后调用。")]),t._v(" "),v("ul",[v("li",[t._v("如果 "),v("code",[t._v("root")]),t._v(" 实例挂载了一个文档内元素，当 "),v("code",[t._v("mounted")]),t._v(" 被调用时 "),v("code",[t._v("vm.$el")]),t._v(" 也在文档内。")])]),t._v(" "),v("p",[v("strong",[t._v("应用场景")])]),t._v(" "),v("ul",[v("li",[t._v("此时可以获取 "),v("code",[t._v("el")]),t._v(" 中 "),v("code",[t._v("DOM")]),t._v(" 节点，进行 "),v("code",[t._v("DOM")]),t._v(" 操作，"),v("code",[t._v("$ref")]),t._v(" 属性可以访问。")]),t._v(" "),v("li",[t._v("如果返回的数据操作依赖 "),v("code",[t._v("DOM")]),t._v(" 完成，推荐这个时候发送数据请求。")])]),t._v(" "),v("h3",{attrs:{id:"beforeupdate-钩子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate-钩子"}},[t._v("#")]),t._v(" beforeUpdate 钩子")]),t._v(" "),v("p",[t._v("数据更新时调用，发生在虚拟 "),v("code",[t._v("DOM")]),t._v(" 重新渲染和打补丁之前。")]),t._v(" "),v("ul",[v("li",[t._v("在这个钩子中进一步地更改状态，不会触发附加的重渲染过程。")])]),t._v(" "),v("p",[v("strong",[t._v("应用场景")])]),t._v(" "),v("ul",[v("li",[t._v("这里适合在更新之前访问现有的 "),v("code",[t._v("DOM")]),t._v("，比如手动移除已添加的事件监听器。")])]),t._v(" "),v("h3",{attrs:{id:"更新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),v("p",[t._v("先根据 "),v("code",[t._v("data")]),t._v(" 中的最新数据，在内存中，重新渲染出一份最新的虚拟 "),v("code",[t._v("DOM")]),t._v(" 树，当最新的虚拟 "),v("code",[t._v("DOM")]),t._v(" 树被更新之后，会把最新的内存 "),v("code",[t._v("DOM")]),t._v(" 树重新渲染到真实的页面中去，这个时候就完成数据从 "),v("code",[t._v("data")]),t._v(" （模型层）到页面（视图层）的更新。")]),t._v(" "),v("h3",{attrs:{id:"updated-钩子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#updated-钩子"}},[t._v("#")]),t._v(" updated 钩子")]),t._v(" "),v("p",[t._v("数据更新导致的虚拟 "),v("code",[t._v("DOM")]),t._v(" 重新渲染和打补丁之后调用。")]),t._v(" "),v("ul",[v("li",[t._v("此时组件 "),v("code",[t._v("DOM")]),t._v(" 已经更新，可以执行依赖于 "),v("code",[t._v("DOM")]),t._v(" 的操作。")]),t._v(" "),v("li",[t._v("并不建议在这进行对异步数据得到的 "),v("code",[t._v("DOM")]),t._v(" 进行操作，因为有可能你当前的数据不止更改一次，而 "),v("code",[t._v("updated")]),t._v(" 只要相关的数据更改一次就会执行一次。")]),t._v(" "),v("li",[t._v("大多数情况下，应该避免在此期间更改状态，可能会陷入死循环。如果要相应状态改变，最好使用计算属性或 "),v("code",[t._v("watcher")]),t._v(" 取代。")]),t._v(" "),v("li",[t._v("注意 "),v("code",[t._v("updated")]),t._v(" "),v("strong",[t._v("不会")]),t._v("保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 "),v("code",[t._v("updated")]),t._v(" 里使用 "),v("code",[t._v("vm.$nextTick")]),t._v(" 回调函数。")])]),t._v(" "),v("p",[v("strong",[t._v("应用场景")])]),t._v(" "),v("ul",[v("li",[t._v("如果 "),v("code",[t._v("DOM")]),t._v(" 操作依赖的数据是在异步操作中获取，并且只有一次数据的更改 （数据更新完毕）时可以对数据更新做一些统一处理。")])]),t._v(" "),v("p",[v("strong",[t._v("updated ， watch 和 nextTick 区别")])]),t._v(" "),v("ul",[v("li",[v("p",[v("code",[t._v("updated")]),t._v(" 对所有数据的变化进行统一处理")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("watch")]),t._v(" 对具体某个数据变化做统一处理")])]),t._v(" "),v("li",[v("p",[v("code",[t._v("nextTick")]),t._v(" 是对某个数据的某一次变化进行处理")])])]),t._v(" "),v("h3",{attrs:{id:"activated-钩子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#activated-钩子"}},[t._v("#")]),t._v(" activated 钩子")]),t._v(" "),v("p",[t._v("被 keep-alive 缓存的组件激活时调用。")]),t._v(" "),v("ul",[v("li",[t._v("在使用 "),v("code",[t._v("vue-router")]),t._v(" 时有时需要使用 "),v("code",[t._v("<keep-alive></keep-alive>")]),t._v(" 来缓存组件状态，这个时候 "),v("code",[t._v("created")]),t._v(" 钩子就不会被重复调用了。如果我们的子组件需要在每次加载的时候进行某些操作，可以使用 "),v("code",[t._v("activated")]),t._v(" 钩子触发。")])]),t._v(" "),v("h3",{attrs:{id:"deactivated-钩子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#deactivated-钩子"}},[t._v("#")]),t._v(" deactivated 钩子")]),t._v(" "),v("p",[t._v("被 keep-alive 缓存的组件停用时调用。")]),t._v(" "),v("h3",{attrs:{id:"beforedestroy-钩子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy-钩子"}},[t._v("#")]),t._v(" beforeDestroy 钩子")]),t._v(" "),v("p",[t._v("实例销毁之前调用。")]),t._v(" "),v("ul",[v("li",[t._v("在这一步，实例仍然完全可用（ "),v("code",[t._v("this")]),t._v(" 仍能获取到）。")])]),t._v(" "),v("p",[t._v("注： "),v("code",[t._v("beforeDestroy")]),t._v(" 和 "),v("code",[t._v("destroyed")]),t._v(" 只能通过手动触发 "),v("code",[t._v("$destroy")]),t._v(" 来调用。")]),t._v(" "),v("p",[v("strong",[t._v("应用场景")])]),t._v(" "),v("ul",[v("li",[t._v("一般在这做一些重置的操作，比如清除掉组件中的 定时器 和 监听的 "),v("code",[t._v("DOM")]),t._v(" 事件。")]),t._v(" "),v("li",[t._v("提示：你确认删除 XX 吗？")])]),t._v(" "),v("h3",{attrs:{id:"销毁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#销毁"}},[t._v("#")]),t._v(" 销毁")]),t._v(" "),v("p",[t._v("对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。")]),t._v(" "),v("h3",{attrs:{id:"destroyed-钩子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#destroyed-钩子"}},[t._v("#")]),t._v(" destroyed 钩子")]),t._v(" "),v("p",[t._v("实例销毁后调用。")]),t._v(" "),v("ul",[v("li",[t._v("vue2.0 之后主动调用 "),v("code",[t._v("$destroy")]),t._v(" 不会移除 "),v("code",[t._v("DOM")]),t._v(" 节点，作者不推荐直接 "),v("code",[t._v("destroy")]),t._v(" 这种做法，如果实在需要这样用可以在这个生命周期钩子中手动移除 "),v("code",[t._v("DOM")]),t._v(" 节点。")])]),t._v(" "),v("p",[v("strong",[t._v("应用场景")])]),t._v(" "),v("ul",[v("li",[t._v("提示：已删除 XX")])]),t._v(" "),v("h2",{attrs:{id:"组件生命周期"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件生命周期"}},[t._v("#")]),t._v(" 组件生命周期")]),t._v(" "),v("h3",{attrs:{id:"单个组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单个组件"}},[t._v("#")]),t._v(" 单个组件")]),t._v(" "),v("ol",[v("li",[t._v("初始化组件时，仅执行了 beforeCreate/Created/beforeMount/mounted 四个钩子函数。")]),t._v(" "),v("li",[t._v("当改变data中定义的变量（响应式变量）时，会执行 beforeUpdate/updated 钩子函数。")]),t._v(" "),v("li",[t._v("当切换组件（当前组件未缓存）时，会执行 beforeDestory/destroyed 钩子函数。")]),t._v(" "),v("li",[t._v("初始化和销毁时的生命钩子函数均只会执行一次， beforeUpdate/updated 可多次执行。")])]),t._v(" "),v("h3",{attrs:{id:"父子组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#父子组件"}},[t._v("#")]),t._v(" 父子组件")]),t._v(" "),v("ol",[v("li",[t._v("仅当子组件完成挂载后，父组件才会挂载。")]),t._v(" "),v("li",[t._v("当子组件完成挂载后，父组件会主动执行一次 beforeUpdate/updated 钩子函数（仅首次）。")]),t._v(" "),v("li",[t._v("父子组件在 data 变化中是分别监控的，但是在更新 props 中的数据是关联的（可实践）。")]),t._v(" "),v("li",[t._v("销毁父组件时，先将子组件销毁后才会销毁父组件。")])]),t._v(" "),v("h3",{attrs:{id:"兄弟组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#兄弟组件"}},[t._v("#")]),t._v(" 兄弟组件")]),t._v(" "),v("ol",[v("li",[t._v("兄弟组件的初始化（ mounted 之前）分开进行，挂载是从上到下依次进行。")]),t._v(" "),v("li",[t._v("当没有数据关联时，兄弟组件之间的更新和销毁是互不关联的。")])])])}),[],!1,null,null,null);e.default=_.exports}}]);