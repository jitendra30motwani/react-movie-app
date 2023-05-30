
import './App.css';
import MovieComponent from './MovieComponent';

function App() {

  /**const name = "Hi1 React";
  const age = 29;
  //const skills = ['Java','React','SQL', 'Kafka'];

  const cats = [

    {
      name: 'Dolly',
      description: 'I am Dolly',
      image: '',
      skills: ['Dance', 'Sing', 'Jump']
    },
    {
      name: 'Molly',
      description: 'I am Molly',
      image: '',
      skills: ['Dance', 'Sing', 'Jump']
    }
  ]**/

  return (
    <div className='App'>
      {/**<MovieComponent></MovieComponent>**/}
      <MovieComponent/>
      {/**<h1>{name}</h1>
      <h2>{age}</h2>

     <ul>

        {

          skills.map((skill,index) => {

            return <li key={index}>{skill}</li>

          })


        }

      </ul>

      <ul>

        {

          cats.map((cat, index) => {

            return <li key={index}>

              <h1>{cat.name}</h1>
              <p>{cat.description}</p>
              <img src={cat.image} alt={cat.name}></img>
              <ul>

                {

                  cat.skills.map((skill, index) => {

                    return skill!=="Sing" ? <li key={skill}>{skill}</li> : null

                  })

                }

              </ul>
            </li>

          })

        }

      </ul>**/}

    </div>
  );
}

export default App;
