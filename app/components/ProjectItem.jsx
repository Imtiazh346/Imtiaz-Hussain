// "use client";
// import React from "react";
// import Link from "next/link";
// import Image from "next/image";

// const ProjectItem = ({ title, backgroundImg, projectUrl }) => {
//   return (
//     <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group bg-gradient-to-t from-[#fc9b4b] to-[#f5c096]">
//       <Image
//         src={backgroundImg}
//         alt={title}
//         className="rounded-xl group-hover:opacity-10"
//       />
//       <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
//         <h3 className="tracking-wide text-2xl text-center text-white">
//           {title}
//         </h3>
//         <p className="pb-4 pt-2 text-white text-center">WordPress</p>
//         <Link href={projectUrl}>
//           <p className="text-center text-gray-700 bg-white font-bold cursor-pointer py-2 rounded-lg">
//             Visit Site
//           </p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProjectItem;
