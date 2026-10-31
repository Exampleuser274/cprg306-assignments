import Link from "next/link";

function Page() {
  const weeks =[2,3,4,5,6,7,8];

  return (
    <main className="bg-green-800 min-h-screen">
      <h1 className="text-gray-400" >CPRG306: Web Development 2 - Assignments</h1>
      
      {weeks.map((week) => (
        <p className="text-gray-400" key={week}>
          <Link href={`/week-${week}`}>Week {week}</Link>
        </p>
      ))}
    </main>
  );
}

export default Page;