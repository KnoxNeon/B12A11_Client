import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'donatebloodserver.vercel.app'
})

const useAxios = () =>{
    return axiosInstance
}

export default useAxios;