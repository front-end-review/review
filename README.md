# review

复习整理

- html 问的比较少
  H5新特性
  行内元素，块级元素
- css 问的比较少
  - css3性特性
    boder-image, flex grid trasition animation transform 伪类 x:first-of-type 属于父元素的第一个 x 元素
    box-shadow：水平阴影， 垂直阴影的位置， 模糊距离，阴影的的颜色阴影开始方向 filter滤镜
  - flex
    父元素属性：flex-direction 主轴方向 flex-wrap 子元素总宽度大于父元素的时候换行
    flex-flow flex-direction和flex-wrap的简写形式
    justify-content：子元素在主轴方向上的排列
    align-items：子元素在交叉轴方向的排列方式
    align-content: 多根轴线的对齐方式
    元素属性：order 排序， flex-grow定义子元素放大比例 flex-shrink定义子元素缩小比例
    flex-basis 定义子元素在分配多余空间前的大小， 浏览器根据这个属性计算主轴剩余的空间
    align-self：允许单个项目与其他项目不一样的对齐方式
  - postion
    static relative（相对自身定位） absolute（相对上级不为static元素定位） fixed（相对浏览器窗口定位） sticky（relatvie+fixed）
  - 盒模型
    box-sizing: border-box, content-box;
    content-box: 标准的布局方式 width = content
    border-box: IE盒子模型 width = content + padding + border
  - 动画
    traisiton animation requestAnimationFrame
  - css优先级
  - 垂直居中
    父元素 display：relative
    子元素 display: absolute; top: 50%; left: 50%; width:100px;height:100px; margin: -50px 0 0 -50;
    display: absolute; top:50%; left:50%; transform: translate(-50%, -50%);
    display:flex; justify-content: center; align-items: center;
    display: table-cell; vertical-align: middle; text-align: center;
  - 单位，像素问题
  - 布局
  - BFC
    position 为absolute fixed
    display 不为none
    overflow 不为visible
    float 不为none
- js
  - 变量
  - 数据类型
    number string boolean null undefined symbol  Object function
  - 闭包
  - 原型链
  - 数组和方法
  - 函数， function
  - 继承
  - this
  - let const
  - class extends
  - promise async await
  - set map
  - 模块化es commonjs
- 计算机网络
  - http1.0 1.1 2.0 https
    - get post
    - http 请求头， 响应头以及属性的作用
  - 七层网络协议
- 浏览器
  - 跨域
  - event loop
  - 存储
  - 缓存策略
  - 渲染原理
  - 输入URL到页面渲染过程
- 设计模式
- node
- typescript
- 手写
  1. 深拷贝
  2. call bind apply
  3. promise
  4. new
  5. 节流 防抖
- DOM
  1. 事件触发
  2. 事件绑定
  3. 事件模型
  4. 事件委托
- 其他重要知识点
  性能优化，路由，监控
- webpack gulp
- 移动端
- react
  - 新版本的一些属性
  - 声明周期
  - redux
  - state props
  - 可控组件 非可控组件
  - 容器组件， UI组件
- 自己做过的项目

- 未来规划
