<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit336100170ff2882375cd04c4c76f9df3
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'P4NLBKS\\Taxonomies\\' => 19,
            'P4NLBKS\\Controllers\\Menu\\' => 25,
            'P4NLBKS\\Controllers\\Blocks\\' => 27,
            'P4NLBKS\\Controllers\\' => 20,
            'P4NLBKS\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'P4NLBKS\\Taxonomies\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes/taxonomy',
        ),
        'P4NLBKS\\Controllers\\Menu\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes/controller/menu',
        ),
        'P4NLBKS\\Controllers\\Blocks\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes/controller/blocks',
        ),
        'P4NLBKS\\Controllers\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes/controller',
        ),
        'P4NLBKS\\' => 
        array (
            0 => __DIR__ . '/../..' . '/classes',
        ),
    );

    public static $classMap = array (
        'P4NLBKS\\Controllers\\Blocks\\Achievement_Section_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-achievement-section.php',
        'P4NLBKS\\Controllers\\Blocks\\Article_Row_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-article-row-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Custom_Query_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-custom-query-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Donate_Section_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-donate-section-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Donation_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-donation-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\GPNL_Liveblog_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-liveblog-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\GPNL_Liveblogitem_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-liveblogitem-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\GPNL_Map_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-map-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\GPNL_Newsletter_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-newsletter-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\GPNL_hero_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-hero-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\GPNL_quote_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-quote-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\GPNL_statistics_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-statistics-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\General_Updates_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-general-updates.php',
        'P4NLBKS\\Controllers\\Blocks\\Issue_List_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-issue-list-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Launcher_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-launcher-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Main_Issues_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-main-issues-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Metablock_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-metablock-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Milestones_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-milestones-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Mixed_Content_Row_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-mixed-content-row.php',
        'P4NLBKS\\Controllers\\Blocks\\No_Index_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-noindex-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Petition_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-petition-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Projects_Overview_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-projects-overview-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Repeater_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-repeater-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Spotlight_Section_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-spotlight-section-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Test_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-test-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Text_And_Image_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-text-and-image-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Tips_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-tips-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\UGC_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/ugc-controller.php',
        'P4NLBKS\\Controllers\\Blocks\\Values_Section_Controller' => __DIR__ . '/../..' . '/classes/controller/blocks/class-values-section-controller.php',
        'P4NLBKS\\Controllers\\Menu\\Controller' => __DIR__ . '/../..' . '/classes/controller/menu/class-controller.php',
        'P4NLBKS\\Controllers\\Menu\\Settings_Controller' => __DIR__ . '/../..' . '/classes/controller/menu/class-settings-controller.php',
        'P4NLBKS\\Controllers\\Uninstall_Controller' => __DIR__ . '/../..' . '/classes/controller/class-uninstall-controller.php',
        'P4NLBKS\\Loader' => __DIR__ . '/../..' . '/classes/class-loader.php',
        'P4NLBKS\\Models\\Tags_Meta' => __DIR__ . '/../..' . '/classes/model/class-tags-meta.php',
        'P4NLBKS\\Models\\Taxonomy' => __DIR__ . '/../..' . '/classes/model/class-taxonomy.php',
        'P4NLBKS\\Views\\View' => __DIR__ . '/../..' . '/classes/view/class-view.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit336100170ff2882375cd04c4c76f9df3::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit336100170ff2882375cd04c4c76f9df3::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit336100170ff2882375cd04c4c76f9df3::$classMap;

        }, null, ClassLoader::class);
    }
}
