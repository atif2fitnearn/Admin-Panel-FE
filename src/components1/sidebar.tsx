

// "use client";

// import Link from "next/link";
// import { useState } from "react";

// export function Sidebar() {
//   // Define state to keep track of the active link
//   const [activeLink, setActiveLink] = useState(""); // Default active link

//   const menuItems = [
//     { title: "Landing page", href: "/" },
//     { title: "About Us", href: "/aboutus" },
//     { title: "Data Protection Policy", href: "/datadeletion" },
//     { title: "Privacy Policy", href: "/privacypolicy" },
//     { title: "Terms and Conditions", href: "/terms" },
//     { title: "Returns & Refund Policy", href: "/returnrefund" },
//   ];

//   return (
// //     <div className="w-270 h-343 ml-0 bg-neutral-900 pt-4">
     
// //       <div className="border-2 border-white-600 rounded-lg p-4 bg-[#1e1e1e]">
// //         <nav className="space-y-2 space-x-0">
// //           {menuItems.map((item) => (
// //             <Link
// //               key={item.href}
// //               href={item.href}
// //               className={`block px-4 py-2 text-sm rounded-md transition-all ${
// //                 activeLink === item.href
// //                   ? "bg-white text-black font-medium" // Active link style
// //                   : "text-gray-400 hover:bg-neutral-800 hover:text-white" // Hover and inactive link style
// //               }`}
// //               onClick={() => setActiveLink(item.href)} // Set active link when clicked
// //             >
// //               {item.title}
// //             </Link>
// //           ))}
// //         </nav>
// //       </div>
// //     </div>
// <div className="w-270 h-343 ml-0 bg-neutral-900 pt-4">
//   <div className="border-2 border-l-0 border-white-700 rounded-tr-lg rounded-br-lg p-4 bg-[#1e1e1e]">
//     <nav className="space-y-2 space-x-0">
//       {menuItems.map((item) => (
//         <Link
//           key={item.href}
//           href={item.href}
//           className={`block px-4 py-2 text-sm rounded-md transition-all ${
//             activeLink === item.href
//               ? "bg-white text-black font-medium" // Active link style
//               : "text-gray-400 hover:bg-neutral-800 hover:text-white" // Hover and inactive link style
//           }`}
//           onClick={() => setActiveLink(item.href)} // Set active link when clicked
//         >
//           {item.title}
//         </Link>
//       ))}
//     </nav>
//   </div>
// </div>

//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Sidebar() {
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(window.location.pathname); // Set the current path
  }, []);

  const menuItems = [
    { title: "Landing page", href: "/" },
    { title: "About Us", href: "/aboutus" },
    { title: "Data Protection Policy", href: "/datadeletion" },
    { title: "Privacy Policy", href: "/privacypolicy" },
    { title: "Terms and Conditions", href: "/terms" },
    { title: "Returns & Refund Policy", href: "/returnrefund" },
  ];

  return (
    <div className="w-270 h-343 ml-0 bg-neutral-900 pt-4">
      <div className="border-2 border-l-0 border-white-700 rounded-tr-lg rounded-br-lg p-4 bg-[#1e1e1e]">
        <nav className="space-y-2 space-x-0">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 text-sm rounded-md transition-all ${
                currentPath === item.href
                  ? "bg-neutral-700 text-white font-medium" // Active link style
                  : "text-gray-400 hover:bg-neutral-800 hover:text-white" // Hover and inactive link style
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
