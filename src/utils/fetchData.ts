import request from 'umi-request';

export default (api:Record<string,any>) => {
  return new Promise((resolve, reject) => {
    request(api.url, {
      ...api
     })
       .then(function(response) {
         if(response.code === 0){
           resolve(response.data)
         }else{
           reject(response)
         }
       })
       .catch(function(error) {
         reject(error)
       });
  })
  
}