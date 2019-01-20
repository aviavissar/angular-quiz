class QustionsService {
    constructor($http) {
               
      this.http=$http;
       
      
       
    }
   getQustions(){ 
    return this.http({
        method: 'GET',
        url: 'components/list.component/frontDev.json'
    }).then((response) => {
        return response.data;
    }, function errorCallback(response) {

        alert("reddddsponse")
    })
        
   }
   

 
   
}

angular.module('myApp').service("QustionsService",QustionsService);