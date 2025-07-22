// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ReactMarkdown from "react-markdown";
// import matter from "gray-matter";

// export default function PostPage() {
//   const { slug } = useParams();
//   const [content, setContent] = useState("");
//   const [meta, setMeta] = useState({});

//   useEffect(() => {
//     import(`../articles/${slug}.md`)
//       .then((res) => fetch(res.default))
//       .then((r) => r.text())
//       .then((text) => {
//         const { data, content } = matter(text);
//         setMeta(data);
//         setContent(content);
//       });
//   }, [slug]);

//   return (
//     <section className="text-gray-400 bg-gray-900 body-font min-h-screen">
//       <div className="container px-5 py-10 mx-auto max-w-3xl">
//         <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-600 mb-4">
//           {meta.title}
//         </h1>
//         <p className="text-sm text-gray-500 mb-10">{meta.date}</p>
//         <div className="prose prose-invert max-w-none">
//           <ReactMarkdown>{content}</ReactMarkdown>
//         </div>
//       </div>
//     </section>
//   );
// }
