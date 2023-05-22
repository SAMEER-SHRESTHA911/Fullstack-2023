const PersonForm = ({addPerson, newName, handlePersonNameChange, handlePersonNumberChange,newNumber}) => {
    return(
        <>
        <form onSubmit={addPerson}>
      <p>
      <div>
        Name : <input 
        value = {newName}
        onChange = {(e) => handlePersonNameChange(e)} />
      </div>
      </p>
      <p>
      <div>
        Number : <input
        value = {newNumber}
        onChange = {(e) => handlePersonNumberChange(e)}/>
      </div>
      </p>
      <div>
        <button type = "submit">add</button>
      </div>

    </form>
        </>
    )
}
export default PersonForm