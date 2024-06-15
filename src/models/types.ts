export interface PageLayout {
  children: React.ReactNode;
}

export interface CustomObject<T> {
  [key: string]: T;
}

export type BuildTuple<
  L extends number,
  T = any,
  R extends any[] = []
> = R["length"] extends L ? R : BuildTuple<L, T, [...R, T]>;
