import axios from 'axios'

const baseUrl = 'https://127.0.0.1:8000/api/'
const productUrl = 'https://127.0.0.1:8000/api/products/backend'

axios.defaults.crossDomain = true;
axios.defaults.withCredentials  = true;

//http://127.0.0.1:8000/api/user/products/backend?s=1921616&sort=asc&page=1

const getAllProducts = (sort = "asc", page = 1) => {
    const parameters = `?sort=${sort}&page=${page}`
    const request = axios.get(`${productUrl}${parameters}`)
    return request.then(response => response.data)
}

const getUserInfo = () => {
    const request = axios.get(`${baseUrl}user/info`)
    return request.then(response => response.data).catch(error => {
        return null
    })
}

const Login = async (email,password) => {

    const request =  axios.post(`${baseUrl}user/login`, {
        email,
        password
    }, {withCredentials: true})
    return request.then(response => response.data)
}


const LogOut = () => {

    const request = axios.post(`${baseUrl}user/logout`, {
    }, {withCredentials: true})
    return request.then(response => response.data)

}


const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const register = (id, newObject) => {
    const request = axios.put(axios.get(`${baseUrl}user/register`))
    return request.then(response => response.data)
}


const del = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}


const functions = {
    getAllProducts,
    create,
    update,
    del,
    getUserInfo,
    Login,
    register,
    LogOut,
};

export default functions;