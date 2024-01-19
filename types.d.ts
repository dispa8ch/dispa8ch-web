export {}

declare global {
  type EmptyObject<T = any> = {
    [index: string | number | symbol]: T;
  }

  declare namespace Helpers {
    type Keyof<T extends EmptyObject> = keyof T;
  }
}