var posts=["posts/5069/","posts/cbf3/","posts/ccba/","posts/91eb/","posts/6a95/","posts/b6a7/","posts/7eab/","posts/2b5b/","posts/5b9d/","posts/91f8/","posts/4b39/","posts/4393/","posts/716a/","posts/f73/","posts/3979/","posts/7657/","posts/1b4f/","posts/c16f/","posts/1d2b/","posts/fc66/","posts/7b74/","posts/bf20/","posts/74b4/","posts/7ade/","posts/b002/","posts/2c50/","posts/d5ee/","posts/5a0/","posts/d60a/","posts/c326/","posts/24e2/","posts/5a79/","posts/cc10/","posts/3682/","posts/f568/","posts/b68d/","posts/ee56/","posts/9253/"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}