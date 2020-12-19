//slider

let slider = {};
slider.sliderEl = document.getElementById('slider');
slider.sliderSmall = document.getElementById('sliderSmall');
slider.arrowL = document.getElementById('arrowLeft');
slider.arrowR = document.getElementById('arrowRight');

slider.slide = slider.sliderEl.querySelectorAll('.slider_item');
slider.count = slider.slide.length;

slider.maxWidth = -slider.count * 100;
slider.minWidth = slider.count * 0;

slider.directionR = 1;
slider.directionL = -1;

slider.currOffset = 0; // текущее положение слайдера
slider.currOffsetSmall = 0;

if (slider.sliderSmall) {
    slider.pic = slider.sliderSmall.querySelectorAll('.slider_img');

    for (let i = 0; i < slider.pic.length; i++) {
        slider.pic[i].addEventListener('click', function (evt) {
            slider.setPic(evt, true);
        }, false);
        slider.pic[i].setAttribute('data-number', i);
    }

    slider.visibleCount = 5;
    slider.number = 0;
}

slider.arrowL.addEventListener('click', function (evt) {
    slider.changeSlide(evt, slider.directionL)
}, false);

slider.arrowR.addEventListener('click', function (evt) {
    slider.changeSlide(evt, slider.directionR)
}, false);

slider.changeSlide = function (evt, direction) {
    if (slider.checkBorder(evt, direction)) {

        slider.setSlide(evt, direction);

        slider.setPic(evt, false, direction);
    }
}

slider.checkBorder = function (evt, direction) {
    let futureOffset = slider.currOffset - direction * 100;

    if (futureOffset <= slider.maxWidth && direction > 0) {
        return false;
    }

    if (futureOffset > slider.minWidth && direction < 0) {
        return false
    }

    return true;
}


slider.setPic = function (evt, hasClick, direction) {

    if (hasClick) {
        slider.number = Number(evt.target.dataset.number);
    }

    if (!hasClick) {
        slider.number = (direction > 0) ? (slider.number + 1) : (slider.number - 1);

        if (slider.pic.length > slider.visibleCount) {
            slider.checkChange(evt, direction);
        }
    }

    slider.changeActive(slider.number);
    slider.setSlide(evt, 0, true);
}

slider.changeActive = function (num) {
    for (let i = 0; i < slider.pic.length; i++) {
        slider.pic[i].closest('.slider_item').classList.remove('active');
    }

    slider.pic[num].closest('.slider_item').classList.add('active');
}

slider.setSlide = function (evt, direction, change) {
    if (change) {  // если после клика по фото
        slider.currOffset = -slider.number * 100;
    }

    if (!change) {
        slider.currOffset = slider.currOffset - direction * 100;
    }

    slider.sliderEl.style.transform = 'translateX(' + slider.currOffset + '%)';
}

slider.checkChange = function (evt, direction) {
    let maxSlideNumber = (slider.visibleCount - 1) - slider.currOffsetSmall / 20;
    let minSlideNumber = -slider.currOffsetSmall / 20;

    if ((slider.number > maxSlideNumber) && (direction > 0)) {
        slider.currOffsetSmall = slider.currOffsetSmall - direction * 20;
    }

    if ((slider.number < minSlideNumber) && (direction < 0)) {
        slider.currOffsetSmall = slider.currOffsetSmall - direction * 20;
    }

    slider.sliderSmall.style.transform = 'translateX(' + slider.currOffsetSmall + '%)';
}
