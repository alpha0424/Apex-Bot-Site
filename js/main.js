(function ($) {
  "use strict";

  // Preloader (if the #preloader div exists)
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

  // Initiate the wowjs animation library
  new WOW().init();

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Smooth scroll for the navigation and links with .scrollto classes
  $('.main-nav a, .mobile-nav a, .scrollto').on('click', function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;

        if ($('#header').length) {
          top_space = $('#header').outerHeight();

          if (! $('#header').hasClass('header-scrolled')) {
            top_space = top_space - 40;
          }
        }

        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.main-nav, .mobile-nav').length) {
          $('.main-nav .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.main-nav, .mobile-nav');
  var main_nav_height = $('#header').outerHeight();

  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
  
    nav_sections.each(function() {
      var top = $(this).offset().top - main_nav_height,
          bottom = top + $(this).outerHeight();
  
      if (cur_pos >= top && cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
        main_nav.find('a[href="#'+$(this).attr('id')+'"]').parent('li').addClass('active');
      }
    });
  });

  // jQuery counterUp (used in Whu Us section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  $(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
    }
  });

})(jQuery);

 
            function ping(){ 
                document.getElementById('myImage') 
                .src="img/ping2.gif"; 
                document.getElementById('message') 
                .innerHTML=`Usage: +ping | Description: Get the bot's API ping`;
            } 
              
            function weather(){ 
                document.getElementById('myImage') 
                .src="img/weather.gif"; 
                document.getElementById('message') 
                .innerHTML="Usage: +weather <place> | Description: Checks weather forecast for provided location";
            } 
            function announce(){
              document.getElementById('myImage')
              .src="img/announce.gif";
              document.getElementById('message')
              .innerHTML="Usage: +announce <text> | Description: Announce a message";
            }
            function uptime(){
              document.getElementById('myImage')
              .src="img/uptime.gif";
              document.getElementById('message')
              .innerHTML="Usage: +uptime | Description: Shows the uptime of the bot";
            }
            function channelinfo(){
              document.getElementById('myImage')
              .src="img/channelinfo.gif";
              document.getElementById('message')
              .innerHTML="Usage: +channelinfo <#channel> | Description: Info of the channel mentioned";
            }
            function addemoji(){
              document.getElementById('myImage')
              .src="img/addemoji.gif";
              document.getElementById('message')
              .innerHTML="Usage: +addemoji <emoji> | Description: Add an emoji";
            }
            function haste(){
              document.getElementById('myImage')
              .src="img/haste.gif";
              document.getElementById('message')
              .innerHTML="Usage: +haste <text> | Description: Add your text on hastebin";
            }
            function invites(){
              document.getElementById('myImage')
              .src="img/invites.gif";
              document.getElementById('message')
              .innerHTML="Usage: +invites | Description: Check invites";
            }
            function pokemon(){
              document.getElementById('myImage')
              .src="img/pokemon.gif";
              document.getElementById('message')
              .innerHTML="Usage: +pokemon <pokemon name> | Description: Gives Information about pokemon";
            }
            function poll(){
              document.getElementById('myImage')
              .src="img/poll.gif";
              document.getElementById('message')
              .innerHTML="Usage: +poll <text> | Description: Start a poll";
            }
            function remind(){
              document.getElementById('myImage')
              .src="img/remind.gif";
              document.getElementById('message')
              .innerHTML="Usage: +remind <time> <text> | Description: Remainder";
            }
            function roleinfo(){
              document.getElementById('myImage')
              .src="img/roleinfo.gif";
              document.getElementById('message')
              .innerHTML="Usage: +roleinfo <@role> | Description: Info about the role mentioned";
            }
            function rolewith(){
              document.getElementById('myImage')
              .src="img/rolewith.gif";
              document.getElementById('message')
              .innerHTML="Usage: +rolewith <@role> | Description: Tells the name of users with the mentioned role";
            }
            function serveravatar(){
              document.getElementById('myImage')
              .src="img/servericon.gif";
              document.getElementById('message')
              .innerHTML="Usage: +serveravatar | Description: Get the avatar of server";
            }
            function serverinfo(){
              document.getElementById('myImage')
              .src="img/serverinfo.gif";
              document.getElementById('message')
              .innerHTML="Usage: +serverinfo | Description: Information about the server";
            }
            function whois(){
              document.getElementById('myImage')
              .src="img/whois.gif";
              document.getElementById('message')
              .innerHTML="Usage: +whois <@user> | Description: Info about the user";
            }
            function wikipedia(){
              document.getElementById('myImage')
              .src="img/wiki.gif";
              document.getElementById('message')
              .innerHTML="Usage: +wikipedia <text> | Description: Search on wikipedia";
            }
            function suggest(){
              document.getElementById('myImage')
              .src="img/suggest.gif";
              document.getElementById('message')
              .innerHTML="Usage: +suggest <text> | Description: Suggest something to a person";
            }
            function kick(){
              document.getElementById('myImage')
              .src="img/kick.gif";
              document.getElementById('message')
              .innerHTML="Usage: +kick <@user> <reason> | Description: Kicks a member from your server via mention or ID";
            }
            function voicekick(){
              document.getElementById('myImage')
              .src="img/voicekick.gif";
              document.getElementById('message')
              .innerHTML="Usage: +voicekick <@user> | Description: Kicks a user from vc";
            }
            function ban(){
              document.getElementById('myImage')
              .src="img/ban.gif";
              document.getElementById('message')
              .innerHTML="Usage: +ban <@user> <reason> | Description: Bans a member from your server via mention or ID";
            }
            function unban(){
              document.getElementById('myImage')
              .src="img/unban.gif";
              document.getElementById('message')
              .innerHTML="Usage: +unban <user_ID> | Description: Unbans a member from your server Via ID";
            }
            function clear1(){
              document.getElementById('myImage')
              .src="img/clear.gif";
              document.getElementById('message')
              .innerHTML="Usage: +clear <amount> | Description: Purges messages";
            }
            function mute(){
              document.getElementById('myImage')
              .src="img/mute.gif";
              document.getElementById('message')
              .innerHTML="Usage: +mute <@user> | Description: Mutes a Member";
            }
            function unmute(){
              document.getElementById('myImage')
              .src="img/unmute.gif";
              document.getElementById('message')
              .innerHTML="Usage: +unmute <@user> | Description: Unmutes a Member";
            }
            function setmuterole(){
              document.getElementById('myImage')
              .src="img/setmuterole.gif";
              document.getElementById('message')
              .innerHTML="Usage: +setmuterole <@role> | Description: Sets a Mute role";
            }
            function disablemuterole(){
              document.getElementById('myImage')
              .src="img/disablemuterole.gif";
              document.getElementById('message')
              .innerHTML="Usage: +disablemuterole <@role> | Description: Disable Mute role";
            }
            function nuke(){
              document.getElementById('myImage')
              .src="img/nuke.gif";
              document.getElementById('message')
              .innerHTML="Usage: +nuke | Description: Completely Nukes A channel";
            }
            function lock(){
              document.getElementById('myImage')
              .src="img/lock.gif";
              document.getElementById('message')
              .innerHTML="Usage: +lock | Description: Locks A channel";
            }
            function unlock(){
              document.getElementById('myImage')
              .src="img/unlock.gif";
              document.getElementById('message')
              .innerHTML="Usage: +unlock | Description: Unlocks A channel";
            }
            function setnick(){
              document.getElementById('myImage')
              .src="img/setnick.gif";
              document.getElementById('message')
              .innerHTML="Usage: +setnick <@user> <name> | Description: Changes Nickname for a member";
            }
            function slowmode(){
              document.getElementById('myImage')
              .src="img/slowmode.gif";
              document.getElementById('message')
              .innerHTML="Usage: +slowmode <time> | Description: Sets slow mode in channel";
            }
            function reactionrole(){
              document.getElementById('myImage')
              .src="img/rr.gif";
              document.getElementById('message')
              .innerHTML="Usage: +reactionrole | Description: It setups a reaction role";
            }
            function warn(){
              document.getElementById('myImage')
              .src="img/warn.gif";
              document.getElementById('message')
              .innerHTML="Usage: +warn <@user> <reason> | Description: It warns a member";
            }
            function warnings(){
              document.getElementById('myImage')
              .src="img/warnings.gif";
              document.getElementById('message')
              .innerHTML="Usage: +warnings <@user> | Description: It shows warning for a member";
            }
            function resetwarns(){
              document.getElementById('myImage')
              .src="img/resetwarns.gif";
              document.getElementById('message')
              .innerHTML="Usage: +resetwarns <@user> | Description: It completely Reset warns for a member";
            }
            function addrole(){
              document.getElementById('myImage')
              .src="img/addrole.gif";
              document.getElementById('message')
              .innerHTML="Usage: +addrole <@user> <@role> | Description: Gives a role to a member";
            }
            function removerole(){
              document.getElementById('myImage')
              .src="img/removerole.gif";
              document.getElementById('message')
              .innerHTML="Usage: +removerole <@user> <@role> | Description: It removes a role from a member";
            }
            function play(){
              document.getElementById('myImage')
              .src="img/play.gif";
              document.getElementById('message')
              .innerHTML="Usage: +play <song name> | Description: Play song in voice channel";
            }
            function skip(){
              document.getElementById('myImage')
              .src="img/skip.gif";
              document.getElementById('message')
              .innerHTML="Usage: +skip | Description: Skips a song";
            }
            function pause(){
              document.getElementById('myImage')
              .src="img/pause.gif";
              document.getElementById('message')
              .innerHTML="Usage: +pause | Description: Pauses a song";
            }
            function resume(){
              document.getElementById('myImage')
              .src="img/resume.gif";
              document.getElementById('message')
              .innerHTML="Usage: +resume | Description: Resumes a song";
            }
            function loop(){
              document.getElementById('myImage')
              .src="img/loop.gif";
              document.getElementById('message')
              .innerHTML="Usage: +loop | Description: Plays the same song again and again";
            }
            function volume(){
              document.getElementById('myImage')
              .src="img/volume.gif";
              document.getElementById('message')
              .innerHTML="Usage: +volume <amount> | Description: Increase or decrease volume";
            }
            function shuffle(){
              document.getElementById('myImage')
              .src="img/shuffle.gif";
              document.getElementById('message')
              .innerHTML="Usage: +shuffle | Description: Shuffles your queue";
            }
            function queue(){
              document.getElementById('myImage')
              .src="img/queue.gif";
              document.getElementById('message')
              .innerHTML="Usage: +queue | Description: Shows your song list";
            }
            function stop(){
              document.getElementById('myImage')
              .src="img/stop.gif";
              document.getElementById('message')
              .innerHTML="Usage: +stop | Description: Stops the song";
            }
            function filters(){
              document.getElementById('myImage')
              .src="img/filters.gif";
              document.getElementById('message')
              .innerHTML="Usage: +filters | Description: Shows All The Music filters";
            }
            function filter(){
              document.getElementById('myImage')
              .src="img/filter.gif";
              document.getElementById('message')
              .innerHTML="Usage: +filter <filter> | Description: Enables filter on current song";
            }
            function work(){
              document.getElementById('myImage')
              .src="img/work.gif";
              document.getElementById('message')
              .innerHTML="Usage: +work | Description: Work hards to earn money";
            }
            function beg(){
              document.getElementById('myImage')
              .src="img/beg.gif";
              document.getElementById('message')
              .innerHTML="Usage: +beg | Description: Begs to earn money";
            }
            function balance(){
              document.getElementById('myImage')
              .src="img/bal.gif";
              document.getElementById('message')
              .innerHTML="Usage: +balance <@user> | Description: Shows balance";
            }
            function withdraw(){
              document.getElementById('myImage')
              .src="img/withdraw.gif";
              document.getElementById('message')
              .innerHTML="Usage: +withdraw <amount> or <all> | Description: Withdraws money from bank to pocket";
            }
            function deposit(){
              document.getElementById('myImage')
              .src="img/dep.gif";
              document.getElementById('message')
              .innerHTML="Usage: +deposit <amount> or <all> | Description: Deposit money from pocket to bank";
            }
            function weekly(){
              document.getElementById('myImage')
              .src="img/weekly.gif";
              document.getElementById('message')
              .innerHTML="Usage: +weekly | Description: Gives you weekly money 2000";
            }
            function daily(){
              document.getElementById('myImage')
              .src="img/daily.gif";
              document.getElementById('message')
              .innerHTML="Usage: +daily | Description: Gives you some daily money";
            }
            function store(){
              document.getElementById('myImage')
              .src="img/store.gif";
              document.getElementById('message')
              .innerHTML="Usage: +store | Description: Need something buy from store";
            }
            function slots(){
              document.getElementById('myImage')
              .src="img/slots.gif";
              document.getElementById('message')
              .innerHTML="Usage: +slots <amount> | Description: Buy slots and tess your luck";
            }
            function sell(){
              document.getElementById('myImage')
              .src="img/sell.gif";
              document.getElementById('message')
              .innerHTML="Usage: +sell <item> | Description: Sell if you have anything extra";
            }
            function buy(){
              document.getElementById('myImage')
              .src="img/buy.gif";
              document.getElementById('message')
              .innerHTML="Usage: +buy <item> | Description: Buy from store";
            }
            function roulette(){
              document.getElementById('myImage')
              .src="img/roulette.gif";
              document.getElementById('message')
              .innerHTML="Usage: +roulette <Red> or <Black> or <Green> <amount> | Description: Roulette test your luck";
            }
            function rob(){
              document.getElementById('myImage')
              .src="img/rob.gif";
              document.getElementById('message')
              .innerHTML="Usage: +rob <@user> | Description: Robs a rich person";
            }
            function pay(){
              document.getElementById('myImage')
              .src="img/pay.gif";
              document.getElementById('message')
              .innerHTML="Usage: +pay <@user> <amount> | Description: Pay moeney to anyone";
            }
            function leaderboard(){
              document.getElementById('myImage')
              .src="img/lb.gif";
              document.getElementById('message')
              .innerHTML="Usage: +leaderboard | Description: Wants to see who is the richest";
            }
            function fish(){
              document.getElementById('myImage')
              .src="img/fish.gif";
              document.getElementById('message')
              .innerHTML="Usage: +fish | Description: Catch fish and sell";
            }
            function removemoney(){
              document.getElementById('myImage')
              .src="img/removemoney.gif";
              document.getElementById('message')
              .innerHTML="Usage: +removemoney <@user> <amount> | Description: Removemoney if you try somthing fishy";
            }
            function addmoney(){
              document.getElementById('myImage')
              .src="img/addmoney.gif";
              document.getElementById('message')
              .innerHTML="Usage: +addmoney <@user> <amount> | Description: Wanna earn money fast use it";
            }
            function hangup(){
              document.getElementById('myImage')
              .src="img/hangup.gif";
              document.getElementById('message')
              .innerHTML="Usage: +hangup | Description: shut the phone";
            }
            function phonebook(){
              document.getElementById('myImage')
              .src="img/phonebook.gif";
              document.getElementById('message')
              .innerHTML="Usage: +phonebook | Description: Search for a number";
            }
            function phonecall(){
              document.getElementById('myImage')
              .src="img/phonecall.gif";
              document.getElementById('message')
              .innerHTML="Usage: +phonecall | Description: Make a call to random server bot is in and u can chat";
            }
            function setphonechannel(){
              document.getElementById('myImage')
              .src="img/setphonechannel.gif";
              document.getElementById('message')
              .innerHTML="Usage: +setphonechannel <#channel> | Description: Sets the channel where the calls must be made, mention the channel";
            }
            function gstart(){
              document.getElementById('myImage')
              .src="img/gstart.gif";
              document.getElementById('message')
              .innerHTML="Usage: +gstart <#channel> <time> <winners> <prize> |Description: Starts giveaway in a channel";
            }
            function gend(){
              document.getElementById('myImage')
              .src="img/gend.gif";
              document.getElementById('message')
              .innerHTML="Usage: +gend <message_ID> | Description: Ends giveaway before time";
            }
            function greroll(){
              document.getElementById('myImage')
              .src="img/greroll.gif";
              document.getElementById('message')
              .innerHTML="Usage: +greroll <message_ID> | Description: Chooses another winner";
            }
            function gdit(){
              document.getElementById('myImage')
              .src="img/gedit.gif";
              document.getElementById('message')
              .innerHTML="Usage: +gedit <message_ID> <prize> <winners> | Description: Edits the time and number of winner for current giveaway";
            }
            function meme(){
              document.getElementById('myImage')
              .src="img/meme.gif";
              document.getElementById('message')
              .innerHTML="Usage: +meme | Description: Generates a random meme";
            }
            function ascii(){
              document.getElementById('myImage')
              .src="img/ascii.gif";
              document.getElementById('message')
              .innerHTML="Usage: +ascii <text> | Description: Converts text into ascii";
            }
            function anime(){
              document.getElementById('myImage')
              .src="img/anime.gif";
              document.getElementById('message')
              .innerHTML="Usage: +anime <anime_name> | Description: Gives An Anime gif";
            }
            function cat(){
              document.getElementById('myImage')
              .src="img/cat.gif";
              document.getElementById('message')
              .innerHTML="Usage: +cat | Description: Give a cute cat photo";
            }
            function cry(){
              document.getElementById('myImage')
              .src="img/cry.gif";
              document.getElementById('message')
              .innerHTML="Usage: +cry | Description: CRY baby gif";
            }
            function dog(){
              document.getElementById('myImage')
              .src="img/dog.gif";
              document.getElementById('message')
              .innerHTML="Usage: +dog | Description: Give a cute dog photo";
            }
            function fact(){
              document.getElementById('myImage')
              .src="img/fact.gif";
              document.getElementById('message')
              .innerHTML="Usage: +fact | Description: Tell you an amazing fact";
            }
            function hug(){
              document.getElementById('myImage')
              .src="img/hug.gif";
              document.getElementById('message')
              .innerHTML="Usage: +hug <@user> | Description: Gives you a hug gif";
            }
            function joke(){
              document.getElementById('myImage')
              .src="img/joke.gif";
              document.getElementById('message')
              .innerHTML="Usage: +joke | Description: Gives a joke";
            }
            function kill(){
              document.getElementById('myImage')
              .src="img/kill.gif";
              document.getElementById('message')
              .innerHTML="Usage: +kill <@user> | Description: It dont kill but in gif it does";
            }
            function kpop(){
              document.getElementById('myImage')
              .src="img/kpop.gif";
              document.getElementById('message')
              .innerHTML="Usage: +kpop | Description: Gives photo of kpop members";
            }
            function math(){
              document.getElementById('myImage')
              .src="img/math.gif";
              document.getElementById('message')
              .innerHTML="Usage: +math <number> <operator> <number> | Description: Calculate maths for you";
            }
            function pat(){
              document.getElementById('myImage')
              .src="img/pat.gif";
              document.getElementById('message')
              .innerHTML="Usage: +pat <@user> | Description: gives the mentioned user pat";
            }
            function punch(){
              document.getElementById('myImage')
              .src="img/punch.gif";
              document.getElementById('message')
              .innerHTML="Usage: +punch <@user> | Description: Punches the mentioned user";
            }
            function slap(){
              document.getElementById('myImage')
              .src="img/slap.gif";
              document.getElementById('message')
              .innerHTML="Usage: +slap <@user> | Description: Slaps the mentioned user";
            }
            function affect(){
              document.getElementById('myImage')
              .src="img/affect.gif";
              document.getElementById('message')
              .innerHTML="Usage: +affect <@user> | Description: try it It will make you laugh";
            }
            function beautiful(){
              document.getElementById('myImage')
              .src="img/beautiful.gif";
              document.getElementById('message')
              .innerHTML="Usage: +beautiful <@user> | Description: It make your photo beautiful";
            }
            function bed(){
              document.getElementById('myImage')
              .src="img/bed.gif";
              document.getElementById('message')
              .innerHTML="Usage: +bed <@user> | Description: Some bed fight meme";
            }
            function blur1(){
              document.getElementById('myImage')
              .src="img/blur.gif";
              document.getElementById('message')
              .innerHTML="Usage: +blur <@user> | Description: Blur your photo";
            }
            function circle(){
              document.getElementById('myImage')
              .src="img/circle.gif";
              document.getElementById('message')
              .innerHTML="Usage: +circle <@user> | Description: Want A circle pic try it";
            }
            function facepalm(){
              document.getElementById('myImage')
              .src="img/facepalm.gif";
              document.getElementById('message')
              .innerHTML="Usage: +facepalm <@user> | Description: Facepalm your photo";
            }
            function fuse(){
              document.getElementById('myImage')
              .src="img/fuse.gif";
              document.getElementById('message')
              .innerHTML="Usage: +fuse <@user> | Description: Fuses your photo to another";
            }
            function greyscale(){
              document.getElementById('myImage')
              .src="img/greyscale.gif";
              document.getElementById('message')
              .innerHTML="Usage: +greyscale <@user> | Description: Make your photo gray";
            }
            function hitler(){
              document.getElementById('myImage')
              .src="img/hitler.gif";
              document.getElementById('message')
              .innerHTML="Usage: +hitler <@user> | Description: Love to be hitler?";
            }
            function invert(){
              document.getElementById('myImage')
              .src="img/invert.gif";
              document.getElementById('message')
              .innerHTML="Usage: +invert <@user> | Description: Inverts your picture";
            }
            function jail(){
              document.getElementById('myImage')
              .src="img/jail.gif";
              document.getElementById('message')
              .innerHTML="Usage: +jail <@user> | Description: Sends you to jail";
            }
            function jokeoverhead(){
              document.getElementById('myImage')
              .src="img/jvk.gif";
              document.getElementById('message')
              .innerHTML="Usage: +jokeoverhead <@user> | Description: Try and see";
            }
            function kiss(){
              document.getElementById('myImage')
              .src="img/kiss.gif";
              document.getElementById('message')
              .innerHTML="Usage: +kiss <@user> | Description: Gives you a kiss";
            }
            function rainbow(){
              document.getElementById('myImage')
              .src="img/rainbow.gif";
              document.getElementById('message')
              .innerHTML="Usage: +rainbow <@user> | Description: Make your photo rainbow";
            }
            function rip(){
              document.getElementById('myImage')
              .src="img/rip.gif";
              document.getElementById('message')
              .innerHTML="Usage: +rip <@user> | Description: Rip your photo";
            }
            function shit(){
              document.getElementById('myImage')
              .src="img/shit.gif";
              document.getElementById('message')
              .innerHTML="Usage: +shit <@user> | Description: Try and see shit dont take it serious";
            }
            function slap(){
              document.getElementById('myImage')
              .src="img/slap.gif";
              document.getElementById('message')
              .innerHTML="Usage: +slap <@user> | Description: Slaps you not for real";
            }
            function spank(){
              document.getElementById('myImage')
              .src="img/spank.gif";
              document.getElementById('message')
              .innerHTML="Usage: +spank <@user> | Description: Spanks your butt";
            }
            function trash(){
              document.getElementById('myImage')
              .src="img/trash.gif";
              document.getElementById('message')
              .innerHTML="Usage: +trash <@user> | Description: AA trash picture";
            }
            function trigger(){
              document.getElementById('myImage')
              .src="img/trigger.gif";
              document.getElementById('message')
              .innerHTML="Usage: +trigger <@user> | Description: Triggers you";
            }
            function wanted(){
              document.getElementById('myImage')
              .src="img/wanted.gif";
              document.getElementById('message')
              .innerHTML="Usage: +wanted <@user> | Description: Police is saerching for you";
            }
            function wasted(){
              document.getElementById('myImage')
              .src="img/wasted.gif";
              document.getElementById('message')
              .innerHTML="Usage: +wasted <@user> | Description: Wasted a life";
            }
            function horserace(){
              document.getElementById('myImage')
              .src="img/horserace.gif";
              document.getElementById('message')
              .innerHTML="Usage: +horserace | Description: huh! a race";
            }
            function rps(){
              document.getElementById('myImage')
              .src="img/rps.gif";
              document.getElementById('message')
              .innerHTML="Usage: +rps | Description: Thats the game";
            }
            function backupcreate(){
              document.getElementById('myImage')
              .src="img/bcreate.gif";
              document.getElementById('message')
              .innerHTML="Usage: +backup-create | Description: Creates your server backup";
            }
            function backupload(){
              document.getElementById('myImage')
              .src="img/bload.gif";
              document.getElementById('message')
              .innerHTML="Usage: +backup-load <backupID> | Description: Loads the server backup";
            }
            function backupinfo(){
              document.getElementById('myImage')
              .src="img/binfo.gif";
              document.getElementById('message')
              .innerHTML="Usage: +backup-info <backupID> | Description: Shows info about the backup";
            }
            function backupremove(){
              document.getElementById('myImage')
              .src="img/bremove.gif";
              document.getElementById('message')
              .innerHTML="Usage: +backup-remove <backupID> | Description: Removes the backup";
            }
            function eval(){
              document.getElementById('myImage')
              .src="img/owner.gif";
              document.getElementById('message')
              .innerHTML="OWNERS ONLY";
            }
            function restart(){
              document.getElementById('myImage')
              .src="img/owner.gif";
              document.getElementById('message')
              .innerHTML="OWNERS ONLY";
            }
            function serverlist(){
              document.getElementById('myImage')
              .src="img/owner.gif";
              document.getElementById('message')
              .innerHTML="OWNERS ONLY";
            }
            function botstatus(){
              document.getElementById('myImage')
              .src="img/owner.gif";
              document.getElementById('message')
              .innerHTML="OWNERS ONLY";
            }
         
