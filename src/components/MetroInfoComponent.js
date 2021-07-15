import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardDeck, CardSubtitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';






function RenderMetro({metro}) {
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
    );
}
    
    function RenderSuburb({suburbs}) {
        if (suburbs) {
            return (
                <div className="col-md-5 m-1">
                <h4> Most Populated Cities</h4>
                {suburbs.map((suburb)=> {
                    return (
                        <div key={suburb.id} classname='col-md-5'>
                                <CardDeck>
                                        <Card>
                                            <CardImg top width="100%" src={suburb.image} alt={suburb.city} />   
                                            <CardBody>
                                            <CardTitle tag="h5">{suburb.city}</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">{suburb.population}</CardSubtitle>
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

    function MetroInfo(props) {
        if(props.metro) {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">10 Most Populated Metro Areas</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.metro.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.metro.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <RenderMetro metro={props.metro} />
                    <RenderSuburb suburbs={props.suburb} />
                </div>
            </div>
        );
    }
    return <div/>;
    }


export default MetroInfo;
