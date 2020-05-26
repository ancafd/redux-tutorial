//const updateUserAction = {
  //  type: 'updateUser',
  //  payload: {
  //    user: 'Anca modified'
  //  }
 // }

 export const UPDATE_USER = 'users:updateUser';

 export function updateUser(newUser){
     return {
         type: UPDATE_USER,
         payload: {
             user: newUser
         }
     }
 }