import axios from "axios";
import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const restUrl = "api/speakers";

const useRequestDelay = (delayTime = 2000, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [errorMessage, setErrorMessage] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      try {
        const response = await axios.get(restUrl);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(result.data);
      } catch (error) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setErrorMessage(error);
      }
    };
    delayFunc();
  }, []);

  const updateRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const newRecords = data.map((rec) => {
      return rec.id === record.id ? record : rec;
    });

    const delayFunc = async () => {
      try {
        setData(newRecords);
        await axios.put(`${restUrl}/${record.id}`, record);
        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log("error thrown in updateRecord delayfunc", error);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    };
    delayFunc();
  };

  const insertRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const newRecords = [record, ...data];

    const delayFunc = async () => {
      try {
        setData(newRecords);
        await axios.post(`${restUrl}/99999`, record);
        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log("error thrown in updateRecord delayfunc", error);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    };
    delayFunc();
  };

  const deleteRecord = (record, doneCallback) => {
    const originalRecords = [...data];
    const newRecords = data.filter((rec) => rec.id !== record.id);

    const delayFunc = async () => {
      try {
        setData(newRecords);
        await axios.delete(`${restUrl}/${record.id}`, record);
        if (doneCallback) {
          doneCallback();
        }
      } catch (error) {
        console.log("error thrown in updateRecord delayfunc", error);
        if (doneCallback) {
          doneCallback();
        }
        setData(originalRecords);
      }
    };
    delayFunc();
  };

  return {
    data,
    requestStatus,
    errorMessage,
    updateRecord,
    insertRecord,
    deleteRecord,
  };
};

export default useRequestDelay;
