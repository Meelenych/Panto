import styles from './homeView.module.css';
import AppNavBar from '../../components/AppNavBar/AppNavBar';

export default function HomeView() {
  return (
    <div className={styles.background}>
      <AppNavBar />
    </div>
  );
}
