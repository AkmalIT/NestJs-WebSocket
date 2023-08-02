import { Module } from '@nestjs/common';
import { GateWays } from './gataways';

@Module({
    providers: [GateWays]
})
export class GatewaysModule {}
