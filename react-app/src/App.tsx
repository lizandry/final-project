// import React, { Component } from 'react';
import * as React from 'react';
// * - React class components will be the class instance. So if you had `class Foo extends React.Component<{}> {}`
// *   and used `React.ElementRef<typeof Foo>` then the type would be the instance of `Foo`.
// import * as React from 'react';
// import { Component } as Component from 'react';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        };
    }
    render() {
const friendship = 'friendship';

        return (
            <div className='App'>
                hello world!!
            </div>
        )
    }
}
export default App;