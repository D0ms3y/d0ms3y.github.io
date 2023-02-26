import * as $ from '../../node_modules/jquery/dist/jquery';
import '../../node_modules/@popperjs/core/dist/cjs/popper';
import '../../node_modules/lightbox2/dist/js/lightbox';
import '../../node_modules/bootstrap/dist/js/bootstrap';

$(() => {
    // Navigation
    $("a.navbar-brand, li.nav-item").on("click", (e) => {
        const target = e.currentTarget;
        const header = $('nav.navbar');
        let href = $("a", target).attr('href');
        if (href == null) { 
            href = $(target).attr('href') 
        }
        href = href.substring(1, href.length);
        const element = document.getElementById(href);
        const y = element.getBoundingClientRect().top + window.pageYOffset + -header.outerHeight();
        window.scrollTo({ top: y, behavior: 'smooth' });
        e.preventDefault();
    })

    // fix header to top when scrolling
    const header = $("nav.navbar");
    if($(document).scrollTop() >= (header.height() / 2)) {
        header.addClass('fixed-bg');
    } else {
        header.removeClass('fixed-bg')
    }

    $(document).on('scroll', (e) => {
        const header = $("nav.navbar");
        if($(e.currentTarget).scrollTop() >= (header.height() / 2)) {
            header.addClass('fixed-bg');
        } else {
            header.removeClass('fixed-bg')
        }
    })

    // Workaround to fix navigation for tablets/desktops
    if (window.innerWidth >= 768 && $('a[href="#career"]').hasClass('active')) {
        $('a[href="#aboutme"]').addClass('active')
        $(`a[href="#career"]`).removeClass('active');
    }
    
    window.addEventListener('activate.bs.scrollspy', (e) => {
        console.log(e);
        if (window.innerWidth >= 768 && e.relatedTarget === '#career') {
            $('a[href="#aboutme"]').addClass('active')
            $(`a[href="#career"]`).removeClass('active');
        }
    })
})