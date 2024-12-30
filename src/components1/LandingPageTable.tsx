// "use client"
// import { useEffect, useState } from 'react';
// import { FaEdit } from 'react-icons/fa';
// // Define the type for your page data
// interface Page {
//   _id: string;
//   applicationName: string;
//   status: string;
//   heading: string;
//   date: string; // Assuming `date` field exists
// }

// const LandingPageTable1 = () => {
//   const [pages, setPages] = useState<Page[]>([]); // State to store page data
//   const [loading, setLoading] = useState<boolean>(true); // State for loading
//   const [error, setError] = useState<string | null>(null); // State for error handling

//   // Fetch data from the API
//   useEffect(() => {
//     const fetchPages = async () => {
//       try {
//         setLoading(true); // Start loading
//         setError(null); // Reset error

//         const response = await fetch('http://localhost:5000/api/new-page');
//         if (!response.ok) {
//           throw new Error('Failed to fetch landing page data');
//         }

//         const data: Page[] = await response.json();
//         console.log(data);
//         setPages(data || []); // Safely handle empty data
//       } catch (error: any) {
//         setError(error.message || 'An unexpected error occurred');
//       } finally {
//         setLoading(false); // Stop loading
//       }
//     };

//     fetchPages();
//   }, []);

//   return (
//     <div className="p-4 bg-neutral-900 text-white rounded-lg">
//       <h2 className="text-lg font-semibold mb-4">Landing Page Details</h2>

//       {/* Show error message if there is an error */}
//       {error && (
//         <div className="mb-4 text-red-500">
//           <strong>Error:</strong> {error}
//         </div>
//       )}

//       {/* Show loading spinner */}
//       {loading && (
//         <div className="mb-4 text-gray-400">Loading...</div>
//       )}

//       {/* Display the cards if data is available */}
//       <div className="flex flex-wrap gap-6  ">

//         <div
//           key={pages._id}

//           className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all w-[300px] max-w-full"
//         >

//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-xl font-semibold">{pages.applicationName}</h3>
//             <span
//               className={`px-4 py-1 text-sm rounded-full ${pages.status === 'Active' ? 'bg-green-500' : pages.status === 'Inactive' ? 'bg-gray-500' : 'bg-yellow-500'}`}
//             >
//               {pages.status}
//             </span>
//           </div>
//           <button
//             className="text-white px-4 py-2 rounded flex items-right">
//             <a href="/landingpage"><FaEdit className="mr-50 " /> </a>
//           </button>
//           <p className="text-gray-300">{pages.heading}</p>
//           <div className="flex justify-between items-center mt-4">
//             <span className="text-sm text-gray-400">{pages.date}</span>

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };
// export default LandingPageTable1;

"use client";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";

// Define the type for your page data
interface Page {
  _id: string;
  applicationName: string;
  status: string;
  heading: string;
  date: string; // Assuming `date` field exists
}

const LandingPageTable1 = () => {
  const [pages, setPages] = useState<Page[]>([]); // State for storing page data
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for error handling

  // Fetch data from the API
  useEffect(() => {
    const fetchPages = async () => {
      try {
        setLoading(true); // Start loading
        setError(null); // Reset error

        const response = await fetch("http://localhost:5000/api/new-page");
        if (!response.ok) {
          throw new Error("Failed to fetch landing page data");
        }

        const data = await response.json();
        console.log("Fetched pages:", data); // Check the structure of the response

        // Ensure the data is an array and get the most recent page
        if (Array.isArray(data)) {
          const sortedPages = data.sort(
            (a: Page, b: Page) =>
              new Date(b.date).getTime() - new Date(a.date).getTime()
          );
          setPages([sortedPages[0]]); // Only keep the most recent page
        } else {
          setError("The data is not in the correct format");
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message); // Access message safely if error is an instance of Error
        } else if (typeof error === "string") {
          setError(error); // Handle string errors
        } else {
          setError("An unexpected error occurred"); // Fallback for unexpected cases
        }
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchPages();
  }, []);

  return (
    <div className="p-4 bg-neutral-900 text-white rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Landing Page Details</h2>

      {/* Show error message if there is an error */}
      {error && (
        <div className="mb-4 text-red-500">
          <strong>Error:</strong> {error}
        </div>
      )}

      {/* Show loading spinner */}
      {loading && <div className="mb-4 text-gray-400">Loading...</div>}

      {/* Display the current page */}
      <div className="flex flex-wrap gap-6">
        {pages.length > 0 ? (
          pages.map((page) => (
            <div
              key={page._id} // Use page._id as the key
              className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all w-[300px] max-w-full"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  {page.applicationName}
                </h3>
                <span
                  className={`px-4 py-1 text-sm rounded-full ${
                    page.status === "Active"
                      ? "bg-green-500"
                      : page.status === "Inactive"
                      ? "bg-gray-500"
                      : "bg-yellow-500"
                  }`}
                >
                  {page.status}
                </span>
              </div>
              <button className="text-white px-4 py-2 rounded flex items-right">
                <a href="/landingpage">
                  <FaEdit className="mr-50" />
                </a>
              </button>
              <p className="text-gray-300">{page.heading}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-400">{page.date}</span>
              </div>
            </div>
          ))
        ) : (
          <div>No data available.</div>
        )}
      </div>
    </div>
  );
};

export default LandingPageTable1;
