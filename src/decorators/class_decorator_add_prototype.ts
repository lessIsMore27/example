// 给修饰类添加实例属性


// 类的装饰器（给类添加实例属性）
export const classDecoratorAddPrototype = prototypeList => (target) => {
  target.prototype = { ...target.prototype, ...prototypeList }
  target.prototype.logger = () => console.info(`${target.name} 被调用`) // target.name即获得类的名
}


@classDecoratorAddPrototype({ fn() { console.info('fnfnfn') } }) // 此处不能使用箭头函数？
export class ClassC {
  constructor() {
    this.a = 1
  }
}
// console.info('ClassC.fn: ', ClassC.fn()) // 报错，fn不在ClassC的静态属性上
const classC = new ClassC()
classC.fn()
classC.logger()