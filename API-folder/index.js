const profileContainer = document.getElementById("user-profile-container");
const getUsers = async () => {
    try {
        const response = await fetch("https://dummyjson.com/users",{
            method :"GET",
            headers:{
                "Content-type":"application/json",
            },
        });
        const result = await response.json();
        return result;
    }
    catch(error){
        console.log({error});
        return new Error (error.message);
    }
}
const userProfile = async ()=>{
    const userProfileData = await getUsers();
  console.log(userProfileData);
  const users = Array.isArray(userProfileData?.users)?userProfileData?.users:[]
  console.log({users})
  users.forEach(item =>{
    const container = document.createElement("div");
    const image = document.createElement("img");
     const fullName = document.createElement("h3");
      const userName = document.createElement("h4");
      const age = document.createElement("h4");
      const role = document.createElement("h4");
    //   append CARD ELEMENT
    container.appendChild(image)
    container.appendChild(fullName)
    container.appendChild(userName)
    container.appendChild(age)
    container.appendChild(role)
    // add content
    image.src = item.image;
    image.alt = `User ${item.id} image`
    fullName.textContent = `fullName: ${item.fullName} ${item.lastName}`;
    userName .textContent = `UserName: ${item.userName}`
    age.textContent = `Age ${item.age}`;
    role.textContent = `Role ${item.role}`;
    // /   Add card to main
   profileContainer.appendChild(container);
  })}
userProfile();
