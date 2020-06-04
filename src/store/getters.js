const getters = {
    dataStatus: state => state.stomp.status, // 数据传输状态
    stomp: state => state.stomp.stompClient, // websocket客户端
    sidebar: state => state.app.sidebar,    // 侧边栏状态
}

export default getters
