import Link from 'next/link';



export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-gray-200 mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-4">System Offline</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for has been moved or does not exist.
        </p>
        <div className="space-y-4">
          <Link href="/" className="btn btn-primary w-full">Back to Home</Link>
          <Link href="/guide-agricultural-drones/" className="btn btn-outline w-full">View Drone Guide</Link>
        </div>
      </div>
    </main>
  );
}
