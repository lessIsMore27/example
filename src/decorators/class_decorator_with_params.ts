// 传参的类的装饰器

export const classDecoratorWithParams = (param = true) => (target: any) => {
  target.a = param;
}

@classDecoratorWithParams(false)
export class ClassB {
  a: number;
  constructor() {
    this.a = 1;
  }
  fun = () => {
    console.info("fun中的值", this.a, (ClassB as any).a);
  }
}


console.info('ClassB.a', (ClassB as any).a);
const obj = new ClassB();
console.info('new ClassB().a', obj.a);
obj.fun();