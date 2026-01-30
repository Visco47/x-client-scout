import React, { useState } from 'react'

function App() {
  const [handle, setHandle] = useState('')
  const [skills, setSkills] = useState('')
  const [results, setResults] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Placeholder for AI search logic
    const mockResults = Array(20).fill().map((_, index) => ({
      handle: `@potential_client_${index + 1}`,
      bio: `Interested in innovative business solutions`
    }))
    setResults(mockResults)
  }

  const loadMoreResults = () => {
    // Placeholder for loading more results
    const additionalResults = Array(10).fill().map((_, index) => ({
      handle: `@additional_client_${index + 1}`,
      bio: `Expanding business network opportunities`
    }))
    setResults(prev => [...prev, ...additionalResults])
  }

  return (
    <div className="min-h-screen bg-[#1A2238] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#FFFFFF1A] backdrop-blur-lg rounded-2xl shadow-2xl p-6">
        <h1 className="text-2xl font-bold text-[#3498DB] mb-6 text-center">
          X Client Finder
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" 
            placeholder="Your X Handle" 
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className="w-full p-3 bg-[#2C3E50] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
          />
          <textarea 
            placeholder="Your Skills & Services" 
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            className="w-full p-3 bg-[#2C3E50] text-white rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-[#3498DB]"
          />
          <button 
            type="submit" 
            className="w-full py-3 bg-[#3498DB] text-white rounded-lg hover:bg-[#2980B9] transition-colors"
          >
            Find Potential Clients
          </button>
        </form>

        {results.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-[#3498DB] mb-4">
              Potential Clients
            </h2>
            <div className="space-y-2">
              {results.map((client, index) => (
                <div 
                  key={index} 
                  className="bg-[#2C3E50] p-3 rounded-lg flex justify-between items-center"
                >
                  <span className="text-white">{client.handle}</span>
                  <button 
                    className="text-[#3498DB] hover:underline"
                  >
                    View Profile
                  </button>
                </div>
              ))}
            </div>
            {results.length === 20 && (
              <button 
                onClick={loadMoreResults}
                className="w-full mt-4 py-2 bg-[#2980B9] text-white rounded-lg hover:bg-[#3498DB] transition-colors"
              >
                Load More Clients
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App