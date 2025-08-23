import { Component } from '../core/core'
import messageStroe from '../store/message'


export default class TextField extends Component {
    render() {
        this.el.innerHTML = /* html */ `
            <input value="${messageStroe.state.message}" />

        `

        const inputEl = this.el.querySelector('input')
        inputEl.addEventListener('input', () => {
            messageStroe.state.message = inputEl.value
        })
    }
}