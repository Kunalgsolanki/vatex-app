import { useRouter } from 'next/router';
import React, { useState } from 'react';


const InternshipCardForm = () => {
  const [loading, setLoading] =React. useState(true);
  const [imageError, setImageError] = React.useState(false);

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

     
{

loading? ( 

<div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/earth.jpg')" }}>
          <div className="max-w-md w-full md:max-w-xl bg-transparent rounded-lg shadow-lg p-8 border border-gray-300 text-center">
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

):(

  <div className="min-h-screen flex items-center justify-center bg-cover bg-center"  style={{ backgroundImage: "url('/eath.jpg')" }}>
  
    {formSubmitted ? ( 

<div className="max-w-md w-full md:max-w-xl mx-auto bg-black rounded-lg shadow-lg p-8 border border-gray-300 text-center">
<p className="text-2xl font-bold mb-4">Form Submitted!</p>
<p>Your internship application has been successfully submitted.</p>
<button
  type="button"
  className="text-blue-500 hover:underline"
  onClick={handleGoBack}
>
  Go Back
</button>
</div>
    ) :(

      <div className="max-w-md mx-auto bg-black rounded-lg shadow-lg p-16 border border-gray-300 bg-cover bg-center" >
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
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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

        <div className="mb-4">
          <label htmlFor="course" className="block font-bold mb-2">
            Course
          </label>
          <input
            type="text"
            id="course"
            className="w-full p-2 border border-gray-300 text-black rounded"
            placeholder="Enter your course"
          />
        </div>

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

        <div className="mb-4">
          <label htmlFor="semester" className="block font-bold mb-2">
            Semester
          </label>
          <input
            type="text"
            id="semester"
            className="w-full p-2 border border-gray-300  text-black rounded"
            placeholder="Enter your semester"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="education" className="block font-bold mb-2">
            Education Details
          </label>
          <textarea
            id="education"
            className="w-full p-2 border border-gray-300 text-black rounded"
            rows="4"
            placeholder="Enter your education details"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="skills" className="block font-bold mb-2">
            Skills
          </label>
          <textarea
            id="skills"
            className="w-full p-2 border border-gray-300 rounded text-black"
            rows="4"
            placeholder="Enter your skills"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="resume" className="block font-bold mb-2">
            Resume
          </label>
          <input
            type="file"
            id="resume"
            className="w-full p-2 border border-gray-300 text-black rounded"
          />
        </div>

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
        {formError && <p className="text-red-500 mb-4">Please fill out all fields.</p>}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
        <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={handleGoBack}
            >
              Go Back
            </button>
      </form>
      {formSubmitted && (
        <div className="max-w-md w-full md:max-w-xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-300 text-center">
          <p className="text-2xl font-bold mb-4">Form Submitted!</p>
          <p>Your internship application has been successfully submitted.</p>
        </div>
      )}
    </div>
    )}

       
    </div>
)

}

    
    <h1 className="mb-4 text-4xl text-center justify-center font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white">
                  VARTIX AEROSPACE Internship
                </h1>
    
    </>
  );
};

export default InternshipCardForm;
