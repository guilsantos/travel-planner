import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useQueryCities, useQueryDistance } from "./services";

const ComboBox = ({ title }: any) => {
  const [value, setValue] = useState<string | null | undefined>();
  const [city, setCities] = useState("");
  const queryCities = useQueryCities(city);

  const citiesList = queryCities.data?.map((c) => c[0]);

  return (
    <Autocomplete
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      value={value}
      onInputChange={(e, newValue) => {
        console.log(newValue);
        setCities(newValue as string);
      }}
      inputValue={city}
      disablePortal
      options={citiesList || []}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={title} />}
    />
  );
};

const App = () => {
  // const queryDistance = useQueryDistance(["Paris", "Marseille", "Lyon"]);

  // console.log({ queryCities, queryDistance });

  return (
    <div>
      <ComboBox title="City of origin" />
      <ComboBox title="City of destination" />
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </div>
  );
};

export default App;
