// src/core/decorators.ts
import { AppClassDecorator, TypeInterface } from '../types';
export const Service = (): AppClassDecorator<TypeInterface<object>> => {
    return (target: TypeInterface<object>) => {
        // làm gì đó với target, ví dụ: kiểm tra dữ liệu hay đẩy target vào Injector để lưu trữ
    };
};
