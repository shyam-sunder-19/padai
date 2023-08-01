const Form = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form validation and submission logic here
        // For this example, we'll just show an alert on form submission
        alert('Form submitted successfully!');
      };
    
      return (
        <div className="p-16 max-w-xl mx-auto bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Get Free Counselling</h2>
          <form className="" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="programme" className="block text-gray-700 font-medium mb-1">
                Programme Type*
              </label>
              <select
                id="programme"
                name="programme"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="" disabled selected>Select Programme Type</option>
                <option value="Bachelors">Bachelors</option>
                <option value="Masters">Masters</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700 font-medium mb-1">
                City*
              </label>
              <select
                id="city"
                name="city"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="" disabled selected>Select City</option>
                <option value="New York">New York</option>
                <option value="London">London</option>
                <option value="Sydney">Sydney</option>
                <option value="Tokyo">Tokyo</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  id="agreeTnC"
                  required
                  className="form-checkbox h-4 w-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-400"
                />
                <span className="ml-2 text-gray-700 font-medium">I agree to the Terms and Conditions*</span>
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md font-medium hover:bg-blue-600"
            >
              Get a call from your dream University
            </button>
          </form>
        </div>
      )
}

export default Form