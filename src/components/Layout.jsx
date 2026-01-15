import Header from "./Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{ padding: "24px" }}>
        {children}
      </main>
    </>
  );
}
