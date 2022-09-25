import './Skills.css'
import icon from '../../icons/codewars.svg'

export const Skills = () => {
  return (
    <section id="skills-section">
      <div className="bubbles">
          <span className="fa-stack fa-2x"
                id="react-bubble">
            <i className="fa-solid fa-circle fa-stack-2x"/>
            <i className="fa-brands fa-react fa-stack-1x fa-inverse"/>
          </span>
        <span className="fa-stack fa-2x additional-bubble"
              id="bubble1">
            <i className="fa-solid fa-circle fa-stack-2x"/>
          </span>
        <span className="fa-stack fa-2x additional-bubble"
              id="bubble2">
            <i className="fa-solid fa-circle fa-stack-2x"/>
          </span>
        <span className="fa-stack fa-2x"
              id="node-js-bubble">
            <i className="fa-solid fa-circle fa-stack-2x"/>
            <i className="fa-brands fa-node-js fa-stack-1x fa-inverse"/>
          </span>
        <span className="fa-stack fa-2x"
              id="sass-bubble">
            <i className="fa-solid fa-circle fa-stack-2x"/>
            <i className="fa-brands fa-sass fa-stack-1x fa-inverse"/>
          </span>
      </div>
      <div className="container">
        <div className="bio">
          <h2>Приветствую &#128075;</h2>
          <p>Меня зовут Палкин Руслан, мне 16 лет и я интересуюсь фронтенд
            разработкой. Я стараюсь следить за новостями в этой области и
            постоянно обучаюсь чему-то новому. Поэтому я хочу попасть на
            интенсивы по фронтенду Академии Яндекса.</p>
          <div className="profile-links">
            <div className="link">
              <a href="https://github.com/rusandorx" target="_blank">
                <i className="fa-brands fa-github"> Github</i>
              </a>
            </div>
            <div className="link"><a href="https://t.me/rusandor">
              <i className="fa-brands fa-telegram"> Telegram</i>
            </a></div>
            <div className="link">
              <a href="mailto:ruslanpalkin44@gmail.com">
                <i className="fa-solid fa-at"> Email</i>
              </a></div>
          </div>
        </div>
      </div>
    </section>
  )
}