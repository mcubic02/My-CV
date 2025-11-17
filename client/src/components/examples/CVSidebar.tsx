import CVSidebar from '../CVSidebar';

export default function CVSidebarExample() {
  return (
    <div className="relative h-screen">
      <CVSidebar language="en" />
      <div className="ml-64 p-8">
        <div id="home" className="h-screen bg-muted/20 rounded-md flex items-center justify-center">
          <h2 className="text-2xl">Home Section</h2>
        </div>
        <div id="skills" className="h-screen bg-muted/20 rounded-md flex items-center justify-center mt-4">
          <h2 className="text-2xl">Skills Section</h2>
        </div>
        <div id="experience" className="h-screen bg-muted/20 rounded-md flex items-center justify-center mt-4">
          <h2 className="text-2xl">Experience Section</h2>
        </div>
        <div id="education" className="h-screen bg-muted/20 rounded-md flex items-center justify-center mt-4">
          <h2 className="text-2xl">Education Section</h2>
        </div>
        <div id="contact" className="h-screen bg-muted/20 rounded-md flex items-center justify-center mt-4">
          <h2 className="text-2xl">Contact Section</h2>
        </div>
      </div>
    </div>
  );
}
