import React from 'react';
import { usePagination } from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
});

export default function PostsPagination({}) {
  const classes = useStyles();
  const { allPosts } = usePagination({
    count: 10,
  });

  return (
    <nav>
      <ul className={classes.ul}>
        {allPosts.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…';
          } else if (type === 'page') {
            children = (
              <button type="button" style={{ fontWeight: selected ? 'bold' : undefined }} {...item}>
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </nav>
  );
}
