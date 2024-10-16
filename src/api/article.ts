import request from "../utils/request";

export function getArticleList(params: any){
  return request({
    url:"api/getArticleList",
    method:"get",
    params
  });
}

export function getCenterdynamicsList(params:any){
  return request({
    url:"api/getCenterdynamicsList",
    method:"get",
    params
  });
}

export function getGreatcasesList(params:any){
  return request({
    url:"api/getGreatcasesList",
    method:"get",
    params
  });
}

export function getReleaseList(params:any){
  return request({
    url:"api/getReleaseList",
    method:"get",
    params
  });
}

export function getTeacherList(params:any){
  return request({
    url:"api/getTeacherList",
    method:"get",
    params
  });
}

export function getNoticesList(params:any){
  return request({
    url:"api/getNoticesList",
    method:"get",
    params
  });
}

// export function getArticleById(id){
//   return request({
//       url: `/api/getArticleById`,
//       method:"post",
//       data:{id}
//   })
// }

export function getArticleById(id: any){
  return request({
      url: `/api/getArticleById?id=${id}`,
      method:"get",
  })
}

export function increaseWatch(id: any){
  return request({
      url: "/api/increaseWatch",
      method: "post",
      data: { id }
  });
}

export function getVideosList(params:any){
  return request({
    url:"api/getVideosList",
    method:"get",
    params
  });
}

export function likeVideoById(id: any) {
  return request({
      url: "/api/likeVideo",
      method: "post",
      data: { id }
  });
}

export function unlikeVideoById(id: any) {
  return request({
      url: "/api/unlikeVideo",
      method: "post",
      data: { id }
  });
}

export function increaseVideoWatch(id: any){
  return request({
      url: "/api/increaseVideoWatch",
      method: "post",
      data: { id }
  });
}

export function getdownloadsList(params:any){
  return request({
    url:"api/getdownloadsList",
    method:"get",
    params
  });
}

export function gettrannoticesList(params:any){
  return request({
    url:"api/gettrannoticesList",
    method:"get",
    params
  });
}

export function saveArticle(data: { title: string, context: string, author: string, text:string, cover:string, img1:string, img2:string, fromwhere:string}) {
  return request({
    url: "/api/saveArticle",
    method: "post",
    data
  });
}

export function adminLogin(data: { username: string, password: string }) {
  return request({
    url: "/api/adminLogin",
    method: "post",
    data
  });
}