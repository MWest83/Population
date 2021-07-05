import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { metroArea } from '../shared/metroArea';

class MetroInfo extends Component {
    
    renderSuburb(suburb) {
        if (suburb) {
            return (
                <div className="col-md-5 m-1">
                <h4>Different cities of the {metroArea.name}</h4>
                {suburb.map((suburb)=>{
                    return (
                        <div key={suburb.id}>
                            <p>{suburb.city}</p>
                            <img src={suburb.image} alt={suburb.name} />
                            <p>{suburb.population}</p>
                        </div>
                    )
                }
            )}
            </div>
             );
        }
        return <div />;
    }

 renderMetro(metro) {
    return (
        <div className="col-md-5 m-1">
            <Card>
                    <CardImg top src={metro.image} alt={metro.name} />
                    <CardBody>
                        <CardTitle>{metro.name}</CardTitle>
                        <CardText>{metro.population}</CardText>
                    </CardBody>
                </Card>
        </div>
    )
}
    render() {
        if(this.props.metro) {
        return (
            <div className='row'>
                {this.renderMetro(this.props.metro)}
                {this.renderSuburb(this.props.metro.suburbs)}
            </div>
        );
    }
    return <div/>;
    }
}

export default MetroInfo;
