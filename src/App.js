import { Component } from "./core/core.js"

export default class App extends Component {
    constructor() {
        super()
    }
    render() {
        this.el.textContent = 'Hello, world!'
    }
}