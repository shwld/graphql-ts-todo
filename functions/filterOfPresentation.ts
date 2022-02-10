// filterでnullとundefinedを排除した際に型にもそれを反映する
type Unwrap<T> = T extends { [K in keyof T]: infer U } ? U : never;
type NullOrUndefined = null | undefined;
export function filterOfPresentation<T extends any[]>(array: T) {
  return array.filter((item) => !!item) as Array<
    Exclude<Unwrap<T>, NullOrUndefined>
  >;
}
