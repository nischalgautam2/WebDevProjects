<?php include 'includes/connection.php';?>
<?php include 'includes/header.php';?>
<?php include 'includes/navbar.php';?>

<br><br>
<link rel="stylesheet" type="text/css" href="styles.css" media="all" />
    <link rel="stylesheet" type="text/css" href="demo.css" media="all" />
    <!-- jQuery -->
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <!-- FlexSlider -->
    <script type="text/javascript" src="js/jquery.flexslider-min.js"></script>
    <script type="text/javascript" charset="utf-8">
    var $ = jQuery.noConflict();
    $(window).load(function() {
    $('.flexslider').flexslider({
          animation: "fade"
    });
	
	$(function() {
		$('.show_menu').click(function(){
				$('.menu').fadeIn();
				$('.show_menu').fadeOut();
				$('.hide_menu').fadeIn();
		});
		$('.hide_menu').click(function(){
				$('.menu').fadeOut();	
				$('.show_menu').fadeIn();
				$('.hide_menu').fadeOut();
		});
	});
  });
</script>

     <div class="slider_container">
		<div class="flexslider">
	      <ul class="slides">
	    	<li>
	    		<a href="#"><img src="images/slider/slider1.jpg" alt="" title=""/></a>
	    	<!--	<div class="flex-caption">
                     <div class="caption_title_line"><h2>Easy Notes Management</h2><p>Now easily manage all kind of notes by uploading them here.</p></div>
                </div> -->
	    	</li>
	    	<li>
	    		<a href="#"><img src="images/slider/slider2.jpg" alt="" title=""/></a>
	    	<!--	<div class="flex-caption">
                     <div class="caption_title_line"><h2>Upload Various Files</h2><p>User can upload various types of files like PDF, PPT, DOC etc..</p></div>
                </div> -->
	    	</li>
	    	<li>
	    		<a href="#"><img src="images/slider/slider3.jpg" alt="" title=""/></a>
	    		<!-- <div class="flex-caption">
                     <div class="caption_title_line"><h2>Controled By Admin</h2><p>Everying is managed and controled by administrator</p></div>
                </div> -->
	    	</li>
	    </ul>
	  </div>
	  <div>
	  <p style="color:white"> Share Note is a web based notes sharing and management system which helps students and teachers to share their notes online effectively. <br>
	  It reduces the wasting of time in manually distributing notes to each individual.
	  It greatly overcomes the lack of availability and converts the manual old school paperwork to a fully automated and managed online system. 
      Share Note allows it's users to securely register and log in to their individual accounts and create, read , update, delete notes according to their needs.
	  It provides notes to everyone in a very secure manner. Multiple users can work in this system at the same time under centralized supervision by administrator.
	  It is a very useful notes management system for Colleges, Schools and other Institutes to manage and share their notes in an secure, efficient and effective manner. </p>
	  <hr>
	  </div>
   </div>
    </div>  
</div>

</body>
</html>









































<?php include 'includes/footer.php';?>

        