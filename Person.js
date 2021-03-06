class Person extends React.Component {
    render(){
        // Object Destructering //
        const { name, hobbies } = this.props;

        return(
            <div className="Person">
                <h1>{ name }</h1>
                <ul>
                    {hobbies.map (h => <li>{h}</li>)}
                </ul>
            </div>
        );
    }
}
