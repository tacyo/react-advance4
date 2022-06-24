import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefalutLayout } from "../components/templete/DefaultLayout";
import { HeaderOnly } from "../components/templete/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefalutLayout>
            <Top />
          </DefalutLayout>
        </Route>
        <Route exact path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
