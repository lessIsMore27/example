// 简单的类的装饰器
export const classDecorator = (target: any) => {
  // 此处的target为类本身
  target.a = true // 给类添加一个静态属性
  console.log("装饰器 里面的打印");
}

@classDecorator
export class ClassA {
  constructor() {
    this.a = 1
    console.log("ClassA 里面的打印");
  }
  a = 2
}

console.info('ClassA.a: ', (ClassA as any).a);
const a = new ClassA();
console.log('a', a.a);
console.info('ClassA.a-2: ', (ClassA as any).a);