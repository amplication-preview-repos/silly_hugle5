import { Hotel } from "../hotel/Hotel";
import { Reservation } from "../reservation/Reservation";

export type Room = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  numberField: string | null;
  typeField: string | null;
  price: number | null;
  hotel?: Hotel | null;
  reservations?: Array<Reservation>;
};
