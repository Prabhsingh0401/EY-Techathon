import Spendly from "../BudgettingTool/BudgettingTool"
import Footer from "../Footer/Footer"

const SpendlyMain = () => {
    return(
        <>
            <Spendly></Spendly>
            <h1 className="ml-8 text-2xl">Get in touch with your local Banks</h1>
            <div className="grid grid-cols-3 gap-0 ml-8 mt-5">
            <div className="max-w-sm p-6 bg-zinc-600/50 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                    State Bank of India
                    </h5>
                </a>
                <p className="mb-3 font-normal text-white dark:text-gray-400">
                    State Bank of India (SBI) is the largest public sector bank in India. It offers a wide range of financial services, including retail banking, corporate banking, and international banking.
                </p>
                <div className="flex space-x-4">
                    {/* Visit Official Site Button */}
                    <a
                    href="https://www.onlinesbi.sbi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Visit Official Site
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                    </a>

                    <a
                    href="tel:+1800112211" 
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                    Call Us
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 4.5a3 3 0 013-3h1.5a1 1 0 011 1V5a1 1 0 01-1 1H4.5A1.5 1.5 0 003 7.5v1A1.5 1.5 0 004.5 10H6a1 1 0 011 1v2.5a3 3 0 01-3 3H3a3 3 0 01-3-3V4.5z"
                        />
                    </a>
                </div>
                </div>

                <div className="max-w-sm p-6 bg-zinc-600/50 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                    Indian Overseas Bank
                    </h5>
                </a>
                <p className="mb-3 font-normal text-white dark:text-gray-400">
                Indian Overseas Bank is an Indian public sector bank based in Chennai. During the nationalisation, IOB was one of the 14 major banks taken over by the government of India.
                </p>
                <div className="flex space-x-4">
                    <a
                    href="https://www.iob.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Visit Official Site
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                    </a>

                    <a
                    href="tel:+1800 425 4445" 
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                    Call Us
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 4.5a3 3 0 013-3h1.5a1 1 0 011 1V5a1 1 0 01-1 1H4.5A1.5 1.5 0 003 7.5v1A1.5 1.5 0 004.5 10H6a1 1 0 011 1v2.5a3 3 0 01-3 3H3a3 3 0 01-3-3V4.5z"
                        />
                    </a>
                </div>
                </div>

                <div className="max-w-sm p-6 bg-zinc-600/50 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                    Punjab National Bank
                    </h5>
                </a>
                <p className="mb-3 font-normal text-white dark:text-gray-400">
                Punjab National Bank is an Indian government bank based in New Delhi. It was founded in May 1894 and is the second-largest public sector bank in India
                </p>        
                <div className="flex space-x-4">
                    <a
                    href="https://www.pnbindia.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                    Visit Official Site
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                    </a>

                    <a
                    href="tel:+1800 1800" 
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                    Call Us
                        <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 4.5a3 3 0 013-3h1.5a1 1 0 011 1V5a1 1 0 01-1 1H4.5A1.5 1.5 0 003 7.5v1A1.5 1.5 0 004.5 10H6a1 1 0 011 1v2.5a3 3 0 01-3 3H3a3 3 0 01-3-3V4.5z"
                        />
                    </a>
                </div>
                </div>

                </div>
            <Footer></Footer>
        </>
    )
}

export default SpendlyMain