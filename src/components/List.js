import Item from './Item'

function List () {
    return (
      <>
          <h1>Minha Lista</h1>
          <ul>
              <Item marca="Ferrari" lancamento={1990} />
              <Item marca="Lambo" lancamento={2000}/>
              <Item />
          </ul>
      </>
    )
}

export default List
