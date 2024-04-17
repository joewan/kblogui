import { Component } from 'react';
import { Fragment } from "react/jsx-runtime";
import MyLayout from './components/MyLayout';

class App extends Component {
    render() {
        return (
            <Fragment>
                <MyLayout>
                    <h1>田园科技博客</h1>
                    <h2>田园科技博客</h2>
                    <h3>田园科技博客</h3>
                    <h4>田园科技博客</h4>
                </MyLayout>
            </Fragment>
        );
    }
}

export default App;
