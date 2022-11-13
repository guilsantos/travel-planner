import { useSearchParams } from "react-router-dom";
import { useQueryDistance } from "../services";

const formatDistance = (distance?: number) => {
  return `${(distance || 0).toFixed(2)} Km`;
};

const App = () => {
  const [search] = useSearchParams();

  const searchAsObject = Object.fromEntries(new URLSearchParams(search));

  const { data } = useQueryDistance([
    searchAsObject.origin,
    searchAsObject.destination,
  ]);

  return (
    <div>
      <div>Trip date {searchAsObject.date}</div>
      <div>Number of passengers {searchAsObject.passengers}</div>

      <div>
        The distance between {searchAsObject.origin} and
        {searchAsObject.destination} is {formatDistance(data?.[0])}
      </div>
    </div>
  );
};

export default App;
