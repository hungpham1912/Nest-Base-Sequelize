import { Module } from '@nestjs/common';
import { databaseProviders } from './databases.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabasesModule {}
