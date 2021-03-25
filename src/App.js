import { BrowserRouter } from 'react-router-dom'
import Sidebar from '../src/Containers/Sidebar/Sidebar';
import MainSection from './Containers/MainSection/MainSection';
import "./Assets/styles/App.scss";

function App() {
  return (
    <BrowserRouter>
    <div className="app-js">
      <Sidebar />
      <MainSection />
    </div>
    </BrowserRouter>
  );
}

export default App;
