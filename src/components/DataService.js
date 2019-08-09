import axios from 'axios';

class DataService {

    retrieveAllTrainees() {
        return axios.get("http://localhost:8080/trainee/getAll");
    }

    deleteTrainee(id){
        return axios.delete(`http://localhost:8080/trainee/delete/${id}`);
    }

    createTrainee(trainee){
        return axios.post("http://localhost:8080/trainee/create2", trainee);
    }

    updateTrainee(id, trainee) {
        return axios.post(`http://localhost:8080/trainee/update/${id}`, trainee);
    }

}

export default new DataService();