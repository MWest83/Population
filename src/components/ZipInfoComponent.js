import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, 
            BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



function RenderZip({zip}) {
    return (
        <div className="col-md-10 m-5">
            <Card>
                    <CardImg top src={zip.image} alt={zip.name} />
                    <CardBody>
                        <CardTitle>{zip.name}</CardTitle>
                        <CardText>{zip.population}</CardText>
                    </CardBody>
                </Card>
        </div>
    );
}


function ZipInfo(props) {
    if(props.zip) {
    return (
        <div className='container'>
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/zip">10 Most Populated Zip Codes</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.zip.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>{props.zip.name}</h2>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <RenderZip zip={props.zip} />
            </div>
        </div>
    );
 }
return <div/>;
}





export default ZipInfo;