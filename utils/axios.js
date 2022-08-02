import axios from 'axios'
// import cookie from "react-cookies";

export default customHeader => {
  const baseURL = 'http://inlens-api.eastus.azurecontainer.io/api'

  //   axios.defaults.xsrfCookieName = "csrftoken";
  //   axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

  let headers = {
    //     "X-CSRFTOKEN": cookie.load("csrftoken"),
    ...customHeader,
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpZGVudGl5LW1hbmFnZXIiLCJleHAiOjE2ODc0MDA0NDcsImlhdCI6MTY1MTQwMDQ0NywiaXNzIjoiaHR0cHM6Ly9pbmxlbnMtc2VydmVyLWRldi5oZXJva3VhcHAuY29tIiwic3ViIjoiNjIxMmZkMDJlZmMwZWFiYzcwNTYzZjg1IiwiaW5pdGlhbHMiOiJNRiIsInByb2ZpbGVfcGljdHVyZSI6IiJ9.-UGfaQfBrsJZz7FbygAe3SJpQsVpeCkfmeWvet9rE3A`,
  }

  //   if (localStorage.token) {
  // headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJpZGVudGl5LW1hbmFnZXIiLCJleHAiOjE2ODc0MDA0NDcsImlhdCI6MTY1MTQwMDQ0NywiaXNzIjoiaHR0cHM6Ly9pbmxlbnMtc2VydmVyLWRldi5oZXJva3VhcHAuY29tIiwic3ViIjoiNjIxMmZkMDJlZmMwZWFiYzcwNTYzZjg1IiwiaW5pdGlhbHMiOiJNRiIsInByb2ZpbGVfcGljdHVyZSI6IiJ9.-UGfaQfBrsJZz7FbygAe3SJpQsVpeCkfmeWvet9rE3A`
  //   }

  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
  })

  axiosInstance.interceptors.response.use(
    response =>
      new Promise((resolve, reject) => {
        resolve(response)
      }),
    error => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      }

      // if (error.response.status === 403 || error.response.status === 401) {
      //   localStorage.removeItem("token");

      //   if (history) {
      //     history.push("/basicdetails");
      //   } else {
      //     window.location = "/basicdetails";
      //   }
      // }
      else {
        return new Promise((resolve, reject) => {
          reject(error)
        })
      }
    },
  )

  return axiosInstance
}
