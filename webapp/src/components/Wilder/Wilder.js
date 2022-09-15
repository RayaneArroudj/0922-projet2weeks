import blankProfilePicture from '../../media/blank-profile-picture.png';
import Skill from '../Skill/Skill';
import {
  Card,
  CardImage,
  CardSecondaryTitle,
  CardTitle,
  CardParagraph,
} from './Wilder.styled';

const Wilder = ({ firstName, lastName, skills }) => {
  return (
    <Card className="card">
      <CardImage src={blankProfilePicture} alt="Jane Doe Profile" />
      <CardTitle>
        {firstName} {lastName}
      </CardTitle>
      <CardParagraph>
        J'aime rendre fou rayane, lui casser le crâne, je me crois dans la reina
        del flow alors que j'ai 0 flow.
      </CardParagraph>
      <CardSecondaryTitle>Wild Skills</CardSecondaryTitle>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill.id}>
            <Skill skillName={skill.skillName} numberOfVotes={1} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Wilder;
