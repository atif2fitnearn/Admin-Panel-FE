// // "use client";
// // import React, { useState, useEffect } from "react";
// // import Editor from "@/components1/Editor";
// // import { Sidebar } from "@/components1/sidebar";
// // import Header from "@/components1/header";

// // const DataDeletion = () => {
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [content, setContent] = useState<any>({
// //     time: new Date().getTime(),
// //     blocks: [
// //       { type: "header", data: { text: "Data Deletion Policy for Swasthi", level: 2 } },
// //       { type: "paragraph", data: { text: "Last Updated: 03-09-2024" } },
// //       { type: "paragraph", data: { text: `At Swasthi, we are committed to ensuring that our users have control over their personal data...` } },
// //       { type: "list", data: { style: "ordered", items: ["Right to Deletion.", "Request for Deletion.", "Timeline for Deletion.", "Consequences of Deletion.", "Exceptions to Data Deletion.", "Changes to This Policy."] } },
// //       { type: "paragraph", data: { text: "For any questions, concerns, or requests, contact us at help@swasthi.com." } },
// //     ],
// //   });

// //   const handleEditorChange = (updatedContent: any) => setContent(updatedContent);

// //   useEffect(() => {
// //     const fetchContent = async () => {
// //       try {
// //         const response = await fetch("http://localhost:5000/api/datadeletion");
// //         const data = await response.json();
// //         if (response.ok) setContent(data.content);
// //       } catch (error) {
// //         console.error("Error fetching content:", error);
// //       }
// //     };
// //     fetchContent();
// //   }, []);

// //   const saveContentToDatabase = async () => {
// //     try {
// //       const response = await fetch("http://localhost:5000/api/datadeletion", {
// //         method: content && content.blocks.length ? "PUT" : "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify({ content }),
// //       });
// //       const result = await response.json();
// //       if (!response.ok) throw new Error(result.error || "Failed to save content");
// //       alert(result.message);
// //       setIsEditing(false);
// //     } catch (error) {
// //       console.error("Error saving content:", error);
// //       alert("Error saving content");
// //     }
// //   };

// //   const renderText = (text: string | undefined) => {
// //     if (typeof text !== "string") return null;
// //     text = text.replace(/&nbsp;/g, " ").replace(/<b>/g, "<strong>").replace(/<\/b>/g, "</strong>");
// //     return <span dangerouslySetInnerHTML={{ __html: text }} />;
// //   };

// //   return (
// //     <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4  ">
// //       <Header />
// //       <div className="w-270 h-343 mt-3 bg-neutral-900 ml-0  ">
// //         <Sidebar />
// //       </div>
// //       <div className="max-w-3xl mx-auto bg-neutral-900  mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
// //       <div className="border border-gray-700 rounded-lg p-6 mb-4 bg-neutral-700 flex items-center justify-between">
// //   <div>
// //     <h1 className="text-xl font-bold text-white">Data Deletion</h1>
// //     <p className="text-sm text-gray-400 mt-2">Last Updated: 03-09-2024</p>
// //   </div>
// //   <button
// //     className="bg-gray-600 hover:bg-blue-700 text-white px-4 py-2 rounded ml-auto"
// //     onClick={() => (isEditing ? saveContentToDatabase() : setIsEditing(true))}
// //   >
// //     {isEditing ? "Save" : "Edit"}
// //   </button>
// // </div>

// //         {isEditing ? (
// //           <Editor data={content} onChange={handleEditorChange} />
// //         ) : (
// //           <div className="bg-neutral-700 p-4 rounded-lg border border-gray-600">
// //             {content.blocks.map((block: any, index: number) => {
// //               switch (block.type) {
// //                 case "header":
// //                   return <h2 key={index} className="text-lg font-bold text-white mb-2">{block.data?.text}</h2>;
// //                 case "paragraph":
// //                   return <p key={index} className="text-gray-300 mb-2">{renderText(block.data?.text)}</p>;
// //                 default:
// //                   return null;
// //               }
// //             })}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default DataDeletion;

// "use client";
// import React, { useState, useEffect } from "react";
// import Editor from "@/components1/Editor";
// import { Sidebar } from "@/components1/sidebar";
// import Header from "@/components1/header";

// const AboutUs = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [content, setContent] = useState<any>({
//     time: new Date().getTime(),
//     blocks: [
//       { type: "header", data: { text: "Data Deletion Policy for Swasthi", level: 2 } },
//       { type: "paragraph", data: { text: "Last Updated: 03-09-2024" } },
//       { type: "paragraph", data: { text: `At Swasthi, we are committed to ensuring that our users have control over their personal data...` } },
//       { type: "list", data: { style: "ordered", items: ["Right to Deletion.", "Request for Deletion.", "Timeline for Deletion.", "Consequences of Deletion.", "Exceptions to Data Deletion.", "Changes to This Policy."] } },
//       { type: "paragraph", data: { text: "For any questions, concerns, or requests, contact us at help@swasthi.com." } },
//     ],
//   });

//   const handleEditorChange = (updatedContent: any) => setContent(updatedContent);

//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/deletion");
//         const data = await response.json();
//         if (response.ok) setContent(data.content);
//       } catch (error) {
//         console.error("Error fetching content:", error);
//       }
//     };
//     fetchContent();
//   }, []);

//   const saveContentToDatabase = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/deletion", {
//         method: content && content.blocks.length ? "PUT" : "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ content }),
//       });
//       const result = await response.json();
//       if (!response.ok) throw new Error(result.error || "Failed to save content");
//       alert(result.message);
//       setIsEditing(false);
//     } catch (error) {
//       console.error("Error saving content:", error);
//       alert("Error saving content");
//     }
//   };

//   const renderText = (text: string | undefined) => {
//     if (typeof text !== "string") return null;
//     text = text.replace(/&nbsp;/, "").replace(/<b>/g, "<strong>").replace(/<\/b>/g, "</strong>");
//     return <span dangerouslySetInnerHTML={{ __html: text }} />;
//   };

//   return (
//     <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4 ">
//       <Header />
//       <div className="w-270 h-343 mt-3 bg-neutral-900 ml-0  ">
//         <Sidebar />
//       </div>
//       <div className="max-w-3xl mx-auto bg-neutral-900  mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
//       <div className="border border-gray-700 rounded-lg p-6 mb-4 bg-neutral-700 flex items-center justify-between">
//   <div>
//     <h1 className="text-xl font-bold text-white">Terms and Condition </h1>
//     <p className="text-sm text-gray-400 mt-2">Last Updated: 03-09-2024</p>
//   </div>
//   <button
//     className="bg-gray-600 hover:bg-blue-700 text-white px-4 py-2 rounded ml-auto"
//     onClick={() => (isEditing ? saveContentToDatabase() : setIsEditing(true))}
//   >
//     {isEditing ? "Save" : "Edit"}
//   </button>
// </div>

//         {isEditing ? (
//           <Editor data={content} onChange={handleEditorChange} />
//         ) : (
//           <div className="bg-neutral-700 p-4 rounded-lg border border-gray-600">
//             {content.blocks.map((block: any, index: number) => {
//               switch (block.type) {
//                 case "header":
//                   return <h2 key={index} className="text-lg font-bold text-white mb-2">{block.data?.text}</h2>;
//                 case "paragraph":
//                   return <p key={index} className="text-gray-300 mb-2">{renderText(block.data?.text)}</p>;
//                 default:
//                   return null;
//               }
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
// "use client";
// import React, { useState, useEffect } from "react";
// import Editor from "@/components1/Editor";
// import { Sidebar } from "@/components1/sidebar";
// import Header from "@/components1/header";

// const AboutUs = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [content, setContent] = useState<any>({
//     time: new Date().getTime(),
//     blocks: [
//       { type: "header", data: { text: "Data Deletion Policy for Swasthi", level: 2 } },
//       { type: "paragraph", data: { text: "Last Updated: 03-09-2024" } },
//       { type: "paragraph", data: { text: "At Swasthi, we are committed to ensuring that our users have control over their personal data..." } },
//       { type: "list", data: { style: "ordered", items: ["Right to Deletion.", "Request for Deletion.", "Timeline for Deletion.", "Consequences of Deletion.", "Exceptions to Data Deletion.", "Changes to This Policy."] } },
//       { type: "paragraph", data: { text: "For any questions, concerns, or requests, contact us at help@swasthi.com." } },
//     ],
//   });

//   // const handleEditorChange = (updatedContent: any) => setContent(updatedContent);
//   const handleEditorChange = (updatedContent: any) => {
//     console.log("Updated Content from Editor:", updatedContent); // Check if updated content is correct
//     setContent(updatedContent);
//   };

//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/deletion");
//         if (!response.ok) throw new Error("Failed to fetch content");
//         const data = await response.json();
//         setContent(data.content);
//       } catch (error) {
//         console.error("Error fetching content:", error);
//       }
//     };
//     fetchContent();
//   }, []);

//   // const saveContentToDatabase = async () => {
//   //   try {
//   //     const response = await fetch("http://localhost:5000/api/deletion", {
//   //       method: content && content.blocks.length ? "PUT" : "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ content }),
//   //     });
//   //     const result = await response.json();
//   //     if (!response.ok) throw new Error(result.error || "Failed to save content");
//   //     alert(result.message);
//   //     setIsEditing(false);
//   //   } catch (error) {
//   //     console.error("Error saving content:", error);
//   //     alert("Error saving content. Please try again.");
//   //   }
//   // };
//   // const saveContentToDatabase = async () => {
//   //   try {
//   //     const response = await fetch("http://localhost:5000/api/deletion", {
//   //       method: content && content.blocks.length ? "PUT" : "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ content }),
//   //     });

//   //     const result = await response.json();
//   //     if (!response.ok) throw new Error(result.error || "Failed to save content");
//   //     alert(result.message); // Display a success message
//   //     setIsEditing(false);
//   //   } catch (error) {
//   //     console.error("Error saving content:", error);
//   //     alert("Error saving content. Please try again.");
//   //   }
//   // };

//   // const saveContentToDatabase = async () => {
//   //   console.log("Saving content to database...", content); // Log the content being sent
//   //   try {
//   //     const response = await fetch("http://localhost:5000/api/deletion", {
//   //       method: content && content.blocks.length ? "PUT" : "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ content }),
//   //     });

//   //     const result = await response.json();
//   //     console.log("Response from server:", result); // Log the server response
//   //     if (!response.ok) throw new Error(result.error || "Failed to save content");
//   //     alert(result.message);
//   //     setIsEditing(false);
//   //   } catch (error) {
//   //     console.error("Error saving content:", error);
//   //     alert("Error saving content. Please try again.");
//   //   }
//   // };
//   // const saveContentToDatabase = async () => {
//   //   console.log("Saving content to database...", content); // Log content being sent

//   //   try {
//   //     const response = await fetch("http://localhost:5000/api/deletion", {
//   //       method: content && content.blocks.length ? "PUT" : "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ content }),
//   //     });

//   //     const result = await response.json();
//   //     console.log("Response from server:", result); // Log server response

//   //     if (!response.ok) throw new Error(result.error || "Failed to save content");
//   //     alert(result.message);
//   //     setIsEditing(false);
//   //   } catch (error) {
//   //     console.error("Error saving content:", error);
//   //     alert("Error saving content. Please try again.");
//   //   }
//   // };
//   // const saveContentToDatabase = async () => {
//   //   try {
//   //     console.log("Saving content:", content);

//   //     const response = await fetch("http://localhost:5000/api/deletion", {
//   //       method: "PUT",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ content }),
//   //     });

//   //     const result = await response.json();

//   //     if (!response.ok) throw new Error(result.error || "Failed to save content");

//   //     console.log("Save response:", result);
//   //     alert(result.message);
//   //     setIsEditing(false);
//   //   } catch (error) {
//   //     console.error("Error saving content:", error);
//   //     alert("Error saving content");
//   //   }
//   // };
//   // const saveContentToDatabase = async () => {
//   //   console.log("Content before sending to API:", content); // Check if content is correct

//   //   try {
//   //     const response = await fetch("http://localhost:5000/api/deletion", {
//   //       method: content && content.blocks.length ? "PUT" : "POST",
//   //       headers: { "Content-Type": "application/json" },
//   //       body: JSON.stringify({ content }), // Ensure content is serialized properly
//   //     });

//   //     console.log("Response Status:", response.status); // Log response status

//   //     const result = await response.json();
//   //     console.log("Response Result:", result); // Log response data

//   //     if (!response.ok) throw new Error(result.error || "Failed to save content");
//   //     alert(result.message);
//   //     setIsEditing(false);
//   //   } catch (error) {
//   //     console.error("Error in saveContentToDatabase:", error);
//   //     alert("Error saving content");
//   //   }
//   // };
//   const saveContentToDatabase = async () => {
//     try {
//       console.log('Sending PUT request with content:', content);

//       const response = await fetch('http://localhost:5000/api/deletion', {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ content }),
//       });

//       console.log('PUT Response Status:', response.status);

//       const result = await response.json();
//       console.log('PUT Response Data:', result);

//       if (!response.ok) {
//         throw new Error(result.error || 'Failed to save content');
//       }

//       alert(result.message);
//       setIsEditing(false);
//     } catch (error) {
//       console.error('Error in saveContentToDatabase:', error);
//       alert('Error saving content');
//     }
//   };

//   const renderText = (text: string | undefined) => {
//     if (typeof text !== "string") return null;
//     return <span dangerouslySetInnerHTML={{ __html: text }} />;
//   };

//   return (
//     <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4">
//       <Header />
//       <div className="w-270 h-343 mt-3 bg-neutral-900 ml-0">
//         <Sidebar />
//       </div>
//       <div className="max-w-3xl mx-auto bg-neutral-900 mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
//         <div className="border border-gray-700 rounded-lg p-6 mb-4 bg-neutral-700 flex items-center justify-between">
//           <div>
//             <h1 className="text-xl font-bold text-white">Terms and Condition</h1>
//             <p className="text-sm text-gray-400 mt-2">Last Updated: 03-09-2024</p>
//           </div>
//           <button
//             className="bg-gray-600 hover:bg-blue-700 text-white px-4 py-2 rounded ml-auto"
//             onClick={() => (isEditing ? saveContentToDatabase() : setIsEditing(true))}
//           >
//             {isEditing ? "Save" : "Edit"}
//           </button>
//         </div>
//         {isEditing ? (
//           <Editor data={content} onChange={handleEditorChange} />
//         ) : (
//           <div className="bg-neutral-700 p-4 rounded-lg border border-gray-600">
//             {content.blocks.map((block: any, index: number) => {
//               switch (block.type) {
//                 case "header":
//                   return <h2 key={index} className="text-lg font-bold text-white mb-2">{block.data?.text}</h2>;
//                 case "paragraph":
//                   return <p key={index} className="text-gray-300 mb-2">{renderText(block.data?.text)}</p>;
//                 case "list":
//                   return (
//                     <ol key={index} className="list-decimal pl-6 text-gray-300 mb-2">
//                       {block.data.items.map((item: string, i: number) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ol>
//                   );
//                 default:
//                   return null;
//               }
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
// "use client";
// import React, { useState, useEffect } from "react";
// import Editor from "@/components1/Editor";
// import { Sidebar } from "@/components1/sidebar";
// import Header from "@/components1/header";

// const AboutUs = () => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [content, setContent] = useState<any>({
//     time: new Date().getTime(),
//     blocks: [
//       { type: "header", data: { text: "Data Deletion Policy for Swasthi", level: 2 } },
//       { type: "paragraph", data: { text: "Last Updated: 03-09-2024" } },
//       { type: "paragraph", data: { text: "At Swasthi, we are committed to ensuring that our users have control over their personal data..." } },
//       {
//         type: "list",
//         data: {
//           style: "ordered",
//           items: [
//             "Right to Deletion.",
//             "Request for Deletion.",
//             "Timeline for Deletion.",
//             "Consequences of Deletion.",
//             "Exceptions to Data Deletion.",
//             "Changes to This Policy.",
//           ],
//         },
//       },
//       { type: "paragraph", data: { text: "For any questions, concerns, or requests, contact us at help@swasthi.com." } },
//     ],
//   });

//   // Update content on editor change
//   const handleEditorChange = (updatedContent: any) => {
//     console.log("Updated Content from Editor:", updatedContent);
//     setContent(updatedContent);
//   };

//   // Fetch existing content from backend
//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/deletion");
//         if (!response.ok) throw new Error("Failed to fetch content");
//         const data = await response.json();
//         console.log("Fetched Content:", data);
//         setContent(data.content);
//       } catch (error) {
//         console.error("Error fetching content:", error);
//       }
//     };
//     fetchContent();
//   }, []);

//   // Save content to database
//   const saveContentToDatabase = async () => {
//     try {
//       console.log("Sending PUT request with content:", content);

//       const response = await fetch("http://localhost:5000/api/deletion", {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ content }),
//       });

//       console.log("PUT Response Status:", response.status);

//       const result = await response.json();
//       console.log("PUT Response Data:", result);

//       if (!response.ok) throw new Error(result.error || "Failed to save content");

//       alert(result.message);
//       setIsEditing(false); // Exit edit mode
//     } catch (error) {
//       console.error("Error saving content:", error);
//       alert("Error saving content");
//     }
//   };

//   // Render blocks
//   const renderText = (text: string | undefined) => {
//     if (typeof text !== "string") return null;
//     return <span dangerouslySetInnerHTML={{ __html: text }} />;
//   };

//   return (
//     <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4">
//       <Header />
//       <div className="w-270 h-343 mt-3 bg-neutral-900 ml-0">
//         <Sidebar />
//       </div>
//       <div className="max-w-3xl mx-auto bg-neutral-900 mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
//         <div className="border border-gray-700 rounded-lg p-6 mb-4 bg-neutral-700 flex items-center justify-between">
//           <div>
//             <h1 className="text-xl font-bold text-white">Terms and Condition</h1>
//             <p className="text-sm text-gray-400 mt-2">Last Updated: 03-09-2024</p>
//           </div>
//           <button
//             className="bg-gray-600 hover:bg-blue-700 text-white px-4 py-2 rounded ml-auto"
//             onClick={() => (isEditing ? saveContentToDatabase() : setIsEditing(true))}
//           >
//             {isEditing ? "Save" : "Edit"}
//           </button>
//         </div>
//         {isEditing ? (
//           <Editor data={content} onChange={handleEditorChange} />
//         ) : (
//           <div className="bg-neutral-700 p-4 rounded-lg border border-gray-600">
//             {content.blocks.map((block: any, index: number) => {
//               switch (block.type) {
//                 case "header":
//                   return <h2 key={index} className="text-lg font-bold text-white mb-2">{block.data?.text}</h2>;
//                 case "paragraph":
//                   return <p key={index} className="text-gray-300 mb-2">{renderText(block.data?.text)}</p>;
//                 case "list":
//                   return (
//                     <ol key={index} className="list-decimal pl-6 text-gray-300 mb-2">
//                       {block.data.items.map((item: string, i: number) => (
//                         <li key={i}>{item}</li>
//                       ))}
//                     </ol>
//                   );
//                 default:
//                   return null;
//               }
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

"use client";
import React, { useState, useEffect } from "react";
import Editor from "@/components1/Editor";
import { Sidebar } from "@/components1/sidebar";
import Header from "@/components1/header";

const AboutUs = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState<Content>({
    time: new Date().getTime(),
    blocks: [
      {
        type: "header",
        data: { text: "Data Deletion Policy for Swasthi", level: 2 },
      },
      { type: "paragraph", data: { text: "Last Updated: 03-09-2024" } },
      {
        type: "paragraph",
        data: {
          text: "At Swasthi, we are committed to ensuring that our users have control over their personal data...",
        },
      },
      {
        type: "list",
        data: {
          style: "ordered",
          items: [
            "Right to Deletion.",
            "Request for Deletion.",
            "Timeline for Deletion.",
            "Consequences of Deletion.",
            "Exceptions to Data Deletion.",
            "Changes to This Policy.",
          ],
        },
      },
      {
        type: "paragraph",
        data: {
          text: "For any questions, concerns, or requests, contact us at help@swasthi.com.",
        },
      },
    ],
  });

  const [loading, setLoading] = useState(false);

  // Function to validate content structure
  const validateContent = (content: Content) => {
    if (!content || !content.blocks || !Array.isArray(content.blocks)) {
      console.error("Content structure is invalid:", content);
      return false;
    }

    const isValid = content.blocks.every((block: Block) => {
      if (!block.type || !block.data) return false;
      if (block.type === "paragraph" && typeof block.data.text !== "string")
        return false;
      if (
        block.type === "header" &&
        (!block.data.text || typeof block.data.level !== "number")
      )
        return false;
      if (
        block.type === "list" &&
        (!Array.isArray(block.data.items) || !block.data.style)
      )
        return false;
      return true;
    });

    if (!isValid) {
      console.error("One or more blocks are invalid:", content.blocks);
    }

    return isValid;
  };

  // Fetch existing content from backend
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/deletion");
        if (!response.ok) throw new Error("Failed to fetch content");
        const data = await response.json();
        console.log("Fetched Content:", data);
        setContent(data.content);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    fetchContent();
  }, []);

  // Save content to database
  const saveContentToDatabase = async () => {
    if (!validateContent(content)) {
      alert("Content has invalid blocks. Please fix them before saving.");
      return;
    }

    try {
      setLoading(true);
      console.log("Sending PUT request with content:", content);

      const response = await fetch("http://localhost:5000/api/deletion", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Failed to save content");

      alert("Content saved successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving content:", error);
      alert("Error saving content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle editor content changes
  const handleEditorChange = (updatedContent: Content) => {
    console.log("Updated Content from Editor:", updatedContent);
    setContent(updatedContent);
  };

  // Render blocks with validation for text content
  const renderText = (text: string | undefined) => {
    if (typeof text !== "string") return null;
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };

  interface Block {
    type: "header" | "paragraph" | "list";
    data: {
      text?: string;
      level?: number;
      style?: string;
      items?: string[];
    };
  }

  interface Content {
    time: number;
    blocks: Block[];
  }

  return (
    <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4">
      <Header />
      <div className="w-270 h-343 mt-3 bg-neutral-900 ml-0">
        <Sidebar />
      </div>
      <div className="max-w-3xl mx-auto bg-neutral-900 mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
        <div className="border border-gray-700 rounded-lg p-6 mb-4 bg-neutral-700 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">
              Terms and Condition
            </h1>
            <p className="text-sm text-gray-400 mt-2">
              Last Updated: 03-09-2024
            </p>
          </div>
          <div>
            {isEditing ? (
              <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded ml-2"
                onClick={saveContentToDatabase}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            ) : (
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded ml-2"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
        {isEditing ? (
          <Editor data={content} onChange={handleEditorChange} />
        ) : (
          <div className="bg-neutral-700 p-4 rounded-lg border border-gray-600">
            {content.blocks.map((block : Block, index: number) => {
              switch (block.type) {
                case "header":
                  return (
                    <h2
                      key={index}
                      className="text-lg font-bold text-white mb-2"
                    >
                      {block.data.text}
                    </h2>
                  );
                case "paragraph":
                  return (
                    <p key={index} className="text-gray-300 mb-2">
                      {renderText(block.data.text)}
                    </p>
                  );
                case "list":
                  return (
                    <ol
                      key={index}
                      className="list-decimal pl-6 text-gray-300 mb-2"
                    >
                      {block.data.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ol>
                  );
                default:
                  return null;
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
