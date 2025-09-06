export function LinksSection() {
  return (
    <div className="text-center text-white p-4">
      <h2 className="text-2xl font-bold">Profiles & Resume</h2>
      <ul className="mt-2 space-y-2">
        <li><a href="https://github.com/yourprofile" target="_blank" className="underline">GitHub</a></li>
        <li><a href="https://linkedin.com/in/yourprofile" target="_blank" className="underline">LinkedIn</a></li>
        <li><a href="/projects/resume.pdf" target="_blank" className="underline">Resume</a></li>
      </ul>
    </div>
  );
}
