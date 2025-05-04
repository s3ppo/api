import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { readFile } from 'fs/promises';

import { pubsub, PUBSUB_CHANNEL } from '@app/core/pubsub.js';
import { Lxc, LxcContainer } from '@app/unraid-api/graph/resolvers/lxc/lxc.model.js';

@Injectable()
export class LxcService implements OnModuleInit {
    private readonly logger = new Logger(LxcService.name);

    public static readonly CONTAINER_CACHE_KEY = 'lxc_containers';
    public static readonly NETWORK_CACHE_KEY = 'lxc_networks';

    constructor() {}

    async getAppInfo() {
        const containers = await this.getContainers();
        const installedCount = containers.length;
        return {
            info: {
                apps: { installed: installedCount },
            },
        };
    }

    public async onModuleInit() {
        try {
            const appInfo = await this.getAppInfo();
            await pubsub.publish(PUBSUB_CHANNEL.INFO, appInfo);
        } catch (error) {
            this.logger.warn('Error initializing Lxc module:', error);
            this.logger.warn('Lxc may be disabled under Settings -> Lxc.');
        }
    }

    public async getContainers(): Promise<LxcContainer[]> {
        const containers: LxcContainer[] = [
            {
                id: 'lxc_container_1',
                name: 'Container 1',
            },
            {
                id: 'lxc_container_2',
                name: 'Container 2',
            },
        ];
        return containers;
    }
}
