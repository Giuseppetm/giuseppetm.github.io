/* Home animations */
anime.timeline({loop: false})
.add({
    targets: '.home-title',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
});

anime.timeline({loop: false})
  .add({
    targets: '.home-description',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1000,
    delay: (el, i) => 300 + 30 * i
});

/* Click to scroll to section */
$('.click_to_scroll').click(function(){
    var clickedId = $(this).attr('href');
    $('html, body').animate({ scrollTop: ($(clickedId).offset().top)} , 1000);
    return false;
});