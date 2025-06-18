const profileContainer = document.getElementById("user-profile-container");
const getUsers = async() => {
    try{
        const response = await fetch("https://dummyjson.com/users", {
            method:"GET",
            headers:{
                "Content-type": "application/json",
            },
        }
        );
    const result = await response.json();
    return result;
    }
    catch(error){
    console.log({error});
    return new Error(error.message);
    }
    };
    getUsers();
    const userProfiles = async()=>{
        const userProfilesData = await getUsers();
        console.log({userProfilesData});
        const users = Array.isArray(userProfilesData?.users)? userProfilesData.users:[];
        console.log({users});
        users.forEach(item =>{
            //Create card elements
            const container = document.createElement('div');
            const image = document.createElement('img');
            const fullName = document.createElement('h3');
            const userName = document.createElement('h4');
            const age = document.createElement('h4');
            const role = document.createElement('h4');
            //Append card elements
            container.appendChild(image);
            container.appendChild(fullName);
            container.appendChild(userName);
            container.appendChild(age);
            container.appendChild(role);
            //Add content to each card element
            image.src = item.image;
            image.alt = `User ${item.id} Image`;
            fullName.textContent = `${item.firstName} ${item.lastName}`;
            userName.textContent = `Username: ${item.username}`;
            age.textContent = `Age: ${item.age}`;
            role.textContent = `Role: ${item.role}`;
            //Add card to main container
            profileContainer.appendChild(container);
            //Add class to container
            container.setAttribute('class', 'profile-card');
        })
    };
    userProfiles();
