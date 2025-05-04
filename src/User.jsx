import React from 'react'
import College from './College'

const User = () => { 

  const collegeData = [
    {
      name: 'IIT Delhi',
      city: 'Delhi',
      website: 'www.iit.com',
      student:[
        {
          name: 'Anil',
          age: '20',
          email:'anil@gmail.com'
        },
        {
          name: 'Peter',
          age: '22',
          email:'peter@gmail.com'
        },
        {
          name: 'Buffer',
          age: '25',
          email:'buffer@gmail.com'
        }
      ]
    },
    {
      name: 'IET Pune',
      city: 'Pune',
      website: 'www.iet.com',
      student:[
        {
          name: 'Anil',
          age: '20',
          email:'anil@gmail.com'
        },
        {
          name: 'Peter',
          age: '22',
          email:'peter@gmail.com'
        },
        {
          name: 'Buffer',
          age: '25',
          email:'buffer@gmail.com'
        }
      ]
    },
    {
      name: 'KCIET Hisar',
      city: 'Hisar',
      website: 'www.kciet.com',
      student:[
        {
          name: 'Anil',
          age: '20',
          email:'anil@gmail.com'
        },
        {
          name: 'Peter',
          age: '22',
          email:'peter@gmail.com'
        },
        {
          name: 'Buffer',
          age: '25',
          email:'buffer@gmail.com'
        }
      ]
    }
  ]
  return (
    <>
       <h1>Nested Looping</h1>
       {
        collegeData.map((college, index) => (
          <div key={index}>
          <College college = {college}/>
          </div>
        ))
       }
    </>
  )
}

export default User