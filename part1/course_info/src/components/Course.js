import Content from "./Content"

const Course = ({ course }) => {
    let total = 0
    course.parts.map(part => {
        total += part.exercises
})
    return(
        <>
            { 
                course.parts.map(part => {
                return (
                    <Content name = {part.name} exercises = {part.exercises} id = {part.id}/>
                )}) 
            }  
           <div>Total is: {total}</div> 
        </>
    )
}
export default Course