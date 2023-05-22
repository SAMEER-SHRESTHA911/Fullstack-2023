const Filter = ({searchName, handleSearch, filteredPersons}) => {
    return(
    <>
        Filter shown with :
    <form>
      <input 
      value = {searchName}
      onChange = {handleSearch}/>
      {
        filteredPersons.map((filter) => {
          return(
            <div>
              {filter.name} : {filter.number}
            </div>
          )
        })
      }
    </form>
    </>
    )   
}
export default Filter