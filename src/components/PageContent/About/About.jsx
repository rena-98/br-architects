function About() {
    const team = [
      {
        name: "John Doe",
        role: "CEO & Founder",
        img: "https://www.w3schools.com/w3images/team1.jpg",
      },
      {
        name: "Jane Doe",
        role: "Architect",
        img: "https://www.w3schools.com/w3images/team1.jpg",
      },
      {
        name: "Mike Ross",
        role: "Architect",
        img: "https://www.w3schools.com/w3images/team1.jpg",
      },
      {
        name: "Dan Star",
        role: "Architect",
        img: "https://www.w3schools.com/w3images/team1.jpg",
      },
    ];
  
    return (
      <section id="about" className="max-w-7xl mx-auto px-6 py-16">
        {/* Title */}
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-4 mb-6">
          About
        </h2>
  
        {/* Description */}
        <p className="text-gray-700 mb-12 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
          in culpa qui officia deserunt mollit anim id est laborum consectetur
          adipiscing elit.
        </p>
  
        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 grayscale">
          {team.map((member, index) => (
            <div key={index}>
              <img
                src={member.img}
                alt={member.name}
                className="w-full mb-4"
              />
  
              <h3 className="text-xl font-semibold">{member.name}</h3>
  
              <p className="text-gray-500 mb-2">{member.role}</p>
  
              <p className="text-gray-700 mb-4 text-sm">
                Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
                sodales pellentesque elementum.
              </p>
  
              <button className="w-full bg-gray-200 hover:bg-gray-300 py-2 transition">
                Contact
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default About;
  