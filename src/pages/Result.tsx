import dayjs from "dayjs";
import { useSearchParams } from "react-router-dom";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TravelCard from "../components/TravelCard";
import TravelCardLoading from "../components/TravelCard.loading";
import { useQueryDistance } from "../services";

const formatDistance = (distance?: number) => {
  return `${(distance || 0).toFixed(2)} Km`;
};

const App = () => {
  const [search] = useSearchParams();

  const searchAsObject = Object.fromEntries(new URLSearchParams(search));

  const INTERMEDIATE_CITIES = searchAsObject?.intermediates?.split(",") ?? [];

  const ROUTE = [
    searchAsObject.origin,
    ...INTERMEDIATE_CITIES,
    searchAsObject.destination,
  ];

  const { data, isLoading } = useQueryDistance(ROUTE);

  const TOTAL_DISTANCE = (data || []).reduce(
    (prev, curr) => prev + curr.distance,
    0
  );

  const FORMATED_DATA = dayjs(searchAsObject.date).format("MM/DD/YYYY");

  return (
    <Grid container spacing={3}>
      <Grid xs={12}>
        <Typography variant="h6">Results</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant="body1">Trip date {FORMATED_DATA}</Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant="body1">
          Number of passengers {searchAsObject.passengers}
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant="body1">
          Total distance {formatDistance(TOTAL_DISTANCE)}
        </Typography>
      </Grid>

      {isLoading &&
        ROUTE.map((route, i) => (
          <Grid xs={12} sm={6} md={4} lg={3} key={i}>
            <TravelCardLoading />
          </Grid>
        ))}

      {(data || []).map((route, i) => (
        <Grid xs={12} sm={6} md={4} lg={3} key={i}>
          <TravelCard
            origin={route.origin}
            destination={route.destination}
            distance={formatDistance(route.distance)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default App;
