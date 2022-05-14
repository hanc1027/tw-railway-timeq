import _axios from "axios"

const axios = (baseURL) => {
    const instance = _axios.create({
            baseURL: baseURL || 'https://ptx.transportdata.tw/MOTC/v3/Rail/TRA',
            timeout: 1000,
        });

     return instance;
}

export {axios};
export default axios();