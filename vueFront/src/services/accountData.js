import http from "../http-common";

class signupData{ 

get(id){
    return http.get(`/accounts/${id}`);

}
create(data){
    return http.post("/accounts",data);
}

findById(id){
    return http.get(`/accounts?id=${id}`);
}

// delete(username){
//     return http.delete(`/login/${username}`);
// }

}

export default new signupData();