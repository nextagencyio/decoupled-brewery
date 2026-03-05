export default function Loading() {
  return (
    <div className="min-h-screen bg-primary-950 animate-pulse">
      <div className="h-20 border-b border-primary-800 bg-primary-950/80" />
      <div className="h-56 bg-gradient-to-b from-primary-900 to-primary-950" />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-primary-900 border border-primary-800 rounded-xl overflow-hidden">
              <div className="h-48 bg-primary-800" />
              <div className="p-6 space-y-3">
                <div className="h-6 bg-primary-700 rounded w-3/4" />
                <div className="h-4 bg-primary-800 rounded w-full" />
                <div className="h-4 bg-primary-800 rounded w-2/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
