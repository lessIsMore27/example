console.log(3333);

// 类的装饰器
export const classDecorator = (target) => {
  // 此处的target为类本身
  target.a = true // 给类添加一个静态属性
}


@classDecorator
export class ClassA {
  constructor() {
    this.a = 1
  }
  a = 2
}
console.info('ClassA.a: ', ClassA.a);