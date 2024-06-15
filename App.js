import React from "react";
import ReactDOM from "react-dom/client";
//React Element: => Object => htmlElement(on rendering)
   
// we created a react element in by using react.createElement in previous lectures 
// Now we will do same by JSX (A better & simpler practice)
// JSX was created by same facebook developers, it is a js Syntax which makes easy to create React elements

// JSX is transpiled before it reaches the js  by Parcel pakage => 'babel'
// So JSX is converted to => ReactElement (js object) which is converted to => htmlElement....all done by 'babel'

// React element using jsx
/*const Heading = <h1 className="head" tabIndex="1">Hello React JSX!🚀</h1>
console.log(Heading);*/

const Title = () => ( <h1 className="head" 
    tabIndex="1">Hello React JSX!🚀</h1>)

// React Functional Component - is a normal js function which returns some piece of jsx code or a react element
// f. components can be nested also

// javascript code
const number = 10000;
// we can write any piece of js code within {} inside jsx

// Component Composition
const HeadingComponent = () => (
<div id="contain">
    {/* putting js code within jsx */}
    <h2>{number}</h2>
    <h2>{200+300}</h2>
    
    {/* rendering above f.component inside div*/}
    <Title/>
    {/* <Title></Title> */}
 <h1>Hello React Functional Component!</h1>
 </div>
)

// using react element or a component inside react element  
const elem = <span>Element1 </span>;

const title2 = (
    <h1 className="head">
        element 2
        {elem} 
    </h1>
);
const root = ReactDOM.createRoot(document.getElementById("container"));
 
// if we want to render our f..component into root
// when babel sees a < /> with heading component
// root.render(< HeadingComponent />);

root.render(<HeadingComponent/>);