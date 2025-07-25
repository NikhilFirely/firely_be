import { Module } from '@nestjs/common';
import { SystemHeartbeatController } from './system-heartbeat.controller';
import { SystemHeartbeatService } from './system-heartbeat.service';
import { SystemHeartbeatRepositoryService } from './system-heartbeat-repository.service';

@Module({
  controllers: [SystemHeartbeatController],
  providers: [SystemHeartbeatService, SystemHeartbeatRepositoryService],
})
export class SystemHeartbeatModule {}
