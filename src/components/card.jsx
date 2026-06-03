import s from './card.module.css'

export const Card = (props) => {
    return(
        <>
              <img src={props.imagem} alt={props.nome} />
              <div className={s.card}>
              <h4 >Name: {props.nome}</h4>
              <p>ki: {props.ki}</p>
              <p>maxki: {props.maxki}</p>
              <p>race: {props.race}</p>
              <p>gender: {props.gender}</p>
              <p>affiliation: {props.affiliation}</p>
              <p>deletedAt: {props.deletedAT}</p>
              </div>
        </>
    )
}
