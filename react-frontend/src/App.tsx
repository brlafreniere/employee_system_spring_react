import React, {useState} from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom"

import './App.css';
import './css/Sidebar.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import EmployeeSwitch from "./components/Employees/EmployeeSwitch"
import DepartmentSwitch from "./components/Departments/DepartmentSwitch"

import Alert from "./types/Alert"

import AppContext from "./contexts/AppContext"

const Sidebar = (props: any) => {
    return (
        <div className="align-self-stretch">
            <nav id="sidebar">
                <header className="p-5">
                    <h3 className="text-white">
                        <a href="/" className="link-light">
                            Employee Management System
                        </a>
                    </h3>
                </header>

                <NavLink to="/employees" className="link-light sidebar-link">
                    <i className="bi bi-caret-right-fill"></i>
                    Employees
                </NavLink>
                <NavLink to="/departments" className="link-light sidebar-link">
                    Departments
                </NavLink>
            </nav>
        </div>
    )
}

function App() {
    const [alert, setAlert] = useState<Alert | null>(null)

    return (
        <AppContext.Provider value={{alert, setAlert}}>
            <div className="App">
                <div className="d-flex" id="AppContainer">
                    <Router forceRefresh={true}>
                        <Sidebar />
                        <main className="p-5 flex-grow-1">
                            {alert && (
                                <div className={`alert alert-${alert.type}`}>
                                    {alert.text}
                                </div>
                            )}
                            <Route path="/" exact>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus vel dolor egestas placerat. Cras nec dictum dolor. Phasellus iaculis, nisi quis varius tristique, purus diam rhoncus tortor, ac aliquet nulla tellus sit amet arcu. In ut purus lacus. Integer efficitur urna augue, a maximus eros eleifend ac. Maecenas quis mollis ligula. Aliquam vulputate nibh pretium ante euismod fringilla. Cras lacinia ullamcorper est et dapibus.</p>
                                <p>Phasellus ornare maximus turpis. Nulla nec vestibulum dui. Praesent imperdiet elit id augue ultrices mollis. Etiam eu velit at diam lobortis hendrerit. Mauris id dignissim nunc. Ut nec dignissim ipsum, feugiat vulputate tortor. Integer sit amet placerat est, in tempor nisi. Sed urna quam, mattis ut lectus at, malesuada finibus nisi.</p>
                                <p>Cras nec mi vitae tellus interdum dapibus nec vel magna. Donec ut urna posuere nulla mattis volutpat quis a massa. Vivamus molestie, elit tempor vestibulum finibus, turpis libero feugiat mauris, quis accumsan nibh justo non est. Ut consequat quis lacus vitae suscipit. Maecenas mi lorem, gravida quis placerat at, commodo venenatis leo. Praesent vel dolor vestibulum lorem condimentum imperdiet. Donec feugiat magna non odio fringilla, eu ornare nisl hendrerit. Duis convallis eros purus, vel commodo lectus pretium a.</p>
                                <p>Aliquam quis est pellentesque, ultricies augue vel, aliquam sem. In in dapibus massa. Donec sollicitudin finibus dictum. Sed sagittis dui aliquam, lobortis erat vitae, sagittis lorem. Suspendisse feugiat, tortor eu dignissim tincidunt, nisi leo semper sem, ullamcorper lobortis ipsum dui id augue. Nunc sodales risus nec iaculis eleifend. In lacinia at nisi a lobortis. Aenean mollis finibus nunc, nec tristique ipsum ultrices ut. Phasellus malesuada lectus ut ligula ullamcorper, ac posuere tortor pulvinar. Quisque rutrum laoreet felis, sed tempus quam vehicula quis. Duis non purus quis velit hendrerit varius. Duis eu euismod tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc laoreet mauris ut rhoncus tincidunt.</p>
                                <p>Donec tincidunt purus sit amet lectus feugiat dapibus. Mauris at urna id nisl euismod cursus. Sed vulputate, leo vitae pellentesque efficitur, nulla sapien gravida sapien, in fringilla odio ante a ex. Maecenas a aliquam tellus, at tincidunt turpis. Integer quis tortor ultricies, ornare tortor in, tempor risus. Sed malesuada congue lacus, quis porta elit sagittis eget. Nullam massa nisi, interdum sed rhoncus et, dapibus fringilla elit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus vel dolor egestas placerat. Cras nec dictum dolor. Phasellus iaculis, nisi quis varius tristique, purus diam rhoncus tortor, ac aliquet nulla tellus sit amet arcu. In ut purus lacus. Integer efficitur urna augue, a maximus eros eleifend ac. Maecenas quis mollis ligula. Aliquam vulputate nibh pretium ante euismod fringilla. Cras lacinia ullamcorper est et dapibus.</p>
                                <p>Phasellus ornare maximus turpis. Nulla nec vestibulum dui. Praesent imperdiet elit id augue ultrices mollis. Etiam eu velit at diam lobortis hendrerit. Mauris id dignissim nunc. Ut nec dignissim ipsum, feugiat vulputate tortor. Integer sit amet placerat est, in tempor nisi. Sed urna quam, mattis ut lectus at, malesuada finibus nisi.</p>
                                <p>Cras nec mi vitae tellus interdum dapibus nec vel magna. Donec ut urna posuere nulla mattis volutpat quis a massa. Vivamus molestie, elit tempor vestibulum finibus, turpis libero feugiat mauris, quis accumsan nibh justo non est. Ut consequat quis lacus vitae suscipit. Maecenas mi lorem, gravida quis placerat at, commodo venenatis leo. Praesent vel dolor vestibulum lorem condimentum imperdiet. Donec feugiat magna non odio fringilla, eu ornare nisl hendrerit. Duis convallis eros purus, vel commodo lectus pretium a.</p>
                                <p>Aliquam quis est pellentesque, ultricies augue vel, aliquam sem. In in dapibus massa. Donec sollicitudin finibus dictum. Sed sagittis dui aliquam, lobortis erat vitae, sagittis lorem. Suspendisse feugiat, tortor eu dignissim tincidunt, nisi leo semper sem, ullamcorper lobortis ipsum dui id augue. Nunc sodales risus nec iaculis eleifend. In lacinia at nisi a lobortis. Aenean mollis finibus nunc, nec tristique ipsum ultrices ut. Phasellus malesuada lectus ut ligula ullamcorper, ac posuere tortor pulvinar. Quisque rutrum laoreet felis, sed tempus quam vehicula quis. Duis non purus quis velit hendrerit varius. Duis eu euismod tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc laoreet mauris ut rhoncus tincidunt.</p>
                                <p>Donec tincidunt purus sit amet lectus feugiat dapibus. Mauris at urna id nisl euismod cursus. Sed vulputate, leo vitae pellentesque efficitur, nulla sapien gravida sapien, in fringilla odio ante a ex. Maecenas a aliquam tellus, at tincidunt turpis. Integer quis tortor ultricies, ornare tortor in, tempor risus. Sed malesuada congue lacus, quis porta elit sagittis eget. Nullam massa nisi, interdum sed rhoncus et, dapibus fringilla elit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat lectus vel dolor egestas placerat. Cras nec dictum dolor. Phasellus iaculis, nisi quis varius tristique, purus diam rhoncus tortor, ac aliquet nulla tellus sit amet arcu. In ut purus lacus. Integer efficitur urna augue, a maximus eros eleifend ac. Maecenas quis mollis ligula. Aliquam vulputate nibh pretium ante euismod fringilla. Cras lacinia ullamcorper est et dapibus.</p>
                                <p>Phasellus ornare maximus turpis. Nulla nec vestibulum dui. Praesent imperdiet elit id augue ultrices mollis. Etiam eu velit at diam lobortis hendrerit. Mauris id dignissim nunc. Ut nec dignissim ipsum, feugiat vulputate tortor. Integer sit amet placerat est, in tempor nisi. Sed urna quam, mattis ut lectus at, malesuada finibus nisi.</p>
                                <p>Cras nec mi vitae tellus interdum dapibus nec vel magna. Donec ut urna posuere nulla mattis volutpat quis a massa. Vivamus molestie, elit tempor vestibulum finibus, turpis libero feugiat mauris, quis accumsan nibh justo non est. Ut consequat quis lacus vitae suscipit. Maecenas mi lorem, gravida quis placerat at, commodo venenatis leo. Praesent vel dolor vestibulum lorem condimentum imperdiet. Donec feugiat magna non odio fringilla, eu ornare nisl hendrerit. Duis convallis eros purus, vel commodo lectus pretium a.</p>
                                <p>Aliquam quis est pellentesque, ultricies augue vel, aliquam sem. In in dapibus massa. Donec sollicitudin finibus dictum. Sed sagittis dui aliquam, lobortis erat vitae, sagittis lorem. Suspendisse feugiat, tortor eu dignissim tincidunt, nisi leo semper sem, ullamcorper lobortis ipsum dui id augue. Nunc sodales risus nec iaculis eleifend. In lacinia at nisi a lobortis. Aenean mollis finibus nunc, nec tristique ipsum ultrices ut. Phasellus malesuada lectus ut ligula ullamcorper, ac posuere tortor pulvinar. Quisque rutrum laoreet felis, sed tempus quam vehicula quis. Duis non purus quis velit hendrerit varius. Duis eu euismod tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc laoreet mauris ut rhoncus tincidunt.</p>
                                <p>Donec tincidunt purus sit amet lectus feugiat dapibus. Mauris at urna id nisl euismod cursus. Sed vulputate, leo vitae pellentesque efficitur, nulla sapien gravida sapien, in fringilla odio ante a ex. Maecenas a aliquam tellus, at tincidunt turpis. Integer quis tortor ultricies, ornare tortor in, tempor risus. Sed malesuada congue lacus, quis porta elit sagittis eget. Nullam massa nisi, interdum sed rhoncus et, dapibus fringilla elit.</p>
                            </Route>
                            <Route path="/employees" component={EmployeeSwitch} />
                            <Route path="/departments" component={DepartmentSwitch} />
                        </main>
                    </Router>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;
