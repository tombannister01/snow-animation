import "./index.scss";

function App() {
  return (
    <>
      <div className="snow-container">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="snowflake"></div>
        ))}
      </div>
    </>
  );
}

export default App;
