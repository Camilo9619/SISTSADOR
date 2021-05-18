import React, { Component } from 'react';

class Tabla_Prestadores extends Component {
    render() {
        return (
            <div>
                <div>
                <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Age</th>
                            <th scope="col">Date</th>
                            <th scope="col">Location</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Maria </td>
                            <td>Morisson</td>
                            <td>@dragon</td>
                            <td>21</td>
                            <td>1990/12/01</td>
                            <td>Melbourne</td>
                            <td><button className="btn btn-success">In Progress</button></td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>Bobby</td>
                            <td>Brown</td>
                            <td>@boboby</td>
                            <td>35</td>
                            <td>1992/12/01</td>
                            <td>Tokio</td>
                            <td><button className="btn btn-primary">Complete</button></td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>Alexander</td>
                            <td>Medinberg</td>
                            <td>@medimedi</td>
                            <td>21</td>
                            <td>1975/12/01</td>
                            <td>Moscow</td>
                            <td><button className="btn btn-success">In Progress</button></td>
                            </tr>
                            <tr>
                            <th scope="row">4</th>
                            <td>Vera</td>
                            <td>Lori</td>
                            <td>@lori</td>
                            <td>44</td>
                            <td>1978/12/01</td>
                            <td>Melbourne</td>
                            <td><button className="btn btn-primary">Complete</button></td>
                            </tr>
                            <tr>
                            <th scope="row">5</th>
                            <td>Maria</td>
                            <td>Morison</td>
                            <td>@dragon</td>
                            <td>25</td>
                            <td>1992/12/01</td>
                            <td>London</td>
                            <td><button className="btn btn-primary">Complete</button></td>
                            </tr>
                            <tr>
                            <th scope="row">6</th>
                            <td>Bobby</td>
                            <td>Brown</td>
                            <td>@boboby</td>
                            <td>29</td>
                            <td>1988/12/01</td>
                            <td>Rome</td>
                            <td><button className="btn btn-primary">Complete</button></td>
                            </tr>
                            <tr>
                            <th scope="row">7</th>
                            <td>Alexander</td>
                            <td>Medinberg</td>
                            <td>@medimedi</td>
                            <td>38</td>
                            <td>1984/12/01</td>
                            <td>Vienna</td>
                            <td><button className="btn btn-success">In Progress</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Tabla_Prestadores;