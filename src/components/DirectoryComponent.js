import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderDirectoryItem({metro}) {
    return (
        <Card>
            <Link to={`/directory/${metro.id}`}>
                <CardImg width="100%" src={metro.image} alt={metro.name} />
                <CardImgOverlay>
                    <CardTitle>{metro.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory(props) {
    
        const directory = props.metroArea.map(metro => {
            return (
                <div key={metro.id} className="col-md-5 m-1">
                    <RenderDirectoryItem metro={metro} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>10 Most Populated Metro Areas</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>10 Most Populated Metro Areas</h2>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }





export default Directory;