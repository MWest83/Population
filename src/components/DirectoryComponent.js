import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

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

    renderSelectedMetro(metro) {
        if (metro) {
            return(
                <Card>
                    <CardImg top src={metro.image} alt={metro.name} />
                    <CardBody>
                        <CardTitle>{metro.name}</CardTitle>
                        <CardText>{metro.population}</CardText>
                    </CardBody>
                </Card>
            )
        }
        return <div />;
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
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedMetro(this.state.selectedMetro)}
                    </div>
                </div>
            </div>
        );
    }
}




export default Directory;