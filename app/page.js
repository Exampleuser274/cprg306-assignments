import Link from "next/link";

function Page() {
  const weeks =[2,3,4,5];

  return (
    <main>
      <h1>CPRG306: Web Development 2 - Assignments</h1>
      
      {weeks.map((week) => (
        <p key={week}>
          <Link href={`/week-${week}`}>Week {week}</Link>
        </p>
      ))}
    </main>
  );
}

export default Page;