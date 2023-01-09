const withData = (maxSpeakerstoShow) => {
  return function (Component) {
    const speakers = [
      { imageSrc: "speaker-1124", name: "Douglas Narinas" },
      { imageSrc: "speaker-1530", name: "Tamara Baker" },
      { imageSrc: "speaker-10803", name: "Eugene" },
    ];

    return function () {
      const limitSpeakers = speakers.slice(0, maxSpeakerstoShow);
      return <Component speakers={limitSpeakers}></Component>;
    };
  };
};

export default withData;
