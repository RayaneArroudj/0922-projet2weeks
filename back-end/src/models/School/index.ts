import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Wilder from '../Wilder';

const EntitySchema = require('typeorm').EntitySchema;

@Entity()
export default class School {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  @Index({ unique: true })
  schoolName: string;

  @OneToMany(() => Wilder, (wilder) => wilder.school)
  wilders: Wilder[];
}

// module.exports = new EntitySchema({
//   name: 'School',
//   columns: {
//     id: {
//       primary: true,
//       type: 'uuid',
//       generated: 'uuid',
//     },
//     schoolName: {
//       type: 'text',
//       unique: true,
//     },
//   },
// });
