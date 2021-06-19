import { Module } from '@nestjs/common';

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { UserModule } from "./users/users.modules";

@Module({
  imports: [UserModule,MongooseModule.forRoot('mongodb://localhost/nest-rest-api')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
