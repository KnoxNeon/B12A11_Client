import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://donatebloodserver.vercel.app'
})

const useAxios = () =>{
    return axiosInstance
}

export default useAxios;