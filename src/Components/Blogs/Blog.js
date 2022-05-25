import React from 'react';
import 'animate.css';
import './blog.css'

const Blog = () => {
    return (
        <div className='my-5'>
            <h1 className='animate__animated animate__fadeInRight  animate__slow 3s text-center py-4'>Welcome To Blogs</h1>

            {/* section-1......... */}
            <section className='container my-4 p-5 odd-section-css' >
                <h3> 1) How will you improve the performance of a React Application?</h3>
                <h5 className='text-left my-5'>
               <li> Keeping component state local where necessary</li>
                <li>Memoizing React components to prevent unnecessary re-renders</li>
               <li>Code-splitting in React using dynamic import()</li>
              <li>Windowing or list virtualization in React</li>
            <li>Lazy loading images in React</li>
                </h5>

                
            </section>
            {/* section 2 */}
            <section className='container p-5'>
                <h3>2) What are the different ways to manage a state in a React application?</h3>

                <h5 className='text-left my-5'>
                    1).Local (UI) state – Local state is data we manage in one or another component.

Local state is most often managed in React using the useState hook.
<br /> 2).Global (UI) state – Global state is data we manage across multiple components.

Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />3).Server state – Data that comes from an external server that must be integrated with our UI state.

Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />4).URL state – Data that exists on our URLs, including the pathname and query parameters.
                </h5>



            </section>
            {/* section 3 */}
            <section className='container p-5 odd-section-css'>
                <h3 className=''>3 How does prototypical inheritance work?</h3>

                <h5 className='text-left my-5'>JavaScript is a prototype-based, Object Oriented programming language. After the ES6 updates, JavaScript allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied.JavaScript is the most common of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding.

Today, we want to get you acquainted with prototypal inheritance in JavaScript to get you up to date with the ES6 capabilities.</h5>
            </section>
            <section className='container p-5'>
                <h3>4). You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <h5 className='text-left my-5'>

                    As I have an array of products, so if i want to find out the  name proprety from that array then i have to use map()
mathod to get each product after that i can easyly find out the name of the prouct.After that i have to use filter() methods to find out the products by name .


                </h5>


            </section>
            {/* section 5 */}
            <section className='container p-5 odd-section-css'>
                <h3 >5). What is a unit test? Why should write unit tests?</h3>
                <h5 className='text-left my-5'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."<br /><br />Frequently, unit testing is considered part of the programming phase, with the person that wrote the program...unit testing". That isn't because programmers hold the secret sauce to unit testing, it's because it makes sense. The programmer that wrote the prod code will likely know how to access the parts that can be tested easily and how to mock objects that can't be accessed otherwise. It's a time trade off.

Other times, someone will come in after the fact and write tests to help create safe guards while they refactor or further develop that area of the code base</h5>

            </section>
            
        </div>
    );
};

export default Blog;