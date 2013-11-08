<?php

function CreatePage($title, $page) {
	$topPage = file_get_contents("./views/header.html", true); 
	$topPage = str_replace("[-TITLE-]", $title, $topPage); 
	$pageContent = file_get_contents($page, true); 
	$bottomPage = file_get_contents("./views/footer.html", true); 
	echo $topPage, $pageContent, $bottomPage; 
}