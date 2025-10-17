import { DataSource } from "typeorm"

export const databaseprovider=[
    {
        provide:"DATABASE_CONECTION",
        useFactory:()=>{
            const datasource= new DataSource({
                type:"postgres",
                host:"localhost",
                port: 5432,
                username:"postgres",
                password:"12345",
                database:"Back_End_Angelo_Vera"
            });

            return datasource.initialize();
        }
    } 
]