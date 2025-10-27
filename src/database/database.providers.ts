import { DataSource } from 'typeorm';
import { ConfigService } from 'src/config/config.service';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    inject: [ConfigService],
    useFactory: (config: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: config.get('HOST') || 'localhost',
        port: +config.get('PORT') || 5432,
        username: config.get('USERNAME') || 'postgres',
        password: config.get('PASSWORD') || 'prueba',
        database: config.get('DATABASE') || 'mi_base',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true, // opcional, crea tablas automáticamente
      });

      return dataSource.initialize();
    },
  },
];
