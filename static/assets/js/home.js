const formGroups = document.getElementsByClassName("form-group");
for(const group of formGroups){
    const input = group.querySelector("input");
    const label = group.querySelector("label");
    const underline = group.querySelector(".underline");
    
    input.onfocus = () => {
        underline.classList.add("input-active");
        label.classList.add("input-active");
    }
    input.onblur = () => {
        underline.classList.remove("input-active");
        if (input.value === "") {
            label.classList.remove("input-active");
        }
    }
}
const loginButton = document.getElementsByClassName("login-button")[0]
loginButton.onmouseover = () => {
    loginButton.querySelector(".text").classList.add("hover");
    loginButton.querySelector(".icons").classList.add("hover");
}
loginButton.onmouseout = () => {
    loginButton.querySelector(".text").classList.remove("hover");
    loginButton.querySelector(".icons").classList.remove("hover");
}
/*
loginButton.onclick = async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const res = await fetch('http://localhost:7376/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            identifier: email,
            password: password,
        })
    });
    const data = await res.json();
    if(data.error){
        alert(data.error);
        console.error(data.error);
    } else {
        localStorage.setItem("token", data.token);
    }
}
*/
/*
const login = document.getElementsByClassName("login")[0];
login.onclick = async () => {
    const res = await fetch('http://localhost:7376/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            identifier: "elephrez@gmail.com",
            password: "wussupbitches",
        })
    });
    const data = await res.json();
    console.log(data);
}
*/