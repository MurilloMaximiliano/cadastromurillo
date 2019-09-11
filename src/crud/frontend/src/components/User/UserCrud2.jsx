import React, { Component } from "react"
import axios from 'axios'
import Main from '../tamplets/Main'
import 'bootstrap/dist/css/bootstrap.min.css'



const headerProps = {
    icon: "fa fa-comment-o",
    title:"Forum",
  
}
   const baseUrl = 'http://localhost:3005/users'
   const initialState = {
       user: {  name:'', email:'', comentários:''},
       list: []
   }


export default class UserCrud extends Component {
    state = {...initialState}

componentWillMount() {
    axios(baseUrl).then(resp =>{
       this.setState({list: resp.data}) 
    })
}


    clear() {
        this.setState({user: initialState.user})
    }
     save(){
         const user = this.state.user
         const method = user.id ? 'put' : 'post'
         const url = user.id ? `${baseUrl}/${user.id}`: baseUrl
         axios[method](url, user)
         .then(resp =>{
            const list = this.getUpdateList(resp.data) 
            this.setState({user: initialState.user, list})
         })
     }

     getUpdateList(user){
         const list = this.state.list.filter(u => u.id !== user.id)
         list.unshift(user)
         return list
     }

     updateField(event){
         const user = {...this.state.user}
         user[event.target.name] = event.target.value
         this.setState({user})
     }
     

     renderForm(){
         return(
         
           <div className="form" align-items="center">
                <h1 className="focus-in-contract-bck" ><bold>Vamos Conversar?</bold></h1>
               <div className="row">
                   
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label  class="text-uppercase, tracking-in-expand">Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>
                      
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label class="text-uppercase, tracking-in-expand">E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                               
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                 </div>
                 <div className="col-12 col-md-6, titulo2">
                        <div className="form-group, titulo2">
                        <label for="exampleFormControlTextarea1"class="text-uppercase">Comentarios:</label>
                            
                          
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="9"
                
                            name="comentários"
                            value={this.state.user.comentários}
                            onChange={e => this.updateField(e)}
                            placeHolder="Digite o comentário..."/>
                      </div>
                    </div>
                    <div  className="row">
                    <div className="col-12 dflex justify-content-end, titulo">
                     <button class="btn btn-outline-success"
                         onClick={e =>this.save(e)}>
                         Enviar
                    </button>
                   {' '}
                    <button class="btn btn-outline-success"
                    onClick={e =>this.clear(e)}>
                        Cancelar
                        </button> 
                        
                     </div>
                </div>
                
                <hr />
         </div>
    )
}
load(user){
   this.setState({user}) 
}
remove(user){
  axios.delete(`${baseUrl}/${user.id}`).then(resp => {
      const list = this.state.list.filter(u => u !== user)
      this.setState({ list})
  })  
}
renderTable(){
    return (
       
        <table className="m-t10px">
            <thead>
                <tr>
                
        <th>Comentários</th>
        <th> Nome </th>   
        <th>E-mail</th>
            
                
                </tr>
            </thead>
            <tbody>
                {this.renderRows()}  
            </tbody>
        </table>
     )
}
renderRows(){
    return this.state.list.map(user =>{
        return(
          <tr key={user.id}>
             <td>{user.comentários}</td> 
             <td>{user.name}</td> 
             <td>{user.email}</td> 
             
        {/*} <td>
                 
                 <button class="btn btn-outline-success"
                  onClick={()=>this.load(user)}>
                   <i className="fa fa-pencil"></i>
                 </button>
                 {' '}
                  <button className="btn btn-warning ml-10"
                 
                 onClick={()=>this.remove(user)}>
                    <i className="fa fa-trash"></i>
                 </button>
                
        </td>*/}
          </tr>  
        )
    })
}


        render() {
           
             return(
                 <Main {...headerProps}>
                     {this.renderForm()}
                     {this.renderTable()}
                </Main>
        )
    }
}