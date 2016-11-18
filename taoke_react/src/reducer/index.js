import { combineReducers } from 'redux'
import {
  LOGIN
} from '../action'

const login=(state={login_date:{is_login:false,date:{}}},action)=>{
	switch (action.type){
		case LOGIN:
		if(action.date.status==1){
			return{
			   login_date:{
			   	is_login:true,
			   	date:action.date
			   }
		 }
		}else{
				return{
			   login_date:{
			   	is_login:false,
			   	date:action.date
			   }
		 }
		}
		
		  default:
      return state
	}
}
const rootReducer = combineReducers({
  login
})

export default rootReducer
