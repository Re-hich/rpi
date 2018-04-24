/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// Place your code here.

$(document).ready(function() {
	// Responsive images basic pages
	$('#img-wrapper').append('<span class="append-bg"><span class="append-img"></span></span>');
	//4 linies següents eliminar quan estigui posat a tots #img-wrapper
	$("#intro img").wrap('<span class="img-wrapper" />');
	$('#intro .img-wrapper').append('<span class="append-bg"><span class="append-img"></span></span>');
	$("#field-name-body img.file-contingut").wrap('<span class="img-wrapper" />');
	$('#field-name-body .img-wrapper').append('<span class="append-bg"><span class="append-img"></span></span>');
	
	classtabs();
});	

var classtabs = function() {
	// Responsive in node_navegacio field-collection-tabs
	$(function(){
	    // save selector to UL
	    var $ulArray = $('#tabs-navegacio .ui-tabs-nav');
	   
	    // var to hold height of UL
	    var lineHeight = 30;
	    $ulArray.each(function(){
	        var $this = $(this);
	        if ($this.height() <= lineHeight) {
	            $this.addClass('oneline')
	            return true;
	        }
	        if ($this.height() > lineHeight) {
	            $this.addClass('moreline')
	            return true;
	        }
	    });
	});
}
})(jQuery, Drupal, this, this.document);
;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// Place your code here.
//var ww = document.body.clientWidth;
//window.innerWidth;
var ww = null;

$(document).ready(function() {	

	// Responsive menu Language (funcionament intern) 
	$("#block-locale-language ul li.active a").clone().appendTo($("#block-locale-language")).addClass("parent_lang active");


	// Responsive menu Fitxa (funcionament intern)
	//$("#block-views-menu-fitxa-block-1 div.menu-pare:empty").hide();
	//$("#block-views-menu-fitxa-block-1 div.menu-pare:empty").siblings().addClass("nopare");
	//field-collection-item-field-page-collection
	//$("#block-views-menu-fitxa-block-1 div.field-collection-item-field-page-collection:has(div.menu-pare)")

	//$("#block-views-menu-fitxa-block-1 div.entity-field-collection-item:has(div.menu-pare)").addClass("sitepare");

	$("#block-views-menu-fitxa-block-1 div.entity-field-collection-item:has(div.menu-pare)").addClass("sitepare");

	$("#block-views-menu-fitxa-block-1 div.entity-field-collection-item:has(a.active)").addClass("active open");
	$("#block-views-menu-fitxa-block-1 div.entity-field-collection-item").last().addClass("last");

	$("#block-views-menu-fitxa-block-1 div.entity-field-collection-item div.menu-pare").click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(this.parentNode).toggleClass("open");
	});

	
	// Responsive menu Language 
	$('#block-locale-language a.parent_lang').click(function(e) {
		//toogle ul
		e.preventDefault();
		e.stopPropagation();

		if ($(this).hasClass("active")) { // saca clase active y pon fondo negro
			$(this).removeClass("active");
			$("#block-locale-language ul.language-switcher-locale-url").show();
			//add black background div
			if ( !$('#black_bg').length) {
				$("#wrapper").append("<a href='#' id='black_bg'></a>");
				$("#black_bg").addClass("vis");
			}
			else {
				$('#black_bg').addClass("vis");
			}
		}
		else {
			$(this).addClass("active");
			$('#black_bg').removeClass("vis");
		}		
	});



	// Responsive fitxa menu
	$("#toggleMenu").click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		//toogle .view-content

		if ( !$("#toggleMenu").hasClass("active")) { // ponle clase active y pon fondo negro
			$(this).addClass("active");
			$(this).css("z-index", "120");
			$("#block-views-menu-fitxa-block-1 .view-content").toggle();

			//add black background div
			if ( !$('#black_bg').length) {
				$("#wrapper").append("<a href='#' id='black_bg'></a>");
				$("#black_bg").addClass("vis");
			}
			else {
				$("#black_bg").addClass("vis");
				$("#toggleMenu").addClass("active");
			}		
		}
		else {
			hideMenu();
			$('#black_bg').removeClass("vis");
		}
	});

	ww = document.body.clientWidth;
	

	//Hide black background div if visible
	$(document).click(function (e){
	    var container = $('#block-locale-language ul.language-switcher-locale-url');
	    var container_fitxa = $('#toggleMenu');
	    var negre = $('#black_bg');


	    if ( (negre.hasClass("vis")) || (!$(container_fitxa.hasClass("active"))) ){
	    	container.hide();
	    	hideMenu();
			$('#black_bg').removeClass("vis");
	    	$('#block-locale-language a.parent_lang').addClass('active');
	    };
	});

    adjustLanguage();
	adjustMenu();
});	





// Responsive menus
$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustLanguage();
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 786) {
		$("#toggleMenu").css("display", "inline-block");
		if (!$("#toggleMenu").hasClass("active")) {
			$("#block-views-menu-fitxa-block-1 .view-content").css("display", "none");
		} else {
			$("#block-views-menu-fitxa-block-1 .view-content").css("display", "inline-block");
		}
		if (!$("#toggleMenu").hasClass("expanded")) {
			$("#block-locale-language ul.language-switcher-locale-url").hide();
		}
		else {
			$("#block-locale-language ul.language-switcher-locale-url").show();
		}
	}
	else if (ww >= 786) {
		$("#toggleMenu").css("display", "none");
		$("#block-views-menu-fitxa-block-1 .view-content").show();
	}
}
var adjustLanguage = function() { // Responsive language menu
	if (ww < 571) {//556
		$("#block-locale-language a.parent_lang").css("display", "inline-block");
		if (!$("#block-locale-language a.parent_lang").hasClass("active")) {
			$("#block-locale-language ul.language-switcher-locale-url").hide();
		} 
		else {
			$("#block-locale-language ul.language-switcher-locale-url").show();
		}	
	}
	else if (ww >= 571) {
		$("#block-locale-language a.parent_lang").css("display", "none");
	}
} 
var hideMenu = function() {
    $('#toggleMenu').removeClass('active');
	$("#toggleMenu").css("z-index", "0");
	$("#block-views-menu-fitxa-block-1 .view-content").hide();
}
})(jQuery, Drupal, this, this.document);
;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - http://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
/*
  (function ($, Drupal, window, document, undefined) {


	var ww = null;

	//Estableix amplada quan carrega document
	$(document).ready(function() {	
		ww = document.body.clientWidth;


		adjustTable();
	});	


	// Estableix amplada quan es mou mida finestra
	$(window).bind('resize orientationchange', function() {
		ww = document.body.clientWidth;
		adjustTable();
	});

	var adjustTable = function() { // Responsive tables
		if (ww < 360) {
			$('#field-name-body table thead tr').insertAfter("#field-name-body table tbody tr th").addClass("duplicada");
		}
		else if (ww >= 360) {
			$('#field-name-body table tbody tr.duplicada').appendTo("#field-name-body table thead").removeClass("duplicada");
		}
	}
})(jQuery, Drupal, this, this.document);
*/

;
(function ($, Drupal, window, document, undefined) {

$(document).ready(function() {
  var switched = false;
  var updateTables = function() {
    if (($(window).width() < 800) && !switched ){
      switched = true;
      $("#field-name-body table").each(function(i, element) {
        splitTable($(element));
      });
      return true;
    }
    else if (switched && ($(window).width() > 800)) {
      switched = false;
      $("#field-name-body table").each(function(i, element) {
        unsplitTable($(element));
      });
    }
  };
   
  $(window).load(updateTables);
  $(window).bind("resize", updateTables);
   
	
	function splitTable(original)
	{
		original.wrap("<div class='table-wrapper' />");
		
		var copy = original.clone();
		copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
		copy.removeClass("responsive");
		
		original.closest(".table-wrapper").append(copy);
		copy.wrap("<div class='pinned' />");
		original.wrap("<div class='scrollable' />");

    setCellHeights(original, copy);
	}
	
	function unsplitTable(original) {
    original.closest(".table-wrapper").find(".pinned").remove();
    original.unwrap();
    original.unwrap();
	}

  function setCellHeights(original, copy) {
    var tr = original.find('tr'),
        tr_copy = copy.find('tr'),
        heights = [];

    tr.each(function (index) {
      var self = $(this),
          tx = self.find('th, td');

      tx.each(function () {
        var height = $(this).outerHeight(true);
        heights[index] = heights[index] || 0;
        if (height > heights[index]) heights[index] = height;
      });

    });

    tr_copy.each(function (index) {
      $(this).height(heights[index]);
    });
  }

});
})(jQuery, Drupal, this, this.document);;
