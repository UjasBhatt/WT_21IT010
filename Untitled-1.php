<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        table,
        th,
        td {
            border: 1px solid black;
        }
        
        th {
            background-color: green;
        }
        
        td {
            background-color: red;
            height: 10px;
            width: 100px;
            text-align: center;
            vertical-align: middle;
        }
    </style>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1 style="color:blue">CHARUSAT</h1>
    <img src="IMG-20200702-WA0007.jpg" alt="CHARUSAT" width="104" height="142">
    <p style="color:brown">This Is CHARUSAT WEBPAGE</p>
    <a href="https://charusat.edu.in:912/eGovernance/">This Link For Charusat eGovernance</a><br><br/>
    <hr>
    <a href="https://www.youtube.com" target="_blank">YouTube Link</a>
    <hr>
    <a href="first.HTML">First File Link</a>
    <hr>
    <a href="SGP video.mp4" target="_blank">SGP Video</a>
        <hr>
    <form>
        <label for="fname">First name:</label>
        <input type="text" required id="fname" name="fname" value=""><br><br/>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value=""><br><br/>
        <h1>

        </h1>



        <lable for="gen">Gender:</lable><br><br/>
        <input type="radio">
        <label for="male">Male</label><br><br/>
        <input type="radio">
        <label for="male">Female</label><br><br/>

        <lable for="dates">DOB:</lable>
        <input type="date"><br><br/>


        <label for="email">Eail Id:</label>
        <input type="email"><br><br/>


        <label for="dis">About You:</label>
        <input type="text"><br><br/>


        <input type="submit" value="Submit">
    </form>
    <hr>
    <h1></h1>
    <h1></h1>
    <h1></h1>
    <ol>
        <li>First</li>
        <li>second</li>
        <li>tird</li>
        <li>forth</li>
        <li>fifth</li>
    </ol>
    <hr>
    <ul>
        <li>First</li>
        <li>second</li>
        <li>tird</li>
        <li>forth</li>
        <li>fifth</li>
    </ul>
</body>

</html>

<?php
    if(isset($_POST['Submit'])){
        $un=$_POST['fname'];
        $pw=$_POST['lname'];

        if($un=='fname' && $pw=='lname'){
            header("location:index.html");
            exit;
        }
        else
        echo "Invalid firstname or lastname";
    }
    ?>