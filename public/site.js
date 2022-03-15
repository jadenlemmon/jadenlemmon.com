(function () {
  console.warn(
    'Hey! Want to see the src? Check out github https://github.com/jadenlemmon/jadenlemmon.com',
  );

  $(document).on('click', 'a[href]', function (event) {
    if (
      location.pathname.replace(/^\//, '') ==
        this.pathname.replace(/^\//, '') &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
        );
        return false;
      }
    }
  });
})();
