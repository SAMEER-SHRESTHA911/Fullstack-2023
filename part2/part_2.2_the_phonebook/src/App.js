import {useState} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Number from './components/Number'

const App = () => {
  const [persons, setPersons] = useState([
    {name : 'Arto Hellas',number : '000-69420',id : 1},
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    // persons.map((person) => {
    //   if(person.name === newName){
    //     alert(`${newName} is already added to phonebook`)
    //   }
    // })

    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }

    const personObject = {
      name : newName,
      number : newNumber,
      id : persons.length + 1
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  
  const filteredPersons = persons.filter((person) => {
    if(searchName === ''){
      return ''
    }
    else
    return (
      person.name.toLowerCase().includes(searchName.toLowerCase()))
    })
    
  const handlePersonNameChange = (event) => {
    setNewName(event.target.value)
    console.log(event.target.value)
  }

    const handlePersonNumberChange = (event) => {
      setNewNumber(event.target.value)
      console.log(event.target.value)
    }

    const handleSearch = (event) => {
      setSearchName(event.target.value)
      console.log(event.target.value)
    }

  return(
    <>
    <h2>Phonebook</h2>
      <Filter searchName = {searchName} handleSearch = {handleSearch} filteredPersons = {filteredPersons}/>
      
    <h3>Add new contact</h3>
    <PersonForm 
      addPerson = {addPerson} 
      newName = {newName} 
      handlePersonNameChange = {handlePersonNameChange}
      newNumber = {newNumber} 
      handlePersonNumberChange = {handlePersonNumberChange}
      />  

    {/* <form onSubmit={addPerson}>
      <p>
      <div>
        Name : <input 
        value = {newName}
        onChange = {handlePersonNameChange} />
      </div>
      </p>
      <p>
      <div>
        Number : <input
        value = {newNumber}
        onChange = {handlePersonNumberChange}/>
      </div>
      </p>
      <div>
        <button type = "submit">add</button>
      </div>

    </form> */}

    <h2>Numbers</h2>
    <Number persons = {persons}/> 
    {/* <div>debug: {newName} : {newNumber}</div>
    <div>
      {persons.map((person) => (
        <div key = {person.name}>{person.name} {person.number}</div>
      ))}
    </div> */
    }
    </>
  )
}
export default App