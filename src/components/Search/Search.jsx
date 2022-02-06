import styles from './Search.module.css';

export default function Search() {
  return (
    <>
      <form action="">
        <input type="search" className={styles.searchInput} />
        <button type="submit" className={styles.searchButton}></button>
      </form>
    </>
  );
}
