import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useQueryCities } from "../services";

const ComboBox = ({ title, value, onChange }: any) => {
  const [selectedItem, setSelectedItem] = useState<string | null | undefined>();
  const [city, setCities] = useState("");
  const { data } = useQueryCities(city);

  const citiesList = data?.map((c) => c[0]);

  return (
    <Autocomplete
      onChange={(event: any, newValue: string | null) => {
        setSelectedItem(newValue);
      }}
      value={selectedItem}
      onInputChange={(e, newValue) => setCities(newValue as string)}
      inputValue={city}
      disablePortal
      options={citiesList || []}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} fullWidth label={title} />
      )}
    />
  );
};

export default ComboBox;
