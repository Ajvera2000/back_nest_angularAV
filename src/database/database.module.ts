import { Module } from '@nestjs/common';
import { databaseprovider } from './database.providers';

@Module({
    providers:[...databaseprovider],
    exports:[...databaseprovider]
})
export class DatabaseModule {

}
