import React from "react";
import Speaker from "./Speaker";

const SpeakersList = ({ data }) => {
  return (
    <div className="container speakers-list">
      <div className="row">
        {data.map((speaker) => {
          return <Speaker speaker={speaker} />;
        })}
      </div>
    </div>
  );
};

export default SpeakersList;
