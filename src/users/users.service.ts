import { Injectable } from '@nestjs/common';
import { UserInterface } from "./interfaces/user.interface";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class UsersService {
  constructor(@InjectModel('Users') private readonly userModel: Model<UserInterface>) {
  }


  async create(user: UserInterface): Promise<UserInterface>{
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  //
  async  findAll(): Promise<UserInterface[]>{
    return await this.userModel.find()
  }

  //
  async findOne(id: string): Promise<UserInterface>{
    return await this.userModel.findById(id)
  }

  //
  async update(id:string,user: UserInterface): Promise<UserInterface>{
    return await this.userModel.findByIdAndUpdate(id,user,{new: true});
  }

  async delete(id: string): Promise<UserInterface>{
    return await this.userModel.findByIdAndDelete(id);
  }
}
