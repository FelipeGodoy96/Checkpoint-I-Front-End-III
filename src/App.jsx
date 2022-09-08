import React, { useState } from "react"
import * as FaIcons from 'react-icons/fa'
import "./assets/global.css"



function App() {
  const [sidebar, setSidebar] = useState(false)
  const toggleSidebar = () => setSidebar(!sidebar)

  function isValidEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  document.addEventListener('keydown', (e) => {
    if (e.key == ' ') {
      e.preventDefault()
      toggleSidebar()
    }
  })
  document.addEventListener('dblclick', (e) => {
    e.preventDefault()
    toggleSidebar()
  })

  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ message, setMessage] = useState('')
  
  const sendForm = (e) => {
    e.preventDefault()
  if (email !== '' || email !== null && isValidEmail(email)) {
    let validEmail = true
  }
 
    
  }


  return (
    <>
      <div className="l-app">    
        <button  className="l-sidebar__btn" type="button">
        <FaIcons.FaBars className="l-sidebar__icon" onClick={toggleSidebar} />
          Menu        
        </button>        
        <div className={sidebar ? 'l-sidebar l-sidebar--open' : 'l-sidebar l-sidebar--close'}>
          <button onClick={toggleSidebar}className="l-sidebar__btnOpen">fechar</button>
          <h1 className="l-logo">Felipe Godoy</h1>
          <nav className="c-sidebar">
            <a className="c-nav__item" href="#sobre-mim">Sobre mim</a>
            <a className="c-nav__item" href="#contatos">Contatos</a>
          </nav>
        </div>    

        <div className="l-content">

          
          <div className="l-page bg__profile">
            <main>
              <h1 className="title">Olá, me chamo fulano</h1>
              <p className="description">Seja bem vindo ao meu currículo on-line.</p>

              <nav className="c-nav u-my-3">
                <a className="c-nav__item" href="">Github</a>
                <a className="c-nav__item" href="">Linkedin</a>
              </nav>

              <a className="c-btn u-my-3" href="#sobre-mim">sobre mim</a>
            </main>
          </div>

          
          <div className="l-page" id="sobre-mim">
            <article>
              <h1 className="title">Sobre mim</h1>
              <p>Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis.Per aumento de cachacis, eu reclamis.Casamentiss faiz malandris se pirulitá.Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
              <p>Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.Leite de capivaris, leite de mula manquis sem cabeça. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis.Manduma pindureta quium dia nois paga.</p>
              <p>Interagi no mé, cursus quis, vehicula ac nisi.Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!Sapien in monti palavris qui num significa nadis i pareci latim.</p>
            </article>
          </div>

         
          <div className="l-page" id="contatos">
            <section>
              <h1 className="title">Posso te ajudar?</h1>

              <nav className="c-nav">
                <a className="c-nav__item" href="">Github</a>
                <a className="c-nav__item" href="">Linkedin</a>
                <a className="c-nav__item" href="tel:+5521972190000">Telefone</a>
              </nav>

              <form
                name="contact"
                className="c-form"
                onSubmit={sendForm}
              >
                <div className="c-form__group">
                  <label htmlFor="name" className="c-form__label">Nome</label>
                  <input type="text" placeholder="Digite seu nome" id="name" className="c-form__control" onChange={(event) => {setName(event.target.value)}} />
                </div>
                <div className="c-form__group">
                  <label htmlFor="email" className="c-form__label">E-mail</label>
                  <input type="text" placeholder="Digite seu e-mail" id="email" className="c-form__control" onChange={(event) => {setEmail(event.target.value)}}/>
                </div>
                <div className="c-form__group">
                  <label htmlFor="subject" className="c-form__label">Assunto</label>
                  <select defaultValue={"Qual o assunto?"}id="subject" className="c-form__control">
                    <option value="orcamento">Orçamento</option>
                    <option value="oportunidade">Oportunidade</option>
                    <option value="parceria">Parcerias</option>
                  </select>
                </div>
                <div className="c-form__group">
                  <label htmlFor="messager" className="c-form__label">Mensagem</label>
                  <textarea rows="5" placeholder="Se desejar, explique-me melhor..." id="messager" className="c-form__control" onChange={(event) => {setMessage(event.target.value)}}></textarea>
                </div>
                <div className="c-form__group">
                  <button className="c-btn" type="submit">Enviar</button>
                </div>
              </form>
            </section>

            <footer className="u-my-3">
              <span>Todos os direitos reservados fulano.</span>
            </footer>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
