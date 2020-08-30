class App extends React.Component {
    render() {
        return(
            <div>
                <Person 
                name="Nico Hischier"
                hobbies={["Hockey", "Eating", "Working Out"]}
                />

                <Person 
                name="Tony Hawk"
                hobbies={["Skateboarding", "Video Games", "Exploring"]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
