import {Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from "./users.service";
import { UserInterface } from "./interfaces/user.interface";

@Controller('users')
export class UsersController {

  constructor(private readonly userService: UsersService) {
  }

  @Get()
  findAll(): Promise<UserInterface[]> {
    return this.userService.findAll();
  }

  //
  @Get(':id')
  findOne(@Param() param): Promise<UserInterface>{
        return  this.userService.findOne(param.id);
  }

  //
  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<UserInterface> {
    return this.userService.create(createUserDto)
  }

  //
  @Put(':id')
  update(@Body() updateUserDto: CreateUserDto,@Param('id') id): Promise<UserInterface>{
    return  this.userService.update(id,updateUserDto);
  }

  //
  @Delete(':id')
  delete(@Param('id') id): Promise<UserInterface>{
    return this.userService.delete(id);
  }


}
