笔记:
  这里组件的一些方法的排序:
    组件的静态  static 
    组件的构造函数
    组件的生命周期函数
    组件的私有方法
    组件的事件监听方法  handle~~
    把事件监听方法传给组件时属性名用 on开头   例如  onSubmit={this.handleSubmitComment.bind(this)}   

大致顺序: 
static 开头的类属性，如 defaultProps、propTypes。
构造函数，constructor。
getter/setter（还不了解的同学可以暂时忽略）。
组件生命周期。
_ 开头的私有方法。
事件监听方法，handle*。
render*开头的方法，有时候 render() 方法里面的内容会分开到不同函数里面进行，这些函数都以 render* 开头。
render() 方法。