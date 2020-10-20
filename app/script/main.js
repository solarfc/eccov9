let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

document.querySelector('html').style.overflowY = 'hidden';

window.onload = function () {

    setTimeout(() => {
        document.querySelector('.loader').style.zIndex = '-5';
        document.querySelector('.loader').style.opacity = '0';
        document.querySelector('html').style.overflowY = 'scroll';
    }, 1500);

    /*
        animate block
     */

    let fade = [
        $('a.bucket'),
        $('.header__content ul li'),
        $('.video__content-text h3'),
        $('.video__content-text p'),
        $('.video__content-text ul li'),
        $('.gallery__content a'),
        $('.spray__content-img'),
        $('.spray__content-text h3'),
        $('.spray__content-text p'),
        $('.spray__content-text h4'),
        $('.spray__content-text form'),
        $('.photo__content a'),
        $('.description__content-text h3'),
        $('.description__content-text p'),
        $('.description__content-text img'),
        $('.delivery__content figure')
    ];

    for(let i = 0; i < fade.length; i++) {
        fade[i].waypoint(
            function (direction) {
                if(direction === 'down') {
                    $(this.element).addClass('animated');
                    this.destroy();
                }
            },
            {
                offset: function () {
                    return this.context.innerHeight() * 0.82;
                }
            }
        );
    }

    /*
        increase date
     */

    let today = new Date(),
        tomorrow = new Date(),
        day,
        month,
        year,
        i = 3,
        period = document.querySelectorAll('.to-order h6 output');

    tomorrow.setDate(today.getDate() + i);

    day = (tomorrow.getDate() > 9) ? tomorrow.getDate() : `0${tomorrow.getDate()}`;
    month = (tomorrow.getMonth() + 1 > 9) ? tomorrow.getMonth() + 1 : `0${tomorrow.getMonth() + 1}`;
    year = tomorrow.getFullYear();

    for(let i = 0; i < period.length; i++) {
        period[i].innerHTML = `${day}.${month}.${year.toString().slice(2)}`;
    }

    let catalogYear = document.querySelectorAll('p output');
    for(let i = 0; i < catalogYear.length; i++) {
        catalogYear[i].innerHTML = year;
    }

    document.querySelector('h6.address output').innerHTML = year;

    /*
        fancybox loop
     */

    $.fancybox.defaults.loop = true;

    /*
        form styler
     */

    $(function () {
        $('select').styler({
            selectSmartPositioning: false
        });
    });

    /*
        review slider
     */

    $('.review__content-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 0,
        speed: 300,
        arrows: true,
        prevArrow: $('.prev-arrow'),
        nextArrow: $('.next-arrow')
    });

    /*
        bucket toggle
     */

    const toggleBucket = () => {
        let bucket = document.querySelector('a.bucket'),
            topOfWindow = window.pageYOffset + innerHeight,
            catalogBlockTopPosition = document.querySelector('.catalog').offsetTop,
            photoBlockTopPosition = document.querySelector('.photo').offsetTop,
            footerActiveLink = $('.footer__content .to-order').offset().top;

        if(topOfWindow > catalogBlockTopPosition && topOfWindow < photoBlockTopPosition || topOfWindow >= footerActiveLink) {
            bucket.style.opacity = '0';
            bucket.style.zIndex = '-5';
        } else {
            bucket.style.opacity = '1';
            bucket.style.zIndex = '9999';
        }
    }

    /*
        slow scroll
     */

    if(/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)){
        let href = $('#mobile-order').offset().top - innerHeight;
        $('.to-order a, a.bucket').on('click', function () {
            $('html, body').animate({scrollTop: href}, 800);
        });

        window.addEventListener('scroll', () => {
            toggleBucket();
        });
        window.addEventListener('resize', () => {
            toggleBucket();
        });
    } else {
        let href = $('#catalog').offset().top;
        $('.to-order a, a.bucket').on('click', function () {
            $('html, body').animate({scrollTop: href}, 800);
        });
    }
};
