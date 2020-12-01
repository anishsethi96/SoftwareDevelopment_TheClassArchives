import http from "../http-common";

class CreateStudentDataService {
  create(data) {
    return http.post("/students", data);
  }
}

export default new CreateStudentDataService();
