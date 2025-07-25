import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { SystemHeartbeatModule } from './system_heartbeat/system_heartbeat.module';
import { SystemHeartbeatRepositoryService } from './system-heartbeat-repository/system-heartbeat-repository.service';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [HealthModule, SystemHeartbeatModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, SystemHeartbeatRepositoryService],
})
export class AppModule {}
