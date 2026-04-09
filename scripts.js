// let userForm=
// javascript.getElementById(form)
// let nameinput=
// javascript.getElementById(_name)
// let Nameinput=
// javascript.getElementById(_Name)
// let ageinput=
// javascript.getElementById(_age)
// let agecheck=
// javascript.getElementById(_agecheck)
// let greeting=
// javascript.getElementById(_greet)
// let quotes=
// javascript.getElementById(_quote)
// let agemonth=
// javascript.getElementById(_agemonth)


// let quote = "Theres always light at the end of the tunnel";
// functio
// // function to calsculate age in months
// function ageinmonths(){
//     return age*12

// }
// // loops for the motivational quotes
// function displayquotes(){
//     quotelist.innerHTML="";
//     for(let i=0; i<=5 i++){
//         quotesList.innerHTML+=(i+1) + "You got this!"
//     }
// }
// userForm.onsubmit=
// function(event){
//     event.preventDefault();

//     let _name= nameinput.value;
//     let age=parseInt(ageinput.value)


// localStorage.setitem("nameinput",_name);
// localStorage.setItem("ageinput", _age);

// greeting.inner.Text="Hello ," + _name + _Name + "!welcome!";
// ageinmonths.innerText="Your age in months is" + ageinmonths()


// if (age>=18){
//     agecheck.innerText="You can access adult content";
// }else{
//     agecheck.innerText= "You are too youngfor this content!";
// }
//  displayquotes()
//  userForm.reset()
// };

//   what are you listening to? is the event
//  where are you listening  
//  what action is going to follow
const message = document.getElementById("notification")

 const registerForm = document.getElementById("registration")
if(registerForm) {
 registerForm.addEventListener('submit', function(e){
     e.preventDefault();
     const usernameValue = document.getElementById("username").value;
     message.innerText = `welcome ${usernameValue}! your registration was successful!`
     console.log("form submitted!")});

     const usernameValue = document.getElementById("username").value;
     const emailValue = document.getElementById("email").value;
    const dateValue = document.getElementById("date").value;
    const birthdate = new Date(date);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

document.cookies=`username$(usernameValue);`
document.cookies=`email, $(emailValue)`;
document.cookies=`date $(dateValue)`;
document.cookies=`age, $(age)`;

console.log("cookie saved successfully!");

     const storedData = {
         username: usernameValue,
        email:emailValue,
        date: dateValue,
        age: age
     };

     localStorage.setItem('person', JSON.stringify(storedData))

    
 };

const message2 = document.getElementById("notify")
const quoteslist=document.getElementById("quotes")
 const loginForm = document.getElementById("login")

if( loginForm) {
 loginForm.addEventListener('submit', function(e){
     e.preventDefault();

     const _usernameValue = document.getElementById("usernamelogin").value;
     message2.innerText = `thankyou ${_usernameValue}! for logging in , please be patient as we check your credentials!`
     const _emailValue = document.getElementById("emaillogin").value;
    const _dateValue = document.getElementById("datelogin").value;
    const _birthdate = new Date(_dateValue);
    const today = new Date();
    const _age = today.getFullYear() - _birthdate.getFullYear();
     const userData = {
         username: _usernameValue,
         email: _emailValue,
         date: _dateValue,
         age: _age
         
     };

const userstoredData  = localStorage.getItem('person')
const userddata = JSON.parse(userstoredData)
if( userData.age >= 18){
    console.log(`you are , ${userData.age} years old, Access granted☑️`);
    console.log(`welcome back ${_usernameValue}`);
    const quotes= ["Theres always light at the end of the tunnel⭐", "You are stronger than you think🙌", "Every day is a second chance☺️", "Believe in yourself and all that you are⭐", "You are capable of amazing things🎓"];
    for(let i=0; i<quotes.length; i++){
        const p = document.createElement("p");
        p.innerText = quotes[i];
        quoteslist.appendChild(p);
    }
}else{
    console.log(` you are , ${userData.age} years old, You are too young for this content🚫`);
}

   if (userstoredData.username !== _usernameValue &&
     userstoredData.email !== _emailValue &&
     userstoredData.date !== _dateValue) {
    
 } else {
     console.log("user does not exist❌");
 }
   

 });
}

// document.getElementById("heading")
// Heading.addEventListener("click", function(){
//     heading.textContent="You clicked the heading!"});

//     heading.addEventListener("click", function(){
//         heading.textContent="you clicked me!"
//     })
