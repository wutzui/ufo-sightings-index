 

window.onload = function () {
    'use strict';

    main();

 	function main() {
        cartodb.createVis('map', 'https://wutzuyi.cartodb.com/api/v2/viz/0eef69ee-f9fa-11e5-802b-0e8c56e2ffdb/viz.json', {
            shareable: true,
            // title: true,
            // description: true,
            // search: true,
            tiles_loader: true,
            center_lat: 0,
            center_lon: 0,
            zoom: 2
        })
        .done(function(vis, layers) {
          // layer 0 is the base layer, layer 1 is cartodb layer
          // setInteraction is disabled by default
          layers[1].setInteraction(true);
          layers[1].on('featureOver', function(e, latlng, pos, data) {
          	cartodb.log.log(e, latlng, pos, data);

          });
          // you can get the native map to work with it
          var map = vis.getNativeMap();
          // now, perform any operations you need
          // map.setZoom(3);
          // map.panTo([50.5, 30.5]);
          createSelector(layers);
        })
        .error(function(err) {
          console.log(err);
        });
    }

	var LayerActions = {
    	all: function(){
      		sublayers[0].setSQL("SELECT * FROM UFO Sightings Map");
      		return true;
    	},
    	scale1: function(){
      		sublayers[0].setSQL("SELECT * FROM UFO Sightings Map WHERE _05_hynek_scale = '1'");
      		return true;
    	},
    	scale2: function() {
     		sublayers[0].set({
        	sql: "SELECT * FROM UFO Sightings Map WHERE _05_hynek_scale = 2",
        	//as it is said, you can also add some CartoCSS code to make your points look like you want for the different queries
       		// cartocss: "#ne_10m_populated_places_simple{ marker-fill: black; }"
      	});
      		return true;
    }

  }



    /******************************************************************************/
    // set variables. 
    var firstModal = document.getElementById ('first-modal');
    var firstModalBtn = document.getElementById ('first-modal-btn');

    // set a function to open the first modal.
    function openFirstModal() {
        firstModal.style.display ='block';     
    }

    // set the function to close the first modal.
    function xClose() {
        firstModal.style.display ='none';   
    }

    // set the click toggle modal function.
    // function toggleModal() {
    //     if (firstModal.style.display != 'block') {
    //         openFirstModal();
    //     } else {
    //         xClose();
    //     }
    // }

    // call the toggleModal function.
    firstModalBtn.addEventListener ('click', openFirstModal, false);
    firstModal.addEventListener ('click', xClose, false);

}



