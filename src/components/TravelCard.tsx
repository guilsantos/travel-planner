import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const TravelCard = ({
  origin,
  destination,
  distance,
}: {
  origin: string;
  destination: string;
  distance: string;
}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {origin}
        </Typography>
        <Typography color="text.secondary">to</Typography>
        <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
          {destination}
        </Typography>
        <Typography variant="body2">Distance of {distance}</Typography>
      </CardContent>
    </Card>
  );
};

export default TravelCard;
