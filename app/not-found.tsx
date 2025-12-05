export default function NotFound() {
  return (
    <>
      <title>404: Page not found!</title>
      <div className="h-screen w-screen flex justify-center items-center align-middle gap-1">
        <h1 className="text-center font-mono text-9xl">404</h1>
        <span className="text-center font-mono text-[10rem]">|</span>
        <h2 className="font-bold text-3xl">This page could not be found.</h2>
      </div>
    </>
  );
}
