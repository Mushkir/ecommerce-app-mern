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

  getCurrentUserDetail: {
    url: `${API_URI}/user-profile`,
    method: "GET",
  },
  logoutEndPoint: {
    url: `${API_URI}/logout`,
    method: "GET",
  },
  getAllUsers: {
    url: `${API_URI}/get-all-users`,
    method: "GET",
  },
};

export default apiEndPointObj;
