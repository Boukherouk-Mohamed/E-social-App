import React from 'react'

function Signin() {
  return (
    <div>
        <div className='Logincontainer'>
      <div className="leftSide">
          <h1>E-Social</h1> <br />
          <p>Connectez-vous, partagez, inspirez : 
            la plateforme sociale qui vous unifie.</p>
            <div className="imageContainer">
              <img src="/images/login.png" alt="" />

            </div>
      </div>

      <div className="containerRightSide">
        <div className="rightSide">
        <h1>Sign in</h1> <br />
        <form action="">

          <div className="coolinput">
            <div className="nomPrenom">
              <label for="input" class="text">Nom:</label>
              <input type="text" placeholder="Nom" name="input" className="input" />
              <label for="input" class="text">Prenom:</label>
              <input type="text" placeholder="Prenom" name="input" className="input" />
            </div>
            <label for="input" class="text">Email:</label>
            <input type="text" placeholder="Email" name="input" className="input" />
            <label for="input" class="text">Password:</label>
            <input type="password" placeholder="Password" name="input" className="input" />
            
            <br />
            <input type="button" value="Créer compte" className='btnConnect' />
          </div>


        </form>
        <div style={{width:'80%',marginLeft:'1rem',padding:'1px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className='line'></div>
          <p className='lineOr'>Or</p>
          <div className='line'></div>
        </div>
        <button>Créer compte avec Google</button>
        <br /><br />
        <p>Vous avez déja un compte ? <a href="#">Login</a> </p>

      </div>
      </div>

      
    </div>
      
    </div>
  )
}

export default Signin
