<?php
/**
 * Tips block class
 *
 * @package P4EABKS
 * @since 0.1
 */

namespace P4EABKS\Controllers\Blocks;

use P4EABKS\Views\View;

if ( ! class_exists( 'Tips_Controller' ) ) {
	/**
	 * Class Tips_Controller
	 *
	 * @package P4EABKS\Controllers\Blocks
	 * @since 0.1.3
	 */
	class Tips_Controller extends Controller {

		/**
		 * The block name constant.
		 *
		 * @const string BLOCK_NAME
		 */
		const BLOCK_NAME = 'tips';

		/**
		 * The nonce string.
		 *
		 * @const string NONCE_STRING
		 */
		const NONCE_STRING = 'tips_controller';

		/**
		 * Tips_Controller constructor.
		 *
		 * @param View $view The view instance.
		 */
		public function __construct( View $view ) {
			parent::__construct( $view );
			add_action( 'wp_ajax_gpea_tips_pledge', [ $this, 'tips_pledge_increase' ] );
			add_action( 'wp_ajax_nopriv_gpea_tips_pledge', [ $this, 'tips_pledge_increase' ] );
		}

		/**
		 * Shortcode UI setup for the tasks shortcode.
		 *
		 * It is called when the Shortcake action hook `register_shortcode_ui` is called.
		 *
		 * This example shortcode has many editable attributes, and more complex UI.
		 *
		 * @since 1.0.0
		 */
		public function prepare_fields() {

			$fields = [
				[
					'label' => __( 'Title', 'planet4-gpea-blocks-backend' ),
					'attr'  => 'title',
					'type'  => 'text',
					'meta'  => [
						'placeholder' => __( 'Title', 'planet4-gpea-blocks-backend' ),
						'data-plugin' => 'planet4-gpea-blocks',
					],
				],
				[
					'label' => __( 'Subtitle', 'planet4-gpea-blocks-backend' ),
					'attr'  => 'subtitle',
					'type'  => 'textarea',
					'meta'  => [
						'placeholder' => __( 'Subtitle', 'planet4-gpea-blocks-backend' ),
						'data-plugin' => 'planet4-gpea-blocks',
					],
				],
				[
					'label' => __( 'Paragraph', 'planet4-gpea-blocks-backend' ),
					'attr'  => 'paragraph',
					'type'  => 'textarea',
					'meta'  => [
						'placeholder' => __( 'Paragraph', 'planet4-gpea-blocks-backend' ),
						'data-plugin' => 'planet4-gpea-blocks',
					],
				],
				[
					'label'       => __( 'Tips (10 max)', 'planet4-gpea-blocks-backend' ),
					'attr'     => 'tip_ids',
					'type'     => 'post_select',
					'multiple' => 'multiple',
					'query'    => [
						'post_type'   => array( 'tips' ),
						'post_status' => 'publish',
						'orderby'     => 'post_title',
						'order'       => 'ASC',
					],
					'meta'     => [
						'select2_options' => [
							'allowClear'             => true,
							'placeholder'            => __( 'Select tips (max 10)', 'planet4-gpea-blocks-backend' ),
							'closeOnSelect'          => false,
							'minimumInputLength'     => 0,
							'multiple'               => true,
							'maximumSelectionLength' => 10,
							'width'                  => '80%',
						],
					],

				],
				[
					'label' => __( 'Label "See more"', 'planet4-gpea-blocks-backend' ),
					'attr'  => 'see_more_label',
					'type'  => 'text',
					'meta'  => [
						'placeholder' => __( 'Label "See more"', 'planet4-gpea-blocks-backend' ),
						'data-plugin' => 'planet4-gpea-blocks',
					],
				],
				[
					'label' => __( 'Link "See more"', 'planet4-gpea-blocks-backend' ),
					'attr'  => 'see_more_link',
					'type'  => 'url',
					'meta'  => [
						'placeholder' => __( 'Link "See more"', 'planet4-gpea-blocks-backend' ),
						'data-plugin' => 'planet4-gpea-blocks',
					],
				],
			];

			// Define the Shortcode UI arguments.
			$shortcode_ui_args = [
				'label'         => __( 'GPEA | Tips', 'planet4-gpea-blocks-backend' ),
				'listItemImage' => '<img src="' . esc_url( plugins_url() . '/planet4-gpea-plugin-blocks/admin/img/tips-launcher.jpg' ) . '" />',
				'attrs'         => $fields,
				'post_type'     => P4EABKS_ALLOWED_PAGETYPE,
			];

			shortcode_ui_register_for_shortcode( 'shortcake_' . self::BLOCK_NAME, $shortcode_ui_args );

		}

		/**
		 * Get all the data that will be needed to render the block correctly.
		 *
		 * @param array  $attributes This is the array of fields of this block.
		 * @param string $content This is the post content.
		 * @param string $shortcode_tag The shortcode tag of this block.
		 *
		 * @return array The data to be passed in the View.
		 */
		public function prepare_data( $attributes, $content = '', $shortcode_tag = 'shortcake_' . self::BLOCK_NAME ) : array {

			$formatted_posts = [];

			if ( isset( $attributes['tip_ids'] ) ) {

				$query = new \WP_Query(
					array(
						'post_type'   => array( 'tips' ),
						'post_status' => 'publish',
						'post__in' => explode( ',' , $attributes['tip_ids'] ),
						'orderby' => 'post__in',
						'posts_per_page' => 10,
					)
				);

				if ( $query->posts ) {
					foreach ( $query->posts as $post ) {
						$tip_icon = get_post_meta( $post->ID, 'p4-gpea_tip_icon', true );
						$post->img_url = $tip_icon ?? '';
						$frequency = get_post_meta( $post->ID, 'p4-gpea_tip_frequency', true );
						$post->frequency = $frequency ?? '';
						$engage = get_post_meta( $post->ID, 'p4-gpea_tip_engage', true );
						$post->engage = $engage ?? '';
						$commitments = get_post_meta( $post->ID, 'p4-gpea_tip_commitments', true );
						$post->commitments = $commitments ?? 0;
						$post->link = get_permalink( $post->ID );

						// get related main issues!
						$planet4_options = get_option( 'planet4_options' );
						$main_issues_category_id = isset( $planet4_options['issues_parent_category'] ) ? $planet4_options['issues_parent_category'] : false;
						if ( ! $main_issues_category_id ) {
							$main_issues_category = get_term_by( 'slug', 'issues', 'category' );
							if ( $main_issues_category ) {
								$main_issues_category_id = $main_issues_category->term_id;
							}
						}

						if ( $main_issues_category_id ) {
							$categories = get_the_category( $post->ID );
							if ( ! empty( $categories ) ) {
								$categories = array_filter(
									$categories, function( $cat ) use ( $main_issues_category_id ) {
										return intval( $main_issues_category_id ) === $cat->category_parent;
									}
								);
								if ( ! empty( $categories ) ) {
									$first_category = array_values( $categories )[0];
									$post->main_issue = $first_category->name;
									$post->main_issue_slug = $first_category->slug;
								}
							}
						}

						$formatted_posts[] = $post;
					}
				}

				wp_reset_postdata();
			}

			$attributes['posts'] = $formatted_posts;
			$attributes['wp_nonce'] = wp_nonce_field( self::NONCE_STRING );

			$lexicon = [
				'tip_cta' => __( 'I\'ll do it!', 'planet4-gpea-blocks' ),
				'committed' => __( 'committed', 'planet4-gpea-blocks' ),
			];

			return [
				'fields' => $attributes,
				'lexicon' => $lexicon,
			];

		}

		/**
		 * Callback for the shortcake_noindex shortcode.
		 * It renders the shortcode based on supplied attributes.
		 *
		 * @param array  $fields        Array of fields that are to be used in the template.
		 * @param string $content       The content of the post.
		 * @param string $shortcode_tag The shortcode tag (shortcake_blockname).
		 *
		 * @return string The complete html of the block
		 */
		public function prepare_template( $fields, $content, $shortcode_tag ) : string {

			$data = $this->prepare_data( $fields );

			// Shortcode callbacks must return content, hence, output buffering here.
			ob_start();
			$this->view->block( self::BLOCK_NAME, $data );
			return ob_get_clean();
		}

		/**
		 * Increases tip pledge amount by one.
		 */
		public function tips_pledge_increase() {
			if ( 'POST' === filter_input( INPUT_SERVER, 'REQUEST_METHOD' ) ) {
				$query = $this->validate_input();
				if ( $query && $query['pid'] ) {
					$post_id = (int) $query['pid'];
					$pledge = get_post_meta( $post_id, 'p4-gpea_tip_commitments', true ) ?? 0;
					$pledge++;
					update_post_meta( $post_id, 'p4-gpea_tip_commitments', $pledge );
				}
			}
			wp_die();
		}

		/**
		 * Validate input AJAX data.
		 *
		 * @return array|bool The query data, or false if unsafe.
		 */
		function validate_input() {
			$args = [
				'query' => [
					'filter' => FILTER_SANITIZE_STRING,
					'flags'  => FILTER_REQUIRE_ARRAY,
				],
			];
			$query = filter_input_array( INPUT_POST , $args , false )['query'];
			if ( $query && wp_verify_nonce( $query['_wpnonce'], self::NONCE_STRING ) ) {
				return $query;
			}
			return false;
		}

	}
}
