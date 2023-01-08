import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const useRequestDelay = (delayTime = 2000, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [errorMessage, setErrorMessage] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      try {
        await delay(delayTime);
        // throw "HAD ERROR.";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setData(data);
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
        await delay(delayTime);
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
        await delay(delayTime);
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
        await delay(delayTime);
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
