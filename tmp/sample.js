function scrollToFn(driver, element, scrollAmount){
    return elem.getAttribute('scrollTop').then(function(val){
        scrollAmount += +val;       // written as +val for string to number conversion
        return driver.executeScript("arguments[0].scrollTop = arguments[1]", elem, scrollAmount);
    });
}

function scrollToInnerFn(driver, parentEle, innerEle){
    return innerEle.getAttribute('offsetTop').then(function(val){
        return driver.executeScript("arguments[0].scrollTop = arguments[1]", parentEle, val);
    });
}

client.addCommand("getElementByXpath", function(path) {
          var element = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          return element.scrollIntoView();
          element = client.findElement(By.linkText(text));
    client.executeScript("arguments[0].scrollIntoView()", element);
    client.sleep(300);
    element.click();

});

client.addCommand("getUrlAndTitle", function (customVar) {
    return {
        url: this.getUrl(),
        title: this.getTitle(),
        customVar: customVar
    };
});

client.addCommand("clickByLinkTextScroll", function(text) {
    element = client.findElement(By.linkText(text));
    client.executeScript("arguments[0].scrollIntoView()", element);
    client.sleep(300);
    element.click();
})
