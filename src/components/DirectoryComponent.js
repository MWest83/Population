import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderDirectoryItem({metro, onClick}) {
    return (
        <Card onClick={() => onClick(metro.id)}>
            <CardImg width="100%" src={metro.image} alt={metro.name} />
            <CardImgOverlay>
                <CardTitle>{metro.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {
    
        const directory = props.metroArea.map(metro => {
            return (
                <div key={metro.id} className="col-md-5 m-1">
                    <RenderDirectoryItem metro={metro} onClick={props.onClick} />
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





export default Directory;