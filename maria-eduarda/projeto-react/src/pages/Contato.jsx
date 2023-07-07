import Header from '../components/Header'

import contato from '../assets/contato.svg'

const Contato = () => {
  return (
    <>
    <Header title="Entre em contato" image={contato} />
    <div>
      <form onSubmit={() => {}}>
        <input 
          type='text'
          placeholder='Digite seu nome'
          onChange={() => {}}
          value=''
        />
        <input
          type='email' 
          placeholder='Digite seu email'
          onChange={() => {}}
          value=''
        />
        <input 
          placeholder='Digite sua mensagem'
          onChange={() => {}}
          value=''
        />
        <button type='submit'>Enviar mensagem</button>
      </form>
    </div>
    </>
  )
}

export default Contato