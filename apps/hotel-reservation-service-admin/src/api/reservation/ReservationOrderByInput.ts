import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  checkInDate?: SortOrder;
  checkOutDate?: SortOrder;
  status?: SortOrder;
  roomId?: SortOrder;
  customerId?: SortOrder;
};
