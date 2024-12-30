
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
      { type: "header", data: { text: "Data Deletion Policy for Swasthi", level: 2 } },
      { type: "paragraph", data: { text: "Last Updated: 03-09-2024" } },
      { type: "paragraph", data: { text: `At Swasthi, we are committed to ensuring that our users have control over their personal data...` } },
      { type: "list", data: { style: "ordered", items: ["Right to Deletion.", "Request for Deletion.", "Timeline for Deletion.", "Consequences of Deletion.", "Exceptions to Data Deletion.", "Changes to This Policy."] } },
      { type: "paragraph", data: { text: "For any questions, concerns, or requests, contact us at help@swasthi.com." } },
    ],
  });

  const handleEditorChange = (updatedContent: Content) => setContent(updatedContent);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/terms");
        const data = await response.json();
        if (response.ok) setContent(data.content);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    };
    fetchContent();
  }, []);

  const saveContentToDatabase = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/terms", {
        method: content && content.blocks.length ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to save content");
      alert(result.message);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving content:", error);
      alert("Error saving content");
    }
  };

  const renderText = (text: string | undefined) => {
    if (typeof text !== "string") return null;
    text = text.replace(/&nbsp;/g, " ").replace(/<b>/g, "<strong>").replace(/<\/b>/g, "</strong>");
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
    <div className="min-h-screen flex bg-neutral-900 text-white pt-4 pb-4 ">
      <Header />
      <div className="w-270 h-343 mt-3 bg-neutral-900 ml-0  ">
        <Sidebar />
      </div>
      <div className="max-w-3xl mx-auto bg-neutral-900  mt-11 p-11 rounded-lg shadow-lg border border-gray-700">
      <div className="border border-gray-700 rounded-lg p-6 mb-4 bg-neutral-700 flex items-center justify-between">
  <div>
    <h1 className="text-xl font-bold text-white">Terms and Condition </h1>
    <p className="text-sm text-gray-400 mt-2">Last Updated: 03-09-2024</p>
  </div>
  <button
    className="bg-gray-600 hover:bg-blue-700 text-white px-4 py-2 rounded ml-auto"
    onClick={() => (isEditing ? saveContentToDatabase() : setIsEditing(true))}
  >
    {isEditing ? "Save" : "Edit"}
  </button>
</div>

        {isEditing ? (
          <Editor data={content} onChange={handleEditorChange} />
        ) : (
          <div className="bg-neutral-700 p-4 rounded-lg border border-gray-600">
            {content.blocks.map((block: Block, index: number) => {
              switch (block.type) {
                case "header":
                  return <h2 key={index} className="text-lg font-bold text-white mb-2">{block.data?.text}</h2>;
                case "paragraph":
                  return <p key={index} className="text-gray-300 mb-2">{renderText(block.data?.text)}</p>;
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
