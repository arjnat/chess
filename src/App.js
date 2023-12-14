import Cell from "./ui/atoms/Cell";

function App() {
  return (
    <div >
      <header style={{display:"flex", alignItems:"center", flexDirection:"column"}}>
        <h1>
          Chess Board Program
        </h1>
      </header>
      <section>
        <Cell/>

      </section>
    </div>
  );
}

export default App;
