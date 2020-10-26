import React, {createRef} from "react";

export class AddBranch extends React.Component{
    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);
        this.HandleInputChange = this.HandleInputChange.bind(this);
        this.State = {
            name: "",
            name_rus: ""
        }
    }

    handleSave (){
        let formData = new FormData();
        formData.append('name',this.state.name);
        formData.append('name_rus',this.state.name_rus);
        fetch("http://reez74.bget.ru/addBranch", {
            method: 'POST',
            body: formData
        })
            .then(response=>response.json())
            .then(result=>console.log(result))
    }

    componentDidMount() {
        console.log("вызван componentDidMount");
    }

    HandleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return<div>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-link active" id="nav-extraHTML-tab" data-toggle="tab" href="#nav-extraHTML" role="tab"
                       aria-controls="nav-extraHTML" aria-selected="false">Добавить каталог</a>
                    <button onClick={this.handleSave} className="btn btn-light ml-auto">[сохранить]</button>
                </div>
            </nav>

            <div className="tab-pane fade show active" id="nav-extraHTML" role="tabpanel" aria-labelledby="nav-extraHTML-tab">
                <div className="col-10 mx-auto my-3">
                    <div className="mb-3">
                        <input name = "name" onChange={this.HandleInputChange} type="text" className="form-control" placeholder="Название каталога ENG"/>
                    </div>
                    <div className="mb-3">
                        <input name = "name_rus" onChange={this.HandleInputChange} type="text" className="form-control"placeholder="Название каталога RUS"/>
                    </div>
                </div>
            </div>
        </div>
    }
}