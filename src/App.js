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

  handleChange = (e) => {
    let { name, value } = e.target;
    this.state.starships.map(starship => {
      if (starship.name === value) {
        this.setState({ [name]: starship });
      }
    });
  }
  render() {
    let starship1 = this.state.starship1;
    let starship2 = this.state.starship2;
    const propertyObject = {
      Name: 'name',
      Cost: 'cost_in_credits',
      Speed: 'max_atmosphering_speed',
      'Cargo Size': 'cargo_capacity',
      Passengers: 'passengers'
    };
    let properties = Object.keys(propertyObject);
    return (
      <div className='container-fluid'>
        <h1 className='mb-4'>Starship Comparision</h1>
        <div className='form-group row no-gutters'>
          <SelectInput onChange={this.handleChange} name='starship1'>
            {this.state.starships.map((starship, index) => <option key={index}>{starship.name}</option>)}
          </SelectInput>
          <SelectInput onChange={this.handleChange} name='starship2'>
            {this.state.starships.map((starship, index) => <option key={index}>{starship.name}</option>)}
          </SelectInput>
        </div>
        <Table>
          {properties.map(property => {
            return (<TableRow key={property} th={property}
              td1={starship1[propertyObject[property]]}
              td2={starship2[propertyObject[property]]}
            />)
          })}
        </Table>
      </div>
    )
  }
}

