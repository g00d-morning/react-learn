容器式组件以及函数组件

函数组件: 
这种组件只关心一件事情 —— 根据 props 进行渲染
复用性优秀

关于redux:
Redux的基础概念
三个基本原则   :
 整个应用只有一个可信数据源store
 store只能触发Action来更改
 state的更改必须写成纯函数,每次更新都返回一个新的state,在Redux里这种函数被称为Reducer

action就是一个对象  包含{type, payload}的对象,action是需要store.dispatch的方法发送
Reducer(state, action) {
    switch (action.type) {
        case 'CHANCE_A': 
            return {
                ...state,
                a: 'Modified a'
            };
        default:
            return state
    }
}

两个API  Provider & connect 


