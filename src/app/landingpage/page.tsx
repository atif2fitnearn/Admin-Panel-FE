// "use client";
// import { useState, useEffect } from "react";
// // import { Input } from "@/components/ui/input"
// // import { Label } from "@/components/ui/label"
// import { Sidebar } from "@/components1/sidebar";
// import Header from "@/components1/header";
// import Image from "next/image";

// // import { Switch } from '@radix-ui/react-switch';
// // import {Switch} from "@/components/ui/switch"
// const LandingPage = () => {
//   const [logo, setLogo] = useState<string | null>(null);
//   const [formData, setFormData] = useState({
//     status: "",
//     applicationName: "",
//     logoHeading: "",
//     subHeading: "",
//     heading: "",
//     description: "",
//     appStoreButton: "",
//     googlePlayButton: "",
//   });
//   const [pageId, setPageId] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null); // State for error message
//   const [successMessage, setSuccessMessage] = useState<string | null>(null); // State for success message
//   // const [showPreview, setShowPreview] = useState(false); // Add state for preview

//   // Fetch existing landing page data
//   useEffect(() => {
//     const fetchPage = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch("http://localhost:5000/api/new-page", {
//           method: "GET",
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch landing page data");
//         }

//         const data = await response.json();
//         if (data) {
//           setFormData({
//             status: data.status || "",
//             applicationName: data.applicationName || "",
//             logoHeading: data.logoHeading || "",
//             subHeading: data.subHeading || "",
//             heading: data.heading || "",
//             description: data.description || "",
//             appStoreButton: data.appStoreButton || "",
//             googlePlayButton: data.googlePlayButton || "",
//           });
//           setPageId(data._id); // Save the page ID for updates
//         }
//       } catch (error) {
//         setError("Error fetching landing page data. Please try again later.");
//         console.error("Error fetching landing page data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPage();
//   }, []);

//   // Handle input changes
//   // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//   //   const { name, value } = e.target;
//   //   setFormData({ ...formData, [name]: value });
//   //   setShowPreview(true); // Show preview when input changes
//   // };
//   const handleInputChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     // setShowPreview(true); // Show preview when input changes
//   };

//   // Handle logo upload
//   const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file); // Temporarily preview the image
//       setLogo(imageUrl);
//       // setShowPreview(true); // Show preview when logo changes
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null); // Reset any previous error message
//     setSuccessMessage(null); // Reset any previous success message

//     try {
//       setLoading(true);

//       const url = pageId
//         ? `http://localhost:5000/api/new-page/${pageId}` // Update if page exists
//         : "http://localhost:5000/api/new-page"; // Create new page if no ID exists

//       const method = pageId ? "PUT" : "POST"; // Use POST or PUT depending on the page existence

//       const response = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to save landing page data");
//       }

//       const data = await response.json();
//       console.log("Page saved successfully:", data);

//       // Show success message
//       setSuccessMessage("Landing page saved successfully!");

//       if (!pageId) {
//         setPageId(data._id); // Save the new page ID
//       }
//     } catch (error) {
//       setError("Error saving landing page data. Please try again later.");
//       console.error("Error saving landing page data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   // const [isActive, setIsActive] = useState(true)
//   return (
//     <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-0 ">
//       <Header />
//       <div className="w-270 h-343 mt-3 bg-neutral-900 ml-0  ">
//         <Sidebar />
//       </div>
//       <main className="w-3/4 bg-neutral-900 p-20">
//         <section className="bg-neutral-800 p-6 ml-9 rounded-lg border-2 border-white-900">
//           <h2 className="text-lg p-6 font-semibold mb-4">
//             {" "}
//             Landing Page (Last Updated at 20-12-24)
//           </h2>

//           <div className="bg-white-800 p-6 rounded-lg">
//             {error && (
//               <div className="mb-4 text-red-500">
//                 <strong>Error: </strong>
//                 {error}
//               </div>
//             )}
//             {successMessage && (
//               <div className="mb-4 text-green-500">
//                 <strong>Success: </strong>
//                 {successMessage}
//               </div>
//             )}
//             <form onSubmit={handleSubmit}>
//               {logo && (
//                 <div className="mb-4">
//                   <h3 className="text-sm font-medium mb-2">Logo Preview</h3>
//                   <Image
//                     width={96}
//                     height={96}
//                     src={logo}
//                     alt="Uploaded Logo"
//                     className="w-24 h-24 object-cover rounded-full"
//                   />
//                 </div>
//               )}

//               <div className="mb-4">
//                 <label className="block text-sm font-medium mb-2">
//                   Upload Logo
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleLogoUpload}
//                   className="w-full p-2 bg-neutral-700 rounded-lg border border-white-600 focus:outline-none"
//                   required
//                 />
//               </div>

//               {[
//                 {
//                   label: "Status ",
//                   name: "status",
//                   options: ["Active", "Inactive", "Pending"],
//                 },
//                 { label: "Application Name ", name: "applicationName" },
//                 { label: "Logo Heading", name: "logoHeading" },
//                 { label: "Sub Heading", name: "subHeading" },
//                 { label: "Heading", name: "heading" },
//                 { label: "Description", name: "description" },
//                 { label: "App Store Button", name: "appStoreButton" },
//                 { label: "Google Play Button", name: "googlePlayButton" },
//               ].map((field) => (
//                 <div className="mb-4" key={field.name}>
//                   <label className="block text-sm font-medium mb-2">
//                     {field.label}
//                   </label>
//                   {field.name === "status" ? (
//                     // <select
//                     //   name={field.name}
//                     //   value={(formData as any)[field.name]}
//                     //   className="w-full p-3 bg-neutral-800 rounded-lg border border-zinc-700 focus:outline-none"
//                     // >
//                     //   <option value="" disabled>Select Status</option>
//                     //   {field.options?.map((option) => (
//                     //     <option key={option} value={option}>
//                     //       {option}
//                     //     </option>
//                     //   ))}
//                     // </select>
//                     <select
//                       name="status"
//                       value={formData.status} // Correctly bind the value
//                       onChange={handleInputChange} // Use the existing handleInputChange function for the change event
//                       className="w-full p-3 bg-neutral-800 rounded-lg border border-zinc-700 focus:outline-none required"
//                     >
//                       <option value="" disabled>
//                         Select Status
//                       </option>
//                       {["Active", "Inactive", "Pending"].map((option) => (
//                         <option key={option} value={option}>
//                           {option}
//                         </option>
//                       ))}
//                     </select>
//                   ) : (
//                     <input
//                       type="text"
//                       name={field.name}
//                       value={(formData as any)[field.name]}
//                       onChange={handleInputChange}
//                       placeholder="Write text here..."
//                       className="w-full p-3 bg-neutral-700 rounded-lg border border-zinc-700  required  focus:outline-none"
//                     />
//                   )}
//                 </div>
//               ))}

//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
//                   disabled={loading}
//                 >
//                   {loading ? "Saving..." : "Save"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };
// export default LandingPage;


"use client";
import { useState, useEffect } from "react";
import { Sidebar } from "@/components1/sidebar";
import Header from "@/components1/header";
import Image from "next/image";

interface FormData {
  status: string;
  applicationName: string;
  logoHeading: string;
  subHeading: string;
  heading: string;
  description: string;
  appStoreButton: string;
  googlePlayButton: string;
}

const LandingPage = () => {
  const [logo, setLogo] = useState<string | null>(null);
  const [formData, setFormData] = useState<FormData>({
    status: "",
    applicationName: "",
    logoHeading: "",
    subHeading: "",
    heading: "",
    description: "",
    appStoreButton: "",
    googlePlayButton: "",
  });
  const [pageId, setPageId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // State for error message
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // State for success message

  // Fetch existing landing page data
  useEffect(() => {
    const fetchPage = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/new-page", {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch landing page data");
        }

        const data = await response.json();
        if (data) {
          setFormData({
            status: data.status || "",
            applicationName: data.applicationName || "",
            logoHeading: data.logoHeading || "",
            subHeading: data.subHeading || "",
            heading: data.heading || "",
            description: data.description || "",
            appStoreButton: data.appStoreButton || "",
            googlePlayButton: data.googlePlayButton || "",
          });
          setPageId(data._id); // Save the page ID for updates
        }
      } catch (error) {
        setError("Error fetching landing page data. Please try again later.");
        console.error("Error fetching landing page data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, []);

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle logo upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Temporarily preview the image
      setLogo(imageUrl);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset any previous error message
    setSuccessMessage(null); // Reset any previous success message

    try {
      setLoading(true);

      const url = pageId
        ? `http://localhost:5000/api/new-page/${pageId}` // Update if page exists
        : "http://localhost:5000/api/new-page"; // Create new page if no ID exists

      const method = pageId ? "PUT" : "POST"; // Use POST or PUT depending on the page existence

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save landing page data");
      }

      const data = await response.json();
      console.log("Page saved successfully:", data);

      // Show success message
      setSuccessMessage("Landing page saved successfully!");

      if (!pageId) {
        setPageId(data._id); // Save the new page ID
      }
    } catch (error) {
      setError("Error saving landing page data. Please try again later.");
      console.error("Error saving landing page data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-0">
      <Header />
      <div className="w-270 h-343 mt-3 bg-neutral-900 ml-0">
        <Sidebar />
      </div>
      <main className="w-3/4 bg-neutral-900 p-20">
        <section className="bg-neutral-800 p-6 ml-9 rounded-lg border-2 border-white-900">
          <h2 className="text-lg p-6 font-semibold mb-4">
            Landing Page (Last Updated at 20-12-24)
          </h2>

          <div className="bg-white-800 p-6 rounded-lg">
            {error && (
              <div className="mb-4 text-red-500">
                <strong>Error: </strong>
                {error}
              </div>
            )}
            {successMessage && (
              <div className="mb-4 text-green-500">
                <strong>Success: </strong>
                {successMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              {logo && (
                <div className="mb-4">
                  <h3 className="text-sm font-medium mb-2">Logo Preview</h3>
                  <Image
                    width={96}
                    height={96}
                    src={logo}
                    alt="Uploaded Logo"
                    className="w-24 h-24 object-cover rounded-full"
                  />
                </div>
              )}

              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Upload Logo
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  className="w-full p-2 bg-neutral-700 rounded-lg border border-white-600 focus:outline-none"
                />
              </div>

              {[
                {
                  label: "Status",
                  name: "status",
                  type: "select",
                  options: ["Active", "Inactive", "Pending"],
                },
                { label: "Application Name", name: "applicationName", type: "text" },
                { label: "Logo Heading", name: "logoHeading", type: "text" },
                { label: "Sub Heading", name: "subHeading", type: "text" },
                { label: "Heading", name: "heading", type: "text" },
                { label: "Description", name: "description", type: "text" },
                { label: "App Store Button", name: "appStoreButton", type: "text" },
                { label: "Google Play Button", name: "googlePlayButton", type: "text" },
              ].map((field) => (
                <div className="mb-4" key={field.name}>
                  <label className="block text-sm font-medium mb-2">
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      name={field.name}
                      value={formData[field.name as keyof FormData]}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-neutral-800 rounded-lg border border-zinc-700 focus:outline-none"
                    >
                      <option value="" disabled>
                        Select {field.label}
                      </option>
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="text"
                      name={field.name}
                      value={formData[field.name as keyof FormData]}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-neutral-700 rounded-lg border border-zinc-700 focus:outline-none"
                    />
                  )}
                </div>
              ))}

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
