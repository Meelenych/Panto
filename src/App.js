import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import './App.css';

import HomeView from './components/Home/HomeView';
import Container from './components/Container/Container';

export default function App() {
  return (
    <div>
      <HomeView />
      <Container>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
        <ToastContainer />
      </Container>
    </div>
  );
}
