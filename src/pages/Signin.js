import React from 'react'

function Signin() {
  return (
    <div>
        <form class="form">

            <span class="input-span">
                <label for="text" class="label">FullName</label>
                <input type="email" name="email" id="email"/>
            </span>
            
            <span class="input-span">
                <label for="email" class="label">E-mail</label>
                <input type="email" name="email" id="email"/>
            </span>

            <span class="input-span">
            <label for="password" class="label">Password</label>
            <input type="password" name="password" id="password"/></span>
            
            

            <input class="submit" type="submit" value="Log in"/>
            <span class="span"> Have an account? <a href="./login"> Login </a></span>

    </form>
    </div>
  )
}

export default Signin
