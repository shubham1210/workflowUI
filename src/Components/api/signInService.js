import axios from "axios";

const apiUrl = "http://localhost:9111";

export const loginUser = async (username, password) => {
    return await axios.post(apiUrl + "/login", {
        "username":username,
        "password":password
    });
  };