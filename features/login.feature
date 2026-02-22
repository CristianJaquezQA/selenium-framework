Feature: Login

 Scenario: Login existoso con credenciales válidas
  Given el usuario está en la página de login
  When ingresa usuario "tomsmith" y contraseña "SuperSecretPassword!"
  Then debe ver un mensaje de éxito
    
 Scenario: Login fallido con credenciales inválidas
  Given el usuario está en la página de login
  When ingresa usuario "usuario_falso" y contraseña "password_incorrecto"
  Then debe ver un mensaje de error