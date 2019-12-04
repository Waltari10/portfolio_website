import React from 'react';
import Typography from '@material-ui/core/Typography';

import WidthLimiter from '../components/WidthLimiter';

const articles = [
  {
    href: 'https://medium.com/swlh/nonviolent-code-review-bd6238fe0775',
    name: 'Nonviolent Code Review',
    ariaLabel: 'Open blog post about Nonviolent Code Review',
  },
  {
    // eslint-disable-next-line max-len
    href: 'https://medium.com/@valtterilaine/how-to-setup-proxy-server-for-reactjs-and-node-on-heroku-with-docker-689e367059d9',
    name: 'How to Setup Proxy Server for ReactJS and Node on Heroku With Docker',
    ariaLabel: 'Open blog post about how to Setup Proxy Server for ReactJS and Node on Heroku With Docker',
  },
];

const Blog = () => {

  return (
    <WidthLimiter
      name="blog"
    >
      <Typography
        gutterBottom
        variant="h4"
      >Blog Posts</Typography>
      <a name="blog" />

      {articles.map(article => (
        <Typography
          variant="body1"
          key={article.name}
        >
          <a
            rel="noopener noreferrer"
            aria-label={article.ariaLabel}
            target="black"
            href={article.href}
          >
            {article.name}
          </a>
        </Typography>
      ))}
    </WidthLimiter>
  );
};

export default Blog;