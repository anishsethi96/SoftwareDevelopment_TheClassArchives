import http from "../http-common";

class CreatePaperDataService {
  create(data) {
    return http.post("/papers", data);
  }
}

export default new CreatePaperDataService();
