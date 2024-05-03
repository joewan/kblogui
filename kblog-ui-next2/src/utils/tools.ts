export const serverUrl = 'http://localhost:8885'

export const setToken = (token: string) => {
    sessionStorage.setItem('token', token)
}

export const getToken = () => {
    return sessionStorage.getItem('token')
}