import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderZipcodeItem({zip}) {
    return (
        <Card>
            <CardImg width="100%" src={zip.image} alt={zip.city} />
            <CardImgOverlay>
                <CardTitle>{zip.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Zipcode(props) {
    
        const zipcode = props.zip.map( zip => {
            return (
                <div key={zip.id} className="col-md-5 m-1">
                    <RenderZipcodeItem zip={zip} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>10 Most Populated Zip Codes</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>10 Most Populated Zip Codes in the United States</h2>
                        <hr />
                </div>
            </div>
                <div className="row">
                    {zipcode}
                </div>
            </div>
        );
    }





export default Zipcode;