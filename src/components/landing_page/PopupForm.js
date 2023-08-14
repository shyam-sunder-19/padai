import Form from "../Form";

function PopupForm({ isPopupOpen, closeForm }) {

    const handleSubmit = (event) => {
        event.preventDefault();
        // Implement your form submission logic here
    };
    return (
        <div className="relative">
        {isPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-75 bg-gray-500">
            <div className="bg-green-300 max-w-xl p-6 rounded shadow-lg">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-semibold mb-4">Get Free Expert Advice</h2>
                    <button 
                        type="button" 
                        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={closeForm}
                    >
                        X
                    </button>
                </div>
                <Form />
            </div>
            </div>
        )}
        </div>
    );
}

export default PopupForm;