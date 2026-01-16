function Header() {
  return (
    <div>
      <div id="home" className="mx-auto" style={{ maxWidth: "1564px" }}>
      <div
      className="relative mx-auto"
      style={{ maxWidth: "1500px" }}
    >
      {/* Background Image */}
      <img
        src="https://www.w3schools.com/w3images/architect.jpg"
        alt="Architecture"
        className="w-full object-cover"
      />


      <div className="absolute inset-0 flex items-center justify-center mt-8 text-center">
        <h1 className="text-5xl font-bold">
          <span className="bg-black bg-opacity-80 px-4 py-1 text-white">
            <b>BR</b>
          </span>{" "}
          <span className="hidden sm:inline text-gray-300">Architects</span>
        </h1>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Header;
