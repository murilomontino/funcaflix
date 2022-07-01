import { Dialect } from 'sequelize/types';
export declare enum ENV {
    'development' = 0,
    'production' = 1,
    'test' = 2
}
export declare type OPTIONS = {
    [key in ENV]: {
        database: string;
        username: string;
        password: string;
        dialect: Dialect;
        host: string;
        port: number;
    };
};
export declare const Options: OPTIONS;
declare const _default: {
    database: string;
    username: string;
    password: string;
    dialect: Dialect;
    host: string;
    port: number;
};
export default _default;
