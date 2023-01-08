import React from "react";
import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import useRequestSpeakers from "../hooks/useRequestSpeakers";

const SpeakersList = ({ showSessions }) => {
  const { isLoading, hasErrored, errorMessage, speakersData, onFavoriteToggle } = useRequestSpeakers(2000);

  if (hasErrored) {
    return (
      <div className="text-danger">
        ERROR: <b>loading Speaker Data Failed {errorMessage}</b>
      </div>
    );
  }

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container speakers-list">
      <ReactPlaceHolder type="media" rows={15} className="speakerslist-placeholder" ready={isLoading === false}>
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
      </ReactPlaceHolder>
    </div>
  );
};

export default SpeakersList;
