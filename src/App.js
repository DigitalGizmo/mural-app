import Panel from './components/Panel';
import { Link, Outlet } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div >
      {/* <Panel /> */}
      <h1>App</h1>
      <nav>
        <Link to="/test1">Test1</Link> |{" "}
        <Link to="/test2">Test2</Link>
      </nav>
      <Outlet />
    </div>

  );
}

export default App;
