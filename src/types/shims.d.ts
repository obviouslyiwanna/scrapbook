declare module '*.scss'

declare module 'react' {
  export type PropsWithChildren<P = unknown> = P & { children?: unknown }
  export function useState<T = undefined>(initial?: T | (() => T)): [T, (value: T | ((current: T) => T)) => void]
}

declare module 'react/jsx-runtime' {
  export const jsx: unknown
  export const jsxs: unknown
  export const Fragment: unknown
}

declare namespace JSX {
  interface IntrinsicElements {
    [elementName: string]: unknown
  }
}

declare function defineAppConfig(config: unknown): unknown

declare module '@tarojs/components' {
  export const View: any
  export const Text: any
  export const Image: any
  export const Button: any
  export const Input: any
  export const Textarea: any
  export const ScrollView: any
}

declare module '@tarojs/taro' {
  const Taro: any
  export default Taro
  export function useDidShow(callback: () => void): void
  export function useLoad(callback: (options: Record<string, string | undefined>) => void): void
}

declare module '@tarojs/cli' {
  export function defineConfig(config: unknown): unknown
}
