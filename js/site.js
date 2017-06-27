$(function() {
    var changeColor = (function() {
        'use strict';

        var changeColor = {
            init: function() {
                this.initVar();
                this.addHandler();
            },
            initVar: function() {
                this.tolerance = -($('body').height() * 0.4);
                this.$when = $('#when');
                this.$schedule = $('#schedule');
                this.$speakers = $('#speakers');
                this.$sponsors = $('#sponsors');
                this.$location = $('#location');
                this.$tickets = $('#tickets');
                this.$qna = $('#qna');
            },
            isViewport: function(element) {
                return element.is(':in-viewport(' + this.tolerance + ')');
            },
            checkViewport: function() {

                var sectionList = ['when', 'schedule', 'speakers', 'sponsors', 'location', 'tickets', 'qna'],
                    i = 0,
                    len = sectionList.length;

                for (; i < len; i++) {
                    if (this.isViewport(this['$' + sectionList[i]])) {
                        $('body').addClass(sectionList[i]);
                    } else {
                        $('body').removeClass(sectionList[i]);
                    }
                }
            },
            addHandler: function() {
                var _this = this;

                $(window).on('load resize', function() {
                    _this.tolerance = -($('body').height() * 0.4);
                });

                $(window).on('scroll', function() {
                    _this.checkViewport();
                });
            }
        };

        return changeColor;
    }());

    changeColor.init();

    $.getScript("https://cdn.rawgit.com/mikeflynn/egg.js/master/egg.min.js",function(){var t=new Egg;t.addCode("l, o, v, e",function(){var t=$(".speakers_info").eq(1),n=t.find("img").attr("src");t.find("img").hide(0,function(){$(this).parent().next().hide(),$(this).attr("src","img/heart.svg")}).fadeIn(500,function(){setTimeout(function(){t.find("img").hide(0,function(){$(this).parent().next().show(),$(this).attr("src",n)}).fadeIn()},3e3)})}).listen()});
});