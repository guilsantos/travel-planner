import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const LoadingState = () => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Stack spacing={1}>
          <Skeleton variant="rectangular" height={32} />
          <Skeleton variant="text" sx={{ fontSize: 16 }} width={24} />
          <Skeleton variant="rectangular" height={32} />
          <Skeleton variant="text" sx={{ fontSize: 14 }} />
        </Stack>
      </CardContent>
    </Card>
  );
};

const TravelCard = ({
  origin,
  destination,
  distance,
  isLoading,
}: {
  origin: string;
  destination: string;
  distance: string;
  isLoading: boolean;
}) => {
  if (isLoading) return <LoadingState />;
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
