export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen p-5 bg-gray-200">
      <div className="w-full p-5 bg-white shadow-lg rounded-3xl">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="-mb-1 font-semibold text-gray-600">
              In Transit
            </span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>
          <div className="bg-orange-400 rounded-full size-12" />
        </div>
        <div className="flex items-center gap-2 my-3">
          <span className="bg-green-400 text-white font-semibold px-2.5 py-1.5 rounded-full uppercase">
            Today
          </span>
          <span className="font-medium text-gray-600">9:30-10:30u</span>
        </div>
        <div className="relative mb-6">
          <div className="absolute w-full h-2 bg-gray-400 rounded-full" />
          <div className="absolute w-2/3 h-2 bg-green-400 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>Intransit</span>
          <span className="text-gray-400">Delivered</span>
        </div>
      </div>
    </main>
  );
}
