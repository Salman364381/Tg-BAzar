
        ; (function (root, factory) {

            if (typeof define === 'function' && define.amd) {
                define(factory);
            } else if (typeof exports === 'object') {
                module.exports = factory();
            } else {
                root.Jetline_TS = factory();
            }

        })(this, function () {
            var Jetline_TS = {};

            Jetline_TS.version = '0.2.0';

            Jetline_TS.status = null;

            Jetline_TS = function (option) {

                var settings = $.extend({
                    // These are the defaults.
                    color: ['#111', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF'],
                    Text_color: ['#000000', '#fff', '#ff3', '#FF00F2'],
                    Icon: 'img/icon1.png'
                }, option);
                var Jvar = {
                    code: '395740730',
                    tool: '395740731',
                    pattern: '293879832',
                    theme: 'Skin-icon img',
                    trigger: 'click',
                    TX: 'switcher2',
                    DC: 'switcher',
                    ARY: ['Switcher', 'Switcher-text', 'Switcher-img']
                };
                create(null);
                _Config: {                    
                    $('.Skin-Switcher').css({
                        'right': '-' + $('.Skin-Changer').outerWidth() + 'px'
                    });
                    $('.' + Jvar.theme).attr('src', settings.Icon);
                    var colorsHex = settings.color;
                    var TCHex = settings.Text_color;
                    var xid = document.getElementById(Jvar.DC);
                    for (var i = 0; i < colorsHex.length; i++) {

                        $(xid).append("<li class='" + Jvar.code + "' style='background-color:" + colorsHex[i] + "'></li>");
                    }/*  */
                    for (var k = 0; k < TCHex.length; k++) {
                        $(document.getElementById(Jvar.TX)).append("<li class='" + Jvar.tool + "' style='background-color:" + TCHex[k] + "'></li>");
                    }
                };
                $(document.getElementsByClassName(Jvar.code)).on(Jvar.trigger, function () {
                    switchcss($(this).css('background-color'));
                });
                $(document.getElementsByClassName(Jvar.tool)).on(Jvar.trigger, function () {
                    switchtxt($(this).css('background-color'));
                });
                $(document.getElementsByClassName(Jvar.pattern)).on(Jvar.trigger, function () {
                    alert('No change Background- Image!!!');
                });
                $('#myonoffswitch').click(function () {      /* box Switch*/
                    if (this.checked) {
                        $('body').addClass('box');
                        localStorage.setItem("box", "True");
                    }
                    else {
                        $('body').removeClass('box');
                        localStorage.setItem("box", "false");
                    }
                });
                $('#myonoffswitch2').click(function () {      /* box Switch*/
                    if (this.checked) {
                        alert('Upcomeing Construction!!!')
                        localStorage.setItem("fixed", "True");
                    }
                    else {

                        localStorage.setItem("fixed", "false");
                    }
                });
                var bj = Jvar.theme;
                $('.' + bj.substr(0.9) || '.' + bj).click(function () {
                    if ($('.Skin-Switcher').hasClass("active")) {
                        $('.Skin-Switcher').animate({ "right": "-" + $('.Skin-Changer').outerWidth() + "px" }, function () {
                            $('.Skin-Switcher').toggleClass("active");
                        });
                    } else {
                        $('.Skin-Switcher').animate({ "right": "0px" }, function () {
                            $('.Skin-Switcher').toggleClass("active");
                        });
                    }
                });
                _hasload: {
                    var btnswtch = localStorage.getItem("box");
                    var btnswtch2 = localStorage.getItem("fixed");
                    if (btnswtch == "True") {
                        $("body").attr("class", "box");
                        $("#myonoffswitch").attr('checked', "True");
                    }
                    else {
                        $("#myonoffswitch").attr("unchecked");
                        $("body").removeClass("class", "box");
                    }
                    if (btnswtch2 == "True") {

                        $("#myonoffswitch2").attr('checked', "True");
                    }
                    else {

                        $("#myonoffswitch").attr("unchecked");
                    }
                    if (typeof (Storage) !== "undefined") {
                        var clsnm = localStorage.getItem("CSS");
                        var clstxt = localStorage.getItem("CSStxt");
                        switchcss(clsnm);
                        switchtxt(clstxt);
                    }
                    else {
                        alert("Skin Not Working...");
                    }
                }
                return this;
            };
            /*
                create theme switcher 
                        &
                  configuration 
            */
            function switchcss(cls) {
                $('.Switcher').css({ 'background-color': cls });
                localStorage.setItem("CSS", cls);
            }
            function switchtxt(clstxt) {
                $('.Switcher-text').css({ 'color': clstxt });
                localStorage.setItem("CSStxt", clstxt);
            }
            function create(value) {
                if (!value) {

                    var div_0 = document.createElement('div');
                    div_0.className = "Skin-Switcher";

                    var div_1 = document.createElement('div');
                    div_1.className = "Skin-Changer";

                    var ul_0 = document.createElement('ul');
                    ul_0.className = "switch_section";

                    var li_0 = document.createElement('li');

                    var small_0 = document.createElement('small');
                    small_0.appendChild(document.createTextNode("Box Layout"));
                    li_0.appendChild(small_0);


                    var div_2 = document.createElement('div');
                    div_2.className = "onoffswitch";

                    var input_myonoffswitch = document.createElement('input');
                    input_myonoffswitch.type = "checkbox";
                    input_myonoffswitch.name = "onoffswitch";
                    input_myonoffswitch.id = "myonoffswitch";
                    input_myonoffswitch.className = "onoffswitch-checkbox";
                    div_2.appendChild(input_myonoffswitch);


                    var label_0 = document.createElement('label');
                    label_0.htmlFor = "myonoffswitch";
                    label_0.className = "onoffswitch-label";
                    div_2.appendChild(label_0);

                    li_0.appendChild(div_2);

                    ul_0.appendChild(li_0);


                    var li_1 = document.createElement('li');

                    var small_1 = document.createElement('small');
                    small_1.appendChild(document.createTextNode("Fixed Header"));
                    li_1.appendChild(small_1);


                    var div_3 = document.createElement('div');
                    div_3.className = "onoffswitch";

                    var input_myonoffswitch2 = document.createElement('input');
                    input_myonoffswitch2.id = "myonoffswitch2";
                    input_myonoffswitch2.name = "onoffswitch";
                    input_myonoffswitch2.type = "checkbox";
                    input_myonoffswitch2.className = "onoffswitch-checkbox";
                    div_3.appendChild(input_myonoffswitch2);


                    var label_1 = document.createElement('label');
                    label_1.htmlFor = "myonoffswitch2";
                    label_1.className = "onoffswitch-label";
                    div_3.appendChild(label_1);

                    li_1.appendChild(div_3);

                    ul_0.appendChild(li_1);

                    div_1.appendChild(ul_0);


                    var h4_0 = document.createElement('h4');
                    h4_0.className = "d0348889";
                    h4_0.appendChild(document.createTextNode("Skin Colors"));
                    div_1.appendChild(h4_0);


                    var ul_switcher = document.createElement('ul');
                    ul_switcher.id = "switcher";
                    div_1.appendChild(ul_switcher);


                    var h4_1 = document.createElement('h4');
                    h4_1.className = "d0348889 ";
                    h4_1.appendChild(document.createTextNode("Font Color"));
                    div_1.appendChild(h4_1);


                    var ul_switcher2 = document.createElement('ul');
                    ul_switcher2.id = "switcher2";
                    div_1.appendChild(ul_switcher2);


                    var div_4 = document.createElement('div');
                    div_4.className = "mc4840m8cm4";

                    var strong_0 = document.createElement('strong');
                    /*strong_0.appendChild(document.createTextNode("Background Pattern"));*/
                    /*div_4.appendChild(strong_0);*/


                    var div_5 = document.createElement('div');
                    div_5.className = "BG_IMG";

                    var img_0 = document.createElement('img');
                    /*img_0.src = "http://www.jetline-ui.somee.com/CND/Theme%20Switcher/BG-1.jpg";*/
                    img_0.className = 293879832;
                    /*div_5.appendChild(img_0);*/


                    var img_1 = document.createElement('img');
                    /*img_1.src = "http://www.jetline-ui.somee.com/CND/Theme%20Switcher/BG-2.jpg";*/
                    img_1.className = 293879832;
                    /*div_5.appendChild(img_1);*/


                    var img_2 = document.createElement('img');
                    img_2.className = 293879832;
                    /*img_2.src = "http://www.jetline-ui.somee.com/CND/Theme%20Switcher/BG-3.jpg";*/
                    /*div_5.appendChild(img_2);*/


                    var img_3 = document.createElement('img');
                    img_3.className = 293879832;
                    /*img_3.src = "http://www.jetline-ui.somee.com/CND/Theme%20Switcher/BG-4.jpg";*/
                    /*div_5.appendChild(img_3);*/


                    var img_4 = document.createElement('img');
                    /*img_4.src = "http://www.jetline-ui.somee.com/CND/Theme%20Switcher/BG-5.jpg";*/
                    img_4.className = 293879832;
                    /*div_5.appendChild(img_4);*/

                    div_4.appendChild(div_5);

                    div_1.appendChild(div_4);

                    div_0.appendChild(div_1);


                    var div_6 = document.createElement('div');
                    div_6.style.backgroundColor = "white";
                    div_6.className = "Skin-icon";

                    var img_5 = document.createElement('img');
                    img_5.width = 30;
                    img_5.height = 30;
                    div_6.appendChild(img_5);

                    div_0.appendChild(div_6);

                    document.body.appendChild(div_0);


                }
            }
            /*
                configuration Default settings 
            */
            return Jetline_TS;
        });
