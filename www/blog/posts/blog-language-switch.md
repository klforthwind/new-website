# Blog Switch From Python Flask to NodeJS React
## 06/08/2019

After originally completing the blog design in python, I had decided to start learning about NodeJS, along with its many different node modules. I had learned that it would be really hard to be running all Nginx, NodeJS and Python Flask frameworks on my linux server, as I really did not need all three.

I had come to the conclusion that I should just switch out Python Flask for NodeJS express, mainly because I viewed express very similar to Python Flask, and vary interchangeable. With the use of the NodeJS modules handlebars, express and markdown, I was able to switch out the framework for the blog handling and made it run on NodeJS rather than Python Flask. Handlebars allowed HTTP get requests to return less, along with having a nice template towards what an blog page should look like, while injecting the post data after being ran through markdown.

I was really happy with the outcome of website, as it was written very nicely, and it was not that difficult to understand what I was supposed to be doing in NodeJS.

Another bonus was that Nginx would redirect the /blog/ folder to NodeJS, allowing the student network of my old high school to access the blog.

Thanks for reading!

:)

##### Sources:
###### None