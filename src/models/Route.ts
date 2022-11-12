export interface Route {
  city: {
    origin: string;
    intermediate: string[];
    destination: string;
  };
  date: string;
  passanger: number;
}
