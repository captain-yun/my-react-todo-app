import { FiEdit2, FiTrash2 } from 'react-icons/fi';

function TodoItem({ title, completed }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-4 my-2 rounded-lg shadow-md">
      <span className={`flex-grow ${completed ? 'line-through' : ''}`}>
        {title}
      </span>
      <div className="flex space-x-2">
        <button className="p-2 rounded-full shadow-md transition duration-300 bg-orange-500 hover:bg-orange-600 text-white">
          <FiEdit2 />
        </button>
        <button className="p-2 rounded-full shadow-md transition duration-300 bg-red-500 hover:bg-red-600 text-white">
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
