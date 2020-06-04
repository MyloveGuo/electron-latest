import store from './store'
import {Message} from "element-ui";

import {InstantData} from './data/models'
let status = store.getters.dataStatus

async function init() {
    try{
        await store.dispatch('stomp/connectWS')
        Message.success("服务器通信已连接")
    }catch (error) {
        Message.error(error+"")
        console.error(error)
    }
}

const success = function () {
    if (!status){
        status = store.dispatch('stomp/setStatus')
        Message.success("实时数据已同步")
    }
}

const success1 = function (){
    if (!status){
        status = store.dispatch('stomp/setStatus')
        Message.success("测试数据已同步")
    }
}

init().then(async () => {
    const data = await InstantData.findOne({where:{"id":1},raw:true})
    let stomp = store.getters.stomp
    console.log(JSON.stringify(data))
    stomp.subscribe("/topic/getResponse",success)
    stomp.subscribe("/user/topic/receive",success1)
    setInterval(function () {
        stomp.send("/app/hello",{},JSON.stringify(data))
    },1000)
})
