import Item from './components/item'
import Card from './components/Card';
import './components/Card/Card.css'
const App = () => {
  return(
    <div>
      <h1>Utilizando componentes em React</h1>
      <ul className="list-group">
        <Item>
          Item 1
        </Item>
        <Item>
          Item 2
        </Item>
        <Item>
          Item 3
        </Item>
        
      </ul>
      <br/>
      <Card/>
    </div>
  )
}

export default App;
