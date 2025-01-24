export interface Example {
  id: number;
  title: string;
  description: string;
  code: string;
  sourceUrl: string;
}

export const TypescriptExample: Example[] = [
    {
      id: 1,
      title: 'Условные типы (Conditional Types)',
      description: `
      Разберем код:
        1.  type IsString<T> = ...:
            *   Это объявление типа с именем IsString.
            *   <T>:  Обозначает, что это generic-тип. T – это переменная типа (type variable), которая может принимать любой тип.
            *   = ...:  Определяет значение типа.

        2.  T extends string ? true : false:
            *   Это условный тип (conditional type). Он работает как тернарный оператор в JavaScript (condition ? trueExpression : falseExpression), но в контексте типов.
            *   T extends string:  Проверяет, является ли тип T подтипом (subtype) типа string.  Это не означает, что T *равен* string, а лишь, что T совместим с типом string (например, строковый литерал, как 'hello', будет extends string).
            *   ? true : false:
                *   Если T является подтипом string, то результатом типа IsString<T> будет true.
                *   В противном случае (если T не является подтипом string) результатом будет false.|
      `,
      code: `
    // Определяем условный тип IsString
    type IsString<T> = T extends string ? true : false;

    // Примеры использования

    // Тип A будет true, потому что string является строкой
    type A = IsString<string>; // type A = true

    // Тип B будет false, потому что number не является строкой
    type B = IsString<number>; // type B = false

    // Тип C будет true, потому что 'hello' - это строковый литерал
    type C = IsString<'hello'>; // type C = true

    // Тип D будет false, потому что boolean не является строкой
    type D = IsString<boolean>; // type D = false

    // Тип E будет false, потому что null не является строкой
    type E = IsString<null>; // type E = false

    // Тип F будет false, потому что undefined не является строкой
    type F = IsString<undefined>; // type F = false

    // Тип G будет false, потому что объект не является строкой
    type G = IsString<{}>; // type G = false

    // Тип H будет false, потому что массив не является строкой
    type H = IsString<number[]>; // type H = false
      `,
      sourceUrl: 'https://habr.com/ru/articles/871336/',
    },
     {
      id: 2,
      title: 'Пример 2: Интерфейсы',
      description: 'Пример использования интерфейса для определения типа объекта.',
      code: `
    interface Person {
        name: string;
        age: number;
    }

    function printPerson(person: Person): void {
        console.log(\`Name: \${person.name}, Age: \${person.age}\`);
    }

    const user: Person = { name: 'Alice', age: 30 };
    printPerson(user);
      `,
      sourceUrl: 'https://habr.com/ru/articles/871336/',
     },
     {
      id: 3,
      title: 'Пример 3: Классы',
      description: 'Пример использования классов и наследования.',
       code: `
        class Animal {
            constructor(public name: string) {}
            makeSound(): void {
                console.log("Generic animal sound");
            }
        }

        class Dog extends Animal {
            makeSound(): void {
            console.log("Woof!");
        }
        }

        const dog = new Dog("Buddy");
        dog.makeSound();
      `,
       sourceUrl: 'https://habr.com/ru/articles/871336/',
     },
     {
        id: 4,
        title: 'Пример 4: Дженерики',
        description: 'Пример использования дженериков.',
        code: `
            function identity<T>(arg: T): T {
                return arg;
            }
            let myString: string = identity<string>("hello");
            let myNumber: number = identity<number>(123);
            console.log(myString, myNumber)
        `,
       sourceUrl: 'https://habr.com/ru/articles/871336/',
    },
    {
        id: 5,
        title: 'Пример 5: Типы',
        description: 'Пример использования type alias.',
        code: `
            type Status = "success" | "pending" | "error";

            let myStatus: Status = "success";

            function processStatus(status: Status): void {
                console.log(\`Status is: \${status}\`);
            }

            processStatus(myStatus);
      `,
      sourceUrl: 'https://habr.com/ru/articles/871336/',
    }
  ];