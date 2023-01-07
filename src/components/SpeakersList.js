import React from "react";
import Speaker from "./Speaker";
import { data } from "../../SpeakerData";
import { useState, useEffect } from "react";

const SpeakersList = ({ showSessions }) => {
  const [speakersData, setSpeakersData] = useState([]);

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  React.useEffect(() => {
    const delayFunc = async () => {
      await delay(2000);
      setSpeakersData(data);
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

  return (
    <div className="container speakers-list">
      <div className="row">
        {speakersData.map((speaker) => {
          return (
            <Speaker
              key={speaker.id}
              speaker={speaker}
              showSessions={showSessions}
              onFavoriteToggle={() => onFavoriteToggle(speaker.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SpeakersList;
