import axios from "axios";

const apiUrl = "http://localhost:9111";

export const getEmpByProcess = async (processId) => {
  return await axios.get(apiUrl + "/emp/"+processId);
};

export const getEmpDefaultList = async (query) => {
    return await axios.get(apiUrl + "/emp/getBase");
  };

export const saveEmpWithNewVersion = async (employeeArray) => {
  return await axios.post(apiUrl + "/emp", employeeArray);
};

export const getVersionsOfEmp = async (processId,linkedId) => {
    return await axios.get(apiUrl+"/emp/getVersionsOfEmp/"+processId+"/"+linkedId
    );
  };