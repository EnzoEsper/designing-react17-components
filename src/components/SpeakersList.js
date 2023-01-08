import React from "react";
import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import useRequestSpeakers, { REQUEST_STATUS } from "../hooks/useRequestSpeakers";

const SpeakersList = ({ showSessions }) => {
  const { requestStatus, errorMessage, speakersData, onFavoriteToggle } = useRequestSpeakers(2000);

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">
        ERROR: <b>loading Speaker Data Failed {errorMessage}</b>
      </div>
    );
  }

  // if (isLoading) return <div>Loading...</div>;

  return (
    <div className="container speakers-list">
      <ReactPlaceHolder
        type="media"
        rows={15}
        className="speakerslist-placeholder"
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
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
