function dropdownlist(selector) {
    let dropdownlist = $(selector);
    let spans = dropdownlist.children ('span');
    let divs = dropdownlist.children ('div');

    dropdownlist.addClass ('dropdownlist');
    spans.each(function () {
        let span = $(this);
        span.replaceWith('<a href="#" class="dropdownlist-control">'+span.text()+'</a>');
    });

    divs.addClass('dropdownlist-panel');
}

dropdownlist('#dropdownlist');