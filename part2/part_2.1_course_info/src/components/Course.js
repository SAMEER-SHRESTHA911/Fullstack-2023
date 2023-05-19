import Content from "./Content"
import Header from "./Header"
import Total from "./Total"

const Course = ({ course }) => {
    return (
        <>
            {
                course.map(course => {
                return(
                <>
                <Header name = {course.name}></Header>
                <Content course = {course}></Content>
                <Total course = {course}></Total>
                </>
                )
            })
        }
        </>
    )
//     let total = 0
//     course.parts.map(part => {
//         return total += part.exercises
// })
//     return(
//         <>
//             { 
//                 course.parts.map(part => {
//                 return (
//                     <Content name = {part.name} exercises = {part.exercises} id = {part.id}/>
//                 )}) 
//             }  
//            <div>Total is: {total}</div> 
//         </>
//     )
}
export default Course