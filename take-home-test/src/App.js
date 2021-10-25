import logo from './LogoBareksa.png';
import search from './search.png';
import notif from './notif.png';
import downbutton from './downbutton.png';
import setting from './setting.png';
import users from './components/users.js';
import conversion from './components/conversion.js';
import './css/App.css';
import table from './components/table.js';
import DataList from './components/ordersTable.js';
import calender from './components/calender.js';

function App() {
    return (
        <div className="dashboard">
            <div className="navBar">
                <div className="navBarKiri">
                    <div className="logo"><img src={logo} /></div>
                    <div className="profile">
                        <div className="profileKiri">
                            <div className="fotoProfile"><p>RH</p></div>
                        </div>
                        <div className="profileTengah">
                            <div className="contentProfileTengah">
                                <div className="namaProfile">Reinhart H.</div>
                                <div className="lokasiProfile">Kemang, Jakarta</div>
                            </div>
                        </div>
                        <div className="profileKanan">
                            <div className="contentProfileKanan">
                                <img src={downbutton} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navBarKanan">
                        <div className="searchBar">
                            <div className="searchBarKiri"><p>Search Text</p></div>
                            <div className="searchBarKanan"><img src={search} /></div>
                        </div>
                    <div className="notif"><img src={notif} /></div>
                    <div className="setting"><img src={setting} /></div>
                </div>
            </div>

            <div className="dateBar">
                <div className="currentDate"><p>8 April 2021</p></div>
            </div>
            <div className="content">
                <div className="firstContent">
                    <div className="Conversion">
                        {conversion()}
                    </div>

                    <div className="Users">
                        {users()}
                    </div>
                    <div className="graph">

                    </div>
                </div>

                <div className="secondContent">
                    <div className="Calender">
                        <div className="CalenderContainer">
                            <div className="CalenderHeader">
                                <div className="CalenderHeaderKiri">March</div>
                                <div className="CalenderHeaderKanan">2021</div>
                            </div>
                            <div className="CalenderBody">
                                { calender()}
                            </div>
                            <div className="CalenderFoooter">
                                <ul>
                                    <button className="tombolCancel">Cancel</button>
                                    <button className="tombolFilter">Filter</button>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="ordersTableContainer">
                        <h1>Orders</h1>
                        <DataList/>
                        </div>

                </div>
            </div>
        </div>
    );
}

export default App;
