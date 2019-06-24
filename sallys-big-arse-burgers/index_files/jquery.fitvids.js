/*global jQuery */
/*jshint multistr:true browser:true */
/*!
* FitVids 1.0
*
* Copyright 2011, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/

(function( $ ){

  "use strict";

  $.fn.fitVids = function( options ) {
	var settings = {
	  customSelector: null
	};

	if(!document.getElementById('fit-vids-style')) {

	  var div = document.createElement('div'),
		  ref = document.getElementsByTagName('base')[0] || document.getElementsByTagName('script')[0];

	  div.className = 'fit-vids-style';
	  div.id = 'fit-vids-style';
	  div.style.display = 'none';
	  div.innerHTML = '&shy;<style>         \
		.fluid-width-video-wrapper {        \
		   width: 100%;                     \
		   position: relative;              \
		   padding: 0;                      \
		}                                   \
											\
		.fluid-width-video-wrapper iframe,  \
		.fluid-width-video-wrapper object,  \
		.fluid-width-video-wrapper embed {  \
		   position: absolute;              \
		   top: 0;                          \
		   left: 0;                         \
		   width: 100%;                     \
		   height: 100%;                    \
		}                                   \
	  </style>';

	  ref.parentNode.insertBefore(div,ref);

	}

	if ( options ) {
	  $.extend( settings, options );
	}

	return this.each(function(){
	  var selectors = [
		"iframe[src*='player.vimeo.com']",
		"iframe[src*='youtube.com']",
		"iframe[src*='youtube-nocookie.com']",
		"iframe[src*='kickstarter.com'][src*='video.html']",
		"object",
		"embed"
	  ];

	  if (settings.customSelector) {
		selectors.push(settings.customSelector);
	  }

	  var $allVideos = $(this).find(selectors.join(','));
	  $allVideos = $allVideos.not("object object"); // SwfObj conflict patch

	  $allVideos.each(function(){
		var $this = $(this);
		if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
		var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
			width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
			aspectRatio = height / width;
		if(!$this.attr('id')){
		  var videoID = 'fitvid' + Math.floor(Math.random()*999999);
		  $this.attr('id', videoID);
		}
		$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+"%");
		$this.removeAttr('height').removeAttr('width');
	  });
	});
  };
})( jQuery );
/*
     FILE ARCHIVED ON 03:17:14 Jul 27, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:09:14 Jun 24, 2019.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  LoadShardBlock: 643.973 (3)
  esindex: 0.007
  captures_list: 661.344
  CDXLines.iter: 12.885 (3)
  PetaboxLoader3.datanode: 667.241 (4)
  exclusion.robots: 0.24
  exclusion.robots.policy: 0.222
  RedisCDXSource: 0.79
  PetaboxLoader3.resolve: 56.266
  load_resource: 166.033
*/