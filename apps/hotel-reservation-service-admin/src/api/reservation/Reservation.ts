import { Room } from "../room/Room";
import { Customer } from "../customer/Customer";

export type Reservation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  status?: "Option1" | null;
  room?: Room | null;
  customer?: Customer | null;
};
