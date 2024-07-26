import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  numberField?: StringNullableFilter;
  typeField?: StringNullableFilter;
  price?: FloatNullableFilter;
  hotel?: HotelWhereUniqueInput;
  reservations?: ReservationListRelationFilter;
};
