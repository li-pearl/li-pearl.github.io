// import React from "react";
// import { Link } from "react-router-dom";
// import { blogIndex } from "../data/blogIndex";

// export default function Blog() {
//   return (
//     <section className="text-gray-400 bg-gray-900 body-font">
//       <div className="container px-5 py-10 mx-auto">
//         <div className="text-center mb-12">
//           <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
//             Blog
//           </h1>
//           <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
//             Thoughts, projects, and reflections
//           </p>
//         </div>

//         {blogIndex.length === 0 ? (
//           <p className="text-center text-gray-500">No articles available yet — check back soon!</p>
//         ) : (
//           <div className="flex flex-wrap -m-4">
//             {blogIndex.map((post) => (
//               <Link
//                 to={`/blog/${post.slug}`}
//                 key={post.slug}
//                 className="p-4 md:w-1/2 w-full"
//               >
//                 <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded-xl hover:shadow-xl transition">
//                   <h2 className="text-white text-2xl font-bold mb-2">{post.title}</h2>
//                   <p className="text-green-400 text-sm mb-2">{post.date}</p>
//                   <p className="leading-relaxed text-base">{post.description}</p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
