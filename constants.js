const baseUrl = "http://localhost:5000";

window.config = {
  ApiUrls: {
    LOGIN: `${baseUrl}/login`,
    SIGNUP: `${baseUrl}/register`
  },

  AppRoutes: {
    SIGNUP: '/Signupwithjs.html',
  },

  HTTP_METHODS: {
    POST: 'POST',
    GET: 'GET'
  }

}