import React, { useEffect } from 'react';
import { Box, List } from '@mui/material';
import useIssuesActions from '@/hooks/useIssuesActions';
import useIssuesStore from '@/hooks/useIssuesStore';
import ViewListItem from '@/components/viewList/ViewListItem/ViewListItem';
import ViewAd from '@/components/viewList/ViewAd/ViewAd';

const ViewTemplate = () => {
  const { fetchIssues } = useIssuesActions();
  const issues = useIssuesStore();

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <Box sx={{ border: '4px dashed grey' }}>
      <List sx={{ width: '100%', minWidth: 545, bgcolor: 'background.paper' }}>
        {issues.map((issueInfo, number) => {
          if (number === 4) {
            return <ViewAd />;
          }
          return <ViewListItem issueInfo={issueInfo} key={number} />;
        })}
      </List>
    </Box>
  );
};

export default ViewTemplate;