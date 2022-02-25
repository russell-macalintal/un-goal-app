import React, {useState} from 'react'
import data from '../Data/studentData'

const Dashbord = () => {
    const [students, setStudents] = useState(data)
  return (
    <main>
      <section className="container">
        <>
          {students.map((person) => {
            const { id, name, location, image, time, subject } = person;
            return (
              <article key={id} className="person">
                <img src={image} alt={name} />
                <div>
                  <h4>{name}</h4>
                  <h4>{location}</h4>
                  <p>{subject}</p>
                </div>
                  <button className='btn'>Sign Up</button>
              </article>
            );
          })}
        </>
      </section>
    </main>
  );
}

export default Dashbord