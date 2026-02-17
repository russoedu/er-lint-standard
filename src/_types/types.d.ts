import { ConfigObject } from '@eslint/core';
export type SimpleExtendsElement = string | ConfigObject;
export type InfiniteArray<T> = T | InfiniteArray<T>[];
export type ExtendsElement = SimpleExtendsElement | InfiniteArray<ConfigObject>;
export interface ConfigWithExtends extends ConfigObject {
    extends?: ExtendsElement[];
}
//# sourceMappingURL=types.d.ts.map