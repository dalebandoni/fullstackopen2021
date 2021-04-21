import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios.get('https://restcountries.eu/rest/v2/all')
      setCountries(data)
    }
    getCountries()
  }, [])

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  )
  console.log(countries)
  return (
    <div>
      find countries{' '}
      <input
        type='text'
        value={filter}
        onChange={({ target }) => setFilter(target.value)}
      />
      {filteredCountries.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}
      <ul>
        {filteredCountries.length < 10 &&
          filteredCountries.length > 1 &&
          filteredCountries.map(country => (
            <p key={country.alpha2Code}>{country.name}</p>
          ))}
      </ul>
      {filteredCountries.length === 1 &&
        filteredCountries.map(country => (
          <div key={country.alpha2Code}>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>languages</h3>
            <ul>
              {country.languages.map(language => (
                <li key={language.name}>
                  {language.name} ({language.nativeName})
                </li>
              ))}
              {console.log('languages are:', country.languages)}
            </ul>
            <img
              src={country.flag}
              width={'150px'}
              alt={`flag of ${country.name}`}
            />
          </div>
        ))}
    </div>
  )
}

export default App
