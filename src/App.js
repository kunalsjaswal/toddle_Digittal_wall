import './App.css';
import RoutesPage from './components/routing/RoutesPage';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
    <>
      <RoutesPage/>
    </>
  );
}

export default App;
