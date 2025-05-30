import type { CoreContext, CoreResult } from '@app/core/types/index.js';
import { ensurePermission } from '@app/core/utils/permissions/ensure-permission.js';

/**
 * Get all devices.
 * @returns All currently connected devices.
 */
export const getDevices = async (context: CoreContext): Promise<CoreResult> => {
    const { user } = context;

    // Check permissions
    ensurePermission(user, {
        resource: 'device',
        action: 'read',
        possession: 'any',
    });
    /*
	Const { devices } = getters.emhttp();

	return {
		text: `Devices: ${JSON.stringify(devices, null, 2)}`,
		json: devices,
	};
	*/
    return {
        text: 'Disabled Due To Bug With Devs Sub',
        json: {},
    };
};
