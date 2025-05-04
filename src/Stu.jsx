import React from 'react'

const Stu = ({ student }) => {
  return (
     <>
      <div>
        {
            student.map((student) => (
                <ul>
                    <li>Name: {student.name}</li>
                    <li>Age: {student.age}</li>
                    <li>Email: {student.email}</li>
                </ul>
            ))
        }
      </div>
     </>
  )
}

export default Stu