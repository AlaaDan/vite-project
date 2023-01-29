
import './App.css'
// Component always starts with capital letter to differentiate it from normal functions 
function App() {
  // every code before return is a normal JS code, but if you use it much sometimes you will face bugs 

    const user = {
      username: "",
      password: ""
    }
    function handleClick() {
      console.log(user);
      //When we need to use the above function then we call it without
      //parantheces because we need it to run when a user clicks on the button 
    } 
    function handleUsername(event){
      username = event.target.value;
      //OnKeyup will take each keyboard button clicked like if we print it will print each time you preess a key
      console.log(username);
      //onKeyDown will ignore the first key and then when another key gets clicked it gets the first key as a value 
    }

  return (
    <div className="App">

        <input type="text" placeholder='username' 
        onKeyUp={(event) => { user.username = event.target.value;}}/>

        <input type="password" placeholder='password' 
        onKeyUp={(event) => {user.password = event.target.value;}} />

        <button onClick={ handleClick }>Click me </button>
    </div>
  )
}

export default App
