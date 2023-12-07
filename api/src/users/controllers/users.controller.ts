import { Body, Param, Controller, Post, Get, Put, Delete } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { Observable } from "rxjs";
import { User } from "../models/users.interface";
import { DeleteResult, UpdateResult } from "typeorm";

@Controller("user")
export class UserController {
  constructor(private usersService: UserService) {}
  @Post()
  create(@Body() userData: User): Observable<User> {
    return this.usersService.createUser(userData);
  }

  @Get()
  findAllPost(): Observable<User[]> {
    return this.usersService.findAlUser();
  }
 
  @Put(":id")
  updateUser(
    @Param("id") id: number,
    @Body() userdata: User,
  ): Observable<UpdateResult> {
    return this.usersService.updateUser(id, userdata);
  }

  @Delete(":id")
  deleteUser(@Param("id") id: number): Observable<DeleteResult> {
    return this.usersService.deleteUser(id);
  }
}
