import { Injectable } from '@nestjs/common';

export interface IInfo {
  serviceName: string;
  version: string;
  hostName: string;
  timestamp: string;
}

@Injectable()
export class AppService {
  getHealth(): { message: string } {
    return { message: 'OK' };
  }

  getInfo(): IInfo {
    return {
      serviceName: 'NestJS service',
      version: '0.0.1',
      hostName: 'app',
      timestamp: new Date().getTime().toString(),
    };
  }
}
