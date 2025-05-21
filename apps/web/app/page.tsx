export const dynamic = "force-dynamic";

export default async function IndexPage() {
  const res = await fetch("http://localhost:3000/api/user", { cache: "no-store" });
  const users = await res.json();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
