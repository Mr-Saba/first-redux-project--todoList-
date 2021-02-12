import "../App.css"
import { Link } from "react-router-dom"
import React, { Component } from 'react'

export default class TodoRoutes extends Component {
    constructor(props) {
        super(props)
    }
    render() {
            return (
            <div className="Routes">
                    <div className="Flex">
                        <Link to="/" style={{textDecoration: "none"}}><div style={this.props.url==="/" ? { color: "red"} : {}}  className="Link" >All</div> </Link>
                        <div>/</div>
                        <Link to="/completed" style={{ textDecoration: "none" }} ><div style={this.props.url==="completed" ? { color: "red"} : {}} className="Link">Completed</div> </Link>
                        <div>/</div>
                        <Link to="/active" style={{ textDecoration: "none" }}><div style={this.props.url==="active" ? { color: "red"} : {}} className="Link">Active</div></Link>
                    </div>
                </div>
    )
}
}
