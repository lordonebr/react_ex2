import React, { Component } from "react";
import { UsersListItemComponent } from "./UsersListItemComponent";

export class UsersListComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            users : [
                {
                    id: 0,
                    nome: "André",
                    email: "andgas@yahoo.com.br",
                    idade: 35
                },
                {
                    id: 1,
                    nome: "Alice",
                    email: "alice@yahoo.com.br",
                    idade: 1
                },
                {
                    id: 2,
                    nome: "Mariana",
                    email: "mariana@gmail.com",
                    idade: 31
                },
                {
                    id: 3,
                    nome: "Paulo",
                    email: "paulo@gmail.com",
                    idade: 70
                }
            ],
            usersFilter : []
        };

        this.state.usersFilter = this.state.users;
    }

    filterUsers(event){

        var arrUsers = [...this.state.users]; 
        var filterArray = [];

        let textDigit = event.target.value.toLowerCase();
        if(textDigit !== ""){
            filterArray = arrUsers.filter(user =>
                { 
                    let search = user.nome.toLowerCase().match(textDigit); 
                    if( search !== null && search.index === 0) 
                        return true; 
                    else 
                        return false;
                });
        }
        else
            filterArray = arrUsers;

        this.setState({usersFilter: filterArray});
    }

    removeUser(user) {
        var arrUsers = [...this.state.users]; 
        var indexUsers = arrUsers.indexOf(user)
        if (indexUsers !== -1) {
            arrUsers.splice(indexUsers, 1);
            this.setState({users: arrUsers});
        }

        var arrUsersFilter = [...this.state.usersFilter]; 
        var indexUsersFilter = arrUsersFilter.indexOf(user)
        if (indexUsersFilter !== -1) {
            arrUsersFilter.splice(indexUsersFilter, 1);
            this.setState({usersFilter: arrUsersFilter});
        }
    }

    render(){
        const handleOnRemoveUser = (userId, event) => {

            let userSel = this.state.users.filter(user => user.id === userId);
            if(userSel.length === 1){
                this.removeUser(userSel[0]);
            }
        }

        return (
            <div>
                <p>Filtrar por nome: <input type="text" onChange={this.filterUsers.bind(this)}></input></p>
                {this.state.usersFilter.map(userItem => 
                    <div>
                        <UsersListItemComponent 
                            onRemoveUser={handleOnRemoveUser}
                            {...userItem} 
                        />
                    </div>
                )}
            </div>
        )
    }
}