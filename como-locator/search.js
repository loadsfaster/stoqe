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
      placeholder: 'Find CHPT3',
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
    '<div class="hit mb6 col-sm-3">' +
    '<div class="pictures-wrapper">' +
      '<img class="picture" src="{{picture_url}}" />' +
      '<img class="profile" src="{{user.user.thumbnail_url}}" />' +
    '</div>' +
    '<div class="infos">' +
    '<h4 class="media-heading">{{{_highlightResult.shopName.value}}}</h4>' +
    '<p><a target="_blank" href="http://{{website}}">{{website}}</a></p>' +
    '<p>{{{_highlightResult.address.value}}}, {{{_highlightResult.suburb.value}}}</p>' +
    '<p>{{{_highlightResult.city.value}}}, <strong>{{{_highlightResult.country.value}}}</strong></p>' +
    '<p>{{{_highlightResult.zone.value}}}</p>' +
    '</div>' +
    '</div>';

  var noResultsTemplate = '<div class="text-center">CHPT3 isn\'t in <strong class="ttc">{{query}}</strong>... yet.<br></div>';


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
