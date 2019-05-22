import React, {lazy, Suspense} from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
const Login = lazy(() => import('./pages/Login/index'));
const Main = lazy(() => import('./pages/Main/index'));
const Icons = lazy(() => import('./pages/Icons/index'));
const Tables = lazy(() => import('./pages/Tables/index'));
const Dashboard = lazy(() => import('./pages/Dashboard/index'));
const Tabs = lazy(() => import('./pages/Tabs/index'));

export const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/main" component={Main} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export const MainRoutes = () => {
    return (
        <Switch>
            <Redirect exact from='/main' to='/main/dashboard'/>
            <Route path="/main/dashboard" component={Dashboard} />
            <Route path="/main/icons" component={Icons} />
            <Route path="/main/tables" component={Tables} />
            <Route path="/main/tabs" component={Tabs} />
        </Switch>
    )
}