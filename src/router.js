import React, {lazy, Suspense} from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
const Login = lazy(() => import('./pages/Login/index'));
const Main = lazy(() => import('./pages/Main/index'));
const Icons = lazy(() => import('./pages/Icons/index'));
const Tables = lazy(() => import('./pages/Tables/index'));
const Dashboard = lazy(() => import('./pages/Dashboard/index'));
const Tabs = lazy(() => import('./pages/Tabs/index'));
const Forms = lazy(() => import('./pages/Forms/index'));
const Upload = lazy(() => import('./pages/Forms/upload'));
const Charts = lazy(() => import('./pages/Charts/index'));
const ErrorRoute = lazy(() => import('./pages/Error/index'));

export const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div></div>}>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/main" component={Main} />
                    <Route path="/error/:code" component={ErrorRoute} />
                    <Route component={ErrorRoute} />
                </Switch>
            </Suspense>
        </Router>
    )
}

export const MainRoutes = () => {
    return (
        <Suspense fallback={<div></div>}>
            <Switch>
                <Redirect exact from='/main' to='/main/dashboard'/>
                <Route exact path="/main/dashboard" component={Dashboard} />
                <Route exact path="/main/icons" component={Icons} />
                <Route exact path="/main/tables" component={Tables} />
                <Route exact path="/main/tabs" component={Tabs} />
                <Route exact path="/main/forms" component={Forms} />
                <Route exact path="/main/upload" component={Upload} />
                <Route exact path="/main/charts" component={Charts} />
                <Route component={ErrorRoute} />
            </Switch>
        </Suspense>
    )
}