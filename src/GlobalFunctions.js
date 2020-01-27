window.scrollToElement = (elementID) => {
    window.scroll({
        top: document.querySelector(elementID).offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}

window.queryStringToObject = () => {
    var pairs = location.search.slice(1).split('&');

    var result = {};
    pairs.forEach(function(pair) {
        pair = pair.split('=');
        result[pair[0]] = decodeURIComponent(pair[1] || '');
    });

    const realResult = JSON.stringify(result);

    return realResult === "{\"\":\"\"}" ? {} : JSON.parse(realResult);

}