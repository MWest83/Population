import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Directory extends Component {
    
    render() {
        const directory = this.props.metroArea.map(metro => {
            return (
                <div key={metro.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(metro.id)}>
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
            </div>
        );
    }
}




export default Directory;