import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="card bg-base-100">
        <div className="card-body">
          <h2 className="card-title">Home</h2>
          <p>Welcome to the home page</p>
        </div>
      </div>
    </>
  );
}
