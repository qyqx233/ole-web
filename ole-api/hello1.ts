const jh = require('@johman/helper');

class A {
    static getVideos() {
        const { search, typeId, page = 1, year, letter,
            area, language, condition, }
            = jh.convertToByReference(
                arguments,
                ['search', 'typeId', 'page', 'order', 'year', 'letter', 'area', 'language', 'condition', 'instance']
            );
        console.log(search)
    }
}

let a = new A()
A.getVideos({search: 100})

