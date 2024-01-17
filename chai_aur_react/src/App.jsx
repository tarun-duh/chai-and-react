function App() {
  let orders = 5;
  function additionfunc() {
    orders = orders + 1;
    console.log(orders);
  }
  return (
    <>
      <h1>Chai counter : {orders}</h1>
      <button onClick={additionfunc}>add chai</button>
      <br />
      <button>remove chai</button>
    </>
  );
}

export default App;
