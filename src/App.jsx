import Devis from "./composant/Devis";
import Teams from "./composant/Teams";

function App() {
  
  return (
    <>
      <Teams />
      <div className="md:my-10 mx-5">
        <Devis />
      </div>
    </>
  );
}

export default App
