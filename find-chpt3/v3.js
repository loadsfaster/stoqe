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
      placeholder: 'Find CHPT3 (Version III)',
      magnifier: false
    })
  );

  search.addWidget(
    instantsearch.widgets.stats({
      container: '#stats',
      templates: {
            body: "{{nbHits}} Store{{#hasManyResults}}s {{/hasManyResults}}{{#hasOneResult}} {{/hasOneResult}}{{#hasNoResults}}*{{/hasNoResults}}"
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

  //var regionTemplate =
    //'<a class="f3 link hover-dark-blue b no-underline black dib ph2 pv1" href="">{{value}} ({{count}})</a>';

  // initialize RefinementList
    //search.addWidget(
      //instantsearch.widgets.menu({
        //container: '#regionMenu',
        //sortBy: ['count:desc'],
        //attributeName: 'region',
        //templates: {
          //item: regionTemplate
        //}
      //})
    //);

    var countryTemplate =
      '<li class="dib mr3 mb2"><a href="#" class="f4 f3-ns b db pa2 link dim dark-gray ba b--black-20">{{value}}</a></li>';

    // initialize RefinementList
      search.addWidget(
        instantsearch.widgets.menu({
          container: '#countryMenu',
          sortBy: ['count:desc'],
          attributeName: 'country',
          templates: {
            item: countryTemplate
          }
        })
      );



   //search.addWidget(
     //instantsearch.widgets.currentRefinedValues({
       //container: '#current-refined-values',
       //clearAll: 'after',
       //clearsQuery: true,
       //attributes: [
         //{name: 'free_shipping', label: 'Free shipping'},
         //{name: 'price', label: 'Price'},
         //{name: 'brand', label: 'Brand'},
         //{name: 'category', label: 'Category'},
       //],
       //onlyListedAttributes: false,
     //})
   //);



    var allstoresTemplate =
      '<li class="dib mr3 mb2"><a href="#" class="activeRed f3 fw7 dib pa2 no-underline bg-animate bg-white hover-bg-light-blue">Worldwide</a></li>';

    // initialize clearAll
    search.addWidget(
      instantsearch.widgets.clearAll({
        container: '#clear-all',
        templates: {
          link: allstoresTemplate
        },
        autoHideContainer: false
      })
    );




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
