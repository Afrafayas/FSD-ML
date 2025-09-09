function About() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">ℹ️ About Page</h1>
      <p className="text-gray-600 leading-relaxed">
        This is a simple <span className="font-semibold text-blue-600">React application</span> 
        built with <span className="font-semibold text-green-600">React Router</span>. 
        It demonstrates <span className="italic">navigation, routing</span>, and 
        fetching data from an API.
      </p>
    </div>
  );
}

export default About;
