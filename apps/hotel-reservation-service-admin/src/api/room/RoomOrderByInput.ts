import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  numberField?: SortOrder;
  typeField?: SortOrder;
  price?: SortOrder;
  hotelId?: SortOrder;
};
