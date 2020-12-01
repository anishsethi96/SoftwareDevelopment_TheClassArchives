import http from "../http-common";

class LoginDataService {
  get(rcs_id) {
    return http.get(`/students/${rcs_id}`);
  }
}

export default new LoginDataService();
