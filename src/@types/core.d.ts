import type { FileInfo } from 'ssh2-sftp-client';

// CORE
// SETTINGS
export type TSettingsState = {
    version: string;
    servers: PiniaServersItem[];
    keys: [];
};

// TERMINAL
type Sizes = {
    cols: number;
    rows: number;
    width: number;
    height: number;
};

export type TTerminalLocal = {
    /** it is a main key, uses as ID */
    channel: number;
    cwd: string;
    sizes: Pick<Sizes, 'cols' | 'rows'>;
};

export type TTerminalRemote = TTerminalLocal & {
    sizes: Sizes;
    remoteData: {
        port: number;
        login: string;
        auth: {
            privateKey?: string;
            passphrase?: string;
            password?: string;
        };
        host: string;
    };
};

// STFP

export type TSftpSelectedItems = Pick<FileInfo, 'name' | 'type'> & {
    path: string;
};

export type TSftpTransfers = {
    inProgress: {
        [key: string]: string;
    };
    wait: {
        from: string;
        to: string;
    }[];
    done: {
        from: string;
        to: string;
    }[];
};
