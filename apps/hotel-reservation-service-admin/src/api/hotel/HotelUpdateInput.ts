import { RoomUpdateManyWithoutHotelsInput } from "./RoomUpdateManyWithoutHotelsInput";

export type HotelUpdateInput = {
  name?: string | null;
  address?: string | null;
  rating?: number | null;
  numRooms?: number | null;
  rooms?: RoomUpdateManyWithoutHotelsInput;
};
