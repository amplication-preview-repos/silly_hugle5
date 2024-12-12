import { Module } from "@nestjs/common";
import { CustomerModule } from "./customer/customer.module";
import { RoomModule } from "./room/room.module";
import { ReservationModule } from "./reservation/reservation.module";
import { HotelModule } from "./hotel/hotel.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [],
  imports: [
    CustomerModule,
    RoomModule,
    ReservationModule,
    HotelModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
  ],
  providers: [],
})
export class AppModule {}
