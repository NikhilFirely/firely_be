import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { RepositoryService } from './user-repository.service';

@Module({
  controllers: [UserController],
  providers: [UserService, RepositoryService],
})
export class UserModule {}
