const API_URI = "http://localhost:8080";

const apiEndPointObj = {
  signUpEndPoint: {
    url: `${API_URI}/sign-up`,
    method: "POST",
  },

  loginEndPoint: {
    url: `${API_URI}/login`,
    method: "POST",
  },
};

export default apiEndPointObj;
