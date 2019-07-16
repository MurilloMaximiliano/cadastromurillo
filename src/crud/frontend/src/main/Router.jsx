import React from "react"
import {Switch, Route, Redirect} from "react-router"
import Home from '../components/Home/Home'
import UserCrud from '../components/User/UserCrud'
import UserCrud2 from '../components/User/UserCrud2'
import Contato from '../components/tamplets/contato'
import Pedidos from '../components/tamplets/Pedidos'




export default props =>
 <Switch>
     <Route exact path='/' component={Home}/>
     <Route path='/users' component={UserCrud}/>
     <Route path='/product' component={UserCrud2}/>
     <Route path='/users3' component={Contato}/>
     <Route path='/users2' component={Pedidos}/>


     <Redirect from='*' to='/' />
 </Switch>