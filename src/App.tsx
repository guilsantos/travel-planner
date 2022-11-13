import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import ComboBox from "./components/ComboBox";
import { Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const App = () => {
  const [origin, setOrigin] = useState();
  // const [intermediate, setIntermediate] = useState();
  const [destination, setDestination] = useState();
  const [passengers, setPassengers] = useState<string>();

  const [date, setDate] = useState<Dayjs | null>();

  const handleChange = (newValue: Dayjs | null) => {
    setDate(newValue);
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
            onChange={(e: any) => setOrigin(e.target.value)}
            value={origin}
          />
        </Grid>
        <Grid xs={6}>
          <ComboBox
            title="City of destination"
            onChange={(e: any) => setDestination(e.target.value)}
            value={destination}
          />
        </Grid>
        <Grid xs={12}>
          <DesktopDatePicker
            label="Trip date"
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
            disablePast
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            fullWidth
            placeholder="Number of passengers"
            onChange={(e) => setPassengers(e.target.value)}
            value={passengers}
          />
        </Grid>
        <Grid xs={12}>
          <Stack spacing={2} direction="row">
            <Button variant="contained">Calc the route!</Button>
          </Stack>
        </Grid>
      </Grid>

      {/* <ComboBox
        title="Intermediate city"
        onChange={(e: any) => setIntermediate(e.target.value)}
        value={intermediate}
      /> */}
      {/* <Typography variant="subtitle1">Add intermediate city</Typography> */}
    </div>
  );
};

export default App;
