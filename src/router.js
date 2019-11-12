import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { checkIsAdmin, checkAuth } from './utils/utils';
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
const Permission = lazy(() => import('./pages/Permission/index'));
const Locale = lazy(() => import('./pages/Locale/index'));
const Editor = lazy(() => import('./pages/Editor/index'));
const Markdown = lazy(() => import('./pages/Markdown/index'));

export const AppRoutes = () => {
	return (
		<Router>
			<Suspense fallback={<div></div>}>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/login" component={Login} />
					<AuthRoute path="/main" component={Main} />
					<Route path="/error/:code" component={ErrorRoute} />
					<Route component={ErrorRoute} />
				</Switch>
			</Suspense>
		</Router>
	);
};

export const MainRoutes = () => {
	return (
		<Suspense fallback={<div></div>}>
			<Switch>
				<Redirect exact from="/main" to="/main/dashboard" />
				<Route exact path="/main/dashboard" component={Dashboard} />
				<Route exact path="/main/icons" component={Icons} />
				<Route exact path="/main/tables" component={Tables} />
				<Route exact path="/main/tabs" component={Tabs} />
				<Route exact path="/main/forms" component={Forms} />
				<Route exact path="/main/upload" component={Upload} />
				<Route exact path="/main/charts" component={Charts} />
				<AdminRoute exact path="/main/permission" component={Permission} />
				<Route exact path="/main/i18n" component={Locale} />
				<Route exact path="/main/editor" component={Editor} />
				<Route exact path="/main/markdown" component={Markdown} />
				<Route component={ErrorRoute} />
			</Switch>
		</Suspense>
	);
};

// 路由管理员权限校验
const AdminRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				// checkIsAdmin 方法里做了权限校验
				checkIsAdmin() ? <Component {...props} /> : <Redirect to="/error/403" />
			}
		/>
	);
};

// 路由登录鉴权
const AuthRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				// checkAuth 方法判断是否已登录
				checkAuth() ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};
