<?php

/*
  Plugin Name: Generator Gutenberg Blocks
  Version: 1.0
  Author: Cybertron
  Description: Adds new blocks to Gutenberg
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class generatorGutenbergBlockClass {
  function __construct() {
    add_action('init', array($this, 'onInit'));
  }

  function onInit() {
    wp_register_script('generatorGutenbergBlocksScripts', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element', 'wp-editor'));
    wp_register_style('generatorGutenbergBlocksStyle', plugin_dir_url(__FILE__) . 'build/index.css');

    /* Heading with Two CTAs - Block */
    
    register_block_type('generator-gutenberg-blocks/generator-gutenberg-blocks', array(
      'render_callback' => array($this, 'renderCallbackBlock1'),
      'editor_script' => 'generatorGutenbergBlocksScripts',
      'editor_style' => 'generatorGutenbergBlocksStyle'
    ));

    /* Newsletter - Block */

    register_block_type('generator-gutenberg-blocks/newsletter-block', array(
      'render_callback' => array($this, 'renderCallbackNewsletterBlock'),
      'editor_script' => 'generatorGutenbergBlocksScripts',
      'editor_style' => 'generatorGutenbergBlocksStyle'
    ));
  }

  function renderCallbackBlock1($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('generatorBlocksFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('generatorBlocksFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
    }

    ob_start(); ?>
    <div class="generator-gutenberg-blocks container"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
  }

  function renderCallbackNewsletterBlock($attributes) {
    if (!is_admin()) {
      wp_enqueue_script('generatorBlocksFrontendScript', plugin_dir_url(__FILE__) . 'build/frontend.js', array('wp-element'));
      wp_enqueue_style('generatorBlocksFrontendStyles', plugin_dir_url(__FILE__) . 'build/frontend.css');
    }

    ob_start(); ?>
    <div class="generator-newsletter-block container"><pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre></div>
    <?php return ob_get_clean();
    
  }

}

$generatorGutenbergBlockClass = new generatorGutenbergBlockClass();