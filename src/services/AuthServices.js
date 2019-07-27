import store from '../store'

export function isLogged(){
    const token = localStorage.getItem('token')

    return token != null
}

export function login() {
    const token = {
        username: 'Ndungu Gatuna'
    }

    setToken(token)
}

function setToken(token){
    localStorage.setItem('token', JSON.stringify(token))
    store.dispatch('authenticate')
}

export function getUsername(){
    return 'Ndungu Gatuna'
}

export function getUserId(){
    return 1
}