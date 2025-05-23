import { join } from 'path';

import { expect, test } from 'vitest';

import type { SlotsIni } from '@app/store/state-parsers/slots.js';
import { store } from '@app/store/index.js';

test('Returns parsed state file', async () => {
    const { parse } = await import('@app/store/state-parsers/slots.js');
    const { parseConfig } = await import('@app/core/utils/misc/parse-config.js');
    const { paths } = store.getState();
    const filePath = join(paths.states, 'disks.ini');
    const stateFile = parseConfig<SlotsIni>({
        filePath,
        type: 'ini',
    });
    expect(parse(stateFile)).toMatchInlineSnapshot(`
      [
        {
          "comment": null,
          "critical": null,
          "device": "sdh",
          "exportable": false,
          "format": "GPT: 4KiB-aligned",
          "fsFree": null,
          "fsSize": null,
          "fsType": null,
          "fsUsed": null,
          "id": "ST18000NM000J-2TV103_ZR585CPY",
          "idx": 0,
          "name": "parity",
          "numErrors": 0,
          "numReads": 0,
          "numWrites": 0,
          "rotational": true,
          "size": 17578328012,
          "status": "DISK_OK",
          "temp": 25,
          "transport": "ata",
          "type": "PARITY",
          "warning": null,
        },
        {
          "comment": "Seagate Exos",
          "critical": 75,
          "device": "sdf",
          "exportable": false,
          "format": "GPT: 4KiB-aligned",
          "fsFree": 13882739732,
          "fsSize": 17998742753,
          "fsType": "xfs",
          "fsUsed": 4116003021,
          "id": "ST18000NM000J-2TV103_ZR5B1W9X",
          "idx": 1,
          "name": "disk1",
          "numErrors": 0,
          "numReads": 0,
          "numWrites": 0,
          "rotational": true,
          "size": 17578328012,
          "status": "DISK_OK",
          "temp": 30,
          "transport": "ata",
          "type": "DATA",
          "warning": 50,
        },
        {
          "comment": "",
          "critical": null,
          "device": "sdj",
          "exportable": false,
          "format": "GPT: 4KiB-aligned",
          "fsFree": 93140746,
          "fsSize": 11998001574,
          "fsType": "xfs",
          "fsUsed": 11904860828,
          "id": "WDC_WD120EDAZ-11F3RA0_5PJRD45C",
          "idx": 2,
          "name": "disk2",
          "numErrors": 0,
          "numReads": 0,
          "numWrites": 0,
          "rotational": true,
          "size": 11718885324,
          "status": "DISK_OK",
          "temp": 30,
          "transport": "ata",
          "type": "DATA",
          "warning": null,
        },
        {
          "comment": "",
          "critical": null,
          "device": "sde",
          "exportable": false,
          "format": "GPT: 4KiB-aligned",
          "fsFree": 5519945093,
          "fsSize": 11998001574,
          "fsType": "xfs",
          "fsUsed": 6478056481,
          "id": "WDC_WD120EMAZ-11BLFA0_5PH8BTYD",
          "idx": 3,
          "name": "disk3",
          "numErrors": 0,
          "numReads": 0,
          "numWrites": 0,
          "rotational": true,
          "size": 11718885324,
          "status": "DISK_OK",
          "temp": 30,
          "transport": "ata",
          "type": "DATA",
          "warning": null,
        },
        {
          "comment": "",
          "critical": null,
          "device": "sdi",
          "exportable": false,
          "format": "MBR: 4KiB-aligned",
          "fsFree": 111810683,
          "fsSize": 250059317,
          "fsType": "btrfs",
          "fsUsed": 137273827,
          "id": "Samsung_SSD_850_EVO_250GB_S2R5NX0H643734Z",
          "idx": 30,
          "name": "cache",
          "numErrors": 0,
          "numReads": 0,
          "numWrites": 0,
          "rotational": false,
          "size": 244198552,
          "status": "DISK_OK",
          "temp": 22,
          "transport": "ata",
          "type": "CACHE",
          "warning": null,
        },
        {
          "comment": null,
          "critical": null,
          "device": "nvme0n1",
          "exportable": false,
          "format": "MBR: 4KiB-aligned",
          "fsFree": null,
          "fsSize": null,
          "fsType": null,
          "fsUsed": null,
          "id": "KINGSTON_SA2000M8250G_50026B7282669D9E",
          "idx": 31,
          "name": "cache2",
          "numErrors": 0,
          "numReads": 0,
          "numWrites": 0,
          "rotational": false,
          "size": 244198552,
          "status": "DISK_OK",
          "temp": 27,
          "transport": "nvme",
          "type": "CACHE",
          "warning": null,
        },
        {
          "comment": "Unraid OS boot device",
          "critical": null,
          "device": "sda",
          "exportable": true,
          "format": "unknown",
          "fsFree": 3191407,
          "fsSize": 4042732,
          "fsType": "vfat",
          "fsUsed": 851325,
          "id": "Cruzer",
          "idx": 32,
          "name": "flash",
          "numErrors": 0,
          "numReads": 0,
          "numWrites": 0,
          "rotational": true,
          "size": 3956700,
          "status": "DISK_OK",
          "temp": null,
          "transport": "usb",
          "type": "FLASH",
          "warning": null,
        },
      ]
    `);
});
