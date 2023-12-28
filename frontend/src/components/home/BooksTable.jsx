import { MdDelete } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <thead className="bg-blue-500 text-white">
        <tr>
          <th className="py-3 px-4">#</th>
          <th className="py-3 px-4">Title</th>
          <th className="py-3 px-4">Author</th>
          <th className="py-3 px-4">Publish Year</th>
          <th className="py-3 px-4">Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr
            key={index}
            className={
              index % 2 === 0
                ? "bg-gray-100"
                : "bg-white transition-all duration-300 hover:shadow-md"
            }
          >
            <td className="py-4 px-6">{index + 1}</td>
            <td className="py-4 px-6">{book.title}</td>
            <td className="py-4 px-6">{book.author}</td>
            <td className="py-4 px-6">{book.publishYear}</td>
            <td className="py-4 px-6">
              <div className="flex justify-center gap-x-4">
                <Link to={`books/details/${book._id}`}>
                  <BsInfoCircle className="text-red-500 cursor-pointer transition-all duration-300 hover:scale-110" />
                </Link>

                <Link to={`books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-red-500 cursor-pointer transition-all duration-300 hover:scale-110" />
                </Link>

                <Link to={`books/delete/${book._id}`}>
                  <MdDelete className="text-red-500 cursor-pointer transition-all duration-300 hover:scale-110" />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BooksTable;
