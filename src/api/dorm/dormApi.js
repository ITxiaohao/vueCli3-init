import request from "../request";

const dorm = "/dorm";

export function getBanner() {
  return request({
    url: dorm + "/user/info",
    method: "post"
  });
}
