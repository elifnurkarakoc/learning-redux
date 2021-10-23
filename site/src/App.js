import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./views/About";
import { useSelector } from "react-redux";
import { routes } from "./routes";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
const mapStateToProps = (state) => ({
  dark: state.site.dark,
  user: state.auth.user,
});
function App({dark,user}) {
  // const { dark } = useSelector((state) => state.site);
  // const { user } = useSelector((state) => state.auth);
  return (
    <Router>
      <div className={dark ? "dark" : "light"}>
        <Header />
        <Switch>
          {routes.map((route) => (
            <Route
              exact={route.exact}
              path={route.path}
              render={() => {
                if (route.auth && !user) {
                  return <Redirect to="/login" />;
                }
                return <route.component />;
              }}
            />
          ))}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
