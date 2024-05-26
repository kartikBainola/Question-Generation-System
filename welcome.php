<?php
session_start();

if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin']!=true){
    header("location: login.php");
    exit;
}

?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="design.css">

    <title>Welcome - <?php $_SESSION['username']?></title>
  </head>
  <body>
    <?php require 'partials/_nav.php' ?>

    <!-- FOR THE ALERT MESSAGE -->
    <div class="container my-3">
    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <h4 class="alert-heading">Welcome - <?php echo $_SESSION['username']?></h4>
      <p> Welcome to our Question Generation system. You are logged in as <?php echo $_SESSION['username']?>. Aww yeah, you successfully read this important alert message.This is the simple project of QGS make sure that you play properly.</p>
      <hr>
      <p class="mb-0">Whenever you need to, be sure to logout <a href="/QGS/logout.php"> using this link.</a></p>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

   <!--FOR MAIN QUESTION GENERATION SYSTEM -->
    <h1 style="text-align: center;"> CHOOSE YOUR TYPE OF QUESTIONS </h1>
   <div class="options">
    
    <h2 style="text-align: left;"> FOR EASY QUESTIONS</h2>

    <a href="index.html">
        <button id="submit"> EASY </button>
    </a>
    
    <h2 style="text-align: left;"> FOR MEDIUM QUESTIONS</h2>
    <a href="medium.html">
        <button id="submit"> MEDIUM </button>
    </a>
    

    <h2 style="text-align: left;"> FOR HARD QUESTIONS</h2>
    <a href="hard.html">
        <button id="submit"> HARD </button>
    </a>

    <h2 style="text-align: left;"> FOR HARDEST QUESTIONS</h2>
    <a href="hardest.html">
        <button id="submit"> HARDEST </button>
    </a>
    
</div>


  </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
</html>