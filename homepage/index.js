// start: Navbar
$('.navbar-toggle').click(function(e) {
    e.preventDefault()
    $('.navbar-menu-wrapper').addClass('active')
})

$('.navbar-menu-close').click(function(e) {
    e.preventDefault()
    $('.navbar-menu-wrapper').removeClass('active')
})
// end: Navbar