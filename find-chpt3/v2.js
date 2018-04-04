/* global instantsearch */

window.addEventListener('load', function() {
  var search = instantsearch({
    appId: 'F3IDA22Z9N',
    apiKey: 'c51380ab2b3c460a4db1a591eb44a5d6',
    indexName: 'stores',
    urlSync: true
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#q',
      placeholder: 'Find CHPT3 (version II)',
      magnifier: false
    })
  );

  search.addWidget(
    instantsearch.widgets.stats({
      container: '#stats',
      templates: {
            body: "{{nbHits}} store{{#hasManyResults}}s {{/hasManyResults}}{{#hasOneResult}} {{/hasOneResult}}{{#hasNoResults}}{{/hasNoResults}}"
          }
    })
  );

  var hitTemplate =
    '<li class="pv2 ph0 ph0-ns bb b--black-10 f3"><details><summary><b class="mb1">{{{_highlightResult.shopName.value}}}</b>  &middot; {{{_highlightResult.city.value}}} &middot; <a target="_blank" href="http://{{website}}"><span class="dn-m dn-l">www</span><span class="di-m di-l dn">{{website}}</span></a></summary><span class="pl3 pl4-ns">{{{_highlightResult.address.value}}}, {{{_highlightResult.suburb.value}}}, {{{_highlightResult.city.value}}} {{{_highlightResult.country.value}}}</span></details></li>';

  var noResultsTemplate = '<div class="">CHPT3 isn\'t in <strong class="ttc">{{query}}</strong> yet. You can <a href="https://www.chpt3.com">buy from our online store</a>.<br></div>';


  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 50,
      templates: {
        empty: noResultsTemplate,
        item: hitTemplate
      }
    })
  );

  var menuTemplate =
    '<a class="f3 link hover-dark-blue b no-underline black dib ph2 pv1" href="">{{value}} ({{count}})</a>';

  // initialize RefinementList
    //search.addWidget(
      //instantsearch.widgets.menu({
        //container: '#menu',
        //sortBy: ['count:desc', 'isRefined', 'name:asc'],
        //attributeName: 'country',
        //templates: {
          //item: menuTemplate
        //}
      //})
    //);



  // initialize currentRefinedValues
    //search.addWidget(
      //instantsearch.widgets.currentRefinedValues({
        //container: '#current-refined-values',
        // This widget can also contain a clear all link to remove all filters,
        // we disable it in this example since we use `clearAll` widget on its own.
        //clearAll: false
      //})
    //);

    // initialize clearAll
    //search.addWidget(
      //instantsearch.widgets.clearAll({
        //container: '#clear-all',
        //templates: {
          //link: 'Worldwide'
        //},
        //autoHideContainer: false
      //})
    //);

  //search.addWidget(
    //instantsearch.widgets.pagination({
      //container: '#pagination',
      //scrollTo: '#results',
      //cssClasses: {
        //root: 'pagination',
        //active: 'active'
      //}
    //})
  //);



  search.addWidget(
    instantsearch.widgets.googleMaps({
      container: document.querySelector('#map'),
      prepareMarkerData: function(hit, index, hits) {
        return {
          title: hit.description
        };
      }
    })
  );


  search.start();
});
