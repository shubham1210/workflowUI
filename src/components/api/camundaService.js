import axios from "axios";

const apiUrl = "http://localhost:8085/engine-rest";


export const getTaskList = async query => {
  return await axios.get(apiUrl+"/task"
  );
};

export const getProcessDefinition = async query => {
    return await axios.get(apiUrl+"/process-definition")
}


export const submitFormWithVaribale = async (taskId,isApproved) => {
    return await axios.post(apiUrl+"/task/"+taskId+"/submit-form",{
        "variables": {
            "isApproved": {
                "value": isApproved
            }
        }
    }
    );
  };

  export const postProcessDefinition = async (processDefination) => {
    return await axios.post(apiUrl+"/process-definition/"+processDefination+"/submit-form",{
        "variables": {
        }
    }
    );
  };
  