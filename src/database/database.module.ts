import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers'; // CORRECTO
import { ConfigService } from '@nestjs/config';

@Module({
    providers: [...databaseProvider,ConfigService],
    exports: [...databaseProvider],
})
export class DatabaseModule {}
