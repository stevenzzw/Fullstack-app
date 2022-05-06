import {postInfo,delInfo} from '../api/axios'


export const creatAddPerson=(personObj)=>({type:'addperson',data:personObj})
export const delPerson=(id)=>({type:'deleteperson',data:id})
export const initState=()=>({type:'initstate',})
export const editPerson=(id)=>({type:'editperson',data:id})
export const changeDisplay=(id)=>({type:'changedisplay',data:id})


export const registerPerson=(user)=>{
    return  dispatch =>{
       postInfo(user)
      dispatch(creatAddPerson(user))
    }
}
export const deletePerson=(id)=>{
    return  dispatch =>{
      delInfo(id)
      dispatch(delPerson(id))
    }
}

