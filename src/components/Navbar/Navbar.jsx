function Navbar() {
    return (
        <div className="fixed top-0 w-full bg-white flex items-center justify-between px-6 py-4 shadow-md z-50">
        {/* Logo */}
        <a href="#home" className="text-lg font-semibold tracking-wide">
          <b>BR</b> Architects
        </a>
  
        {/* Links (desktop only) */}
        <div className="hidden md:flex gap-6">
          <a href="#projects" className="hover:text-gray-600 transition">
            Projects
          </a>
          <a href="#about" className="hover:text-gray-600 transition">
            About
          </a>
          <a href="#contact" className="hover:text-gray-600 transition">
            Contact
          </a>
        </div>
      </div>
    );
  }
  
  export default Navbar;