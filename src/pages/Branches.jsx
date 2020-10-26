import React from "react";
import {NavLink} from "react-router-dom";

const Tr = (props)=>{
    return <tr>
        <th scope="row">{props.index}</th>
        <td>{props.name}</td>
        <td>{props.name_rus}</td>
        <td><NavLink to={"editBranch/"+props.pageId}>[редактировать]</NavLink></td>
    </tr>
}

export class Branches extends React.Component{
    constructor() {
        super();
        this.state = {
            branches: []
        }
    }
    componentDidMount() {
        fetch("http://reez74.bget.ru/getBranchesJSON")
            .then(response=>response.json())
            .then(branches=>{
                this.setState({
                    branches: branches.map((branch,index)=>{
                        return <Tr key={index} pageId={branch.id} index={index+1} name={branch.name} name_rus={branch.name_rus} />
                    })
                })

            })
    }

    render() {
        return <div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Catalog</th>
                    <th scope="col">Каталог</th>
                    <th scope="col">Управление</th>
                </tr>
                </thead>
                <tbody>
                {this.state.branches}
                </tbody>
            </table>
            <NavLink className="btn btn-primary" to="addBranch">Добавить каталог</NavLink>
        </div>
    }
}