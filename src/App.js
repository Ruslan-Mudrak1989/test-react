import React, {Component} from 'react';
import './App.css';


const someDocList = [
    {
        name: 'Document1',
    },
    {
        name: 'Document2',
    },
    {
        name: 'Document3',
    },
    {
        name: 'Document4',
    },
];

const getMatchedList = function (value){
    return someDocList.filter(item => item.name.includes(value) ||
        item.name.includes(value));
};

const SomeDocList = props => (
    <div>
        <div className={'list-body'}>
            {
                someDocList.map((item, index) => (
                    <ul key={index}>
                        <li> {item.name} </li>
                    </ul>))
            }
        </div>
    </div>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onSearchClickDocList: [...someDocList],
        };
        this.onSearchClickDocList = this.onSearchClickDocList.bind(this);
    }

    onSearchClickDocList(value) {
        this.setState({
            onSearchClickDocList: getMatchedList(value),
        });
    }

    render() {
        return (
            <div>
                <div className={'search-panel'}>
                    <div className={'inner-content'}>
                        <input type="text"/>
                        <button onClick={this.onSearchClickDocList} type="button" className="btn btn-outline-success">Search</button>
                    </div>
                </div>
                <div>
                    <SomeDocList
                        list={this.state.onSearchClickDocList}
                    />
                </div>
            </div>

        );
    }
}


export default App;
