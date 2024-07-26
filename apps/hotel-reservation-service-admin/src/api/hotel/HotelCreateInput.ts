import { RoomCreateNestedManyWithoutHotelsInput } from "./RoomCreateNestedManyWithoutHotelsInput";

export type HotelCreateInput = {
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  numRooms?: number | null;
  rooms?: RoomCreateNestedManyWithoutHotelsInput;
};
