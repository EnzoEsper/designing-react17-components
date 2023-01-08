import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const useRequestSpeakers = (delayTime) => {
  const [speakersData, setSpeakersData] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [errorMessage, setErrorMessage] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      try {
        await delay(delayTime);
        // throw "HAD ERROR.";
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setSpeakersData(data);
      } catch (error) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setErrorMessage(error);
      }
    };
    delayFunc();
  }, []);

  const onFavoriteToggle = (id) => {
    const speakerRecPrevious = speakersData.find((rec) => rec.id === id);

    const speakerRecUpdated = {
      ...speakerRecPrevious,
      favorite: !speakerRecPrevious.favorite,
    };

    const speakersDataNew = speakersData.map((rec) => {
      return rec.id === id ? speakerRecUpdated : rec;
    });

    setSpeakersData(speakersDataNew);
  };

  return {
    speakersData,
    requestStatus,
    errorMessage,
    onFavoriteToggle,
  };
};

export default useRequestSpeakers;
