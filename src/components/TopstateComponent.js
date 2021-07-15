import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderTopstateItem({top}) {
    return (
        <Card>
            <CardImg width="100%" src={top.image} alt={top.name} />
            <CardImgOverlay>
                <CardTitle>{top.name}</CardTitle>
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
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>10 Most Populated States</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>10 Most Populated States</h2>
                        <hr />
                </div>
            </div>
                <div className="row">
                    {topstate}
                </div>
            </div>
        );
    }





export default Topstate;