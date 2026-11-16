<?php
/**
 * footer.php
 * Pied de page du thème WordPress Communes du Bénin
 */
?>
<footer class="site-footer" id="contact">
    <div class="container footer-grid">
        <div class="footer-brand">
            <h3>Mairie de <span data-bind="commune-name"><?php bloginfo('name'); ?></span></h3>
            <p data-bind="commune-slogan"><?php bloginfo('description'); ?></p>
        </div>

        <div class="footer-col">
            <h4>Portails Officiels</h4>
            <ul class="footer-links">
                <li><a href="https://service-public.bj" target="_blank" rel="noopener">Service-Public.bj ↗</a></li>
                <li><a href="https://anip.bj" target="_blank" rel="noopener">Portail National ANIP ↗</a></li>
                <li><a href="https://decentralisation.gouv.bj" target="_blank" rel="noopener">Ministère de la Décentralisation ↗</a></li>
            </ul>
        </div>
    </div>

    <div class="container footer-bottom">
        <div>
            © <?php echo date('Y'); ?> Mairie de <span data-bind="commune-name"><?php bloginfo('name'); ?></span> — République du Bénin.
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
