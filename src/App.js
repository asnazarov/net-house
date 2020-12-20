import {Route} from "react-router-dom";
import {Card, Home} from './pages'
import {useSelector} from "react-redux";

function App() {

  const cardId = useSelector(({card}) => card.items.id)
  return (
    <div className="App">
      <div className="wrapper">
        <div className="content">
          <Route exact path="/net-house" component={Home}/>
          <Route path={`/net-house/card-${cardId}`} component={Card}/>
        </div>
      </div>
    </div>
  );
}

export default App;
