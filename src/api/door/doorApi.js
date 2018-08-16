import request from "../request";
const door = "/door";

export function login(userName, password) {
  return request({
    url: door + "/fileMagSystem/account/login",
    method: "post",
    data: {
      userName: userName,
      password: password
    }
  });
}
