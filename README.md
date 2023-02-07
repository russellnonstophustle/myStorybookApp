# Dear Diary - An app for your life stories, Publicly or Privately
"Dear Diary" is a modern journaling app that allows users to keep their thoughts, experiences, and emotions organized in one place. The app allows users to create both public and private stories, giving them the option to share their experiences with a wider audience or keep them confidential.

**Link to project:** https://deardiary.cyclic.app/


## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.js, Express, MongoDB, GoogleAuth0, Passport, Handlebars

The front-end was built using HTML and CSS for creating the structure and styling of the application. JavaScript was used for creating dynamic elements on the front-end and making requests to the server.

The back-end of the application was developed using Node.js and Express, which provided the necessary framework for creating and managing the server-side of the application. MongoDB was used for storing the diary entries of the users, which were accessed using Mongoose, an Object Data Modeling library for MongoDB.

For user authentication, the application was integrated with GoogleAuth0 and Passport, which provided secure and reliable authentication services for the users. Passport also integrated with Handlebars, a template engine for Node.js, to provide dynamic data rendering on the front-end.

The entire application was developed using the Model-View-Controller (MVC) design pattern, which separated the application logic into three distinct components: the model, view, and controller. This ensured that the application was scalable, maintainable, and easily expandable.

## Optimizations in progress/ completed

Caching: Implement caching for frequently used data to reduce the number of database queries and improve performance. This can be achieved using a caching library such as Redis or Memcached.

Minification and Compression: Minifying the CSS, JavaScript, and HTML files can reduce the size of the files and improve the load time of the application. Also, using gzip compression can significantly reduce the size of the data transferred between the client and server.

Code Refactoring: Refactoring the code can improve the readability and maintainability of the code, making it easier to add new features and fix bugs in the future.

Lazy Loading: Lazy loading can improve the performance of the application by loading images and other resources only when they're needed, reducing the initial load time of the application.

## Lessons Learned:

GoogleAuth0 API Usage: The usage of the GoogleAuth0 API provided several insights into how to implement secure user authentication in web applications. Some of the key lessons learned were the importance of implementing proper error handling, understanding the flow of authentication, and properly securing sensitive information such as API keys.

Serverless Hosting with Cyclic: Hosting the application using serverless hosting with Cyclic provided a number of challenges, especially when it comes to the order of API calls.

API Call Order: The order of API calls is crucial in ensuring that the application works as expected. For example, the API calls to initialize the database connection need to be made before the API calls that use the database. I'd like to say I knew that before building this app.. sometimes learning the hard way is best, it burns it into memory.

Design Patterns: It is important to understand and use design patterns to structure the code in a scalable and maintainable manner such as Model-View-Controller (MVC), without some way of keeping things organized it's easy to get lost in the sauce.. trust me lol

Deployment: Properly deploying the application to a production environment is essential to making the application available to users. This includes setting up the necessary infrastructure, configuring the environment, and testing the application to ensure it works as expected. Doing so with cyclic gave me some headaches as it refused to cooperate with me when running the npm start, I was using cross-env for my hidden variables but with Cyclic you need to use their secret variable resource and that caused some hiccups in deployment. After pounding my face into my keyboard for awhile and some trial and error, stack overflow searches and reaching out to a fellow developer I learned how to implement their variable environment and was able to deploy.. safe to say I'll never forget that little detail in the future.

Performance: Performance is crucial to providing a good user experience, and it's important to monitor and optimize the performance of the application regularly. This includes monitoring the response times, memory usage, and CPU utilization of the application, and making optimizations as necessary. 

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those *whoa this is awesome* or *fuck yeah I did it!* moments. These were mine :D I love learning new things and look forward to implementing more features such as location tracking for Diary entries, spell check, and the ability to add voice recordings and maybe images too.
