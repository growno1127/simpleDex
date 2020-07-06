import React, {Component} from 'react';
import './App.css';
import NavBar from './NavBar';
import CardList from './CardList';
import Scroll from './Scroll';
import SearchBox from './SearchBox';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      test: [],
      test2: [],
      searchfield: '',
      dropdown: 'pokedexorder'
    };
  }


componentDidMount() {
    this.getallPokes();
}

onSearchChange = (event) => {
  this.setState({searchfield: event.target.value});
}

onDropDownChange = (event) => {
  this.setState({dropdown: event.target.value});
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

  render() {

    const {test, test2, searchfield, dropdown} = this.state;

    //filter pokemon based on id and name
    const filtered = test2.filter(poke => {

      if (!(isNaN(searchfield))) {
        return poke.id.toString().includes(searchfield)
      }

      else {
        return poke.name.toLowerCase().includes(searchfield.toLowerCase())
      }

    })

    let sorted = [];

    if(dropdown === 'pokedexorder') {
      sorted = filtered.sort(function(a,b) {
        return (a.id - b.id);
      })
    }

    else if(dropdown === 'height') {
      sorted = filtered.sort(function(a,b) {
        return (a.height - b.height);
      })
    }

    else if(dropdown === 'weight') {
      sorted = filtered.sort(function(a,b) {
        return (a.weight - b.weight);
      })
    }


    if(test2.length === 0) {
      return <h1 className="tc f1 dib white">Loading...</h1>
    }

    else { 
      return (
        <div className="tc">
        <NavBar searchChange={this.onSearchChange} dropDownChange={this.onDropDownChange}/>
        <Scroll>
          <CardList test = {sorted}/>
        </Scroll>
        </div>
      );
    }
  }
}

export default App;
