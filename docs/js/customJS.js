$(document).ready(function() {
    var check = "checked";
    if (typeof(Storage) !== "undefined" && localStorage.getItem("highlightResults") == 1) {
        check = ""
    }
    $("div.md-search-result").prepend('<div class="clearSearchMarks"><input type="checkbox" onclick="unmarkStuff()" id="searchMarks" name="scales" ' + check + '><label for="searchMarks">Highlight search results</label></div>');
});

$(document).ready(function() {
    if (window.location.hash.replace("#", "") != "") {
        jumpToElement($(window.location.hash));
    }
});

function unmarkStuff() {
    if (typeof(Storage) !== "undefined") {
        var highlightResultsState = localStorage.getItem("highlightResults");
        if (highlightResultsState == null || highlightResultsState == 0) {
            highlightResultsState = 1;
            $content.unmark();
            $(".clearSearchMarks").prop('checked', false);
        } else {
            highlightResultsState = 0;
            $(".clearSearchMarks").prop('checked', true);
        }

        $("li.md-search-result__item").find('a').each(function(e) {
            var jumpTargetValue = $(this).attr('href').split("#");
            var jumpTarget = "";
            if (jumpTargetValue.length > 1) {
                jumpTarget = "#" + jumpTargetValue[1];
            }
            var searchText = "?h=" + $("input[aria-label=\"Search\"]").val();
            if (highlightResultsState == 1) {
                searchText = ""
            }
            var link = $(this).attr('href').split("?")[0].split("#")[0];
            $(this).attr('href', link + searchText + jumpTarget);
        });

        localStorage.setItem("highlightResults", highlightResultsState);
    }
}

function reevaluateLastVisit() {
    if (typeof(Storage) !== "undefined") {
        $(".md-nav[aria-label=\"Last visited\"]").find("a").each(function(index) {
            var lastVisitEntry = getRecentList()[index];
            if (lastVisitEntry !== undefined) {
                $(this).attr("href", lastVisitEntry);
                lastVisitEntry = lastVisitEntry.replace("IsaacDocs/", "").replace("rep/", "").replace("abp/", "").replace("docs/", "");
                var linkName = lastVisitEntry.substring(1, lastVisitEntry.length).replace(".html", "");
                $(this).text(linkName);
            } else {
                $(this).parent().hide();
            }
        });

    } else {
        $(".md-nav[aria-label=\"Last visited\"]").parent().hide();
    }
}

function getRecentList() {
    var recentList = localStorage.getItem("recentlyVisited");
    if (recentList == null) {
        recentList = [];
    } else {
        recentList = recentList.split(',');
    }
    return recentList;
}

function buildContentMap() {
    if (!$("h1").first().text().includes("Class ")) {
        //only build map on class-related pages
        return;
    }
    var mapObj = $("<div class=\"contentMap\"><h2 class=\"overviewHeader\">Content Overview</h2><table class=\"contentTable\" id=\"contentOverviewTable\"><thead><tr><th>Return value</th><th>Function</th></tr></thead><tbody></tbody></table><hr/></div>");
    if ($(".inheritance").length == 0) {
        mapObj.insertAfter($(".md-content__inner").find("h1"));
    } else {
        mapObj.insertAfter($(".md-content__inner").find("p").first());
    }

    var tableContent = "";
    $("h4").each(function(index) {
        //remove anchor links from variable description headers... we dont need them and they suck
        $(this).find("a.headerlink").remove();

        var funcParts = $(this).html().split(" (");
        var funcFront = funcParts[0].split(" ");
        var funcName = funcFront.pop();
        var parentH3Node = $(this).prev();
        while (parentH3Node.prop("tagName") != "H3") {
            parentH3Node = parentH3Node.prev();
        }
        var funcLink = parentH3Node.find("a").last().attr("href");
        funcName = "<a href=\"" + funcLink + "\">" + funcName + "</a>";
        var ariaLabel = $(this).attr("aria-label");
        if (funcParts.length > 1) {
            tableContent = tableContent + "<tr aria-label=\"" + ariaLabel + "\"><td>" + funcFront.join(" ") + "</td><td aria-label=\"" + ariaLabel + "\" class=\"copyable\">" + funcName + " (" + funcParts[1] + "</td></tr>";
        } else {
            tableContent = tableContent + "<tr aria-label=\"" + ariaLabel + "\"><td>" + funcFront.join(" ") + "</td><td aria-label=\"" + ariaLabel + "\" class=\"copyable\">" + funcName + "</td></tr>";
        }
    });

    $('#contentOverviewTable > tbody').append(tableContent);
}

function modifyCallbackPageLayout() {
    if (!window.location.pathname.includes("ModCallbacks")) {
        return;
    }

    var curH3;
    var mcTableData;
    var tableContent = "";
    $("article.md-content__inner").children().each(function(index) {
        if ($(this).get(0).tagName == "H3") {
            if (mcTableData != null && curH3 != null) {
                var headerLink = mcTableData.find("td:eq(2)").text().toLowerCase();
                tableContent = tableContent + "<tr><td class=\"copyable\"><a href=\"#" + headerLink + "\">" + mcTableData.find("td:eq(2)").text() + "</a></td>"
                tableContent = tableContent + "<td>" + mcTableData.find("td:eq(3)").html() + "</td><td>" + mcTableData.find("td:eq(4)").html() + "</td></tr>";
            }
            curH3 = $(this);
        } else if ($(this).get(0).tagName == "DIV") {
            if (curH3 != null) {
                mcTableData = $(this);
            }
        }
    });
    var mapObj = $("<div class=\"contentMap\"><h2 class=\"overviewHeader\">Content Overview</h2><table class=\"contentTable\" id=\"contentOverviewTable\"><thead><tr><th>Name</th><th>Function Args</th><th>Optional Args</th></tr></thead><tbody></tbody></table><hr/></div>");
    mapObj.insertAfter($(".md-content__inner").find("p").first());

    $('#contentOverviewTable > tbody').append(tableContent);
}

function addBitsetCalculator() {
    $(".bitsetCalculator").each(function(header) {
        $("<div id=\"bitsetCalculator\"><label for=\"bitsetCalcInput\" style=\"float:left\">Number:</label><input type=\"number\" min=\"0\" class=\"md-search__input\" id=\"bitsetCalcInput\" name=\"bitsetCalcInput\"><span id=\"bitsetCalcSplits\"></span><div id=\"bitsetCalcResult\"></div></div>").insertAfter($(this));
        $("#bitsetCalcInput").on('input', function() {
            $("#bitsetCalcSplits").empty();
            $("#bitsetCalcResult").empty();
            $(".md-typeset__table").find("tr").removeClass("tableHighlight");
            if ($("#bitsetCalcInput").val() == "") {
                return;
            }

            if (parseInt($("#bitsetCalcInput").val()) == "0") {
                var isMatched = false;
                $(".md-typeset__table").find("tr").each(function(index) {
                    var val = $(this).find("td:eq(1)");
                    if (val.length > 0) {
                        val = val.text();
                        val = val.replace("BitSet128(0,0)", "0");
                        if ("0" === val) {
                            isMatched = true;
                            $(this).addClass("tableHighlight");
                        }
                    }
                });
                var classVar = isMatched ? "class=\"highVal\"" : "";
                $("#bitsetCalcSplits").append($("<span " + classVar + ">" + $("#bitsetCalcInput").val() + "</span>"));
                $("#bitsetCalcResult").append($("<span>Found " + (isMatched ? 1 : 0) + " matching enums.</span>"));

            } else {
                var binary = BigInt($("#bitsetCalcInput").val()).toString(2);
                var len = binary.length - 1;
                var completeCounter = 0;
                for (let i = len; i >= 0; i--) {
                    var bit = parseInt(binary.substring(len - i, len - i + 1));
                    var bitToFull = BigInt(bit) << BigInt(i);
                    var isMatched = false;
                    $(".md-typeset__table").find("tr").each(function(index) {
                        var val = $(this).find("td:eq(1)");
                        if (val.length > 0 && bit == 1) {
                            val = val.text();
                            val = val.replace("BitSet128(0,0)", "0");
                            if (val.indexOf("TEARFLAG") >= 0) {
                                val = val.replace("TEARFLAG(", "").replace(")", "");
                                val = "1<<" + val;
                            }
                            if (val.indexOf("<<") >= 0) {
                                val = BigInt(1) << BigInt(parseInt(val.split("<<")[1]));
                            }
                            if (bitToFull == val) {
                                $(this).addClass("tableHighlight");
                                isMatched = true;
                                completeCounter = completeCounter + 1;
                                return false;
                            }
                        }
                    });
                    var classVar = bit == 1 && isMatched ? "class=\"highVal\"" : "";
                    $("#bitsetCalcSplits").append($("<span " + classVar + ">" + bit + "</span>"));
                    if (i % 4 == 0 && i != 0) {
                        $("#bitsetCalcSplits").append($("<span>|</span>"));
                    }
                }
                $("#bitsetCalcResult").append($("<span>Found " + completeCounter + " matching enums.</span>"));
            }

        });
        $("<span>Highlights all bit-flag enums that construct the given integer value.</span><br>").insertAfter($(this));
    });
}

document$.subscribe(function() {
    if (typeof(Storage) !== "undefined") {
        // handle recently visited
        var recentList = getRecentList();

        var pathname = window.location.pathname;
        if (pathname !== "/" && !pathname.includes("index.html")) {
            const index = recentList.indexOf(pathname);
            if (index > -1) {
                recentList.splice(index, 1);
            }
            recentList.unshift(pathname);
            recentList.splice(10, 1);
            localStorage.setItem("recentlyVisited", recentList.toString());
        }
    }
    // handle badge line object
    $(".badge").each(function(table) {
        if ($(this).parent().prop("tagName") == "P") {
            $(this).parent().addClass("badgeLine");
        }
    });

    modifyCallbackPageLayout();
    addBitsetCalculator();
    buildContentMap();
    $(".overviewHeader").click(function() {
        $(this).toggleClass("collapsed");
        $(".contentTable").toggle();
    });

    // handle frequently used Entry
    $("nav[aria-label=\"Frequently used\"]").parent().addClass("frequentlyUsed");

    $(".md-nav[aria-label=\"Last visited\"]").siblings().click(function() {
        reevaluateLastVisit();
    });
    $("div.md-footer-nav").find("a[href*='PLACEHOLDER']").first().hide();

    //moves scroll position on href clicking a bit further up
    $('a[href^="#"]').on('click', function(e) {
        var href = $(this).attr('href');
        jumpToElement(href);
    });

    // Make tables sortable
    document.querySelectorAll("article table").forEach(function(table) {
        new Tablesort(table)
    })

    // Handle Version-selector list
    waitForElementToDisplay(".md-version__list", function() {
        var sourceFolder = "IsaacDocs"
        if (window.location.host.includes("moddingofisaac.com")) {
            sourceFolder = "docs"
        }
        $(".md-version__list").append('<li class="md-version__item"><a href="/' + sourceFolder + '/oldDocs/index.html" class="md-version__link">Original AB+ Docs</a></li>')
    }, 500, 9000);


    // handle Copy Buttons
    $(".copyable").each(function(e) {
        if ($(this).prop("tagName") == "TD") {
            $(this).attr('id', $(this).text())
            $(this).append('<a class="headerlink" href="#' + $(this).text() + '" title="Permanent link">⚓︎</a>');
        }
        $(this).append('<button class="md-clipboard copyButton md-icon"><span>Copy to clipboard</span></button>');
    })


    $(".copyButton").click(function() {
        var parent = $(this).parent();
        $(this).find("span").first().text("");

        var pathname = window.location.pathname;
        pathname = pathname.replace(".html", "").substring(1, pathname.length - 1);
        var splitted = pathname.split("/");
        pathname = splitted[splitted.length - 1];
        var funcNameLine = "";
        parent.each(function(index) {
            funcNameLine = $(this).text();
        });
        var functionString = funcNameLine.replace("⚓︎", "");
        if (funcNameLine.includes("(")) {
            functionString = funcNameLine.replace(" ( ", "(");
            var funcPart1 = functionString.split("(")[0].split(" ");
            var p1 = funcPart1[funcPart1.length - 1];
            var funcPart2 = "";
            var funcVars = functionString.replace(functionString.split("(")[0], "")
            $.each(funcVars.split(", "), function(index, value) {
                if (index > 0) {
                    funcPart2 += ", ";
                }
                if (value.split(" ").length > 1) {
                    funcPart2 += value.split(" ")[1].replace(" )", "").replace(")", "");
                }
            });
            functionString = p1 + "(" + funcPart2 + ")";
        } else {
            functionString = functionString.split(" ")[functionString.split(" ").length - 1]
        }

        var connector = ".";
        if (funcNameLine.includes("(") && !pathname.includes("Isaac") && !pathname.includes("Input")) {
            connector = ":";
        }
        if (parent.attr("aria-label") == "Constructors") {
            connector = "";
        }
        if (!window.location.pathname.includes("enums") && !pathname.includes("Isaac") && !pathname.includes("Input")) {
            pathname = "";
        }

        var copyText = pathname + connector + functionString;

        copyText = copyText.replace("Copy to clipboard", "");
        parent.append('<textarea>' + copyText + '</textarea>');
        parent.find("textarea").each(function(index) {
            $(this).select();
            document.execCommand("copy");
            $(this).remove();
        });
        $(this).find("span").first().text("Copied: \n" + copyText);
    });

    $(".copyButton").mouseleave(function() {
        $(this).find("span").first().text("Copy to clipboard");
    });

    //Adds search query string to search result links
    // We use an Element observer, to change the search results AFTER they where placed
    var target = document.querySelector('.md-search-result__list')
    var observer = new MutationObserver(function(mutations) {
        $("li.md-search-result__item").find('a').each(function(e) {
            hidePlaceholderChar($(this));
            colorizeSearchResults($(this));
        });
    });
    var config = { attributes: true, childList: true, characterData: true };
    observer.observe(target, config);

    //Hide Placeholder chars everywhere
    $("h3, a.md-nav__link").each(function(e) {
        hidePlaceholderChar($(this));
    })

    //remove search query string of search result links
    // We use an Element observer, to change the search results AFTER they where placed
    var target = document.querySelector('.md-search-result__list')
    var observer = new MutationObserver(function(mutations) {
        var searchText = $("input[aria-label=\"Search\"]").val();
        if (typeof(Storage) !== "undefined" && localStorage.getItem("highlightResults") == 1) {
            $("li.md-search-result__item").find('a').each(function(e) {
                var jumpTargetValue = $(this).attr('href').split("#");
                var jumpTarget = "";
                if (jumpTargetValue.length > 1) {
                    jumpTarget = "#" + jumpTargetValue[1];
                }
                var link = $(this).attr('href').split("?")[0].split("#")[0];
                $(this).attr('href', link + jumpTarget);
            });
        }
    });
    var config = { attributes: true, childList: true, characterData: true };
    observer.observe(target, config);

    mark();

    if (typeof(Storage) !== "undefined") {
        if (localStorage.getItem("highlightResults") == 1) {
            $(".clearSearchMarks").prop('checked', false);
            $content.unmark();
        }
    }
});

// mark.js functionality
var $results;
var $content = $("article");
var mark = function() {
    // Read the url
    var sPageURL = window.location.search;
    if (sPageURL.indexOf("?") !== -1) {

        // Generate an array with all referrer parameters
        var qs = sPageURL.substr(sPageURL.indexOf('?') + 1);
        var qsa = qs.split('&');

        // Get search keywords
        var keyword = "";
        for (var i = 0; i < qsa.length; i++) {
            var currentParam = qsa[i].split('=');
            if (currentParam.length !== 2) {
                continue;
            }
            if (currentParam[0] == "h") {
                keyword = decodeURIComponent(currentParam[1].replace(/\+/g, "%20"));
            }
        }

        if (keyword != "") {
            // Mark the keyword inside the context
            $content.unmark({
                done: function() {
                    $content.mark(keyword, {
                        separateWordSearch: true,
                        done: function() {
                            $results = $content.find("mark");
                            jumpToFirst();
                        }
                    });
                }
            });
        }
    }
};

function jumpToFirst() {
    if ($results.length) {
        var position,
            $current = $results.eq(0);
        if ($current.length) {
            position = $current.offset().top - 75;
            window.scrollTo(0, position);
        }
    }
    if (window.location.hash.replace("#", "") != "") {
        jumpToElement($(window.location.hash));
    }
}


function jumpToElement(element) {
    $('html, body').animate({
        scrollTop: $(element).offset().top - 75
    }, 5);
}

function hidePlaceholderChar(element) {
    element.html(element.html().replaceAll('·', ""));
}

function colorizeSearchResults(element) {
    var text = element.text();
    if (text.includes("Class ")) {
        element.addClass("searchClass");
    } else if (text.includes("Tutorial")) {
        element.addClass("searchTutorial");
    } else if (text.includes("Enum ")) {
        element.addClass("searchEnum");
    } else if (text.includes("File ")) {
        element.addClass("searchFile");
    }
}


function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.querySelector(selector) != null) {
            callback();
            return;
        } else {
            setTimeout(function() {
                if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
                    return;
                loopSearch();
            }, checkFrequencyInMs);
        }
    })();
}