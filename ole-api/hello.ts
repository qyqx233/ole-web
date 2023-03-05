import jh from '@johman/helper';

class Person {
    name: string
    age: number
    static get INSTANCE() {
        return 100;
    }
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }

    static what() {
        let o = jh.convertToByReference(
            arguments,
            ['search', 'typeId', 'page', 'order', 'year', 'letter', 'area', 'language', 'condition', 'instance']
        );
        // console.log(o);
    }
}

export default Person;
