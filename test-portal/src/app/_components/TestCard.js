import Link from "next/link";

export default function TestCard(props) {
    const { testDetails } = props;
    return (
        <div className="p-3 m-3 rounded bg-white text-black">
            <div className="mx-auto text-center text-xl p-2 font-bold">{testDetails.topic}</div>
            <p className="p-1 pb-0">Test's duration: {testDetails.duration} Hrs</p>
            <p className="pl-1">Number of questions: {testDetails.numberOfQuestions}</p>
            <p className="pl-1">Total score: {testDetails.totalScore}</p>
            <div className="flex justify-end mt-4">
                <Link href={`./tests/${testDetails.id}`} passHref legacyBehavior>
                    <a target="_blank">
                    <button className="px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600">Start Test</button>
                    </a>
                </Link>
            </div>
        </div>
    )
}