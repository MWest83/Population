import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, 
            BreadcrumbItem, CardDeck, CardSubtitle } from 'reactstrap';
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

function RenderCounty({county}) {
    if (county) {
        return (
            <div className="col-md-5 m-1">
            <h2>Popular Attractions</h2>
            {county.map((county)=> {
                return (
                    <div key={county.id} classname='col-md-3'>
                         <CardDeck>
                                    <Card>
                                        <CardImg top width="100%" src={county.image} alt={county.name} />   
                                        <CardBody>
                                        <CardTitle tag="h5">{county.name}</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">{county.population}</CardSubtitle>
                                        </CardBody>
                                    </Card> 
                            </CardDeck>
                    </div>
                    );
                }
            )}
         </div>
         );
        }
    return <div />;
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
                <RenderCounty county={props.county} />
            </div>
        </div>
    );
}
return <div/>;
}





export default StateInfo;