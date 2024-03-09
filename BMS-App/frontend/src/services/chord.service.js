import http from "../http-common";




const	getAll = () =>  {
		return http.get("/chords");
	};

const	get = id => {
		return http.get(`/chords/${id}`);
	};

const	create = data => {
		return http.post("/chords", data);
	};


const	update =(id, data)=> {
		return http.put(`/chords/${id}`, data);
	};

const	remove = id => {
		return http.delete(`/chords/${id}`);
	};

const	removeAll = () => {
		return http.delete(`/chords`);
	};

const ChordDataService =  {
	getAll,
	get,
	create,
	update,
	remove,
	removeAll
}

export default ChordDataService;

