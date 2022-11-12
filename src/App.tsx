import { useState } from "react";
import { useQueryCities, useQueryDistance } from "./services";

const App = () => {
  const [cities, setCities] = useState("");

  const queryCities = useQueryCities(cities);
  const queryDistance = useQueryDistance(["Paris", "Marseille", "Lyon"]);

  console.log({ queryCities, queryDistance });

  return (
    <div>
      <input
        placeholder="CITY NAME"
        onChange={(e) => setCities(e.target.value)}
      />
    </div>
  );
};

export default App;
