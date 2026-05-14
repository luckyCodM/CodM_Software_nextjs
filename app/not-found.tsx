import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ padding: "120px 24px", textAlign: "center" }}>
      <h1>404 - Page Not Found</h1>
      <p>This page does not exist.</p>

      <Link href="/">
        Go back home
      </Link>
    </main>
  );
}
