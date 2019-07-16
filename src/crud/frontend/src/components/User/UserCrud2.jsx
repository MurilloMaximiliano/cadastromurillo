import React, { Component } from "react"
import axios from 'axios'
import Main from '../tamplets/Main'
import 'bootstrap/dist/css/bootstrap.min.css'



const headerProps = {
    icon: "phone",
    title:"Produtos",
    subtitle:"Cadastro de Produtos!"
}
   const baseUrl = 'http://localhost:3004/users'
   const initialState = {
       user: {model: '', price: '', trademark:' ', id: '', specifications:''},
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
               <div className="row">
                   <div className="col-10 col-md-5">
                       <div className="form-group">
                           <label>Price:</label>  
                           {'   '}
                           
                           <input type="number" className="form-control"
                      
                           name="price"
                           value={this.state.user.price}
                           onChange={e => this.updateField(e)}
                           placeHolder="Digite preço..."/>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="form-group">
                            <label>Model:</label>
                            {'   '}
                            <input type="text" className="form-control"
                            name="model"
                            value={this.state.user.model}
                            onChange={e => this.updateField(e)}
                            placeHolder="Digite o produto..."/>
                          
                        </div>

                    </div>
                    <div className="col-12 col-md-5">
                        <div className="form-group">
                            <label>Trademark:</label>
                            {'   '}
                            <input type="text" className="form-control"
                            
                            name="trademark"
                            value={this.state.user.trademark}
                            onChange={e => this.updateField(e)}
                            placeHolder="Digite a marca..."/>
                      </div>
                    </div>
                    <div className="col-12 col-md-5">
                        <div className="form-group">
                            <label>Specifications:</label>
                            {'   '}
                            <input type="text" className="form-control"
                            
                            name="specifications"
                            value={this.state.user.specifications}
                            onChange={e => this.updateField(e)}
                            placeHolder="Digite a marca..."/>
                      </div>
                    </div>
                    
                 </div>
                 
               <div className="row">
                    <div className="col-12 dflex justify-content-end">
                     <button className="btn btn-primary"
                         onClick={e =>this.save(e)}>
                         Cadastrar
                    </button>
                   {' '}
                    <button className="btn btn-secondary ml-9"
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
                <th>Id</th>
                <th>Model</th>
                <th>Price</th>
                {' '}
                 <th>Trademark</th>
                 <th>Specifications</th>
                
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
               <td>{user.id}</td> 
             <td>{user.model}</td> 
             {' '}
             <td>{user.price}</td>
             {' '}
             <td>{user.trademark}</td> 
             <td>{user.specifications}</td>
             
             <td>
                 
                 <button className="btn btn-warning"
                  onClick={()=>this.load(user)}>
                     editar
                 </button>
                 {' '}
                 <button className="btn btn-warning ml-10"
                 
                 onClick={()=>this.remove(user)}>
                     remover
                 </button>
                
             </td>
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