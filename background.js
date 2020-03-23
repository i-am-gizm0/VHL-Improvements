chrome.runtime.onInstalled.addListener(function() {
    console.log("Thanks for installing VHLI! I hope you enjoy!");
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {
                    urlMatches: "^https:\/\/[a-z,0-9]*\.vhlcentral.com\/sections\/[0-9]*\/activities\/"
                }
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});