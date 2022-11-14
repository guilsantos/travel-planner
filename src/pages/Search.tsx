import { useState } from "react";
import dayjs from "dayjs";
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

  const [state, setState] = useState({
    origin: searchAsObject.origin,
    destination: searchAsObject.destination,
    passengers: searchAsObject.passengers,
    date: searchAsObject.date ? dayjs(searchAsObject?.date) : null,
  });

  const handleChange = (field: string) => (value: string) => {
    setState((currentState) => ({
      ...currentState,
      [field]: value,
    }));
    setSearch({
      ...searchAsObject,
      [field]: value,
    });
  };

  const handleRouteChange = () => {
    navigate({
      pathname: "/result",
      search: `?${createSearchParams(searchAsObject)}`,
    });
  };

  const handleAddIntermediate = () => {};

  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Typography variant="h6">Search form</Typography>
        </Grid>
        <Grid xs={6}>
          <ComboBox
            title="City of origin"
            onChange={handleChange("origin")}
            value={state.origin}
          />
        </Grid>
        <Grid xs={6}>
          <ComboBox
            title="City of destination"
            onChange={handleChange("destination")}
            value={state.destination}
          />
        </Grid>
        <Grid xs={12}>
          <Button
            variant="contained"
            onClick={handleAddIntermediate}
            disabled={!state.origin}
          >
            Add Intermediate City
          </Button>
        </Grid>
        <Grid xs={6}>
          <DesktopDatePicker
            label="Trip date"
            inputFormat="MM/DD/YYYY"
            value={state.date}
            onChange={(newValue) =>
              handleChange("date")(newValue?.toISOString() ?? "")
            }
            renderInput={(params) => <TextField fullWidth {...params} />}
            shouldDisableDate={(day) => day.isBefore(dayjs())}
          />
        </Grid>
        <Grid xs={6}>
          <TextField
            fullWidth
            placeholder="Number of passengers"
            onChange={(e) => handleChange("passengers")(e.target.value)}
            value={state.passengers}
            type="number"
          />
        </Grid>
        <Grid xs={12}>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              onClick={handleRouteChange}
              disabled={
                !state.origin ||
                !state.destination ||
                !state.date ||
                !state.passengers
              }
            >
              Calc the route!
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
