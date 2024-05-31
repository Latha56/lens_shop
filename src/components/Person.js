import React from 'react'

function Person() {
    const PersonName = JSON.parse(localStorage.getItem("LoginPerson"));

    const storedFormDataList = JSON.parse(localStorage.getItem("formDataList"));

    const matchedUser = storedFormDataList.filter(
      (user) => user.email === PersonName
    );
    console.log(matchedUser);
    
  return (
    <div className='dropdown'>
        <div style={{paddingLeft:'5px'}}>
            {matchedUser.map((user) => ( <h5 key={user.id} style={{cursor:'pointer'}}>{user.name}</h5> ))} 
        </div>
    </div>
  )
}

export default Person
