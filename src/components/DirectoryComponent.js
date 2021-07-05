import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import MetroInfo from './MetroInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMetro: null
        };
    }

    onMetroSelect(metro) {
        this.setState({selectedMetro: metro});
    }


    render() {
        const directory = this.props.metroArea.map(metro => {
            return (
                <div key={metro.id} className="col-md-5 m-1">
                    <Card onClick={() => this.onMetroSelect(metro)}>
                        <CardImg width="100%" src={metro.image} alt={metro.name} />
                        <CardImgOverlay>
                            <CardTitle>{metro.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
               <MetroInfo metro={this.state.selectedMetro} />
            </div>
        );
    }
}




export default Directory;