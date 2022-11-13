import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import ComboBox from "../components/ComboBox";
import { Button, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useSearchParams } from "react-router-dom";

const App = () => {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [passengers, setPassengers] = useState<string>();

  const [date, setDate] = useState<Dayjs | null>(null);

  const handleChange = (newValue: Dayjs | null) => {
    setDate(newValue);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const searchAsObject = Object.fromEntries(new URLSearchParams(searchParams));

  console.log("searchAsObject", searchAsObject);

  console.log(searchParams.get("a"));
  console.log(searchParams.get("peperoni"));
  console.log(searchParams.get("city"));
  console.log("searchParams", searchParams);

  const handleSave = () => {
    setSearchParams({
      a: "asdasdas",
      peperoni: "ppppppppp",
      city: "cityA,cityB,cityC",
    });
  };

  return (
    <div>
      iuaghdkjashkjdhasjkdhsakjdh
      <button onClick={handleSave}>save button!</button>
    </div>
  );
};

export default App;
