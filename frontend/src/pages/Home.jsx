import { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((response) => {
        setBooks(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;

// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { MdDelete } from "react-icons/md";
// import { RiFileAddLine } from "react-icons/ri";
// import { Link } from 'react-router-dom';
// import Spinner from '../components/Spinner';

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios.get('http://localhost:3000/books')
//       .then((response) => {
//         setBooks(response.data.data);
//         console.log(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       })
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen font-sans">
//       <div className="bg-blue-500 text-white py-6">
//         <div className="container mx-auto flex items-center justify-between">
//           <h1 className="text-3xl font-semibold">Books List</h1>
//           <Link to="/books/create" className="text-xl hover:underline">Add Book</Link>
//         </div>
//       </div>

//       <div className="container mx-auto mt-8">
//         {loading ? (
//           <Spinner />
//         ) : (
//           <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
//             <thead className="bg-blue-500 text-white">
//               <tr>
//                 <th className="py-3 px-4">#</th>
//                 <th className="py-3 px-4">Title</th>
//                 <th className="py-3 px-4">Author</th>
//                 <th className="py-3 px-4">Publish Year</th>
//                 <th className="py-3 px-4">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {books.map((book, index) => (
//                 <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white transition-all duration-300 hover:shadow-md'}>
//                   <td className="py-3 px-4">{index + 1}</td>
//                   <td className="py-3 px-4">{book.title}</td>
//                   <td className="py-3 px-4">{book.author}</td>
//                   <td className="py-3 px-4">{book.publishYear}</td>
//                   <td className="py-3 px-4">
//                     <MdDelete className="text-red-500 cursor-pointer transition-all duration-300 hover:scale-110" />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useEffect } from "react";
// import axios from 'axios';
// import { MdDelete } from "react-icons/md";
// import { RiFileAddLine } from "react-icons/ri";
// import { Link } from 'react-router-dom';
// import Spinner from '../components/Spinner';

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios.get('http://localhost:3000/books')
//       .then((response) => {
//         setBooks(response.data.data);
//         console.log(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       })
//   }, []);

//   return (
//     <div className="bg-gray-100 min-h-screen font-sans">
//       <div className="bg-blue-500 text-white py-6">
//         <div className="container mx-auto flex items-center justify-between">
//           <h1 className="text-3xl font-bold">Books List</h1>
//           <Link to="/books/create" className="text-xl hover:underline">Add Book</Link>
//         </div>
//       </div>

//       <div className="container mx-auto mt-8">
//         {loading ? (
//           <Spinner />
//         ) : (
//           <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="py-3 px-4">No</th>
//                 <th className="py-3 px-4">Title</th>
//                 <th className="py-3 px-4">Author</th>
//                 <th className="py-3 px-4">Publish Year</th>
//                 <th className="py-3 px-4">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {books.map((book, index) => (
//                 <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white transition-all duration-300 hover:shadow-md'}>
//                   <td className="py-3 px-4">{index + 1}</td>
//                   <td className="py-3 px-4">{book.title}</td>
//                   <td className="py-3 px-4">{book.author}</td>
//                   <td className="py-3 px-4">{book.publishYear}</td>
//                   <td className="py-3 px-4">
//                     <MdDelete className="text-red-500 cursor-pointer transition-all duration-300 hover:scale-110" />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;

// import { useState, useEffect } from "react";
// import axios from 'axios';
// import { MdDelete } from "react-icons/md";
// import { RiFileAddLine } from "react-icons/ri";
// import { Link } from 'react-router-dom';
// import Spinner from '../components/Spinner';

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios.get('http://localhost:3000/books')
//       .then((response) => {
//         setBooks(response.data.data);
//         console.log(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       })
//   }, []);

//   return (
//     <div className="bg-slate-600 h-screen w-screen p-4">
//       <div className="flex items-center justify-between">
//         <h1 className="text-white text-3xl my-10 shadow-lg shadow-orange-200 rounded-lg ml-4 animate__animated animate__fadeInDown">Books List</h1>
//         <div className="mr-4 bg-green-700 shadow-lg shadow-orange-200 rounded-lg transform hover:scale-110 transition-transform">
//           <Link to={`/books/create`}>
//             <RiFileAddLine className="text-4xl text-white p-2 hover:bg-green-800 rounded-full" />
//           </Link>
//         </div>
//       </div>

//       {/* Container for the table */}
//       <div className="mt-4 overflow-x-auto">
//         {
//           loading ? (
//             <Spinner />
//           ) : (
//             <table className="w-full bg-white border border-gray-300 rounded-lg shadow-lg">
//               <thead className="bg-gray-800 text-white">
//                 <tr>
//                   <th className="py-2 px-4">#</th>
//                   <th className="py-2 px-4">Title</th>
//                   <th className="py-2 px-4">Author</th>
//                   <th className="py-2 px-4">Publish Year</th>
//                   <th className="py-2 px-4">Operations</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {books.map((book, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white transition-all duration-300 hover:shadow-md'}>
//                     <td className="py-2 px-4">{index + 1}</td>
//                     <td className="py-2 px-4">{book.title}</td>
//                     <td className="py-2 px-4">{book.author}</td>
//                     <td className="py-2 px-4">{book.publishYear}</td>
//                     <td className="py-2 px-4">
//                       <MdDelete className="text-red-500 cursor-pointer transition-all duration-300 hover:scale-110" />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )
//         }
//       </div>
//     </div>
//   );
// }

// export default Home;

// import { useState, useEffect } from "react";
// import axios from 'axios';
// import { MdDelete } from "react-icons/md";
// import { RiFileAddLine } from "react-icons/ri";
// import { Link } from 'react-router-dom';
// import Spinner from '../components/Spinner';

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios.get('http://localhost:3000/books')
//       .then((response) => {
//         setBooks(response.data.data);
//         console.log(response.data.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       })
//   }, []);

//   return (
//     <div className="bg-slate-600 h-screen w-screen p-4">
//       <div className="flex items-center justify-between">
//         <h1 className="text-white text-3xl my-10 shadow-lg shadow-orange-200 rounded-lg ml-4">Books List</h1>
//         <div className="mr-4 bg-green-700 shadow-lg shadow-orange-200 rounded-lg">
//           <Link to={`/books/create`}>
//             <RiFileAddLine className="text-4xl" />
//           </Link>
//         </div>
//       </div>

//       {/* Container for the table */}
//       <div className="mt-4">
//         {
//           loading ? (
//             <Spinner />
//           ) : (
//             <table className="w-full bg-white border border-gray-300">
//               <thead className="bg-gray-800 text-white">
//                 <tr>
//                   <th className="py-2 px-4">#</th>
//                   <th className="py-2 px-4">Title</th>
//                   <th className="py-2 px-4">Author</th>
//                   <th className="py-2 px-4">Publish Year</th>
//                   <th className="py-2 px-4">Operations</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {books.map((book, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
//                     <td className="py-2 px-4">{index + 1}</td>
//                     <td className="py-2 px-4">{book.title}</td>
//                     <td className="py-2 px-4">{book.author}</td>
//                     <td className="py-2 px-4">{book.publishYear}</td>
//                     <td className="py-2 px-4">
//                       <MdDelete className="text-red-500 cursor-pointer" />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )
//         }
//       </div>
//     </div>
//   );
// }

// export default Home;

// import { useState, useEffect } from "react"
// import axios from 'axios'
// import { MdDelete } from "react-icons/md";
// import { RiFileAddLine } from "react-icons/ri";
// import {Link} from 'react-router-dom'
// import Spinner from '../components/Spinner'

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     axios.get('http://localhost:3000/books')
//     .then((response) => {
//       setBooks(response.data.data)
//       console.log(response.data.data)
//       setLoading(false)
//     })
//     .catch((error) => {
//       console.log(error);
//       setLoading(false);
//     })
//   }, [])
//   return (
//     <div className="bg-slate-600 h-screen w-screen p-4">
//      <div className="flex items-center justify-between w-full">
//         <h1 className="text-white text-3xl my-10 shadow-lg shadow-orange-200 rounded-lg ml-4">Books List</h1>
//         <div className="mr-4 bg-green-700 shadow-lg shadow-orange-200 rounded-lg">
//           <Link to={`/books/create`}>
//           <RiFileAddLine className="text-4xl" />
//           </Link>
//         </div>
//         {
//           loading ? (
//             <Spinner />
//           ) : (
//             <table className="w-full mt-4 bg-white border border-gray-300">
//             <thead className="bg-gray-800 text-white">
//               <tr>
//                 <th className="py-2 px-4">#</th>
//                 <th className="py-2 px-4">Title</th>
//                 <th className="py-2 px-4">Author</th>
//                 <th className="py-2 px-4">Publish Year</th>
//                 <th className="py-2 px-4">Operations</th>
//               </tr>
//             </thead>
//             <tbody>
//                 {books.map((book, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
//                     <td className="py-2 px-4 ml-2">{index + 1}</td>
//                     <td className="py-2 px-4">{book.title}</td>
//                     <td className="py-2 px-4">{book.author}</td>
//                     <td className="py-2 px-4">{book.publishYear}</td>
//                     <td className="py-2 px-4">
//                       <MdDelete className="text-red-500 cursor-pointer" />
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )
//         }

//      </div>
//     </div>
//   )
// }

// export default Home
