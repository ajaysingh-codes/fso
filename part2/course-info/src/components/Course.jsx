/* Header component */
const Header = ({ course }) => <h1>{course}</h1>

/* Part component */
const Part = ({ name, exercise }) => <p>{name} {exercise}</p>

const Content = ({ parts }) => {
  return (
    <div>
      {
        parts.map(part => <Part key={part.id} name={part.name} exercise={part.exercises} />
      )}
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + (Number(part.exercises) || 0), 0)
  return (
    <p>total of {total} exercises</p>
  )
} 

const Course = ({ courses }) => {
//   console.log(courses)
  return (
    <div>
      {courses.map(course => {
        return (
          <div key={course.id}>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
          </div>
        )
      })}
      
    </div>
  )
}

export default Course