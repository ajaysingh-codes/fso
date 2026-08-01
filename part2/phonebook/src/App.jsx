import { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phoneService from './services/phone'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    phoneService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    } 
    const personObject = {
      name: newName,
      number: newNumber,
    }
    phoneService
    .create(personObject)
    .then(
      returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      }
    )
  }

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete ${name}`)) {
      phoneService
      .deletePhone(id)
      .then(() => {
        setPersons(persons.filter(person => person.id !== id))
      })
    }
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const personsToShow = (filter === '') ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      
      <h3>Add a new</h3>
      <PersonForm addPerson={addPerson} newName={newName} newNumber={newNumber} handlePersonChange={handlePersonChange} handleNumberChange={handleNumberChange}/>
      
      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} handleDelete={handleDelete}/>
    </div>
  )
}

export default App