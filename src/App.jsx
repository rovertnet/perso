
import Equipe from "./composant/TEAMS/equipe";
import Teams from "./composant/Teams";

function App() {
  
  return (
    <>
      <Teams />
      <div className="md:my-10">
        <Equipe />
      </div>
    </>
  );
}

export default App
