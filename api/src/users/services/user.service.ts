import { Injectable } from "@nestjs/common";
import { DeleteResult, Repository, UpdateResult } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Observable, from } from "rxjs";
import { User } from "../models/users.interface";
import { UserEntity } from "../models/users.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}
  createUser(usersData: User): Observable<User> {
    return from(this.usersRepository.save(usersData));
  }
  findAlUser(): Observable<User[]>{
    return from(this.usersRepository.find());
  }
  updateUser(id: number, usersData: User): Observable<UpdateResult> {
    return from(this.usersRepository.update(id, usersData));
  }
  deleteUser(id: number): Observable<DeleteResult> {
    return from(this.usersRepository.delete(id))
  }

}
