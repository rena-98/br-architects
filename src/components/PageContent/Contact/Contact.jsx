function Contact() {
    return (
      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        {/* Title */}
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-4 mb-4">
          Contact
        </h2>
  
        <p className="mb-8 text-gray-700">
          Lets get in touch and talk about your next project
        </p>
  
        {/* Form */}
        <form action="/action_page.php" target="_blank" className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
  
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
  
          <input
            type="text"
            placeholder="Subject"
            required
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
  
          <input
            type="text"
            placeholder="Comment"
            required
            className="w-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
          />
  
          <button
            type="submit"
            className="flex items-center gap-2 bg-black text-white px-6 py-2 hover:bg-gray-800 transition"
          >
            <i className="fa fa-paper-plane"></i>
            SEND MESSAGE
          </button>
        </form>
  
        {/* Map Image */}
        <img
          src="https://www.w3schools.com/w3images/map.jpg"
          alt="Map"
          className="w-full mt-16"
        />
      </section>
    );
  }
  
  export default Contact;
  