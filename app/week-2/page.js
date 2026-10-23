import Link from "next/link";
import StudentInfo from "./student-info";
export default function Page() {
    return(
        <main className="bg-green-800 min-h-screen">
            <h1 className="text-gray-400">Shopping List</h1>
            <StudentInfo/>

            <div className="mt-4">

                <Link href="../" className="text-gray-400"> ← Back to Main Page </Link>

            </div>
        </main>
    );
}