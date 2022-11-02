<?php
if ( ! function_exists( "comjencysamuel_setup" ) ) :
	function comjencysamuel_setup() {
		add_theme_support( 'wp-block-styles' );
		add_editor_style( 'style.css' );
	}
endif; // myfirsttheme_setup

if ( ! function_exists( 'comjencysamuel_scripts' ) ):
	function comjencysamuel_scripts() {
		wp_enqueue_style( 'style', get_stylesheet_uri() );
	}
endif; //myfirsttheme_scripts

add_action( 'after_setup_theme', 'comjencysamuel_setup' );
add_action( 'wp_enqueue_scripts', 'comjencysamuel_scripts' );

