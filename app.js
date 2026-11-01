  // const heading = document.createElement('h1')
  //  heading.innerHTML = 'hello world from javascript'
  //  const root = document.getElementById('root')
  //  root.appendChild(heading)


    // const heading = React.createElement("i",{id:"heading"},"My new project by using react")
    // const heading = React.createElement("div",{id:"parent"}, 
    // React.createElement("div",{id:"Child"},
    // [React.createElement("h1",{id:"parent"},"this is h1 tag"),React.createElement("h2",{id:"parent"},"this is h2 tag") ],))
    // console.log(heading)
    // const root = ReactDOM.createRoot(document.getElementById("root"))
    // root.render(heading)


    const heading = React.createElement("div",{id:"parent"},
      [
        React.createElement("div",{id:"child1"},
          [React.createElement("h1",{},"this is h1 tag"),
            React.createElement("h2",{}, "this is h2 tag")
          ]
        ),
        React.createElement("div",{id:'child2'},
          [React.createElement("i",{}, "this is i tabg" ),
            React.createElement("B",{},"this is bold tag")
          ]
        )
      ]
    )

    const root = ReactDOM.createRoot(document.getElementById("root"))
    root.render(heading)