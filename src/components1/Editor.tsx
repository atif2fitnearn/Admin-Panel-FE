// // // // // // // // // // // // // // // // // // // // import { useEffect, useRef } from 'react';
// // // // // // // // // // // // // // // // // // // // import EditorJS from '@editorjs/editorjs';

// // // // // // // // // // // // // // // // // // // // export default function Editor({ onChange, data }) {
// // // // // // // // // // // // // // // // // // // //   const editorRef = useRef();

// // // // // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // // // // //     // Initialize Editor.js
// // // // // // // // // // // // // // // // // // // //     const editor = new EditorJS({
// // // // // // // // // // // // // // // // // // // //       holder: 'editorjs',
// // // // // // // // // // // // // // // // // // // //       tools: {
// // // // // // // // // // // // // // // // // // // //         // Define tools here (e.g., Header, List, etc.)
// // // // // // // // // // // // // // // // // // // //         header: require('@editorjs/header'),
// // // // // // // // // // // // // // // // // // // //         list: require('@editorjs/list'),
// // // // // // // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // // // // // // //       data: data || {}, // Pass initial data
// // // // // // // // // // // // // // // // // // // //       onChange: async () => {
// // // // // // // // // // // // // // // // // // // //         const outputData = await editor.save();
// // // // // // // // // // // // // // // // // // // //         onChange(outputData); // Handle changes
// // // // // // // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // // // // // // //     });

// // // // // // // // // // // // // // // // // // // //     editorRef.current = editor;

// // // // // // // // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // // // // // // // //       // Cleanup on unmount
// // // // // // // // // // // // // // // // // // // //       if (editorRef.current) {
// // // // // // // // // // // // // // // // // // // //         editorRef.current.destroy();
// // // // // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // // // // // // //   }, [data, onChange]);

// // // // // // // // // // // // // // // // // // // //   return <div id="editorjs" className="prose"></div>;
// // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // import React, { useEffect, useRef } from "react";
// // // // // // // // // // // // // // // // // // // import EditorJS from "@editorjs/editorjs";
// // // // // // // // // // // // // // // // // // // import Header from "@editorjs/header";
// // // // // // // // // // // // // // // // // // // import List from "@editorjs/list";
// // // // // // // // // // // // // // // // // // // import Paragraph from "@editorjs/paragraph";

// // // // // // // // // // // // // // // // // // // const Editor = ({ data, onSave }) => {
// // // // // // // // // // // // // // // // // // //   const editorInstance = useRef(null);

// // // // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // // // //     editorInstance.current = new EditorJS({
// // // // // // // // // // // // // // // // // // //       holder: "editorjs",
// // // // // // // // // // // // // // // // // // //       tools: {
// // // // // // // // // // // // // // // // // // //         header: Header,
// // // // // // // // // // // // // // // // // // //         list: List,
// // // // // // // // // // // // // // // // // // //         paragraph: Paragraph,
// // // // // // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // // // // // //       data: data,
// // // // // // // // // // // // // // // // // // //       onChange: async () => {
// // // // // // // // // // // // // // // // // // //         const savedData = await editorInstance.current.save();
// // // // // // // // // // // // // // // // // // //         onSave(savedData);
// // // // // // // // // // // // // // // // // // //       },
// // // // // // // // // // // // // // // // // // //     });

// // // // // // // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // // // // // // //       if (editorInstance.current) {
// // // // // // // // // // // // // // // // // // //         editorInstance.current.destroy();
// // // // // // // // // // // // // // // // // // //         editorInstance.current = null;
// // // // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // // // // // //   }, [data]);

// // // // // // // // // // // // // // // // // // //   return <div id="editorjs" className="bg-white-900 p-6 rounded-lg shadow-md"></div>;
// // // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // // export default Editor;
// // // // // // // // // // // // // // // // // // import React, { useEffect, useRef } from "react";
// // // // // // // // // // // // // // // // // // import EditorJS from "@editorjs/editorjs";

// // // // // // // // // // // // // // // // // // const Editor = ({ data, onChange }) => {
// // // // // // // // // // // // // // // // // //   const editorInstance = useRef(null);

// // // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // // //     if (!editorInstance.current) {
// // // // // // // // // // // // // // // // // //       editorInstance.current = new EditorJS({
// // // // // // // // // // // // // // // // // //         holder: "editorjs",
// // // // // // // // // // // // // // // // // //         data: data || {},
// // // // // // // // // // // // // // // // // //         onChange: async () => {
// // // // // // // // // // // // // // // // // //           const savedData = await editorInstance.current.save();
// // // // // // // // // // // // // // // // // //           onChange(savedData);
// // // // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // // // //         tools: {
// // // // // // // // // // // // // // // // // //           header: require("@editorjs/header"),
// // // // // // // // // // // // // // // // // //           list: require("@editorjs/list"),
// // // // // // // // // // // // // // // // // //           paragraph: require("@editorjs/paragraph"),
// // // // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // // // //       });
// // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // // // // // //       if (editorInstance.current) {
// // // // // // // // // // // // // // // // // //         editorInstance.current.destroy();
// // // // // // // // // // // // // // // // // //         editorInstance.current = null;
// // // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // // // // //   }, [data]);

// // // // // // // // // // // // // // // // // //   return <div id="editorjs" className="p-4 bg-white rounded-md shadow-md" />;
// // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // export default Editor;

// // // // // // // // // // // // // // // // // // import React, { useEffect, useRef } from "react";
// // // // // // // // // // // // // // // // // // import EditorJS from "@editorjs/editorjs";
// // // // // // // // // // // // // // // // // // import Header from "@editorjs/header";
// // // // // // // // // // // // // // // // // // import List from "@editorjs/list";
// // // // // // // // // // // // // // // // // // import Paragraph from "@editorjs/paragraph";

// // // // // // // // // // // // // // // // // // const Editor = ({ data, onChange }) => {
// // // // // // // // // // // // // // // // // //   const editorInstance = useRef(null);

// // // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // // //     if (!editorInstance.current) {
// // // // // // // // // // // // // // // // // //       editorInstance.current = new EditorJS({
// // // // // // // // // // // // // // // // // //         holder: "editorjs",
// // // // // // // // // // // // // // // // // //         data: data || {},
// // // // // // // // // // // // // // // // // //         onChange: async () => {
// // // // // // // // // // // // // // // // // //           const savedData = await editorInstance.current.save();
// // // // // // // // // // // // // // // // // //           onChange(savedData);
// // // // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // // // //         tools: {
// // // // // // // // // // // // // // // // // //           header: Header,
// // // // // // // // // // // // // // // // // //           list: List,
// // // // // // // // // // // // // // // // // //           paragraph: Paragraph,
// // // // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // // // //       });
// // // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // // // // // //       if (editorInstance.current) {
// // // // // // // // // // // // // // // // // //         editorInstance.current.destroy();
// // // // // // // // // // // // // // // // // //         editorInstance.current = null;
// // // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // // // // //   }, [data]);

// // // // // // // // // // // // // // // // // //   return <div id="editorjs" className="p-4 bg-black rounded-md shadow-md" />;
// // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // export default Editor;

// // // // // // // // // // // // // // // // // import { useEffect, useRef } from "react";
// // // // // // // // // // // // // // // // // import EditorJS from "@editorjs/editorjs";
// // // // // // // // // // // // // // // // // import Header from "@editorjs/header";
// // // // // // // // // // // // // // // // // import List from "@editorjs/list";
// // // // // // // // // // // // // // // // // import Paragraph from "@editorjs/paragraph";

// // // // // // // // // // // // // // // // // const Editor = ({ data, onChange }) => {
// // // // // // // // // // // // // // // // //   const editorInstance = useRef(null);

// // // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // // //     if (!editorInstance.current) {
// // // // // // // // // // // // // // // // //       // Initialize EditorJS only if it hasn't been initialized yet
// // // // // // // // // // // // // // // // //       editorInstance.current = new EditorJS({
// // // // // // // // // // // // // // // // //         holder: "editorjs",
// // // // // // // // // // // // // // // // //         data: data || {}, // Default to an empty object if no data is passed
// // // // // // // // // // // // // // // // //         onChange: async () => {
// // // // // // // // // // // // // // // // //           try {
// // // // // // // // // // // // // // // // //             const savedData = await editorInstance.current.save();
// // // // // // // // // // // // // // // // //             onChange(savedData); // Pass the saved data to the parent component
// // // // // // // // // // // // // // // // //           } catch (error) {
// // // // // // // // // // // // // // // // //             console.error("EditorJS onChange error:", error);
// // // // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // // //         tools: {
// // // // // // // // // // // // // // // // //           header: {
// // // // // // // // // // // // // // // // //             class: Header,
// // // // // // // // // // // // // // // // //             inlineToolbar: true, // Allow inline toolbar for header
// // // // // // // // // // // // // // // // //             config: {
// // // // // // // // // // // // // // // // //               placeholder: "Enter a header",
// // // // // // // // // // // // // // // // //             },
// // // // // // // // // // // // // // // // //           },
// // // // // // // // // // // // // // // // //           list: {
// // // // // // // // // // // // // // // // //             class: List,
// // // // // // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // // // // // //           },
// // // // // // // // // // // // // // // // //           paragraph: {
// // // // // // // // // // // // // // // // //             class: Paragraph,
// // // // // // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // // // // // //           },
// // // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // // //       });
// // // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // // // // //       if (editorInstance.current) {
// // // // // // // // // // // // // // // // //         editorInstance.current.destroy();
// // // // // // // // // // // // // // // // //         editorInstance.current = null;
// // // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // // // //   }, [data]); // Re-initialize only when 'data' changes

// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <div id="editorjs" className="p-4 bg-black rounded-md shadow-md"></div>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // export default Editor;

// // // // // // // // // // // // // // // // // components/Editor.js
// // // // // // // // // // // // // // // // import { useEffect, useRef } from "react";
// // // // // // // // // // // // // // // // import EditorJS from "@editorjs/editorjs";
// // // // // // // // // // // // // // // // import Header from "@editorjs/header";
// // // // // // // // // // // // // // // // import List from "@editorjs/list";
// // // // // // // // // // // // // // // // import Paragraph from "@editorjs/paragraph";

// // // // // // // // // // // // // // // // const Editor = ({ data, onChange }) => {
// // // // // // // // // // // // // // // //   const editorInstance = useRef(null);

// // // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // // //     if (!editorInstance.current) {
// // // // // // // // // // // // // // // //       editorInstance.current = new EditorJS({
// // // // // // // // // // // // // // // //         holder: "editorjs",
// // // // // // // // // // // // // // // //         data: data || {},
// // // // // // // // // // // // // // // //         onChange: async () => {
// // // // // // // // // // // // // // // //           try {
// // // // // // // // // // // // // // // //             const savedData = await editorInstance.current.save();
// // // // // // // // // // // // // // // //             onChange(savedData); // Send saved data to parent component
// // // // // // // // // // // // // // // //           } catch (error) {
// // // // // // // // // // // // // // // //             console.error("Error saving editor content:", error);
// // // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // //         tools: {
// // // // // // // // // // // // // // // //           header: {
// // // // // // // // // // // // // // // //             class: Header,
// // // // // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // // // // //             config: {
// // // // // // // // // // // // // // // //               placeholder: "Enter header text",
// // // // // // // // // // // // // // // //             },
// // // // // // // // // // // // // // // //           },
// // // // // // // // // // // // // // // //           list: {
// // // // // // // // // // // // // // // //             class: List,
// // // // // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // // // // //           },
// // // // // // // // // // // // // // // //           paragraph: {
// // // // // // // // // // // // // // // //             class: Paragraph,
// // // // // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // // // // //           },
// // // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // // //       });
// // // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // // // //       if (editorInstance.current) {
// // // // // // // // // // // // // // // //         editorInstance.current.destroy();
// // // // // // // // // // // // // // // //         editorInstance.current = null;
// // // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // // //   }, [data]);

// // // // // // // // // // // // // // // //   return <div id="editorjs" className="editor-container p-4 bg-white rounded-md shadow-md" />;
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default Editor;

// // // // // // // // // // // // // // // // components/Editor.js
// // // // // // // // // // // // // // // import { useEffect, useRef } from "react";
// // // // // // // // // // // // // // // import EditorJS from "@editorjs/editorjs";
// // // // // // // // // // // // // // // import Header from "@editorjs/header";
// // // // // // // // // // // // // // // import List from "@editorjs/list";
// // // // // // // // // // // // // // // import Paragraph from "@editorjs/paragraph";

// // // // // // // // // // // // // // // const Editor = ({ data, onChange }) => {
// // // // // // // // // // // // // // //   const editorInstance = useRef(null);

// // // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // // //     if (!editorInstance.current) {
// // // // // // // // // // // // // // //       editorInstance.current = new EditorJS({
// // // // // // // // // // // // // // //         holder: "editorjs",
// // // // // // // // // // // // // // //         data: data || {},
// // // // // // // // // // // // // // //         onChange: async () => {
// // // // // // // // // // // // // // //           try {
// // // // // // // // // // // // // // //             const savedData = await editorInstance.current.save();
// // // // // // // // // // // // // // //             onChange(savedData); // Send saved data to parent component
// // // // // // // // // // // // // // //           } catch (error) {
// // // // // // // // // // // // // // //             console.error("Error saving editor content:", error);
// // // // // // // // // // // // // // //           }
// // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // //         tools: {
// // // // // // // // // // // // // // //           header: {
// // // // // // // // // // // // // // //             class: Header,
// // // // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // // // //             config: {
// // // // // // // // // // // // // // //               placeholder: "Enter header text",
// // // // // // // // // // // // // // //             },
// // // // // // // // // // // // // // //           },
// // // // // // // // // // // // // // //           list: {
// // // // // // // // // // // // // // //             class: List,
// // // // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // // // //           },
// // // // // // // // // // // // // // //           paragraph: {
// // // // // // // // // // // // // // //             class: Paragraph,
// // // // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // // // //           },
// // // // // // // // // // // // // // //         },
// // // // // // // // // // // // // // //       });
// // // // // // // // // // // // // // //     }

// // // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // // //       if (editorInstance.current) {
// // // // // // // // // // // // // // //         editorInstance.current.destroy();
// // // // // // // // // // // // // // //         editorInstance.current = null;
// // // // // // // // // // // // // // //       }
// // // // // // // // // // // // // // //     };
// // // // // // // // // // // // // // //   }, [data]);

// // // // // // // // // // // // // // //   return <div id="editorjs" className="editor-container bg-white rounded-md p-4 shadow-md" />;
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default Editor;
// // // // // // // // // // // // // // // components/Editor.js
// // // // // // // // // // // // // // import { useEffect, useRef } from "react";
// // // // // // // // // // // // // // import dynamic from "next/dynamic";

// // // // // // // // // // // // // // // Dynamically import EditorJS to disable SSR
// // // // // // // // // // // // // // const EditorJS = dynamic(() => import("@editorjs/editorjs"), { ssr: false });
// // // // // // // // // // // // // // import Header from "@editorjs/header";
// // // // // // // // // // // // // // import List from "@editorjs/list";
// // // // // // // // // // // // // // import Paragraph from "@editorjs/paragraph";

// // // // // // // // // // // // // // const Editor = ({ data, onChange }) => {
// // // // // // // // // // // // // //   const editorInstance = useRef(null);

// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     if (typeof window !== "undefined" && !editorInstance.current) {
// // // // // // // // // // // // // //       // Initialize EditorJS only on the client side
// // // // // // // // // // // // // //       editorInstance.current = new EditorJS({
// // // // // // // // // // // // // //         holder: "editorjs",
// // // // // // // // // // // // // //         data: data || {},
// // // // // // // // // // // // // //         onChange: async () => {
// // // // // // // // // // // // // //           try {
// // // // // // // // // // // // // //             const savedData = await editorInstance.current.save();
// // // // // // // // // // // // // //             onChange(savedData); // Send saved data to parent component
// // // // // // // // // // // // // //           } catch (error) {
// // // // // // // // // // // // // //             console.error("Error saving editor content:", error);
// // // // // // // // // // // // // //           }
// // // // // // // // // // // // // //         },
// // // // // // // // // // // // // //         tools: {
// // // // // // // // // // // // // //           header: {
// // // // // // // // // // // // // //             class: Header,
// // // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // // //             config: {
// // // // // // // // // // // // // //               placeholder: "Enter header text",
// // // // // // // // // // // // // //             },
// // // // // // // // // // // // // //           },
// // // // // // // // // // // // // //           list: {
// // // // // // // // // // // // // //             class: List,
// // // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // // //           },
// // // // // // // // // // // // // //           paragraph: {
// // // // // // // // // // // // // //             class: Paragraph,
// // // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // // //           },
// // // // // // // // // // // // // //         },
// // // // // // // // // // // // // //       });
// // // // // // // // // // // // // //     }

// // // // // // // // // // // // // //     // Cleanup function to destroy the EditorJS instance when the component unmounts
// // // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // // //       if (editorInstance.current) {
// // // // // // // // // // // // // //         editorInstance.current.isReady
// // // // // // // // // // // // // //           ? editorInstance.current.destroy()
// // // // // // // // // // // // // //           : console.log("Editor instance not initialized yet.");
// // // // // // // // // // // // // //         editorInstance.current = null;
// // // // // // // // // // // // // //       }
// // // // // // // // // // // // // //     };
// // // // // // // // // // // // // //   }, [data]);

// // // // // // // // // // // // // //   return <div id="editorjs" className="editor-container bg-white rounded-md p-4 shadow-md" />;
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Editor;

// // // // // // // // // // // // // // components/Editor.js
// // // // // // // // // // // // // import { useEffect, useRef } from "react";
// // // // // // // // // // // // // import dynamic from "next/dynamic";
// // // // // // // // // // // // // import EditorJS from "@editorjs/editorjs"; // Default export from editorjs package
// // // // // // // // // // // // // import Header from "@editorjs/header"; // Default export from header tool
// // // // // // // // // // // // // import List from "@editorjs/list"; // Default export from list tool
// // // // // // // // // // // // // import Paragraph from "@editorjs/paragraph"; // Default export from paragraph tool

// // // // // // // // // // // // // // Dynamically import EditorJS to disable SSR
// // // // // // // // // // // // // // const EditorJS = dynamic(() => import("@editorjs/editorjs"), { ssr: false });

// // // // // // // // // // // // // const Editor = ({ data, onChange }) => {
// // // // // // // // // // // // //   const editorInstance = useRef(null);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     if (typeof window !== "undefined" && !editorInstance.current) {
// // // // // // // // // // // // //       editorInstance.current = new EditorJS({
// // // // // // // // // // // // //         holder: "editorjs",
// // // // // // // // // // // // //         data: data || {},
// // // // // // // // // // // // //         onChange: async () => {
// // // // // // // // // // // // //           try {
// // // // // // // // // // // // //             const savedData = await editorInstance.current.save();
// // // // // // // // // // // // //             onChange(savedData);
// // // // // // // // // // // // //           } catch (error) {
// // // // // // // // // // // // //             console.error("Error saving editor content:", error);
// // // // // // // // // // // // //           }
// // // // // // // // // // // // //         },
// // // // // // // // // // // // //         tools: {
// // // // // // // // // // // // //           header: {
// // // // // // // // // // // // //             class: Header,
// // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // //             config: {
// // // // // // // // // // // // //               placeholder: "Enter header text",
// // // // // // // // // // // // //             },
// // // // // // // // // // // // //           },
// // // // // // // // // // // // //           list: {
// // // // // // // // // // // // //             class: List,
// // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // //           },
// // // // // // // // // // // // //           paragraph: {
// // // // // // // // // // // // //             class: Paragraph,
// // // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // // //           },
// // // // // // // // // // // // //         },
// // // // // // // // // // // // //       });
// // // // // // // // // // // // //     }

// // // // // // // // // // // // //     return () => {
// // // // // // // // // // // // //       if (editorInstance.current) {
// // // // // // // // // // // // //         editorInstance.current.isReady
// // // // // // // // // // // // //           ? editorInstance.current.destroy()
// // // // // // // // // // // // //           : console.log("Editor instance not initialized yet.");
// // // // // // // // // // // // //         editorInstance.current = null;
// // // // // // // // // // // // //       }
// // // // // // // // // // // // //     };
// // // // // // // // // // // // //   }, [data]);

// // // // // // // // // // // // //   return <div id="editorjs" className="editor-container bg-white rounded-md p-4 shadow-md" />;
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Editor;

// // // // // // // // // // // // // components/Editor.js

// // // // // // // // // // // // import { useEffect, useRef } from "react";
// // // // // // // // // // // // import dynamic from "next/dynamic";

// // // // // // // // // // // // // Dynamically import EditorJS to disable SSR
// // // // // // // // // // // // const EditorJS = dynamic(() => import("@editorjs/editorjs"), { ssr: false });
// // // // // // // // // // // // import Header from "@editorjs/header";
// // // // // // // // // // // // import List from "@editorjs/list";
// // // // // // // // // // // // import Paragraph from "@editorjs/paragraph";
// // // // // // // // // // // // import ImageTool from "@editorjs/image";

// // // // // // // // // // // // const Editor = ({ data, onChange }) => {
// // // // // // // // // // // //   const editorInstance = useRef(null);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (typeof window !== "undefined" && !editorInstance.current) {
// // // // // // // // // // // //       editorInstance.current = new EditorJS({
// // // // // // // // // // // //         holder: "editorjs", // This is the div that holds the editor
// // // // // // // // // // // //         data: data || {},   // Initial data (if any)
// // // // // // // // // // // //         onChange: async () => {
// // // // // // // // // // // //           try {
// // // // // // // // // // // //             const savedData = await editorInstance.current.save();
// // // // // // // // // // // //             onChange(savedData);
// // // // // // // // // // // //           } catch (error) {
// // // // // // // // // // // //             console.error("Error saving editor content:", error);
// // // // // // // // // // // //           }
// // // // // // // // // // // //         },
// // // // // // // // // // // //         tools: {
// // // // // // // // // // // //           header: {
// // // // // // // // // // // //             class: Header,
// // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // //           },
// // // // // // // // // // // //           list: {
// // // // // // // // // // // //             class: List,
// // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // //           },
// // // // // // // // // // // //           paragraph: {
// // // // // // // // // // // //             class: Paragraph,
// // // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // // //           },
// // // // // // // // // // // //           image: {
// // // // // // // // // // // //             class: ImageTool,
// // // // // // // // // // // //             config: {
// // // // // // // // // // // //               endpoints: {
// // // // // // // // // // // //                 byFile: "/api/upload", // Custom endpoint for image upload
// // // // // // // // // // // //               },
// // // // // // // // // // // //             },
// // // // // // // // // // // //           },
// // // // // // // // // // // //         },
// // // // // // // // // // // //       });
// // // // // // // // // // // //     }

// // // // // // // // // // // //     return () => {
// // // // // // // // // // // //       if (editorInstance.current) {
// // // // // // // // // // // //         editorInstance.current.destroy();
// // // // // // // // // // // //         editorInstance.current = null;
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };
// // // // // // // // // // // //   }, [data]);

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div
// // // // // // // // // // // //       id="editorjs"
// // // // // // // // // // // //       className="w-full p-4 bg-white rounded-md shadow-md"
// // // // // // // // // // // //     />
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Editor;
// // // // // // // // // // // // components/Editor.js

// // // // // // // // // // // import { useEffect, useRef } from "react";
// // // // // // // // // // // import dynamic from "next/dynamic";

// // // // // // // // // // // // Dynamically import EditorJS to disable SSR
// // // // // // // // // // // const EditorJS = dynamic(() => import("@editorjs/editorjs"), { ssr: false });
// // // // // // // // // // // import Header from "@editorjs/header";
// // // // // // // // // // // import List from "@editorjs/list";
// // // // // // // // // // // import Paragraph from "@editorjs/paragraph";
// // // // // // // // // // // import ImageTool from "@editorjs/image";

// // // // // // // // // // // const Editor = ({ data, onChange }) => {
// // // // // // // // // // //   const editorInstance = useRef(null);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (typeof window !== "undefined" && !editorInstance.current) {
// // // // // // // // // // //       editorInstance.current = new EditorJS({
// // // // // // // // // // //         holder: "editorjs", // This is the div that holds the editor
// // // // // // // // // // //         data: data || {},   // Initial data (if any)
// // // // // // // // // // //         onChange: async () => {
// // // // // // // // // // //           try {
// // // // // // // // // // //             const savedData = await editorInstance.current.save();
// // // // // // // // // // //             onChange(savedData);
// // // // // // // // // // //           } catch (error) {
// // // // // // // // // // //             console.error("Error saving editor content:", error);
// // // // // // // // // // //           }
// // // // // // // // // // //         },
// // // // // // // // // // //         tools: {
// // // // // // // // // // //           header: {
// // // // // // // // // // //             class: Header,
// // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // //           },
// // // // // // // // // // //           list: {
// // // // // // // // // // //             class: List,
// // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // //           },
// // // // // // // // // // //           paragraph: {
// // // // // // // // // // //             class: Paragraph,
// // // // // // // // // // //             inlineToolbar: true,
// // // // // // // // // // //           },
// // // // // // // // // // //           image: {
// // // // // // // // // // //             class: ImageTool,
// // // // // // // // // // //             config: {
// // // // // // // // // // //               endpoints: {
// // // // // // // // // // //                 byFile: "/api/upload", // Custom endpoint for image upload
// // // // // // // // // // //               },
// // // // // // // // // // //             },
// // // // // // // // // // //           },
// // // // // // // // // // //         },
// // // // // // // // // // //       });
// // // // // // // // // // //     }

// // // // // // // // // // //     return () => {
// // // // // // // // // // //       if (editorInstance.current) {
// // // // // // // // // // //         editorInstance.current.destroy();
// // // // // // // // // // //         editorInstance.current = null;
// // // // // // // // // // //       }
// // // // // // // // // // //     };
// // // // // // // // // // //   }, [data]);

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div
// // // // // // // // // // //       id="editorjs"
// // // // // // // // // // //       className="w-full p-4 bg-white rounded-md shadow-md"
// // // // // // // // // // //     />
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Editor;

// // // // // // // // // // "use client";
// // // // // // // // // // import React, { memo, useEffect, useRef, useState } from "react";
// // // // // // // // // // import EditorJS, { OutputData } from "@editorjs/editorjs";

// // // // // // // // // // // Import tools
// // // // // // // // // // // import Code from "@editorjs/code";
// // // // // // // // // // import Header from "@editorjs/header";
// // // // // // // // // // // import Paragraph from "@editorjs/paragraph";
// // // // // // // // // // // import ImageTool from "@editorjs/image";
// // // // // // // // // // // import LinkTool from "@editorjs/link";
// // // // // // // // // // import List from "@editorjs/list";
// // // // // // // // // // import axios from "axios";

// // // // // // // // // // // import Cookies from "js-cookie";

// // // // // // // // // // const EDITOR_TOOLS = {
// // // // // // // // // //   header: {
// // // // // // // // // //     class: Header,
// // // // // // // // // //     config: {
// // // // // // // // // //       levels: [1, 2, 3, 4, 5, 6],
// // // // // // // // // //       defaultLevel: 3,
// // // // // // // // // //     },
// // // // // // // // // //   },
// // // // // // // // // //   // paragraph: Paragraph,

// // // // // // // // // //   link: {
// // // // // // // // // //     class: LinkTool,
// // // // // // // // // //     config: {
// // // // // // // // // //       uploader: {
// // // // // // // // // //         uploadByUrl: (url: any) => {
// // // // // // // // // //           return fetch(
// // // // // // // // // //             `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
// // // // // // // // // //           )
// // // // // // // // // //             .then((response) => response.json())
// // // // // // // // // //             .then((data) => {
// // // // // // // // // //               if (data.contents) {
// // // // // // // // // //                 const parser = new DOMParser();
// // // // // // // // // //                 const doc = parser.parseFromString(data.contents, "text/html");
// // // // // // // // // //                 const title = doc.querySelector("title")?.textContent || "";
// // // // // // // // // //                 const description =
// // // // // // // // // //                   doc
// // // // // // // // // //                     .querySelector('meta[name="description"]')
// // // // // // // // // //                     ?.getAttribute("content") || "";

// // // // // // // // // //                 return {
// // // // // // // // // //                   success: 1,
// // // // // // // // // //                   link: url,
// // // // // // // // // //                   meta: {
// // // // // // // // // //                     title,
// // // // // // // // // //                     description,
// // // // // // // // // //                   },
// // // // // // // // // //                 };
// // // // // // // // // //               }
// // // // // // // // // //               throw new Error("Unable to fetch link data");
// // // // // // // // // //             });
// // // // // // // // // //         },
// // // // // // // // // //       },
// // // // // // // // // //     },
// // // // // // // // // //   },

// // // // // // // // // //   // image: ImageTool,
// // // // // // // // // //   image: {
// // // // // // // // // //     class: ImageTool,
// // // // // // // // // //     config: {
// // // // // // // // // //       uploader: {
// // // // // // // // // //         async uploadByFile(file: any) {
// // // // // // // // // //           const user_id = Cookies.get("user_id");
// // // // // // // // // //           const id_token = Cookies.get("id_token");
// // // // // // // // // //           const blog_id = Cookies.get("blog_id");
// // // // // // // // // //           const refresh_token = Cookies.get("refresh_token");
// // // // // // // // // //           try {
// // // // // // // // // //             // Ensure user_id is a string
// // // // // // // // // //             if (!user_id) {
// // // // // // // // // //               throw new Error("User ID is undefined");
// // // // // // // // // //             }
// // // // // // // // // //             if (!blog_id) {
// // // // // // // // // //               throw new Error("blog_id is undefined");
// // // // // // // // // //             }
// // // // // // // // // //             if (!id_token) {
// // // // // // // // // //               throw new Error("ID token is undefined");
// // // // // // // // // //             }

// // // // // // // // // //             // your own uploading logic here
// // // // // // // // // //             const formData = new FormData();
// // // // // // // // // //             formData.append("file", file);
// // // // // // // // // //             formData.append("userId", user_id);
// // // // // // // // // //             formData.append("blogId", blog_id);

// // // // // // // // // //             const response = await axios.post(
// // // // // // // // // //               "https://iwojpgsdff.execute-api.ap-south-1.amazonaws.com/dev/api/fitnearn/web/users/blog/upload-file",
// // // // // // // // // //               formData,
// // // // // // // // // //               {
// // // // // // // // // //                 headers: {
// // // // // // // // // //                   Authorization: `Bearer ${id_token}`,
// // // // // // // // // //                   "Content-Type": "multipart/form-data",
// // // // // // // // // //                 },
// // // // // // // // // //                 withCredentials: false,
// // // // // // // // // //               },
// // // // // // // // // //             );

// // // // // // // // // //             if (response.data.success === 1) {
// // // // // // // // // //               //console.log($&)
// // // // // // // // // //               return response.data;
// // // // // // // // // //             } else {
// // // // // // // // // //               window.location.href = "/login";
// // // // // // // // // //               throw new Error("Upload failed");
// // // // // // // // // //             }
// // // // // // // // // //           } catch (error) {
// // // // // // // // // //             console.error("Error uploading file:", error);
// // // // // // // // // //             // Redirect to login page
// // // // // // // // // //             window.location.href = "/login";
// // // // // // // // // //             // Throw an error to inform EditorJS that the upload failed
// // // // // // // // // //             throw new Error("Upload failed, redirecting to login");
// // // // // // // // // //           }
// // // // // // // // // //         },
// // // // // // // // // //         // async uploadByUrl(url: any) {
// // // // // // // // // //         //   const id_token = Cookies.get("id_token");
// // // // // // // // // //         //   try {
// // // // // // // // // //         //     const response = await axios.post(
// // // // // // // // // //         //       "https://iwojpgsdff.execute-api.ap-south-1.amazonaws.com/dev/api/fitnearn/web/users/blog/upload-url",
// // // // // // // // // //         //       {
// // // // // // // // // //         //         url,
// // // // // // // // // //         //       },
// // // // // // // // // //         //       {
// // // // // // // // // //         //         headers: {
// // // // // // // // // //         //           Authorization: `Bearer ${id_token}`,
// // // // // // // // // //         //         },
// // // // // // // // // //         //       },
// // // // // // // // // //         //     );

// // // // // // // // // //         //     if (response.data.success === 1) {
// // // // // // // // // //         //       return response.data;
// // // // // // // // // //         //     }
// // // // // // // // // //         //   } catch (error) {
// // // // // // // // // //         //     console.error("Error uploading by URL:", error);
// // // // // // // // // //         //     // Handle the error appropriately
// // // // // // // // // //         //   }
// // // // // // // // // //         // },
// // // // // // // // // //       },
// // // // // // // // // //     },
// // // // // // // // // //   },
// // // // // // // // // //   // link: LinkTool,
// // // // // // // // // //   list: List,
// // // // // // // // // // };

// // // // // // // // // // type Props = {
// // // // // // // // // //   data?: OutputData;
// // // // // // // // // //   onChange(val: OutputData): void;
// // // // // // // // // //   holder: string;
// // // // // // // // // //   readOnly?: boolean;
// // // // // // // // // //   onWordCountChange(count: number): void;
// // // // // // // // // // };

// // // // // // // // // // const EditorBlock = ({
// // // // // // // // // //   data,
// // // // // // // // // //   onChange,
// // // // // // // // // //   onWordCountChange,
// // // // // // // // // //   holder,
// // // // // // // // // //   readOnly = false,
// // // // // // // // // // }: Props) => {
// // // // // // // // // //   const ref = useRef<EditorJS>();
// // // // // // // // // //   const [wordCount, setWordCount] = useState(0);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (!ref.current) {
// // // // // // // // // //       //console.log($&)
// // // // // // // // // //       const editor = new EditorJS({
// // // // // // // // // //         holder: holder,
// // // // // // // // // //         tools: EDITOR_TOOLS,
// // // // // // // // // //         data,
// // // // // // // // // //         readOnly: readOnly,
// // // // // // // // // //         onReady: () => {
// // // // // // // // // //           //console.log($&)
// // // // // // // // // //         },
// // // // // // // // // //         async onChange(api, event) {
// // // // // // // // // //           const data = await api.saver.save();
// // // // // // // // // //           //console.log($&)
// // // // // // // // // //           onChange(data);
// // // // // // // // // //           updateWordCount(data);
// // // // // // // // // //           //console.log($&)
// // // // // // // // // //         },
// // // // // // // // // //       });
// // // // // // // // // //       ref.current = editor;
// // // // // // // // // //     }
// // // // // // // // // //     return () => {
// // // // // // // // // //       if (ref.current && ref.current.destroy) {
// // // // // // // // // //         ref.current.destroy();
// // // // // // // // // //       }
// // // // // // // // // //     };
// // // // // // // // // //   }, []);

// // // // // // // // // //   const updateWordCount = (data: OutputData) => {
// // // // // // // // // //     let count = 0;
// // // // // // // // // //     data.blocks.forEach((block) => {
// // // // // // // // // //       if (block.type === "paragraph" || block.type === "header") {
// // // // // // // // // //         count += block.data.text.trim().split(/\s+/).length;
// // // // // // // // // //       } else if (block.type === "list") {
// // // // // // // // // //         block.data.items.forEach((item: string) => {
// // // // // // // // // //           count += item.trim().split(/\s+/).length;
// // // // // // // // // //         });
// // // // // // // // // //       }
// // // // // // // // // //     });
// // // // // // // // // //     setWordCount(count);
// // // // // // // // // //     onWordCountChange(count);
// // // // // // // // // //   };

// // // // // // // // // //   return (
// // // // // // // // // //     <div
// // // // // // // // // //       id={holder}
// // // // // // // // // //       className={`max-w-full prose ${readOnly ? "read-only" : ""}`}
// // // // // // // // // //     />
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default memo(EditorBlock);

// // // // // // // // // "use client";
// // // // // // // // // import React, { memo, useEffect, useRef, useState } from "react";
// // // // // // // // // import EditorJS, { OutputData } from "@editorjs/editorjs";

// // // // // // // // // // Import tools

// // // // // // // // // import List from "@editorjs/list";
// // // // // // // // // import axios from "axios";

// // // // // // // // // const EDITOR_TOOLS = {
// // // // // // // // //   header: {

// // // // // // // // //     config: {
// // // // // // // // //       levels: [1, 2, 3, 4, 5, 6],
// // // // // // // // //       defaultLevel: 3,
// // // // // // // // //     },
// // // // // // // // //   },

// // // // // // // // //   link: {

// // // // // // // // //     config: {
// // // // // // // // //       uploader: {
// // // // // // // // //         uploadByUrl: (_url_: any) => {
// // // // // // // // //           return fetch(
// // // // // // // // //             https://api.allorigins.win/get?url=${encodeURIComponent(_url_)},
// // // // // // // // //           )
// // // // // // // // //             .then((_response_) => response.json())
// // // // // // // // //             .then((_data_) => {
// // // // // // // // //               if (_data_.contents) {
// // // // // // // // //                 const parser = new DOMParser();
// // // // // // // // //                 const doc = parser.parseFromString(_data_.contents, "text/html");
// // // // // // // // //                 const title = doc.querySelector("title")?.textContent || "";
// // // // // // // // //                 const description =
// // // // // // // // //                   doc
// // // // // // // // //                     .querySelector('meta[name="description"]')
// // // // // // // // //                     ?.getAttribute("content") || "";

// // // // // // // // //                 return {
// // // // // // // // //                   success: 1,
// // // // // // // // //                   link: url,
// // // // // // // // //                   meta: {
// // // // // // // // //                     title,
// // // // // // // // //                     description,
// // // // // // // // //                   },
// // // // // // // // //                 };
// // // // // // // // //               }
// // // // // // // // //               throw new Error("Unable to fetch link data");
// // // // // // // // //             });
// // // // // // // // //         },
// // // // // // // // //       },
// // // // // // // // //     },
// // // // // // // // //   },

// // // // // // // // //   // image: ImageTool,

// // // // // // // // //   // link: LinkTool,
// // // // // // // // //   list: List,
// // // // // // // // // };

// // // // // // // // // type Props = {
// // // // // // // // //   data?: OutputData;
// // // // // // // // //   onChange(_val_: OutputData): void;
// // // // // // // // //   holder: string;
// // // // // // // // //   readOnly?: boolean;
// // // // // // // // //   onWordCountChange(_count_: number): void;
// // // // // // // // // };

// // // // // // // // // const EditorBlock = ({
// // // // // // // // //   data,
// // // // // // // // //   onChange,
// // // // // // // // //   onWordCountChange,
// // // // // // // // //   holder,
// // // // // // // // //   readOnly = false,
// // // // // // // // // }: Props) => {
// // // // // // // // //   const ref = useRef<EditorJS>();
// // // // // // // // //   const [wordCount, setWordCount] = useState(0);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (!ref.current) {
// // // // // // // // //       //console.log($&)
// // // // // // // // //       const editor = new EditorJS({
// // // // // // // // //         holder: holder,
// // // // // // // // //         tools: EDITOR_TOOLS,
// // // // // // // // //         data,
// // // // // // // // //         readOnly: readOnly,
// // // // // // // // //         onReady: () => {
// // // // // // // // //           //console.log($&)
// // // // // // // // //         },
// // // // // // // // //         async onChange(_api_, event) {
// // // // // // // // //           const data = await api.saver.save();
// // // // // // // // //           //console.log($&)
// // // // // // // // //           onChange(data);
// // // // // // // // //           updateWordCount(data);
// // // // // // // // //           //console.log($&)
// // // // // // // // //         },
// // // // // // // // //       });
// // // // // // // // //       ref.current = editor;
// // // // // // // // //     }
// // // // // // // // //     return () => {
// // // // // // // // //       if (ref.current && ref.current.destroy) {
// // // // // // // // //         ref.current.destroy();
// // // // // // // // //       }
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   const updateWordCount = (_data_: OutputData) => {
// // // // // // // // //     let count = 0;
// // // // // // // // //     data.blocks.forEach((_block_) => {
// // // // // // // // //       if (_block_.type === "paragraph" || block.type === "header") {
// // // // // // // // //         count += block.data.text.trim().split(/\s+/).length;
// // // // // // // // //       } else if (_block_.type === "list") {
// // // // // // // // //         block.data.items.forEach((_item_: string) => {
// // // // // // // // //           count += item.trim().split(/\s+/).length;
// // // // // // // // //         });
// // // // // // // // //       }
// // // // // // // // //     });
// // // // // // // // //     setWordCount(count);
// // // // // // // // //     onWordCountChange(count);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div
// // // // // // // // //       id={_holder_}
// // // // // // // // //       className={max - w - full prose ${_readOnly_ ? "read-only" : ""}}
// // // // // // // // //     />
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default memo(EditorBlock);
// // // // // // // // "use client";
// // // // // // // // // import React, { memo, useEffect, useRef, useState } from "react";
// // // // // // // // // import EditorJS, { OutputData } from "@editorjs/editorjs";

// // // // // // // // // // Import tools

// // // // // // // // // import List from "@editorjs/list";
// // // // // // // // // import axios from "axios";

// // // // // // // // // const EDITOR_TOOLS = {
// // // // // // // // //   header: {

// // // // // // // // //     config: {
// // // // // // // // //       levels: [1, 2, 3, 4, 5, 6],
// // // // // // // // //       defaultLevel: 3,
// // // // // // // // //     },
// // // // // // // // //   },

// // // // // // // // //   link: {

// // // // // // // // //     config: {
// // // // // // // // //       uploader: {
// // // // // // // // //         uploadByUrl: (url: any) => {
// // // // // // // // //           return fetch(
// // // // // // // // //             `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
// // // // // // // // //           )
// // // // // // // // //             .then((response) => response.json())
// // // // // // // // //             .then((data) => {
// // // // // // // // //               if (data.contents) {
// // // // // // // // //                 const parser = new DOMParser();
// // // // // // // // //                 const doc = parser.parseFromString(data.contents, "text/html");
// // // // // // // // //                 const title = doc.querySelector("title")?.textContent || "";
// // // // // // // // //                 const description =
// // // // // // // // //                   doc
// // // // // // // // //                     .querySelector('meta[name="description"]')
// // // // // // // // //                     ?.getAttribute("content") || "";

// // // // // // // // //                 return {
// // // // // // // // //                   success: 1,
// // // // // // // // //                   link: url,
// // // // // // // // //                   meta: {
// // // // // // // // //                     title,
// // // // // // // // //                     description,
// // // // // // // // //                   },
// // // // // // // // //                 };
// // // // // // // // //               }
// // // // // // // // //               throw new Error("Unable to fetch link data");
// // // // // // // // //             });
// // // // // // // // //         },
// // // // // // // // //       },
// // // // // // // // //     },
// // // // // // // // //   },

// // // // // // // // //   // image: ImageTool,

// // // // // // // // //   // link: LinkTool,
// // // // // // // // //   list: List,
// // // // // // // // // };

// // // // // // // // // type Props = {
// // // // // // // // //   data?: OutputData;
// // // // // // // // //   onChange(val: OutputData): void;
// // // // // // // // //   holder: string;
// // // // // // // // //   readOnly?: boolean;
// // // // // // // // //   onWordCountChange(count: number): void;
// // // // // // // // // };

// // // // // // // // // const EditorBlock = ({
// // // // // // // // //   data,
// // // // // // // // //   onChange,
// // // // // // // // //   onWordCountChange,
// // // // // // // // //   holder,
// // // // // // // // //   readOnly = false,
// // // // // // // // // }: Props) => {
// // // // // // // // //   const ref = useRef<EditorJS>();
// // // // // // // // //   const [wordCount, setWordCount] = useState(0);

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (!ref.current) {
// // // // // // // // //       //console.log($&)
// // // // // // // // //       const editor = new EditorJS({
// // // // // // // // //         holder: holder,
// // // // // // // // //         tools: EDITOR_TOOLS,
// // // // // // // // //         data,
// // // // // // // // //         readOnly: readOnly,
// // // // // // // // //         onReady: () => {
// // // // // // // // //           //console.log($&)
// // // // // // // // //         },
// // // // // // // // //         async onChange(api, event) {
// // // // // // // // //           const data = await api.saver.save();
// // // // // // // // //           //console.log($&)
// // // // // // // // //           onChange(data);
// // // // // // // // //           updateWordCount(data);
// // // // // // // // //           //console.log($&)
// // // // // // // // //         },
// // // // // // // // //       });
// // // // // // // // //       ref.current = editor;
// // // // // // // // //     }
// // // // // // // // //     return () => {
// // // // // // // // //       if (ref.current && ref.current.destroy) {
// // // // // // // // //         ref.current.destroy();
// // // // // // // // //       }
// // // // // // // // //     };
// // // // // // // // //   }, []);

// // // // // // // // //   const updateWordCount = (data: OutputData) => {
// // // // // // // // //     let count = 0;
// // // // // // // // //     data.blocks.forEach((block) => {
// // // // // // // // //       if (block.type === "paragraph" || block.type === "header") {
// // // // // // // // //         count += block.data.text.trim().split(/\s+/).length;
// // // // // // // // //       } else if (block.type === "list") {
// // // // // // // // //         block.data.items.forEach((item: string) => {
// // // // // // // // //           count += item.trim().split(/\s+/).length;
// // // // // // // // //         });
// // // // // // // // //       }
// // // // // // // // //     });
// // // // // // // // //     setWordCount(count);
// // // // // // // // //     onWordCountChange(count);
// // // // // // // // //   };

// // // // // // // // //   return (
// // // // // // // // //     <div
// // // // // // // // //       id={holder}
// // // // // // // // //       className={`max-w-full prose ${readOnly ? "read-only" : ""}`}
// // // // // // // // //     />
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default memo(EditorBlock);

// // // // // // // // import { useEffect, useRef, useState } from 'react';
// // // // // // // // import dynamic from 'next/dynamic';
// // // // // // // // import '@editorjs/editorjs/dist/editor.css';

// // // // // // // // const EditorJS = dynamic(() => import('@editorjs/react'), { ssr: false });

// // // // // // // // const AboutUsPage = () => {
// // // // // // // //   const editorInstance = useRef(null);
// // // // // // // //   const [editorData, setEditorData] = useState(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     // Initialize Editor.js instance when component mounts
// // // // // // // //     const editor = new EditorJS({
// // // // // // // //       holder: 'editorjs',
// // // // // // // //       data: editorData, // Initial content if available
// // // // // // // //       onChange: () => {
// // // // // // // //         editor.save().then((outputData) => {
// // // // // // // //           setEditorData(outputData);
// // // // // // // //         });
// // // // // // // //       },
// // // // // // // //       tools: {
// // // // // // // //         header: {
// // // // // // // //           class: require('@editorjs/header'),
// // // // // // // //           inlineToolbar: ['link'],
// // // // // // // //           config: {
// // // // // // // //             placeholder: 'Enter a header...',
// // // // // // // //           },
// // // // // // // //         },
// // // // // // // //         list: {
// // // // // // // //           class: require('@editorjs/list'),
// // // // // // // //           inlineToolbar: ['link'],
// // // // // // // //           config: {
// // // // // // // //             defaultStyle: 'unordered',
// // // // // // // //           },
// // // // // // // //         },
// // // // // // // //         quote: {
// // // // // // // //           class: require('@editorjs/quote'),
// // // // // // // //           inlineToolbar: ['link'],
// // // // // // // //           config: {
// // // // // // // //             placeholder: 'Enter a quote...',
// // // // // // // //           },
// // // // // // // //         },
// // // // // // // //       },
// // // // // // // //     });

// // // // // // // //     editorInstance.current = editor;
// // // // // // // //   }, [editorData]);

// // // // // // // //   return (
// // // // // // // //     <div className="min-h-screen flex bg-white-900 text-white">
// // // // // // // //       {/* Sidebar */}
// // // // // // // //       <aside className="w-1/4 bg-white-800 p-6">
// // // // // // // //         <div className="flex items-center mb-6">
// // // // // // // //           <span className="bg-orange-500 p-2 rounded-full mr-2">
// // // // // // // //             <img src="/logo-icon.png" alt="Logo" className="w-8 h-8" />
// // // // // // // //           </span>
// // // // // // // //           <h1 className="text-lg font-bold">Swasthi App</h1>
// // // // // // // //         </div>
// // // // // // // //         <nav>
// // // // // // // //           <ul className="space-y-4">
// // // // // // // //             <li className="hover:bg-white-700 p-2 rounded-md">
// // // // // // // //               <a href="/landingpage" className="block">Landing Page</a>
// // // // // // // //             </li>
// // // // // // // //             <li className="hover:bg-white-700 p-2 rounded-md">
// // // // // // // //               <a href="/aboutus">About Us</a>
// // // // // // // //             </li>
// // // // // // // //             <li className="hover:bg-white-700 p-2 rounded-md">
// // // // // // // //               <a href="/datadeletion">Data Deletion Policy</a>
// // // // // // // //             </li>
// // // // // // // //             <li className="hover:bg-white-700 p-2 rounded-md">
// // // // // // // //               <a href="/privacypolicy">Privacy Policy</a>
// // // // // // // //             </li>
// // // // // // // //             <li className="hover:bg-white-700 p-2 rounded-md">
// // // // // // // //               <a href="/terms">Terms and Conditions</a>
// // // // // // // //             </li>
// // // // // // // //             <li className="hover:bg-white-700 p-2 rounded-md">
// // // // // // // //               <a href="/returnrefund">Return & Refund Policy</a>
// // // // // // // //             </li>
// // // // // // // //           </ul>
// // // // // // // //         </nav>
// // // // // // // //       </aside>

// // // // // // // //       {/* Main Content */}
// // // // // // // //       <main className="w-3/4 p-6">
// // // // // // // //         {/* Header */}
// // // // // // // //         <header className="flex justify-between items-center mb-6">
// // // // // // // //           <h1 className="text-xl font-bold">About Us</h1>
// // // // // // // //           <div className="flex items-center space-x-4">
// // // // // // // //             <img
// // // // // // // //               src="/profile-pic.png"
// // // // // // // //               alt="Profile"
// // // // // // // //               className="w-8 h-8 rounded-full"
// // // // // // // //             />
// // // // // // // //             <span>Nikita Jain</span>
// // // // // // // //           </div>
// // // // // // // //         </header>

// // // // // // // //         {/* About Us Section */}
// // // // // // // //         <section className="bg-white-800 p-6 rounded-lg">
// // // // // // // //           <div className="flex justify-end">
// // // // // // // //             <button
// // // // // // // //               type="submit"
// // // // // // // //               className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
// // // // // // // //             >
// // // // // // // //               Save
// // // // // // // //             </button>
// // // // // // // //           </div>
// // // // // // // //           <div id="editorjs" className="space-y-4 text-white-300">
// // // // // // // //             {/* Editor.js will render the content here */}
// // // // // // // //           </div>
// // // // // // // //         </section>
// // // // // // // //       </main>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default AboutUsPage;

// // // // // // // // components/EditorComponent.js
// // // // // // // // "use client"
// // // // // // // // import { useEffect, useRef, useState } from 'react';
// // // // // // // // import dynamic from 'next/dynamic';

// // // // // // // // // Dynamically import Editor.js and its plugins to avoid SSR issues
// // // // // // // // const EditorJS = dynamic(() => import('@editorjs/editorjs'), { ssr: false });
// // // // // // // // const Header = dynamic(() => import('@editorjs/header'), { ssr: false });
// // // // // // // // const List = dynamic(() => import('@editorjs/list'), { ssr: false });
// // // // // // // // const Quote = dynamic(() => import('@editorjs/quote'), { ssr: false });

// // // // // // // // const EditorComponent = ({ initialData }) => {
// // // // // // // //   const editorInstance = useRef(null); // Reference to store editor instance
// // // // // // // //   const [editorData, setEditorData] = useState(initialData || {}); // Store the editor content

// // // // // // // //   // Initialize Editor.js when the component mounts
// // // // // // // //   useEffect(() => {
// // // // // // // //     const editor = new EditorJS({
// // // // // // // //       holder: 'editorjs', // This is where the editor will be initialized
// // // // // // // //       data: editorData, // Load any pre-existing content if available
// // // // // // // //       onChange: () => {
// // // // // // // //         editor.save().then((outputData) => {
// // // // // // // //           setEditorData(outputData); // Save data as it changes
// // // // // // // //         });
// // // // // // // //       },
// // // // // // // //       tools: {
// // // // // // // //         header: {
// // // // // // // //           class: Header,
// // // // // // // //           inlineToolbar: true,
// // // // // // // //         },
// // // // // // // //         list: {
// // // // // // // //           class: List,
// // // // // // // //           inlineToolbar: true,
// // // // // // // //         },
// // // // // // // //         quote: {
// // // // // // // //           class: Quote,
// // // // // // // //           inlineToolbar: true,
// // // // // // // //         },
// // // // // // // //       },
// // // // // // // //     });

// // // // // // // //     editorInstance.current = editor;

// // // // // // // //     // Cleanup the editor instance when the component is unmounted
// // // // // // // //     return () => {
// // // // // // // //       if (editorInstance.current) {
// // // // // // // //         editorInstance.current.destroy();
// // // // // // // //         editorInstance.current = null;
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //   }, [editorData]);

// // // // // // // //   // Save the content (can be sent to a server here)
// // // // // // // //   const handleSave = async () => {
// // // // // // // //     if (editorInstance.current) {
// // // // // // // //       const savedData = await editorInstance.current.save();
// // // // // // // //       console.log('Saved data:', savedData); // Log or save it to your backend
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       {/* Save button */}
// // // // // // // //       <div className="flex justify-end mb-4">
// // // // // // // //         <button
// // // // // // // //           onClick={handleSave}
// // // // // // // //           className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
// // // // // // // //         >
// // // // // // // //           Save
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Editor.js holder */}
// // // // // // // //       <div id="editorjs" className="space-y-4 text-white-300"></div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default EditorComponent;
// // // // // // // "use client";
// // // // // // // import React, { memo, useEffect, useRef, useState } from "react";
// // // // // // // import EditorJS, { OutputData } from "@editorjs/editorjs";

// // // // // // // // Import tools

// // // // // // // import List from "@editorjs/list";
// // // // // // // import axios from "axios";

// // // // // // // const EDITOR_TOOLS = {
// // // // // // //   header: {

// // // // // // //     config: {
// // // // // // //       levels: [1, 2, 3, 4, 5, 6],
// // // // // // //       defaultLevel: 3,
// // // // // // //     },
// // // // // // //   },

// // // // // // //   link: {

// // // // // // //     config: {
// // // // // // //       uploader: {
// // // // // // //         uploadByUrl: (url: any) => {
// // // // // // //           return fetch(
// // // // // // //             `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
// // // // // // //           )
// // // // // // //             .then((response) => response.json())
// // // // // // //             .then((data) => {
// // // // // // //               if (data.contents) {
// // // // // // //                 const parser = new DOMParser();
// // // // // // //                 const doc = parser.parseFromString(data.contents, "text/html");
// // // // // // //                 const title = doc.querySelector("title")?.textContent || "";
// // // // // // //                 const description =
// // // // // // //                   doc
// // // // // // //                     .querySelector('meta[name="description"]')
// // // // // // //                     ?.getAttribute("content") || "";

// // // // // // //                 return {
// // // // // // //                   success: 1,
// // // // // // //                   link: url,
// // // // // // //                   meta: {
// // // // // // //                     title,
// // // // // // //                     description,
// // // // // // //                   },
// // // // // // //                 };
// // // // // // //               }
// // // // // // //               throw new Error("Unable to fetch link data");
// // // // // // //             });
// // // // // // //         },
// // // // // // //       },
// // // // // // //     },
// // // // // // //   },

// // // // // // //   // image: ImageTool,

// // // // // // //   // link: LinkTool,
// // // // // // //   list: List,
// // // // // // // };

// // // // // // // type Props = {
// // // // // // //   data?: OutputData;
// // // // // // //   onChange(val: OutputData): void;
// // // // // // //   holder: string;
// // // // // // //   readOnly?: boolean;
// // // // // // //   onWordCountChange(count: number): void;
// // // // // // // };

// // // // // // // const EditorBlock = ({
// // // // // // //   data,
// // // // // // //   onChange,
// // // // // // //   onWordCountChange,
// // // // // // //   holder,
// // // // // // //   readOnly = false,
// // // // // // // }: Props) => {
// // // // // // //   const ref = useRef<EditorJS>();
// // // // // // //   const [wordCount, setWordCount] = useState(0);

// // // // // // //   useEffect(() => {
// // // // // // //     if (!ref.current) {
// // // // // // //       //console.log($&)
// // // // // // //       const editor = new EditorJS({
// // // // // // //         holder: holder,
// // // // // // //         tools: EDITOR_TOOLS,
// // // // // // //         data,
// // // // // // //         readOnly: readOnly,
// // // // // // //         onReady: () => {
// // // // // // //           //console.log($&)
// // // // // // //         },
// // // // // // //         async onChange(api, event) {
// // // // // // //           const data = await api.saver.save();
// // // // // // //           //console.log($&)
// // // // // // //           onChange(data);
// // // // // // //           updateWordCount(data);
// // // // // // //           //console.log($&)
// // // // // // //         },
// // // // // // //       });
// // // // // // //       ref.current = editor;
// // // // // // //     }
// // // // // // //     return () => {
// // // // // // //       if (ref.current && ref.current.destroy) {
// // // // // // //         ref.current.destroy();
// // // // // // //       }
// // // // // // //     };
// // // // // // //   }, []);

// // // // // // //   const updateWordCount = (data: OutputData) => {
// // // // // // //     let count = 0;
// // // // // // //     data.blocks.forEach((block) => {
// // // // // // //       if (block.type === "paragraph" || block.type === "header") {
// // // // // // //         count += block.data.text.trim().split(/\s+/).length;
// // // // // // //       } else if (block.type === "list") {
// // // // // // //         block.data.items.forEach((item: string) => {
// // // // // // //           count += item.trim().split(/\s+/).length;
// // // // // // //         });
// // // // // // //       }
// // // // // // //     });
// // // // // // //     setWordCount(count);
// // // // // // //     onWordCountChange(count);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       id={holder}
// // // // // // //       className={`max-w-full prose ${readOnly ? "read-only" : ""}`}
// // // // // // //     />
// // // // // // //   );
// // // // // // // };

// // // // // // // export default memo(EditorBlock);
// // // // // // import { useEffect, useRef,  } from 'react';
// // // // // // import EditorJS from '@editorjs/editorjs';
// // // // // // // quote: {
// // // // // // //   class: require('@editorjs/quote'),
// // // // // // //   inlineToolbar: true,
// // // // // // // },
// // // // // // const Editor = ({ onSave }) => {
// // // // // //   const editorRef = useRef(null);

// // // // // //   useEffect(() => {
// // // // // //     const editor = new EditorJS({
// // // // // //       holder: editorRef.current, // This is the container for the editor
// // // // // //       tools: {
// // // // // //         header: {
// // // // // //           class: require('@editorjs/header'),
// // // // // //           inlineToolbar: true,
// // // // // //         },
// // // // // //         list: {
// // // // // //           class: require('@editorjs/list'),
// // // // // //           inlineToolbar: true,
// // // // // //         },
// // // // // //         image: {
// // // // // //           class: require('@editorjs/image'),
// // // // // //           config: {
// // // // // //             uploader: {
// // // // // //               uploadByFile(file) {
// // // // // //                 // Implement file upload logic here if needed
// // // // // //                 return new Promise((resolve, reject) => {
// // // // // //                   // You can return a file URL here, or handle uploading.
// // // // // //                 });
// // // // // //               },
// // // // // //             },
// // // // // //           },
// // // // // //         },
// // // // // //       },
// // // // // //     });

// // // // // //     return () => {
// // // // // //       editor.destroy(); // Clean up the editor when the component is unmounted
// // // // // //     };
// // // // // //   }, []);

// // // // // //   const handleSave = async () => {
// // // // // //     const savedData = await editorRef.current.save();
// // // // // //     onSave(savedData); // Pass the saved data to parent component
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <div ref={editorRef} style={{ border: '1px solid #ccc', minHeight: '300px' }}></div>
// // // // // //       <button onClick={handleSave}>Save Content</button>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Editor;
// // // // // import { useEffect, useRef, useState } from 'react';
// // // // // import EditorJS from '@editorjs/editorjs';

// // // // // const Editor = ({ onSave }) => {
// // // // //   const editorRef = useRef(null);
// // // // //   const [editorInstance, setEditorInstance] = useState(null);

// // // // //   useEffect(() => {
// // // // //     const editor = new EditorJS({
// // // // //       holder: editorRef.current, // This is the container for the editor
// // // // //       tools: {
// // // // //         header: {
// // // // //           class: require('@editorjs/header'),
// // // // //           inlineToolbar: true,
// // // // //         },
// // // // //         list: {
// // // // //           class: require('@editorjs/list'),
// // // // //           inlineToolbar: true,
// // // // //         },
// // // // //         image: {
// // // // //           class: require('@editorjs/image'),
// // // // //           config: {
// // // // //             uploader: {
// // // // //               uploadByFile(file) {
// // // // //                 return new Promise((resolve, reject) => {
// // // // //                   // Implement file upload logic here if needed
// // // // //                 });
// // // // //               },
// // // // //             },
// // // // //           },
// // // // //         },
// // // // //       },
// // // // //     });

// // // // //     // Set the editor instance to state so we can access it later
// // // // //     setEditorInstance(editor);

// // // // //     // Cleanup on unmount
// // // // //     return () => {
// // // // //       if (editorInstance) {
// // // // //         editorInstance.destroy();
// // // // //       }
// // // // //     };
// // // // //   }, []);

// // // // //   const handleSave = async () => {
// // // // //     if (editorInstance) {
// // // // //       try {
// // // // //         const savedData = await editorInstance.save();
// // // // //         onSave(savedData); // Pass the saved data to parent component
// // // // //       } catch (error) {
// // // // //         console.error('Saving failed:', error);
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <div ref={editorRef} style={{ border: '1px solid #ccc', minHeight: '300px' }}></div>
// // // // //       <button onClick={handleSave}>Save Content</button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Editor;

// // // // "use client";
// // // // import React, { memo, useEffect, useRef, useState } from "react";
// // // // import EditorJS, { OutputData } from "@editorjs/editorjs";

// // // // // Import tools

// // // // import List from "@editorjs/list";
// // // // import axios from "axios";

// // // // const EDITOR_TOOLS = {
// // // //   header: {

// // // //     config: {
// // // //       levels: [1, 2, 3, 4, 5, 6],
// // // //       defaultLevel: 3,
// // // //     },
// // // //   },

// // // //   link: {

// // // //     config: {
// // // //       uploader: {
// // // //         uploadByUrl: (url: any) => {
// // // //           return fetch(
// // // //             `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
// // // //           )
// // // //             .then((response) => response.json())
// // // //             .then((data) => {
// // // //               if (data.contents) {
// // // //                 const parser = new DOMParser();
// // // //                 const doc = parser.parseFromString(data.contents, "text/html");
// // // //                 const title = doc.querySelector("title")?.textContent || "";
// // // //                 const description =
// // // //                   doc
// // // //                     .querySelector('meta[name="description"]')
// // // //                     ?.getAttribute("content") || "";

// // // //                 return {
// // // //                   success: 1,
// // // //                   link: url,
// // // //                   meta: {
// // // //                     title,
// // // //                     description,
// // // //                   },
// // // //                 };
// // // //               }
// // // //               throw new Error("Unable to fetch link data");
// // // //             });
// // // //         },
// // // //       },
// // // //     },
// // // //   },

// // // //   // image: ImageTool,

// // // //   // link: LinkTool,
// // // //   list: List,
// // // // };

// // // // type Props = {
// // // //   data?: OutputData;
// // // //   onChange(val: OutputData): void;
// // // //   holder: string;
// // // //   readOnly?: boolean;
// // // //   onWordCountChange(count: number): void;
// // // // };

// // // // const EditorBlock = ({
// // // //   data,
// // // //   onChange,
// // // //   onWordCountChange,
// // // //   holder,
// // // //   readOnly = false,
// // // // }: Props) => {
// // // //   const ref = useRef<EditorJS>();
// // // //   const [wordCount, setWordCount] = useState(0);

// // // //   useEffect(() => {
// // // //     if (!ref.current) {
// // // //       //console.log($&)
// // // //       const editor = new EditorJS({
// // // //         holder: holder,
// // // //         tools: EDITOR_TOOLS,
// // // //         data,
// // // //         readOnly: readOnly,
// // // //         onReady: () => {
// // // //           //console.log($&)
// // // //         },
// // // //         async onChange(api, event) {
// // // //           const data = await api.saver.save();
// // // //           //console.log($&)
// // // //           onChange(data);
// // // //           updateWordCount(data);
// // // //           //console.log($&)
// // // //         },
// // // //       });
// // // //       ref.current = editor;
// // // //     }
// // // //     return () => {
// // // //       if (ref.current && ref.current.destroy) {
// // // //         ref.current.destroy();
// // // //       }
// // // //     };
// // // //   }, []);

// // // //   const updateWordCount = (data: OutputData) => {
// // // //     let count = 0;
// // // //     data.blocks.forEach((block) => {
// // // //       if (block.type === "paragraph" || block.type === "header") {
// // // //         count += block.data.text.trim().split(/\s+/).length;
// // // //       } else if (block.type === "list") {
// // // //         block.data.items.forEach((item: string) => {
// // // //           count += item.trim().split(/\s+/).length;
// // // //         });
// // // //       }
// // // //     });
// // // //     setWordCount(count);
// // // //     onWordCountChange(count);
// // // //   };

// // // //   return (
// // // //     <div
// // // //       id={holder}
// // // //       className={`max-w-full prose ${readOnly ? "read-only" : ""}`}
// // // //     />
// // // //   );
// // // // };

// // // // export default memo(EditorBlock);

// // // "use client"
// // // import { useEffect, useRef } from 'react';
// // // import EditorJS from '@editorjs/editorjs';

// // // const Editor = ({ onSave, data }) => {
// // //   const editorRef = useRef(null);
// // //   const editorInstance = useRef(null);

// // //   useEffect(() => {
// // //     if (editorRef.current && !editorInstance.current) {
// // //       editorInstance.current = new EditorJS({
// // //         holder: editorRef.current,
// // //         data: data || {},  // Pass any preloaded data
// // //         onChange: () => {
// // //           if (onSave) {
// // //             editorInstance.current.save().then(onSave);
// // //           }
// // //         },
// // //         tools: {
// // //           header: {
// // //             class: require('@editorjs/header'),
// // //             inlineToolbar: ['bold', 'italic'],
// // //             config: {
// // //               placeholder: 'Enter a header',
// // //             },
// // //           },
// // //           list: {
// // //             class: require('@editorjs/list'),
// // //             inlineToolbar: true,
// // //           },
// // //         }
// // //       });
// // //     }

// // //     return () => {
// // //       if (editorInstance.current) {
// // //         editorInstance.current.destroy();
// // //         editorInstance.current = null;
// // //       }
// // //     };
// // //   }, []);

// // //   return <div ref={editorRef} style={{ border: '1px solid #ccc', padding: '10px' }}></div>;
// // // };

// // // export default Editor;

// // // import { useEffect, useRef } from 'react';
// // // import EditorJS from '@editorjs/editorjs';

// // // const Editor = ({ onSave, data }) => {
// // //   const editorRef = useRef(null);
// // //   const editorInstance = useRef(null);

// // //   useEffect(() => {
// // //     if (editorRef.current && !editorInstance.current) {
// // //       editorInstance.current = new EditorJS({
// // //         holder: editorRef.current,
// // //         data: data || {},  // Pass any preloaded data
// // //         onChange: () => {
// // //           if (onSave) {
// // //             editorInstance.current.save().then(onSave);
// // //           }
// // //         },
// // //         tools: {
// // //           header: {
// // //             class: require('@editorjs/header'),
// // //             inlineToolbar: ['bold', 'italic'],
// // //             config: {
// // //               placeholder: 'Enter a header',
// // //             },
// // //           },
// // //           list: {
// // //             class: require('@editorjs/list'),
// // //             inlineToolbar: true,
// // //           },
// // //           image: {
// // //             class: require('@editorjs/image'),
// // //             config: {
// // //               uploader: {
// // //                 uploadByFile(file) {
// // //                   return new Promise((resolve, reject) => {
// // //                     const formData = new FormData();
// // //                     formData.append('image', file);

// // //                     fetch('/api/upload', {
// // //                       method: 'POST',
// // //                       body: formData,
// // //                     })
// // //                       .then((res) => res.json())
// // //                       .then((data) => resolve({ success: 1, file: { url: data.url } }))
// // //                       .catch(reject);
// // //                   });
// // //                 },
// // //               },
// // //             },
// // //           },
// // //         },
// // //       });
// // //     }

// // //     return () => {
// // //       if (editorInstance.current) {
// // //         editorInstance.current.destroy();
// // //         editorInstance.current = null;
// // //       }
// // //     };
// // //   }, []);

// // //   return <div ref={editorRef} style={{ border: '1px solid #ccc', padding: '10px' }}></div>;
// // // };

// // // export default Editor;

// // "use client"; // Ensures this component runs only on the client

// // // import { useEffect, useRef } from 'react';

// // // // Dynamically import EditorJS and tools to disable SSR
// // // import dynamic from 'next/dynamic';

// // // // Dynamically import the tools for Editor.js
// // // const Header = dynamic(() => import('@editorjs/header'), { ssr: false });
// // // const List = dynamic(() => import('@editorjs/list'), { ssr: false });
// // // const Image = dynamic(() => import('@editorjs/image'), { ssr: false });

// // // const Editor = ({ onSave, data }) => {
// // //   const editorRef = useRef(null);
// // //   const editorInstance = useRef(null);

// // //   useEffect(() => {
// // //     // Ensure this runs only on the client side (window/document exist)
// // //     if (editorRef.current && !editorInstance.current) {
// // //       editorInstance.current = new EditorJS({
// // //         holder: editorRef.current,
// // //         data: data || {},  // Pass any preloaded data
// // //         onChange: () => {
// // //           if (onSave) {
// // //             editorInstance.current.save().then(onSave);
// // //           }
// // //         },
// // //         tools: {
// // //           header: {
// // //             class: Header,
// // //             inlineToolbar: ['bold', 'italic'],
// // //             config: {
// // //               placeholder: 'Enter a header',
// // //             },
// // //           },
// // //           list: {
// // //             class: List,
// // //             inlineToolbar: true,
// // //           },
// // //           image: {
// // //             class: Image,
// // //             config: {
// // //               uploader: {
// // //                 uploadByFile(file) {
// // //                   return new Promise((resolve, reject) => {
// // //                     const formData = new FormData();
// // //                     formData.append('image', file);

// // //                     fetch('/api/upload', {
// // //                       method: 'POST',
// // //                       body: formData,
// // //                     })
// // //                       .then((res) => res.json())
// // //                       .then((data) => resolve({ success: 1, file: { url: data.url } }))
// // //                       .catch(reject);
// // //                   });
// // //                 },
// // //               },
// // //             },
// // //           },
// // //         },
// // //       });
// // //     }

// // //     return () => {
// // //       if (editorInstance.current) {
// // //         editorInstance.current.destroy();
// // //         editorInstance.current = null;
// // //       }
// // //     };
// // //   }, [data, onSave]);

// // //   return <div ref={editorRef} style={{ border: '1px solid #ccc', padding: '10px' }}></div>;
// // // };

// // // export default Editor;
// // // Ensures this component runs only on the client

// // // import { useEffect, useRef } from 'react';
// // // import dynamic from 'next/dynamic';

// // // // Dynamically import EditorJS only (No tools here)
// // // import EditorJS from '@editorjs/editorjs';

// // // const Editor = ({ onSave, data }) => {
// // //   const editorRef = useRef(null);
// // //   const editorInstance = useRef(null);

// // //   useEffect(() => {
// // //     // Ensure this runs only on the client side (window/document exist)
// // //     if (editorRef.current && !editorInstance.current) {
// // //       const Header = require('@editorjs/header');
// // //       const List = require('@editorjs/list');
// // //       const Image = require('@editorjs/image');

// // //       editorInstance.current = new EditorJS({
// // //         holder: editorRef.current,
// // //         data: data || {},  // Pass any preloaded data
// // //         onChange: () => {
// // //           if (onSave) {
// // //             editorInstance.current.save().then(onSave);
// // //           }
// // //         },
// // //         tools: {
// // //           header: {
// // //             class: Header,
// // //             inlineToolbar: ['bold', 'italic'],
// // //             config: {
// // //               placeholder: 'Enter a header',
// // //             },
// // //           },
// // //           list: {
// // //             class: List,
// // //             inlineToolbar: true,
// // //           },
// // //           image: {
// // //             class: Image,
// // //             config: {
// // //               uploader: {
// // //                 uploadByFile(file) {
// // //                   return new Promise((resolve, reject) => {
// // //                     const formData = new FormData();
// // //                     formData.append('image', file);

// // //                     fetch('/api/upload', {
// // //                       method: 'POST',
// // //                       body: formData,
// // //                     })
// // //                       .then((res) => res.json())
// // //                       .then((data) => resolve({ success: 1, file: { url: data.url } }))
// // //                       .catch(reject);
// // //                   });
// // //                 },
// // //               },
// // //             },
// // //           },
// // //         },
// // //       });
// // //     }

// // //     return () => {
// // //       if (editorInstance.current) {
// // //         editorInstance.current.destroy();
// // //         editorInstance.current = null;
// // //       }
// // //     };
// // //   }, [data, onSave]);

// // //   return <div ref={editorRef} style={{ border: '1px solid #ccc', padding: '10px' }}></div>;
// // // };

// // // export default Editor;

// // // "use client"; // Ensures this component runs only on the client

// // // import { useEffect, useRef } from 'react';
// // // import dynamic from 'next/dynamic';

// // // // Dynamically import EditorJS only (No tools here)
// // // import EditorJS from '@editorjs/editorjs';

// // // const Editor = ({ onSave, data }) => {
// // //   const editorRef = useRef<HTMLDivElement>(null); // Typing for the editor container
// // //   const editorInstance = useRef<EditorJS | null>(null); // Typing for the editor instance

// // //   useEffect(() => {
// // //     if (editorRef.current && !editorInstance.current) {
// // //       const Header = require('@editorjs/header');
// // //       const List = require('@editorjs/list');
// // //       const Image = require('@editorjs/image');

// // //       // Initialize EditorJS only when the component is mounted
// // //       editorInstance.current = new EditorJS({
// // //         holder: editorRef.current,
// // //         data: data || {},  // Pass any preloaded data
// // //         onChange: () => {
// // //           if (onSave) {
// // //             editorInstance.current?.save().then(onSave);
// // //           }
// // //         },
// // //         tools: {
// // //           header: {
// // //             class: Header,
// // //             inlineToolbar: ['bold', 'italic'],
// // //             config: {
// // //               placeholder: 'Enter a header',
// // //             },
// // //           },
// // //           list: {
// // //             class: List,
// // //             inlineToolbar: true,
// // //           },
// // //           image: {
// // //             class: Image,
// // //             config: {
// // //               uploader: {
// // //                 uploadByFile(file) {
// // //                   return new Promise((resolve, reject) => {
// // //                     const formData = new FormData();
// // //                     formData.append('image', file);

// // //                     fetch('/api/upload', {
// // //                       method: 'POST',
// // //                       body: formData,
// // //                     })
// // //                       .then((res) => res.json())
// // //                       .then((data) => resolve({ success: 1, file: { url: data.url } }))
// // //                       .catch(reject);
// // //                   });
// // //                 },
// // //               },
// // //             },
// // //           },
// // //         },
// // //       });
// // //     }

// // //     return () => {
// // //       if (editorInstance.current) {
// // //         editorInstance.current.destroy();
// // //         editorInstance.current = null;
// // //       }
// // //     };
// // //   }, [data, onSave]);

// // //   return <div ref={editorRef} style={{ border: '1px solid #ccc', padding: '10px' }}></div>;
// // // };

// // // export default Editor;
// // // "use client"; // Ensures this component runs only on the client

// // // import { useEffect, useRef } from 'react';
// // // import dynamic from 'next/dynamic';

// // // // Dynamically import EditorJS only (No tools here)
// // // import EditorJS from '@editorjs/editorjs';

// // // const Editor = ({ onSave, data }) => {
// // //   const editorRef = useRef<HTMLDivElement>(null); // Typing for the editor container
// // //   const editorInstance = useRef<EditorJS | null>(null); // Typing for the editor instance

// // //   useEffect(() => {
// // //     // Initialize EditorJS only if editorRef is available and editorInstance is not yet initialized
// // //     if (editorRef.current && !editorInstance.current) {
// // //       const Header = require('@editorjs/header');
// // //       const List = require('@editorjs/list');
// // //       const Image = require('@editorjs/image');

// // //       // Initialize EditorJS
// // //       editorInstance.current = new EditorJS({
// // //         holder: editorRef.current,
// // //         data: data || {},  // Pass any preloaded data
// // //         onChange: () => {
// // //           if (onSave) {
// // //             editorInstance.current?.save().then(onSave);
// // //           }
// // //         },
// // //         tools: {
// // //           header: {
// // //             class: Header,
// // //             inlineToolbar: ['bold', 'italic'],
// // //             config: {
// // //               placeholder: 'Enter a header',
// // //             },
// // //           },
// // //           list: {
// // //             class: List,
// // //             inlineToolbar: true,
// // //           },
// // //           image: {
// // //             class: Image,
// // //             config: {
// // //               uploader: {
// // //                 uploadByFile(file) {
// // //                   return new Promise((resolve, reject) => {
// // //                     const formData = new FormData();
// // //                     formData.append('image', file);

// // //                     fetch('/api/upload', {
// // //                       method: 'POST',
// // //                       body: formData,
// // //                     })
// // //                       .then((res) => res.json())
// // //                       .then((data) => resolve({ success: 1, file: { url: data.url } }))
// // //                       .catch(reject);
// // //                   });
// // //                 },
// // //               },
// // //             },
// // //           },
// // //         },
// // //       });
// // //     }

// // //     // Cleanup the EditorJS instance when the component is unmounted or updated
// // //     return () => {
// // //       if (editorInstance.current) {
// // //         try {
// // //           // Ensure the editorInstance is a valid instance before destroying it
// // //           editorInstance.current.isReady
// // //             .then(() => {
// // //               editorInstance.current?.destroy();
// // //             })
// // //             .catch((error) => {
// // //               console.error('Error destroying the editor:', error);
// // //             });
// // //         } catch (error) {
// // //           console.error('Error during cleanup:', error);
// // //         } finally {
// // //           editorInstance.current = null;
// // //         }
// // //       }
// // //     };
// // //   }, [data, onSave]);

// // //   return <div ref={editorRef} style={{ border: '1px solid #ccc', padding: '10px' }}></div>;
// // // };

// // // export default Editor;

// // "use client"; // Ensures this component runs only on the client

// // import { useEffect, useRef } from 'react';

// // // Dynamically import EditorJS tools
// // import dynamic from 'next/dynamic';

// // import EditorJS from '@editorjs/editorjs';

// // const Editor = ({ onSave, data }: any) => {
// //   const editorRef = useRef<HTMLDivElement>(null); // Typing for the editor container
// //   const editorInstance = useRef<EditorJS | null>(null); // Typing for the editor instance

// //   useEffect(() => {
// //     // Initialize EditorJS only if editorRef is available and editorInstance is not yet initialized
// //     if (editorRef.current && !editorInstance.current) {
// //       const Header = require('@editorjs/header');
// //       const List = require('@editorjs/list');
// //       const Image = require('@editorjs/image');

// //       // Initialize EditorJS
// //       editorInstance.current = new EditorJS({
// //         holder: editorRef.current,
// //         data: data || {},  // Pass any preloaded data
// //         onChange: () => {
// //           if (onSave) {
// //             editorInstance.current?.save().then(onSave);
// //           }
// //         },
// //         tools: {
// //           header: {
// //             class: Header,
// //             inlineToolbar: ['bold', 'italic'],
// //             config: {
// //               placeholder: 'Enter a header',
// //             },
// //           },
// //           list: {
// //             class: List,
// //             inlineToolbar: true,
// //           },
// //           image: {
// //             class: Image,
// //             config: {
// //               uploader: {
// //                 uploadByFile(file: {
// //                   url: string, // assuming the URL is directly provided and we don't actually upload anything
// //                 },) {
// //                   return new Promise((resolve, reject) => {
// //                     const formData = new FormData();
// //                     // formData.append('image', file);

// //                     fetch('/api/upload', {
// //                       method: 'POST',
// //                       body: formData,
// //                     })
// //                       .then((res) => res.json())
// //                       .then((data) => resolve({ success: 1, file: { url: data.url } }))
// //                       .catch(reject);
// //                   });
// //                 },
// //               },
// //             },
// //           },
// //         },
// //       });
// //     }

// //     // Cleanup the EditorJS instance when the component is unmounted or updated
// //     return () => {
// //       if (editorInstance.current) {
// //         try {
// //           // Ensure the editorInstance is a valid instance before destroying it
// //           if (editorInstance.current instanceof EditorJS) {
// //             editorInstance.current.destroy().then(() => {
// //               console.log("EditorJS instance destroyed successfully.");
// //             }).catch((error) => {
// //               console.error("Error during destroying the editor:", error);
// //             });
// //           }
// //         } catch (error) {
// //           console.error("Error during cleanup:", error);
// //         } finally {
// //           editorInstance.current = null;
// //         }
// //       }
// //     };
// //   }, [data, onSave]);

// //   return <div ref={editorRef} style={{ border: '1px solid #ccc', padding: '10px' }}></div>;
// // };

// // export default Editor;
// "use client"

// import React, { useEffect, useRef } from 'react';
// import Quill from 'quill';  // Make sure to install the 'quill' package

// const Editor = () => {
//   // Specify the type of editorInstance as Quill or null
//   const editorRef = useRef<HTMLDivElement>(null);
//   const editorInstance = useRef<Quill | null>(null);

//   useEffect(() => {
//     if (editorRef.current) {
//       // Initialize Quill editor on the div container
//       editorInstance.current = new Quill(editorRef.current, {
//         theme: 'snow',  // You can choose a different theme
//         modules: {
//           toolbar: [
//             [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
//             [{ 'list': 'ordered' }, { 'list': 'bullet' }],
//             [{ 'align': [] }],
//             ['bold', 'italic', 'underline'],
//             ['link'],
//             ['image'],
//             ['clean']  // to add clean button
//           ],
//         },
//       });
//     }

//     return () => {
//       // Clean up Quill instance on unmount
//       if (editorInstance.current) {
//         editorInstance.current = null;  // Nullify the reference when the component unmounts
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <div ref={editorRef}></div>
//     </div>
//   );
// };

// export default Editor;
"use client";

// import React, { useEffect, useRef, useState } from 'react'
// import EditorJS from '@editorjs/editorjs'
// import Header from '@editorjs/header'
// import List from '@editorjs/list'

// interface EditorProps {
//   data?: any
//   onChange?: (data: any) => void
// }

// const DEFAULT_INITIAL_DATA = {
//   "time": new Date().getTime(),
//   "blocks": [
//     {
//       "type": "header",
//       "data": {
//         "text": "Welcome to Editor.js",
//         "level": 1
//       }
//     },
//     {
//       "type": "paragraph",
//       "data": {
//         "text": "Start writing your content here..."
//       }
//     }
//   ]
// }

// const Editor: React.FC<EditorProps> = ({ data = DEFAULT_INITIAL_DATA, onChange }) => {
//   const editorRef = useRef<EditorJS | null>(null)
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setIsMounted(true)
//     }
//   }, [])

//   useEffect(() => {
//     if (!isMounted) {
//       return
//     }

//     editorRef.current = new EditorJS({
//       holder: 'editorjs',
//       tools: {
//         header: Header,
//         list: List
//       },
//       data: data,
//       async onChange(api) {
//         const handleEditorChange = await api.saver.save()
//         onChange && onChange(handleEditorChange)
//       },
//     })

//     return () => {
//       if (editorRef.current && editorRef.current.destroy) {
//         editorRef.current.destroy()
//       }
//     }
//   }, [isMounted])

//   return (
//     <div id="editorjs" className=" max-w-full bg-neutral " />
//   )
// }

// export default Editor

// components/Editor.tsx

// import React, { useEffect, useRef, useState } from 'react';
// import EditorJS from '@editorjs/editorjs';
// import Header from '@editorjs/header';
// import List from '@editorjs/list';

// interface EditorProps {
//   data?: any;
//   onChange?: (data: any) => void;
// }

// const DEFAULT_INITIAL_DATA = {
//   time: new Date().getTime(),

//     "blocks": [
//       {
//         "type": "header",
//         "data": { "text": "Header text", "level": 1 }
//       },
//       {
//         "type": "paragraph",
//         "data": { "text": "Paragraph text" }
//       },
//       { type: 'list',
//         data: {
//           style: 'ordered', // 'ordered' or 'unordered'
//           items: [
//             'Right to Deletion.',
//             'Request for Deletion.',
//             'Timeline for Deletion.',
//             'Consequences of Deletion.',
//             'Exceptions to Data Deletion.',
//             'Changes to This Policy.'
//           ]
//         }
//         // "type": "list",
//         // "data": { "items": ["List item 1", "List item 2"] }

//       }
//     ],
//   };

// const Editor: React.FC<EditorProps> = ({ data = DEFAULT_INITIAL_DATA, onChange }) => {
//   const editorRef = useRef<EditorJS | null>(null);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setIsMounted(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isMounted) {
//       return;
//     }

//     // editorRef.current = new EditorJS({
//     //   holder: 'editorjs',
//     //   tools: {
//     //     header: Header,
//     //     list: List,
//     //   },
//     //   data: data,
//     //   async onChange(api) {
//     //     const handleEditorChange = await api.saver.save();
//     //     onChange && onChange(handleEditorChange);
//     //   },
//     // });
//     editorRef.current = new EditorJS({
//       holder: 'editorjs',
//       tools: {
//         header: Header,
//         list: List,  // Ensure that the List plugin is correctly imported and registered
//       },
//       data: data,
//       async onChange(api) {
//         const handleEditorChange = await api.saver.save();
//         onChange && onChange(handleEditorChange);
//       },
//     });

//     return () => {
//       if (editorRef.current && editorRef.current.destroy) {
//         editorRef.current.destroy();
//       }
//     };
//   }, [isMounted]);

//   return <div id="editorjs" className="max-w-full bg-neutral" />;
// };

// export default Editor;

// import React, { useEffect, useRef, useState } from 'react';
// import EditorJS from '@editorjs/editorjs';
// import Header from '@editorjs/header';
// import List from '@editorjs/list';
// import Paragraph from '@editorjs/paragraph'; // Importing the paragraph tool

// interface EditorProps {
//   data?: any;
//   onChange?: (data: any) => void;
// }

// const DEFAULT_INITIAL_DATA = {
//   time: new Date().getTime(),
//   blocks: [
//     {
//       type: 'header',
//       data: { text: 'Header Text', level: 1 },
//     },
//     {
//       type: 'paragraph',
//       data: { text: 'This is a sample paragraph.' },
//     },
//     {
//       type: 'list',
//       data: {
//         style: 'ordered',
//         items: ['Item 1', 'Item 2', 'Item 3'],
//       },
//     },
//   ],
// };

// const Editor: React.FC<EditorProps> = ({ data = DEFAULT_INITIAL_DATA, onChange }) => {
//   const editorRef = useRef<EditorJS | null>(null);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setIsMounted(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;

//     editorRef.current = new EditorJS({
//       holder: 'editorjs',
//       tools: {
//         header: Header,
//         list: List,
//         paragraph: {
//           // class: Paragraph, // The paragraph tool
//           inlineToolbar: ['bold', 'italic', 'underline'], // Enable inline toolbar for text styling
//         },
//       },
//       data: data,
//       async onChange(api) {
//         const handleEditorChange = await api.saver.save();
//         onChange && onChange(handleEditorChange);
//       },
//     });

//     return () => {
//       if (editorRef.current && editorRef.current.destroy) {
//         editorRef.current.destroy();
//       }
//     };
//   }, [isMounted]);

//   return <div id="editorjs" className="max-w-full bg-neutral p-4 rounded" />;
// };

// export default Editor;

// import React, { useEffect, useRef, useState } from 'react';
// import EditorJS from '@editorjs/editorjs';
// import Header from '@editorjs/header';
// import List from '@editorjs/list';

// interface EditorProps {
//   data?: any;
//   onChange?: (data: any) => void;
// }

// const DEFAULT_INITIAL_DATA = {
//   time: new Date().getTime(),
//   blocks: [
//     {
//       type: 'header',
//       data: { text: 'Header text', level: 1 },
//     },
//     {
//       type: 'paragraph',
//       data: { text: 'Paragraph text' },
//     },
//     {
//       type: 'list',
//       data: {
//         style: 'ordered', // ordered or unordered list
//         items: [
//           'Right to Deletion.',
//           'Request for Deletion.',
//           'Timeline for Deletion.',
//           'Consequences of Deletion.',
//           'Exceptions to Data Deletion.',
//           'Changes to This Policy.',
//         ],
//       },
//     },
//   ],
// };

// const Editor: React.FC<EditorProps> = ({ data = DEFAULT_INITIAL_DATA, onChange }) => {
//   const editorRef = useRef<EditorJS | null>(null);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       setIsMounted(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isMounted) {
//       return;
//     }

//     editorRef.current = new EditorJS({
//       holder: 'editorjs',
//       tools: {
//         header: Header,
//         list: List,
//       },
//       data: data,
//       async onChange(api) {
//         const handleEditorChange = await api.saver.save();
//         onChange && onChange(handleEditorChange);
//       },
//     });

//     return () => {
//       if (editorRef.current && editorRef.current.destroy) {
//         editorRef.current.destroy();
//       }
//     };
//   }, [isMounted]);

//   return <div id="editorjs" className="max-w-full bg-neutral" />;
// };

// export default Editor;

// const Editor: React.FC<EditorProps> = ({ data = DEFAULT_INITIAL_DATA, onChange }) => {
//   const editorRef = useRef<EditorJS | null>(null);
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       setIsMounted(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isMounted) return;

//     editorRef.current = new EditorJS({
//       holder: "editorjs",
//       tools: {
//         header: Header,
//         list: List,
//       },
//       data,
//       async onChange(api) {
//         const updatedData = await api.saver.save();
//         onChange && onChange(updatedData);
//       },
//     });

//     return () => {
//       editorRef.current?.destroy();
//     };
//   }, [isMounted]);

//   return <div id="editorjs" className="max-w-full bg-neutral" />;
// };
"use client";

import React, { useEffect, useRef, useState } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs"; // Import OutputData from editorjs
import Header from "@editorjs/header";
import List from "@editorjs/list";
interface EditorProps {
  data?: OutputData; // Use OutputData from EditorJS instead of your custom EditorData type
  onChange?: (data: OutputData) => void; // Expect OutputData in the onChange callback
}
const DEFAULT_INITIAL_DATA: OutputData = {
  time: new Date().getTime(),
  blocks: [
    { type: "header", data: { text: "Header text", level: 1 } },
    { type: "paragraph", data: { text: "Paragraph text" } },
    {
      type: "list",
      data: {
        style: "ordered",
        items: ["Sample Item 1", "Sample Item 2"],
      },
    },
  ],
};
const Editor: React.FC<EditorProps> = ({
  data = DEFAULT_INITIAL_DATA,
  onChange,
}) => {
  const editorRef = useRef<EditorJS | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);
  useEffect(() => {
    if (!isMounted) return;
    editorRef.current = new EditorJS({
      holder: "editorjs",
      tools: {
        header: Header,
        list: List,
      },
      data,
      onChange: async (api) => {
        // EditorJS expects this callback
        const updatedData: OutputData = await api.saver.save(); // Return OutputData
        if (onChange) {
          onChange(updatedData); // Pass updated OutputData to parent
        }
      },
    });
    return () => {
      editorRef.current?.destroy();
    };
  }, [isMounted]);
  return <div id="editorjs" className="max-w-full bg-neutral" />;
};
export default Editor;
