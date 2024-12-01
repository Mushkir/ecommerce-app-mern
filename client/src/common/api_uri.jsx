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
  changeUserRole: {
    url: `${API_URI}/update-user-role`,
    method: "PUT",
  },
  updateUserDetailByAdmin: {
    url: `${API_URI}/update-user`,
    method: "PUT",
  },
  addProduct: {
    url: `${API_URI}/product/add-product`,
    method: "POST",
  },
  getAllProducts: {
    url: `${API_URI}/product/get-all-products`,
    method: "GET",
  },
  updateProduct: {
    url: `${API_URI}/product/edit-product`,
    method: "PUT",
  },
  getAllCategories: {
    url: `${API_URI}/product/categories`,
    method: "GET",
  },
  getCategoryWiseProducts: {
    url: `${API_URI}/product/get-category-wise-product`,
    method: "GET",
  },
  getProductDetailById: {
    url: `${API_URI}/product/get-product-detail`,
    method: "POST",
  },
  addToCart: {
    url: `${API_URI}/cart/add-to-cart`,
    method: "POST",
  },
  countCartItems: {
    url: `${API_URI}/cart/count-cart`,
    method: "GET",
  },
  getCartItemsDetail: {
    url: `${API_URI}/cart/get-user-cart-items`,
    method: "GET",
  },
  updateCartProductQty: {
    url: `${API_URI}/cart/update-cart-quantity`,
    method: "POST",
  },
  deleteCartItem: {
    url: `${API_URI}/cart/delete-cart-item`,
    method: "DELETE",
  },
  searchProduct: {
    url: `${API_URI}/product/search-product`,
    method: "GET",
  },
  filterByCategory: {
    url: `${API_URI}/product/filter-by-category`,
    method: "POST",
  },
};

export default apiEndPointObj;
