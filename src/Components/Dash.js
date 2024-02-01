import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search'

function Dash() {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-light bg-dark">
                <div className="container-fluid">
                    <div className="navbar-name text-white fs-4 ">Welcome, David!</div>
                    <div className="navbar-brand text-white fs-4 justify-content-center">Spearpoint Advisors</div>
                    <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link to='/action' className="dropdown-item">Action</Link></li>
                            <li><Link to='/another-action' className="dropdown-item">Another action</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Search */}
            <Search />

            {/* Table */}
            <div className='widget w-100 h-100 border'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">
                                <button className="btn btn-primary btn-sm">Create</button>
                            </th>
                            <th scope="col">Company Name</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Apple</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>Mark@apple.com</td>
                            <td>813-482-3478</td>
                            <button className='btn btn-primary' id='info-btn'>Get Info</button>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Microsoft</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Google</td>
                            <td>Joe</td>
                            <td>Thomas</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Google</td>
                            <td>Joe</td>
                            <td>Thomas</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Google</td>
                            <td>Joe</td>
                            <td>Thomas</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row row-cols-1 row-cols-md-2 m-2">
                <div class="col">
                    <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Company Information</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                            <div class="card-body">
                                <h5 class="card-title">Maps</h5>
                                <p class="card-text">This card will display a map to show the company info from the API.</p>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Dash;
