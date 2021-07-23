import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-4 offset-0">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/directory">10 Most Populated Cites</Link></li>
                            <li><Link to="/topstate">10 Most Populated States</Link></li>
                            <li><Link to="/zip">10 Most Populated Zip Codes</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+19147552374"><i className="fa fa-phone" /> 1-914-755-2374</a><br />
                        <a role="button" className="btn btn-link" href="michael.west8384@gmail.com"><i className="fa fa-envelope-o" /> michael.west8384@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;