import styles from './homeView.module.css';
import AppNavBar from '../../components/AppNavBar/AppNavBar';
import Search from '../../components/Search/Search';

export default function HomeView() {
  return (
    <div className={styles.background}>
      <AppNavBar />
      <h1>Make your interior more minimalistic & modern</h1>
      <p>
        Turn your room with panto into a lot more minimalist and modern with
        ease and speed
      </p>
      <Search />
    </div>
  );
}
