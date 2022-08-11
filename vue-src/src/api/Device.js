import axios from '@/plugins/axios'

const token =
    'eyJhbGciOiJIUzUxMiJ9.eyJjcmVhdGVkIjoxNjU2MDM0MDc4NDY1LCJleHAiOjE2NTYwNDQ4NzgsInVzZXIiOiJhZG1pbiJ9.wI4Lpqz3ECBv0AiC2vnNlRnmYggvQq6Tq4uwjYKRGSKR7xvyZZub4OVWDB970bYNsUtfvZovjy0sO0Ck76lV1g'

class Device {
    constructor() {
      console.log(axios)
        this.axios = axios
    }

    /**
     * 分页查询设备列表
     * @param page
     * @param count
     * @returns {AxiosPromise}
     */
    getDeviceOnPage = (page, count) => {
        return this.axios.get('/api/device/query/devices?page=' + page + '&count=' + count, {
            headers: {
                'Content-Type': 'text/html; charset=UTF-8',
                token: token,
            },
        })
    }

    /**
     * 根据设备ID分页查询能道
     * @param deviceId
     * @param page
     * @param count
     * @param channelType  false非子目录/true子目录
     * @returns {AxiosPromise}
     */
    getChannelByDeviceIdOnPage(deviceId, param) {
        return this.axios.get('/api/device/query/devices/' + deviceId + '/channels', {
            params: param,
            //url: '/api/device/query/devices/'+deviceId+'/channels?page='+page+'&count='+count+'&channelType='+channelType,
            headers: {
                'Content-Type': 'text/html; charset=UTF-8',
                token: token,
            },
        })
    }

    /**
     * 新增设备
     * @param param
     * @returns {AxiosPromise}
     */
    addDevice = (param) => {
        return this.axios.post('/device/add/', {
            data: param,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                token: token,
            },
        })
    }
    /**
     * 修改设备
     * @param param
     * @returns {*}
     */
    updateDevice = (param) => {
        return this.axios.post('/device/update/', {
            data: param,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                token: token,
            },
        })
    }
    /**
     * 删除设备
     * @param param
     * @returns {*}
     */
    removeDevice = (param) => {
        return this.axios.post('/device/delete/', {
            data: param,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                token: token,
            },
        })
    }

    /**
     * 新增通道
     * @param param
     * @returns {AxiosPromise}
     */
    addChannel = (param) => {
        return this.axios.post('/channel/add/', {
            data: param,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                token: token,
            },
        })
    }

    /**
     * 修改通道
     * @param param
     * @returns {AxiosPromise}
     */
    updateChannel = (param) => {
        return this.axios('/channel/update/', {
            data: param,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                token: token,
            },
        })
    }

    /**
     * 删除通道
     * @param param
     * @returns {AxiosPromise}
     */
    removeChannel = (param) => {
        return this.axios.post('/channel/delete/', {
            data: param,
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                token: token,
            },
        })
    }

    playStart = (deviceId, channelId) => {
        return this.axios.get('/api/play/start/' + deviceId + '/' + channelId, {
            headers: {
                'Content-Type': 'text/html; charset=UTF-8',
                token: token,
            },
        })
    }

    /**
     * 按输入值搜索设备和通道
     * @param value
     * @returns {AxiosPromise}
     */
    searchGbDevicesByValue = (value) => {
        return this.axios.get('/device/searchGbDevicesByValue?value=' + value, {
            headers: {
                'Content-Type': 'text/html; charset=UTF-8',
                token: token,
            },
        })
    }

    /**
     * 同步通道
     * @param deviceId
     * @returns {AxiosPromise}
     */
    channelSync = (deviceId) => {
        return this.axios.post('/api/device/query/devices/' + deviceId + '/sync', {
            headers: {
                'Content-Type': 'text/html; charset=UTF-8',
                token: token,
            },
        })
    }
}
export default Device
