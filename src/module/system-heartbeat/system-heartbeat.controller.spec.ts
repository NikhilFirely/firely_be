import { Test, TestingModule } from '@nestjs/testing';
import { SystemHeartbeatController } from './system-heartbeat.controller';

describe('SystemHeartbeatController', () => {
  let controller: SystemHeartbeatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SystemHeartbeatController],
    }).compile();

    controller = module.get<SystemHeartbeatController>(
      SystemHeartbeatController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
