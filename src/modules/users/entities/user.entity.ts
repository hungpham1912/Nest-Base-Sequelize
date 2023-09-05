import {
  Table,
  Model,
  Column,
  PrimaryKey,
  Default,
  DataType,
} from 'sequelize-typescript';

@Table
export class User extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: any;

  @Column
  phone: string;

  @Column
  name: string;
}
