export const BASIC_URL = 'http://libikun.sinaapp.com/index.php/'
export const LOGIN = 'LOGIN'
var json=''
   const relogin = (type, json) => {
   	  
         return {
           type: type,
           date: json
         }
}
export const dologin= (obj)=>(dispatch) => {
		var loginjson= fetch(BASIC_URL+"Index/loginJson.html", {
				    method: "POST",
				      headers: { 
                             "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
                                }, 
				    body: obj.body
			}) 
			loginjson.then(
			   res=>
			   	res.json()
			   
			).then(	
				data=>{
					if(data.status==1){
						sessionStorage.setItem("is_login", true);
					}
					return  dispatch(relogin(LOGIN,data))
					}
			)
}
	