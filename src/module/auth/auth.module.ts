import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { RepositoryService } from './repository/repository.service';

@Module({
  providers: [AuthService, RepositoryService],
  controllers: [AuthController]
})
export class AuthModule {}
