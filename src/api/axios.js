import axios from "axios"

export const postInfo=(user)=> {
    const {firstName,lastName,age,sex,id} =user
    axios.post(
      "http://localhost:8080/api/bears",
      {
       firstName,
       lastName,
       age,
       sex,
       id
      }
    )
}

export const putInfo=(id,user)=> {
  const {firstName,lastName,age,sex} =user.user
  console.log(`id is ${firstName}`);
  axios.put(
    `http://localhost:8080/api/bears/${id}`,
    {
      firstName,
      lastName,
      age,
      sex
    }
  )
  .then((res) => console.log(res.data.message))
 .catch(err=> console.log(err))
  
}

export const delInfo=(id)=> {
   axios.delete(`http://localhost:8080/api/bears/${id}`)
   .then((res)=> console.log(res.data))
   .catch((err)=> console.log(err))

}