/**
 * 操作 localStorage
 * 保存 WEB平台的地址，登录用户，密码，token等
 * @type {string}
 */

const WEB_SECURITY="web_security";
/** WEB 平台的登录信息 */
const webInfo={url:"http://localhost:18088",user:'admin',password:'admin',token:null}

export const setWebInfo = (info) => {
  localStorage.setItem(WEB_SECURITY, JSON.stringify(info));
}

export const setWebInfo0 = (url,user,password) => {
  let info ={url:url,user:user,password:password,token:null}
  localStorage.setItem(WEB_SECURITY, JSON.stringify(info));
}
export const setWebToken = (token) => {
  const data1 = localStorage.getItem(WEB_SECURITY)
  const data2 = JSON.parse(data1);
  if (!!data2) {
    data2.token = token;
    localStorage.setItem(WEB_SECURITY, JSON.stringify(data2));
  };
}

export const getWebInfo = () => {
  const data1 = localStorage.getItem(WEB_SECURITY)
  const data2 = JSON.parse(data1);
  if (!!data2) return data2; else return false;
}


export const getWebToken = () => {
  const data1 = localStorage.getItem(WEB_SECURITY)
  const data2 = JSON.parse(data1);
  if (!!data2) {
    if (!!data2.token)
      return data2.token;
  };
  return false;
}

export const getWebUrl = () => {
  const data1 = localStorage.getItem(WEB_SECURITY)
  console.log("data1: %o",data1);
  const data2 = JSON.parse(data1);
  console.log("data2: %o",data1);
  if (!!data2) {
    if (!!data2.url)
      return data2.url;
  };
  return false;
}

export const getWebUser = () => {
  const data1 = localStorage.getItem(WEB_SECURITY)
  const data2 = JSON.parse(data1);
  if (!!data2) {
    if (!!data2.user)
      return data2.user;
  };
  return false;
}

export const getWebPassword = () => {
  const data1 = localStorage.getItem(WEB_SECURITY)
  const data2 = JSON.parse(data1);
  if (!!data2) {
    if (!!data2.password)
      return data2.password;
  };
  return false;
}
