import {
  Table,
  Model,
  Column,
  PrimaryKey,
  Default,
  DataType,
  Unique,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id;

  @Unique
  @Column
  phone: string;

  @Column(DataType.TEXT)
  name: string;
}
