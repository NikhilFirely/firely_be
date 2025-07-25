import { Test, TestingModule } from '@nestjs/testing';
import { SystemHeartbeatService } from './system-heartbeat.service';

describe('SystemHeartbeatService', () => {
  let service: SystemHeartbeatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemHeartbeatService],
    }).compile();

    service = module.get<SystemHeartbeatService>(SystemHeartbeatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
