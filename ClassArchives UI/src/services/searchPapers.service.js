import http from "../http-common";

class SearchPaperDataService {
  get(course_id) {
    return http.get(`/papers/${course_id}`);
  }
}

export default new SearchPaperDataService();
