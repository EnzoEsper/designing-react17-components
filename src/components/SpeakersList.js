import React, { useContext } from "react";
import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import useRequestRest, { REQUEST_STATUS } from "../hooks/useRequestRest";
import { data } from "../../SpeakerData";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import SpeakerAdd from "./SpeakerAdd";

const SpeakersList = () => {
  const {
    requestStatus,
    errorMessage,
    data: speakersData,
    updateRecord,
    insertRecord,
    deleteRecord,
  } = useRequestRest();
  const { showSessions } = useContext(SpeakerFilterContext);

  const { searchQuery, eventYear } = useContext(SpeakerFilterContext);

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
        <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord} />
        <div className="row">
          {speakersData
            .filter((speaker) => {
              return (
                speaker.first.toLowerCase().includes(searchQuery.toLowerCase()) ||
                speaker.last.toLowerCase().includes(searchQuery.toLowerCase())
              );
            })
            .filter((speaker) => {
              return speaker.sessions.find((session) => {
                return session.eventYear === eventYear;
              });
            })
            .map((speaker) => {
              return (
                <Speaker
                  key={speaker.id}
                  speaker={speaker}
                  showSessions={showSessions}
                  updateRecord={updateRecord}
                  insertRecord={insertRecord}
                  deleteRecord={deleteRecord}
                />
              );
            })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
};

export default SpeakersList;
