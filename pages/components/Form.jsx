// pages/index.js
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function Form() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [activeTab, setActiveTab] = useState("form1");

  const onSubmitForm1 = (data) => {
    console.log("Form 1 Data:", data);
  };

  const onSubmitForm2 = (data) => {
    console.log("Form 2 Data:", data);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    router.push(`/#${tab}`);
  };

  return (
    <div className="max-w-sm mx-auto">
      <nav className="bg-gray-200 py-4">
        <ul className="flex">
          <li className="mr-4">
            <a
              href="#form1"
              className={`py-2 px-4 bg-gray-300 hover:bg-gray-400 ${
                activeTab === "form1" && "bg-gray-400"
              }`}
              onClick={() => handleTabChange("form1")}
            >
              Form 1
            </a>
          </li>
          <li>
            <a
              href="#form2"
              className={`py-2 px-4 bg-gray-300 hover:bg-gray-400 ${
                activeTab === "form2" && "bg-gray-400"
              }`}
              onClick={() => handleTabChange("form2")}
            >
              Form 2
            </a>
          </li>
        </ul>
      </nav>

      <div id="form1" className="mb-8">
        <form onSubmit={handleSubmit(onSubmitForm1)}>
          <h2>Form 1</h2>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="border border-gray-300 px-4 py-2 mt-2 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>

      <div id="form2">
        <form onSubmit={handleSubmit(onSubmitForm2)}>
          <h2>Form 2</h2>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="border border-gray-300 px-4 py-2 mt-2 mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
