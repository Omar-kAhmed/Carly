import "./header.css";

function Header() {
  return (
    <div class="navbar">
      <button class="Signuph" type="button">
        Sign Up
      </button>
      <img className="logo" src="logo.png" alt="" />

      <div className="navcontainer">
        <ul>
          <li>
            <a class="active" href="#"> 
            Home
            </a> 
          </li> <span class=""></span>
              
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Header;
