import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((coreConcept) => {
              return (
                <CoreConcept
                  title={coreConcept.title}
                  description={coreConcept.description}
                  img={coreConcept.image}
                />
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

const reactDescriptions = ["Fundamental", "Core", "Crucial"];

function getRandomDescription(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt="" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {
  const description = reactDescriptions[getRandomDescription(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default App;
