import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { ReservationCreateNestedManyWithoutRoomsInput } from "./ReservationCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  numberField?: string | null;
  typeField?: string | null;
  price?: number | null;
  hotel?: HotelWhereUniqueInput | null;
  reservations?: ReservationCreateNestedManyWithoutRoomsInput;
};
