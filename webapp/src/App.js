import './App.css';
import Wilder from './components/Wilder';

const WILDERS = [
  {
    id: 'aaaa',
    firstName: 'Laurent',
    lastName: 'Wilder',
    skills: [
      {
        id: 'skill-1',
        skillName: 'PHP',
      },
    ],
  },
  {
    id: 'bbbb',
    firstName: 'Jeanne',
    lastName: 'Wild',
    skills: [
      {
        id: 'skill-2',
        skillName: 'JavaScript',
      },
    ],
  },
  {
    id: 'cccc',
    firstName: 'Nicolas',
    lastName: 'W.',
    skills: [
      {
        id: 'skill-1',
        skillName: 'PHP',
      },
      {
        id: 'skill-2',
        skillName: 'JavaScript',
      },
    ],
  },
];

function App() {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {WILDERS.map((wilder) => (
            <Wilder
              key={wilder.id}
              firstName={wilder.firstName}
              lastName={wilder.firstName}
              skills={wilder.skills}
            />
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
