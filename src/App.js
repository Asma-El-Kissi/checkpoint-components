import logo from './logo.svg';
import './App.css';
import { FullName } from './Component/Profile/FullName.js';
import { Adress } from './Component/Profile/Adress.js';
import { ProfilePhoto } from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <FullName/>
      <Adress/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;
