import { ConfigService } from "@nestjs/config";
import { DataSource } from "typeorm";

export const databaseProvider = [
    {
        provide: "DATABASE_CONNECTION",
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
            const dataSource = new DataSource({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "postgres",
                password: "12345",
                database: "Back_End_Angelo_Vera",
            });

            return dataSource.initialize();
        },
    },
];
