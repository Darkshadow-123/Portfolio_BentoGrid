




export function ContactSection ()  {
  return (
    <div className="text-center text-white p-4 w-full">
      <h2 className="text-2xl font-bold">Contact Me</h2>
      <p>Email: youremail@example.com</p>
      <form className="mt-4 flex flex-col gap-2 w-full max-w-sm mx-auto">
        <input type="text" placeholder="Your Name" className="p-2 rounded text-white" />
        <input type="email" placeholder="Your Email" className="p-2 rounded text-white" />
        <textarea placeholder="Message" className="p-2 rounded text-white"></textarea>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Send</button>
      </form>
    </div>
  );
}
