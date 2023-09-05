import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/modules/users/entities/user.entity';

export const databaseProviders = [
  {
    provide: 'DEFAULT',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'phamthanhhung',
        password: 'hung1912',
        database: 'demo-sequelize',
      });
      sequelize.addModels([User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
