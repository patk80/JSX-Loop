class App extends React.Component {
    render() {
        return(
            <div>
                <Person 
                name="Nico Hischier"
                hobbies={["Hockey", "Eating", "Working Out"]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));