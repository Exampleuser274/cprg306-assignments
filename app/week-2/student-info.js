import Link from 'next/link'
export default  function StudentInfo() {
    return(
        <main className="text-gray-400">
            <h2>Student Info</h2>
            <p>Name: Ryan MacNeil</p>
            <p>
                GitHub: 
                <Link href="https://github.com/Exampleuser274/cprg306-assignments/tree/Ryan-MacNeil"> Ryan MacNeil's GitHub </Link>
            </p>
        </main>
    );
}