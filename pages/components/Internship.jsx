import { useRouter } from 'next/router';
import React, { useState } from 'react';
import  Form from "./Form"

const InternshipCardForm = () => {
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const [name, setName] = useState('');
  const [formError, setFormError] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const history = useRouter();

  const handleGoBack = () => {
    history.push('/');
  };

  const handleImageError = () => {
    setImageError(true);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      setFormError(true);
    } else {
      // Form submission logic here
      setFormError(false);
      // Reset form fields
      setName('');
      setFormSubmitted(true);
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen mt-40 bg-cover bg-center" style={{ backgroundImage: "url('/earth.jpeg') " , loading:"lazy" }}>
          <div className="max-w-lg w-full md:max-w-xl bg-transparent rounded-lg shadow-lg p-8 border border-gray-300 text-center">
            <div className="animate-pulse">
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full mb-2"></div>
              <div className="h-2 bg-gray-700 rounded-full"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-screen flex items-center justify-center mt-40 mb-16 bg-cover bg-center" style={{ backgroundImage: "url('/eath.jpg')" }}>
          {formSubmitted ? (
            <div className="max-w-full  w-full md:max-w-xl mx-auto bg-transparent rounded-lg shadow-lg p-52 border border-gray-300 text-center">
            
              <button type="button" className="text-blue-500 hover:underline" onClick={handleGoBack}>
                Go Back
              </button>
            </div>
          ) : (
            <div className="max-w-md mx-auto bg-transparent rounded-lg shadow-lg p-16 border border-gray-300 bg-cover bg-center">
              <h2 className="text-2xl font-bold mb-4">Internship Application</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block font-bold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 text-black rounded"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Additional Form Fields */}
                {/* Email */}
                <div className="mb-4">
                  <label htmlFor="email" className="block font-bold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 text-black rounded"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Country */}
                <div className="mb-4">
                  <label htmlFor="country" className="block font-bold mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="w-full p-2 border border-gray-300 text-black rounded"
                    placeholder="Enter your country"
                  />
                </div>

                {/* State */}
                <div className="mb-4">
                  <label htmlFor="state" className="block font-bold mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    className="w-full p-2 border border-gray-300 text-black rounded"
                    placeholder="Enter your state"
                  />
                </div>

                {/* District */}
                <div className="mb-4">
                  <label htmlFor="district" className="block font-bold mb-2">
                    District
                  </label>
                  <input
                    type="text"
                    id="district"
                    className="w-full p-2 border border-gray-300 text-black rounded"
                    placeholder="Enter your district"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="district" className="block font-bold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="district"
                    className="w-full p-2 border border-gray-300 text-black rounded"
                    placeholder="Enter your district"
                  />
                </div>


                {/* College Name */}
                <div className="mb-4">
                  <label htmlFor="college" className="block font-bold mb-2">
                    College Name
                  </label>
                  <input
                    type="text"
                    id="college"
                    className="w-full p-2 border border-gray-300 text-black rounded"
                    placeholder="Enter your college name"
                  />
                </div>

                {/* Course */}
                <div className="mb-4">
                  <label htmlFor="course" className="block font-bold mb-2">
                     Entrollment Number
                  </label>
                  <input
                    type="text"
                    id="course"
                    className="w-full p-2 border border-gray-300 text-black rounded"
                    placeholder="Enter your course"
                  />
                </div>

                <label for="countries" class="block mb-2 text-sm font-medium text-white dark:text-white"> Department</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option> Computer </option>
  <option> Electrical</option>
  <option>Mechanical </option>
  <option> Civil</option>
</select>

                {/* Year */}
                <div className="mb-4">
                  <label htmlFor="year" className="block font-bold mb-2">
                    Year
                  </label>
                  <input
                    type="text"
                    id="year"
                    className="w-full p-2 border border-gray-300 text-black rounded"
                    placeholder="Enter your year"
                  />
                </div>

              

                {/* Skills */}
                <div className="mb-4">
                  <label htmlFor="skills" className="block font-bold mb-2 ">
                    Skills
                  </label>
                  <textarea
                    id="skills"
                    className="w-full p-2 border border-gray-300 text-black rounded "
                    rows="4"
                    placeholder="Enter your skills"
                  ></textarea>
                </div>

                {/* Resume */}
                <div className="mb-4">
                  <label htmlFor="resume" className="block font-bold mb-2">
                    Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    className="w-full p-2 border border-gray-300 text-white rounded"
                  />
                </div>

                {/* Cover Letter */}
                <div className="mb-4">
                  <label htmlFor="coverLetter" className="block font-bold mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    className="w-full p-2 border border-gray-300 text-black rounded"
                    rows="4"
                    placeholder="Enter your cover letter"
                  ></textarea>
                </div>

                {/* Form Error */}
                {formError && <p className="text-red-500 mb-4">Please fill out all fields.</p>}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 space-x-4 text-white font-bold py-2 px-4 rounded"
                >
                  Submit
                </button>
                
                {/* Go Back Button */}
                <button
                  type="button"
                  className="text-blue-500 hover:underline ml-16"
                  onClick={handleGoBack}
                >
                  Go Back
                </button>
              </form>

              {/* Success Message */}
              {formSubmitted && (
                <>
                
                
                <div className="max-w-md w-full md:max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-300 text-center">
                   <Form/>
                  <p>Your internship application has been successfully submitted.</p>
                </div>

                </>
              )}
            </div>
          )}
        </div>
      )}

      <h1 className="mb-4 text-4xl text-center justify-center font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
        VARTIX AEROSPACE Internship
      </h1>
    </>
  );
};

export default InternshipCardForm;
