import React, { Component } from "react";

export class AppList extends Component {
    state = {
        list: [
            {
                id: 1,
                item: "tp",
            },
            {
                id: 2,
                item: "tea",
            },
            {
                id: 3,
                item: "soap",
            },
        ],

    }

    showItemList = () => {
        return (
            <ul>
                {this.state.list.map(({ item, id }) =>
                    <li key={id}>{item}</li>
                )}
            </ul>
        )
    }


    render() {
        return (
            <div className="App">
                <h1>Hello</h1>
                <p>We're going to MAP data</p>
                <ul>
                    {this.state.list.map((elem) => {
                        return <li key={elem.id}>{elem.item}</li>
                    })}
                    <br />
                    {/* with destructuring */}
                    {this.state.list.map(({ item, id }) => {
                        return <li key={id}>{item}</li>
                    })}
                    <br />
                    {/* implicit */}
                    {this.state.list.map(({ item, id }) =>
                        <li key={id}>{item}</li>
                    )}
                    <br />
                </ul>
                {/* function version */}
                {this.showItemList()}
            </div>
        )
    }
}

export default AppList