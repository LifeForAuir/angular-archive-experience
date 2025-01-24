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
      title: 'Пример 1: Функция',
      description: 'Простейшая функция приветствия.',
      code: `
      function greet(name: string): string {
        return "Hello, " + name + "!";
      }
      console.log(greet("World"));
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