export type Pages = {
    Home:undefined,
    Users:undefined
    Favorites:undefined
}

export type UserPages = {
  Profiles:undefined,
  User:undefined
}


export interface UserType {
    id?:number
    email:string
    first_name:string
    last_name?:string
    avatar?:string
}

export interface ApiRes{
  page:number
  total_pages:number
  data:UserType[]
}

export type max = 1 | 2 

export const API = 'https://reqres.in/api'
