
import './style.css'
import Trash from '../../assets/Trash.svg'

function Home() {

  const users = [
    {
      id: 'jiraya1234',
      nome: 'Jiraya',
      idade: 64,
      email: 'jiraya@teste.com'
    },
    {
      id: 'naruto1234',
      nome: 'Naruto',
      idade: 16,
      email: 'naruto@teste.com'
    },
  ]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de Nerdolas</h1>
        <input placeholder='Nome' name='nome' type='text' />
        <input placeholder='Idade' name='idade' type='number' />
        <input placeholder='E-mail' name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      {/*
      {users.map(user => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.nome}</span></p>
            <p>Idade: <span>{user.idade}</span></p>
            <p>E-mail: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
      */}
    </div>
  )
}

export default Home
