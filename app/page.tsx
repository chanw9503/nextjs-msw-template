export default async function Home() {
  const res = await fetch("http://localhost:3000/api/user");
  console.log("res", res);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      test
    </main>
  );
}
