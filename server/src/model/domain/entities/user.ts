import { Optional } from 'sequelize';
import { Table, Model } from 'sequelize-typescript';

interface UserAttributes {
  id: number;
  login:string;
  passwordEncrypted:string;
  email:string;
  name: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table
class User extends Model<UserAttributes, UserCreationAttributes> {}
