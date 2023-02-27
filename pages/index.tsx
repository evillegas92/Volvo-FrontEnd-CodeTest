import styles from "@/pages/index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <main>
        <h1 className={styles.title}>Welcome to Volvo Cars</h1>
        <h3>
          <Link href="/products">See the latest recharge cars</Link>
        </h3>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
