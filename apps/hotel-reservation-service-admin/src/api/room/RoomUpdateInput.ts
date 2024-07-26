import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { ReservationUpdateManyWithoutRoomsInput } from "./ReservationUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  numberField?: string | null;
  typeField?: string | null;
  price?: number | null;
  hotel?: HotelWhereUniqueInput | null;
  reservations?: ReservationUpdateManyWithoutRoomsInput;
};
