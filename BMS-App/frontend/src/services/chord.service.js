import http from "../http-common";

class ChordDataService {
	getAll() {
		return http.get("/chords");
	}

	get(id) {
		return http.get(`/chords/${id}`);
	}

	create(data) {
		return http.post("/chords", data);
	}


	update(id, data) {
		return http.put(`/chords/${id}`, data);
	}

	delete(id) {
		return http.delete(`/chords/${id}`);
	}

	deleteAll() {
		return http.delete(`/chords`);
	}

}

export default new ChordDataService();

