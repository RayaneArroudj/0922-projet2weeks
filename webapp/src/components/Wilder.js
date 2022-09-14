import blankProfilePicture from '../media/blank-profile-picture.png';
import Skill from './Skill';

const Wilder = ({ firstName, lastName, skills }) => {
  return (
    <article className="card">
      <img src={blankProfilePicture} alt="Jane Doe Profile" />
      <h3>
        {firstName} {lastName}
      </h3>
      <p>
        J'aime rendre fou rayane, lui casser le crâne, je me crois dans la reina
        del flow alors que j'ai 0 flow.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill) => (
          <li key={skill.id}>
            <Skill skillName={skill.skillName} numberOfVotes={1} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Wilder;
