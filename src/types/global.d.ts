declare interface IProps {
  name: string
  age: number
}

/** @use 给每个对象类型增加 null类型 */
declare type MapNullToProperty<T> = {
  [P in keyof T]: T[P] | null
}

declare interface ICurrentUser {
  userName: string
  userId: number
}

/** @description 注释1 */

/** @description 注释2 */
