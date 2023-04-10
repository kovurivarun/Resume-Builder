const APIbaseUrl = "http://localhost:5000";

  window.config = {
    ApiUrls: {
      LOGIN: `${APIbaseUrl}/login`,
      SIGNUP: `${APIbaseUrl}/register`
    },

    AppRoutes: {
      LOGIN: 'Login.html',
      SIGNUP: '/SignUp.html'
    },

    HTTP_METHODS: {
      POST: 'POST',
      GET: 'GET'
    },

    DEFAULT_HEADERS: {
      APPLICATION_JSON: { 'Content-Type': 'application/json' }
    }

  }