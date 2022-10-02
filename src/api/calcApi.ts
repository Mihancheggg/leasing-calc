import axios, { AxiosResponse } from "axios";

//instance
const instance = axios.create({
  baseURL: 'https://eoj3r7f3r4ef6v4.m.pipedream.net',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
})

//api
export const calcApi = {
  sendData(data: CalcDataType) {
    return instance.post<CalcDataType, AxiosResponse<any>>('',data)
  }
}

//types
export type CalcDataType ={

}