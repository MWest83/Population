import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, 
            BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderTop({top}) {
    return (
        <div className="col-md-10 m-5">
            <Card>
                    <CardImg top src={top.image} alt={top.name} />
                    <CardBody>
                        <CardTitle>{top.name}</CardTitle>
                        <CardText>{top.population}</CardText>
                    </CardBody>
                </Card>
        </div>
    );
}


function StateInfo(props) {
    if(props.top) {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/topstate">10 Most Populated States</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.top.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{props.top.name}</h2>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <RenderTop top={props.top} />
            </div>
        </div>
    );
}
return <div/>;
}





export default StateInfo;