import { Room } from "../room/Room";

export type Hotel = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  address: string | null;
  rating: number | null;
  numRooms: number | null;
  rooms?: Array<Room>;
};
