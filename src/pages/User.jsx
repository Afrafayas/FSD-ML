import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching user:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-blue-500 text-lg font-semibold animate-pulse">
          Loading user {id} data...
        </p>
      </div>
    );
  }

  if (!user || !user.id) {
    return (
      <div className="text-center mt-10 text-red-500 font-semibold">
        User not found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">👤 User Profile(ID : {id}) </h1>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Name:</span> {user.name}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Email:</span> {user.email}
      </p>
      <p className="text-gray-700">
        <span className="font-semibold">Phone:</span> {user.phone}
      </p>
    </div>
  );
}

export default User;
