import MovieCardSlider from "./components/MovieCardSlider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <MovieCardSlider />
    </main>
  );
}
