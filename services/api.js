import axios from 'axios'

axios.defaults.baseURL = `/`
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.headers.common.Accept = 'application/json'

const customRequest = (data) => {
    return axios(data)
        .then((response) => {
            return response?.data
        })
        .catch((err) => {
            // eslint-disable-next-line no-console
            const errorObj = {
                message: err.response.data.message || err.response.data || '',
            }

            throw errorObj
        })
}

export default {
    customRequest,
    get: (url) => customRequest({ method: 'get', url }),
    post: (url, data) => customRequest({ method: 'post', url, data }),
    put: (url, data) => customRequest({ method: 'put', url, data }),
    delete: (url, data) => {
        if (!data) {
            return customRequest({ method: 'delete', url })
        } else {
            return customRequest({ method: 'delete', url, data })
        }
    },
}
