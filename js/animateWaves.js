var initAnimations = function () {
    var $animatable = $('.revealOnScroll');

    $animatable.each(function () {
        var pathLength = this.getTotalLength();

        this.setAttribute('stroke-dasharray', pathLength + ' ' + pathLength);
        this.setAttribute('stroke-dashoffset', pathLength);
    });
}


$(document).ready(function () {
    var $window = $(window);
    $window.on('scroll', revealOnScroll);

    function revealOnScroll() {
        var scrolled = $window.scrollTop(),
            win_height_padded = $window.height() * 1.1;

        // Is animation showing?
        $(".revealOnScroll:not(.animated)").each(function () {
            // animation scrolled into view
            var $this = $(this);
            var offsetTop = $this.offset().top;

            // Add the animated class to trigger the animation
            if (scrolled + win_height_padded > offsetTop) {
                $this.addClass('animated');
            }
        });
    }

    initAnimations(); // Start the initiation for the animations
    revealOnScroll(); // Call the revealOnScroll when the page is ready
});

//    http://web.simmons.edu/~grovesd/comm328/modules/svg/animate-on-scroll
