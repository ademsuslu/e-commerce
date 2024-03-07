'use client'
import { IoSearchCircleOutline } from 'react-icons/io5'
import { useState } from 'react'
import SearchResult from './searchresult/SearchResult'

export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState()

  const handleSearch = async (query) => {
    try {
      // POST isteği
      const response = await fetch(
        'http://localhost:3000/api/products/search',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ query }),
        }
      )
      setQuery('')
      if (!response.ok) {
        throw new Error('İstek başarısız: ' + response.status)
      }

      const data = await response.json()
      setResults(data)
      return data
    } catch (error) {
      console.error('İstek hatası:', error)
    }
  }

  setTimeout(() => {
    setResults(null)
  }, 15000)
  return (
    <div className="bg-white w-40 border  rounded p-2">
      <div className="d-flex align-items-center justify-content-between ">
        <input
          type="text"
          style={{ outline: 'none' }}
          className="border-0"
          value={query}
          placeholder="Arama yapın..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="bg-white border-0 outline-none"
          onClick={() => handleSearch(query)}
        >
          <IoSearchCircleOutline className="fs-3  saklıdır" />
        </button>
      </div>
      <div className={`  ${results ? 'd-block' : 'd-none'}`}>
        <SearchResult results={results} />
      </div>
    </div>
  )
}
