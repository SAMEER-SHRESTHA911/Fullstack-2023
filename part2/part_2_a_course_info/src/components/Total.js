
const Total = ({course}) => {
    return(
        <div>
            <b>
                Total of &nbsp;
                {
                        course.parts.reduce((sum, part) => {
                            return sum + part.exercises
                        },0)
                }
                &nbsp; exercises
            </b>
        </div>
    )
}
export default Total