import styles from "@/pages/index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Welcome to Volvo Cars</h1>
        <p>
          <Link href="/products">See cars</Link>
        </p>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
