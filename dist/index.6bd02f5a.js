i;
//    const heading=React.createElement("h1",{id:"heading", xyz:"abcd"},"Hello world from React!");
//    console.log(heading); // return object
//    const root=ReactDOM.createRoot(document.getElementById("root"));
//    root.render(heading);
//creating nested tag in react
//  <div id='parent'>
//    <div id="child1">
//      <h1>I am h1 tag</h1>
//      <h2>I am h2 tag</h2>
//    </div>
//    <div id="child2">
//      <h1>I am h1 tag</h1>
//      <h2>I am h2 tag</h2>
//    </div>
//  </div>
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ])
]);
console.log(parent); //object that is react element that broswer understand
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
