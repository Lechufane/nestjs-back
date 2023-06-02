import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PlayersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'mustafa123',
      username: 'postgres',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    ],
  controllers: [],
  providers: [],
})
export class AppModule {} 
