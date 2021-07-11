import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderTopstateItem({top}) {
    return (
        <Card>
            <CardImg width="100%" src={top.image} alt={top.state} />
            <CardImgOverlay>
                <CardTitle>{top.state}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Topstate(props) {
    
        const topstate = props.topState.map(top => {
            return (
                <div key={top.id} className="col-md-5 m-1">
                    <RenderTopstateItem top={top} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {topstate}
                </div>
            </div>
        );
    }





export default Topstate;