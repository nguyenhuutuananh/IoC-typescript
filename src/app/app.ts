import 'reflect-metadata';
import { Service } from "../core/container/decorators";
import { Injector } from "../core/container/injector";
@Service()
class Cat {
    talk() {
        console.log('Meooooo!');
    }
}
@Service()
class CatLover {
    public myCat: Cat;
    constructor(cat: Cat) {
        this.myCat = cat;
    }
    showName() {
        console.log('CatLover!');
    }
    showMyCat() {
        this.myCat.talk();
    }
}
@Service()
class App {
    public freeCat: Cat;
    public catLover: CatLover;
    constructor(cat: Cat, catLover: CatLover) {
        this.freeCat = cat;
        this.catLover = catLover;
    }
}
const appInstance = Injector.getInstance<App>(App);
// Sử dụng appInstance với typehint của IDE
appInstance.freeCat.talk();
appInstance.catLover.showName();
appInstance.catLover.showMyCat();
appInstance.catLover.myCat.talk();
