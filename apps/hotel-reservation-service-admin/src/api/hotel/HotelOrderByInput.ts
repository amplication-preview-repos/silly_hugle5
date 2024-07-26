import { SortOrder } from "../../util/SortOrder";

export type HotelOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  address?: SortOrder;
  rating?: SortOrder;
  numRooms?: SortOrder;
};
