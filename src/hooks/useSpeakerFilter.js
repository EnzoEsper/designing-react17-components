import React from "react";

const useSpeakerFilter = (startingShowSessions) => {
  const [showSessions, setShowSessions] = React.useState(startingShowSessions);

  return { showSessions, setShowSessions };
};

export default useSpeakerFilter;
