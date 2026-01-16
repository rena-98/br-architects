function Projects() {
    const projects = [
      { title: "Summer", img: "https://www.w3schools.com/w3images/house5.jpg" },
      { title: "Brick House", img: "https://www.w3schools.com/w3images/house2.jpg" },
      { title: "Renovated", img: "https://www.w3schools.com/w3images/house3.jpg" },
      { title: "Barn House", img: "https://www.w3schools.com/w3images/house4.jpg" },
      { title: "Summer", img: "https://www.w3schools.com/w3images/house5.jpg" },
      { title: "Brick House", img: "https://www.w3schools.com/w3images/house4.jpg" },
      { title: "Renovated", img: "https://www.w3schools.com/w3images/house3.jpg" },
      { title: "Barn House", img: "https://www.w3schools.com/w3images/house3.jpg" },
    ];
  
    return (
      <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
        {/* Title */}
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-4 mb-10">
          Projects
        </h2>
  
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((item, index) => (
            <div key={index} className="relative">
              {/* Label */}
              <div className="absolute top-0 left-0 bg-black text-white px-4 py-2 text-sm">
                {item.title}
              </div>
  
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Projects;
  