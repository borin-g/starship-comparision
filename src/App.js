import React, { Component } from 'react'
import './App.css';
import SelectInput from './SelectInput';
import Table from './Table';
import TableRow from './TableRow';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { starship1: '', starship2: '', starships: [] };
  }

  componentDidMount() {
    this.fetchStarshipApi();
  }

  fetchStarshipApi = async () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let starshipResponse1 = await fetch(proxyurl + 'https://swapi.co/api/starships/');
    let starshipResponse2 = await fetch(proxyurl + "https://swapi.co/api/starships/?page=2");
    let starshipResponse3 = await fetch(proxyurl + 'https://swapi.co/api/starships/?page=3');
    let starshipResponse4 = await fetch(proxyurl + 'https://swapi.co/api/starships/?page=4');

    let starshipApi1 = await starshipResponse1.json();
    let starshipApi2 = await starshipResponse2.json();
    let starshipApi3 = await starshipResponse3.json();
    let starshipApi4 = await starshipResponse4.json();
    this.setState({
      starships: [...starshipApi1.results, ...starshipApi2.results, ...starshipApi3.results, ...starshipApi4.results]
    });
  }
  handleChangeOne = (e) => {
    this.state.starships.map(starship => {
      if (starship.name === e.target.value) {
        this.setState({ starship1: starship });
      }
    });
  }
  handleChangeTwo = (e) => {
    this.state.starships.map(starship => {
      if (starship.name === e.target.value) {
        this.setState({ starship2: starship });
      }
    });
  }
  render() {
    let starship1 = this.state.starship1;
    let starship2 = this.state.starship2;
    return (
      <div className='container-fluid'>
        <h1 className='mb-4'>Starship Comparision</h1>
        <div className='form-group row no-gutters'>
          <SelectInput handleChange={this.handleChangeOne}>
            <option selected disabled>Please Choose A Starship</option>
            {this.state.starships.map((starship, index) => <option key={index}>{starship.name}</option>)}
          </SelectInput>
          <SelectInput handleChange={this.handleChangeTwo}>
            <option selected disabled>Please Choose A Starship</option>
            {this.state.starships.map((starship, index) => <option key={index}>{starship.name}</option>)}
          </SelectInput>
        </div>
        <Table>
          <TableRow th='Name' td1={starship1['name']} td2={starship2['name']} />
          <TableRow th='Cost' td1={starship1['cost_in_credits']} td2={starship2['cost_in_credits']} />
          <TableRow th='Speed' td1={starship1['max_atmosphering_speed']} td2={starship2['max_atmosphering_speed']} />
          <TableRow th='Cargo Size' td1={starship1['cargo_capacity']} td2={starship2['cargo_capacity']} />
          <TableRow th='Passengers' td1={starship1['passengers']} td2={starship2['passengers']} />
        </Table>
      </div>
    )
  }
}

