import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ul><h2>Mobile Operating System</h2>
        <li>Android</li>
        <li>BlackBerry</li>
        <li>Windows Phone</li>
      </ul>
    </div>
  );
}

function App2() {
  return (
    <div className="App">
    <ul><h2>Mobile Manufactures</h2>
      <li>Samsung</li>
      <li>HTC</li>
      <li>Apple</li>
    </ul>
  </div>
  ) ;
}

export { App, App2}