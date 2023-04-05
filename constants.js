const baseUrl = "http://localhost:5000";

window.config = {
  ApiUrls: {
    LOGIN: `${baseUrl}/login`,
    SIGNUP: `${baseUrl}/signup`,
    FETCHPERSONALINFO: `${baseUrl}/FetchPersonalInfo`
  },

  AppRoutes: {
    SIGNUP: '/signup.html',
  },

  HTTP_METHODS: {
    POST: 'POST',
    GET: 'GET'
  },

  DEFAULT_HEADERS: {
    APPLICATION_JSON: { 'Content-Type': 'application/json' }
  }
}