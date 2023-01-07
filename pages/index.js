import { data } from "../SpeakerData";
import Speaker from "../src/components/Speaker";

const IndexPage = () => {
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

export default IndexPage;
