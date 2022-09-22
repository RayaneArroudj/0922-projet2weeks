import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import School from '../School';
import Skill from '../Skill';

@Entity()
export default class Wilder {
  constructor(
    firstName: string,
    lastName: string,
    school?: School,
    skills?: Skill[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    if (school) {
      this.school = school;
    }
    if (skills) {
      this.skills = skills;
    }
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @ManyToOne(() => School, { eager: true })
  school: School;

  @ManyToMany(() => Skill, { eager: true })
  @JoinTable()
  skills: Skill[];
}

// export default new EntitySchema({
//   name: 'Wilder',
//   columns: {
//     id: {
//       primary: true,
//       type: 'uuid',
//       generated: 'uuid',
//     },
//     firstName: {
//       type: 'text',
//     },
//     lastName: {
//       type: 'text',
//     },
//   },
//   relations: {
//     school: {
//       target: 'School',
//       type: 'many-to-one',
//       eager: true,
//     },
//     skills: {
//       target: 'Skill',
//       type: 'many-to-many',
//       joinTable: true,
//       eager: true,
//     },
//   },
// });
