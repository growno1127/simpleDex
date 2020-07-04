import React, {Component} from 'react';
import './App.css';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      test: [],
      test2: [],
      searchfield: ''
    };
  }

getallPokes() {

  let url = `https://pokeapi.co/api/v2/pokemon?limit=151`;

  fetch(url)
    .then(resp => resp.json())
    .then(data => this.setState({test: data.results}, () => {

      this.state.test.map(poke => {

        fetch(poke.url)
        .then(resp => resp.json())
        .then(data => {

          this.setState((prevState) => ({test2: [...prevState.test2, data]}));
        
        })
      })
     })
    );
}


componentDidMount() {
    this.getallPokes();
}

  render() {

    const {test, test2} = this.state;

    //sort pokemon by id
    const sorted = test2.sort(function(a,b) {
      return (a.id - b.id);
    });

    if(test.length === 0) {
      return <h1>NO POKEMANS FOUND</h1>
    }

    else { 
      return (
        <div className="tc">
        <h1 className="tl f1 w-30 dib white">SimpleDex</h1>
        <SearchBox />
          <CardList test = {sorted}/>
        </div>
      );
    }
  }
}

export default App;
