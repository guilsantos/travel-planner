import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const TravelCardLoading = () => {
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

export default TravelCardLoading;
