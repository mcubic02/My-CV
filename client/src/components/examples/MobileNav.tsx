import MobileNav from '../MobileNav';

export default function MobileNavExample() {
  return (
    <div className="relative h-screen">
      <MobileNav language="en" />
      <div className="pt-20 p-8">
        <div id="home" className="h-96 bg-muted/20 rounded-md flex items-center justify-center mb-4">
          <h2 className="text-2xl">Home Section</h2>
        </div>
        <div id="skills" className="h-96 bg-muted/20 rounded-md flex items-center justify-center mb-4">
          <h2 className="text-2xl">Skills Section</h2>
        </div>
      </div>
    </div>
  );
}
