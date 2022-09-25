import './Projects.css'
import chessImage from '../../images/chess.PNG'
import dragAndDropApiImage from '../../images/drag-and-drop-api.PNG'
import fileReaderApiImage from '../../images/file-reader.PNG'

export const Projects = () => {
  return (
    <section id="projects-section">
      <h2>Примеры из моего портфолио</h2>
      <div className="projects-container">
        <a href="https://github.com/rusandorx/chess-on-react"
           target="_blank"
           className="project">
          <img className="image-project"
               src={chessImage}
               alt="react-chess project"
          />
          <p className="project-title red">
            <span className="decoration">&lt; </span>
            Шахматы на react
            <span className="decoration"> /></span>
          </p>
        </a>
        <a href="https://github.com/rusandorx/drag-and-drop-api"
           target="_blank"
           className="project">
          <img className="image-project"
               src={dragAndDropApiImage}
               alt="Drag and drop api project"
          />
          <p className="project-title green">
            <span className="decoration">&lt; </span>
            Drag and drop API
            <span className="decoration"> /></span>
          </p>
        </a>
        <a href="https://github.com/rusandorx/file-reader-api"
           target="_blank"
           className="project">
          <img className="image-project"
               src={fileReaderApiImage}
               alt="File reader project"
          />
          <p className="project-title blue">
            <span className="decoration">&lt; </span>
              File reader API
            <span className="decoration"> /></span>
          </p>
        </a>
      </div>
    </section>
  )
}