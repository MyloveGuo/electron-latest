import SocketJS from 'sockjs-client'
import Stomp from 'stompjs'

const state = {
    stompClient:null,
    status:false,
}

const mutations = {
    INIT_CONNECT: (state, stompClient) => {
        state.stompClient = stompClient;
    },
    SET_STATUS: (state, status) => {
        state.status = status;
    }
}

const actions = {
    connectWS({commit}) {
        return new Promise((resolve,reject) => {
            let socket = new SocketJS('http://localhost:8080/ws')
            let stompClient = Stomp.over(socket)
            stompClient.connect({},
                (frame)=>{
                    commit('INIT_CONNECT',stompClient)
                    // commit('SET_STATUS',true)
                    resolve()
                },
                (error)=>{
                    reject(error)
                })
        })
    },
    setStatus({commit}){
        return new Promise((resolve, reject) => {
            commit('SET_STATUS', true)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
