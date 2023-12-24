import React, { Component } from "react";
import { ProgressSpinner } from 'primereact/progressspinner';


export default class SpinnerComp extends Component {
    render() {
        return (
            <div className="card flex items-center justify-center mb-48">
                <ProgressSpinner style={{width: '100px', height: '100px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
            </div>
        )
    }
}