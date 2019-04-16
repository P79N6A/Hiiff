import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import AsyncComponent from 'component/asyncComponent';
import App from '../page/App';
const Index = AsyncComponent(() => import('../page/Index'));
// 个人中心
const Account = AsyncComponent(() => import('../page/UserAccount'));
const Apply = AsyncComponent(() => import('../page/UserApply'));
// 金椰奖
const HiiffIntro = AsyncComponent(() => import('../page/Hiiff'));
const HiiffAward = AsyncComponent(() => import('../page/HiiffAward'));
const HiiffProject = AsyncComponent(() => import('../page/HiiffProject'));
// 媒体中心
const MediaCenter = AsyncComponent(() => import('../page/MediaCenter'));
// 关于我们
const AboutUs = AsyncComponent(() => import('../page/AboutUs'));
export default (
  <HashRouter>
    <App>
      <Switch>
        <Route component={Index} path="/" exact />
        {/* 个人中心 */}
        <Route component={Account} path="/userCenter">
          <Route component={Apply} path="/apply" />
        </Route>
        {/* 金椰奖 */}
        <Route component={HiiffIntro} path="/hiiff">
          <Route component={HiiffAward} path="/award" />
          <Route component={HiiffProject} path="/project" />
        </Route>
        {/* 媒体中心 */}
        <Route component={MediaCenter} path="/mediaCenter" />
        {/* 关于我们 */}
        <Route component={AboutUs} path="/aboutUs" />
      </Switch>
    </App>
  </HashRouter>
);
