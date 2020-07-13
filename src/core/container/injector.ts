import 'reflect-metadata';
import { TypeInterface } from './types';

export const Injector = new class {
    // Lấy instance của một class
    getInstance<T>(target: TypeInterface<any>): T {
        // tokens are required dependencies, while injections are resolved tokens from the Injector
        // Lấy thông tin những đối tượng cần để tạo ra instance của target
        const dependencies: any[] = Reflect.getMetadata('design:paramtypes', target) || [];
        // Tạo ra các instance của những đối tượng cần thiết (new Foo(), new Bar() )
        const injections = dependencies.map(dependency => Injector.getInstance<any>(dependency));

        // Trả lại instance của target
        return new target(...injections);
    }
};
