import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            metroArea: [
                {
                    id: 0,
                    name: "New York Metro",
                    image: 'assets/images/new-york.jpg',
                    population: 19124359,
                    cityState: 'New York'
                },
                {
                  id: 1,
                    name: "Los Angeles Metro",
                    image: 'assets/images/los-angeles.jpg',
                    population: 13109903,
                    cityState: 'California' 
                },
                {
                    id: 2,
                    name: "Chicago Metro",
                    image: 'assets/images/chicago.jpg',
                    population: 9406638,
                    cityState: 'Illonis'
                },
                {
                    id: 3,
                    name: "Dallas-Fort Worth Metro",
                    image: 'assets/images/dfw.jpg',
                    population: 7694138,
                    cityState: 'Texas'
                },
                {
                    id: 4,
                    name: "Houston",
                    image: 'assets/images/houston.jpg',
                    population: 7154478,
                    cityState: 'Texas'
                },
                {
                    id: 5,
                    name: "Washington DC Metro",
                    image: 'assets/images/washington-dc.jpg',
                    population: 6324629,
                    cityState: 'District of Columbia'

                },
                {
                    id: 6,
                    name: "Miami Metro",
                    image: 'assets/images/miami.jpg',
                    population: 6324629,
                    cityState: 'Florida' 

                },
                {
                    id: 7,
                    name: "Philadelphia Metro",
                    image: 'assets/images/philly.jpg',
                    population: 6107906,
                    cityState: 'Pennsylvania' 
                },
                {
                    id: 8,
                    name: "Atlanta Metro",
                    image: 'assets/images/atlanta.jpg',
                    population: 6087762,
                    cityState: 'Georgia' 

                },
                {
                    id: 9,
                    name: "Phoenix",
                    image: 'assets/images/phoenix.jpg',
                    population: 5059909,
                    cityState: 'Arizona'

                }

            ]

        };
    }

    render() {
        const directory = this.state.metroArea.map(metro => {
            return (
                <div key={metro.id} className="col">
                    <img src={metro.image} alt={metro.name} />
                    <h2>{metro.name}</h2>
                    <p>{metro.population}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;