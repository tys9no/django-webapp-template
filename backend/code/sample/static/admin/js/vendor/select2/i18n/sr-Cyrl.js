/*! Select2 4.0.7 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/sr-Cyrl",[],function(){function e(e,t,n,r){return e%10==1&&e%100!=11?t:e%10>=2&&e%10<=4&&(e%100<12||e%100>14)?n:r}return{errorLoading:function(){return"Преузимање није усE�ело."},inputTooLong:function(t){var n=t.input.length-t.maximum,r="Обришите "+n+" сE�мбол";return r+=e(n,"","а","а"),r},inputTooShort:function(t){var n=t.minimum-t.input.length,r="УкусE�јте бар јосE"+n+" сE�мбол";return r+=e(n,"","а","а"),r},loadingMore:function(){return"Преузимање јосEрезултата…"},maximumSelected:function(t){var n="Можете изабрати сE�мо "+t.maximum+" сE�авк";return n+=e(t.maximum,"сE,"е","и"),n},noResults:function(){return"Ништа није пронађено"},searching:function(){return"Претрага…"},removeAllItems:function(){return"Уклоните сE�е сE�авке"}}}),{define:e.define,require:e.require}})();

