import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";

const useRequestSpeakers = (delayTime) => {
  const [speakersData, setSpeakersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasErrored, setHasErrored] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const delayFunc = async () => {
      try {
        await delay(delayTime);
        // throw "HAD ERROR.";
        setIsLoading(false);
        setSpeakersData(data);
      } catch (error) {
        setIsLoading(false);
        setHasErrored(true);
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
    isLoading,
    hasErrored,
    errorMessage,
    onFavoriteToggle,
  };
};

export default useRequestSpeakers;
