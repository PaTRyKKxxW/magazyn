<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Strona magazynu do portfolio" />
    <meta name="keywords" content="magazyn, sklep, portfolio, Front-End, programowanie, warehause, shop"/>
    <meta name="author" content="Patryk Wiktor" />
    <link rel="stylesheet" href="stylelogin.css" />
    <title>LOG IN</title>
  </head>
  <body>
    <header>
      <h1 style="color: navy">Warehause.PW</h1>
      <p><a href="../index.html">Home</a></p>
      <p><a href="../contact/contact.php">Contact Form</a></p>
    </header>
    <main>
      <section class="logpanel">
        <h1>Log In</h1>

        <form method="post">
          <label>Login:<input type="text" name="login" id="login" /></label>
          <br/>
          <label>Password:<input type="password" name="pass" id="pass"/></label>
          <br/>
          <input type="submit" value="Log in">
          <?php
            $conn = mysqli_connect("localhost","root","","magazyn");
            $query = "SELECT `login`,`password` FROM `admin`";
            $resoults = mysqli_query($conn,$query);
            $login = $_POST['login'];
            $pass = $_POST['pass'];
            if($login == "admin" && $pass = 1324){
              echo "siema";
            }
          ?>
        </form>

      </section>
    </main>
  </body>
</html>
