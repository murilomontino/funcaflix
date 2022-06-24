export declare const build: () => Promise<{
    db: import("../models/types").DbModels;
    database: import("sequelize-typescript").Sequelize;
}>;
