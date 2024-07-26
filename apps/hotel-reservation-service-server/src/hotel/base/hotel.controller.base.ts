/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { HotelService } from "../hotel.service";
import { HotelCreateInput } from "./HotelCreateInput";
import { Hotel } from "./Hotel";
import { HotelFindManyArgs } from "./HotelFindManyArgs";
import { HotelWhereUniqueInput } from "./HotelWhereUniqueInput";
import { HotelUpdateInput } from "./HotelUpdateInput";
import { RoomFindManyArgs } from "../../room/base/RoomFindManyArgs";
import { Room } from "../../room/base/Room";
import { RoomWhereUniqueInput } from "../../room/base/RoomWhereUniqueInput";

export class HotelControllerBase {
  constructor(protected readonly service: HotelService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Hotel })
  async createHotel(@common.Body() data: HotelCreateInput): Promise<Hotel> {
    return await this.service.createHotel({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        address: true,
        rating: true,
        numRooms: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Hotel] })
  @ApiNestedQuery(HotelFindManyArgs)
  async hotels(@common.Req() request: Request): Promise<Hotel[]> {
    const args = plainToClass(HotelFindManyArgs, request.query);
    return this.service.hotels({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        address: true,
        rating: true,
        numRooms: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Hotel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async hotel(
    @common.Param() params: HotelWhereUniqueInput
  ): Promise<Hotel | null> {
    const result = await this.service.hotel({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        address: true,
        rating: true,
        numRooms: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Hotel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateHotel(
    @common.Param() params: HotelWhereUniqueInput,
    @common.Body() data: HotelUpdateInput
  ): Promise<Hotel | null> {
    try {
      return await this.service.updateHotel({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          address: true,
          rating: true,
          numRooms: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Hotel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteHotel(
    @common.Param() params: HotelWhereUniqueInput
  ): Promise<Hotel | null> {
    try {
      return await this.service.deleteHotel({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          address: true,
          rating: true,
          numRooms: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/rooms")
  @ApiNestedQuery(RoomFindManyArgs)
  async findRooms(
    @common.Req() request: Request,
    @common.Param() params: HotelWhereUniqueInput
  ): Promise<Room[]> {
    const query = plainToClass(RoomFindManyArgs, request.query);
    const results = await this.service.findRooms(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        numberField: true,
        typeField: true,
        price: true,

        hotel: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/rooms")
  async connectRooms(
    @common.Param() params: HotelWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        connect: body,
      },
    };
    await this.service.updateHotel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/rooms")
  async updateRooms(
    @common.Param() params: HotelWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        set: body,
      },
    };
    await this.service.updateHotel({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/rooms")
  async disconnectRooms(
    @common.Param() params: HotelWhereUniqueInput,
    @common.Body() body: RoomWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      rooms: {
        disconnect: body,
      },
    };
    await this.service.updateHotel({
      where: params,
      data,
      select: { id: true },
    });
  }
}
