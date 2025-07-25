import { Test, TestingModule } from '@nestjs/testing';
import { SystemHeartbeatRepositoryService } from './system-heartbeat-repository.service';

describe('SystemHeartbeatRepositoryService', () => {
  let service: SystemHeartbeatRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SystemHeartbeatRepositoryService],
    }).compile();

    service = module.get<SystemHeartbeatRepositoryService>(SystemHeartbeatRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
