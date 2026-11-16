<?php
/**
 * index.php
 * Template fallback principal
 */
get_header(); ?>

<main class="container section">
    <div class="section-header">
        <h2 class="section-title"><?php single_post_title(); ?></h2>
    </div>

    <div class="cards-grid">
        <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
            <article class="procedure-card">
                <h3 class="procedure-title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
                <div style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.5rem;"><?php the_excerpt(); ?></div>
            </article>
        <?php endwhile; endif; ?>
    </div>
</main>

<?php get_footer(); ?>
