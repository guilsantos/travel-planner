import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useQueryCities } from "../services";

const ComboBox = ({ title, value, onChange }: any) => {
  const { data, isLoading } = useQueryCities(value);

  const citiesList = data?.map((c) => c[0]);

  const handleChange = (newValue: any) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      loading={isLoading}
      value={value}
      onInputChange={(e, newValue) => handleChange(newValue)}
      inputValue={value}
      disablePortal
      options={citiesList || []}
      renderInput={(params) => (
        <TextField {...params} fullWidth label={title} />
      )}
    />
  );
};

export default ComboBox;
