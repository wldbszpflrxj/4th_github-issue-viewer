import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import resetCss from '@/styles/reset';
import Home from '@/pages/Home/Home';
import IssueList from '@/pages/IssueList/IssueList';
import IssueDetail from '@/pages/IssueDetail/IssueDetail';
import { ROUTES } from '@/constants/route';
import IssuesProvider from '@/context/IssuesProvider';

const App = () => (
  <>
    <Global styles={resetCss} />

    <IssuesProvider>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ISSUE_LIST} element={<IssueList />} />
        <Route path={`${ROUTES.ISSUE_DETAIL}/:issueId`} element={<IssueDetail />} />
      </Routes>
    </IssuesProvider>
  </>
);

export default App;
