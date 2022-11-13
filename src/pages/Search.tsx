import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
  useSearchParams,
  useNavigate,
  createSearchParams,
} from "react-router-dom";
import ComboBox from "../components/ComboBox";
import { Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const App = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useSearchParams();
  const searchAsObject = Object.fromEntries(new URLSearchParams(search));

  const [origin, setOrigin] = useState<string>(searchAsObject.origin);
  const [destination, setDestination] = useState<string>(
    searchAsObject.destination
  );
  const [passengers, setPassengers] = useState<string>(
    searchAsObject.passengers
  );
  const [date, setDate] = useState<Dayjs | null>(
    searchAsObject.date ? dayjs(searchAsObject?.date) : null
  );

  const handleOrigin = (origin: string) => {
    setOrigin(origin);
    setSearch({
      ...searchAsObject,
      origin,
    });
  };

  const handleDestination = (destination: string) => {
    setDestination(destination);
    setSearch({
      ...searchAsObject,
      destination,
    });
  };

  const handlePassangers = (e: any) => {
    setPassengers(e.target.value);
    setSearch({
      ...searchAsObject,
      passengers: e.target.value,
    });
  };

  const handleDate = (newValue: Dayjs | null) => {
    setDate(newValue);
    setSearch({
      ...searchAsObject,
      date: newValue?.toISOString() ?? "",
    });
  };

  const handleRouteChange = () => {
    navigate({
      pathname: "/result",
      search: `?${createSearchParams(searchAsObject)}`,
    });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Typography variant="subtitle1">Search form</Typography>
        </Grid>
        <Grid xs={6}>
          <ComboBox
            title="City of origin"
            onChange={handleOrigin}
            value={origin}
          />
        </Grid>
        <Grid xs={6}>
          <ComboBox
            title="City of destination"
            onChange={handleDestination}
            value={destination}
          />
        </Grid>
        <Grid xs={12}>
          <DesktopDatePicker
            label="Trip date"
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={handleDate}
            renderInput={(params) => <TextField {...params} />}
            shouldDisableDate={(day) => day.isBefore(dayjs())}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            fullWidth
            placeholder="Number of passengers"
            onChange={handlePassangers}
            value={passengers}
          />
        </Grid>
        <Grid xs={12}>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={handleRouteChange}>
              Calc the route!
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
