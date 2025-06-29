export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <p className="mb-4">
        This is a test page to see if Tailwind CSS is working properly.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-red-500 p-4 text-white">Red background</div>
        <div className="bg-blue-500 p-4 text-white">Blue background</div>
        <div className="bg-green-500 p-4 text-white">Green background</div>
        <div className="bg-yellow-500 p-4 text-black">Yellow background</div>
      </div>
    </div>
  );
}
