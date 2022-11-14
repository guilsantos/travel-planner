import { useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TravelCard from "../components/TravelCard";
import { useQueryDistance } from "../services";

const formatDistance = (distance?: number) => {
  return `${(distance || 0).toFixed(2)} Km`;
};

const App = () => {
  const [search] = useSearchParams();

  const searchAsObject = Object.fromEntries(new URLSearchParams(search));

  const x = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];

  const { data, isLoading } = useQueryDistance([
    searchAsObject.origin,
    searchAsObject.destination,
  ]);

  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <Typography variant="h6">Results</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant="body1">Trip date {searchAsObject.date}</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant="body1">
          Number of passengers {searchAsObject.passengers}
        </Typography>
      </Grid>

      {x.map((y, i) => (
        <Grid xs={12} sm={6} md={4} lg={3} key={i}>
          <TravelCard
            origin={searchAsObject.origin}
            destination={searchAsObject.destination}
            distance={formatDistance(data?.[0])}
            isLoading={isLoading}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default App;
