export type SomePartial<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>

export type AsyncReturnType<T extends (...args: any) => any> =
  T extends (...args: any) => Promise<infer U> ? U :
  T extends (...args: any) => infer U ? U :
  any

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
