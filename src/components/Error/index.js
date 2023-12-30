
const ErrorPage = ({ errorMessage }) => {
    return (
        <div className="flex justify-center border items-center bg-gray-100">
            <div className="text-center p-6 bg-white shadow-md rounded">
                <h2 className="text-2xl font-semibold text-red-600 mb-2">Oops!</h2>
                <p className="text-gray-800 text-lg mb-4">Something went wrong.</p>
                <p className="text-gray-600 mb-6">{errorMessage || 'The city you entered could not be found.'}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
