const heading=React.createElement(
    'div'
,{id:"parent"},
[React.createElement('div',{id:"child1"},
    [React.createElement('h1',{},"h1"),React.createElement('h2',{},"h2")]),
    React.createElement('div',{id:"child2"},
[React.createElement('h1',{},"h1"),React.createElement('h2',{},"h2")])]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);