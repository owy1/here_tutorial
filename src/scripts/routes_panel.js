function HERERoutesPanel(routes, options) {
  var selectedRoute;
  var selectedRouteElement;
  var render = function(routes) {
    var routeList = document.querySelector('#route-panel ul');
    routes.forEach(function(route, i) {
      routeList.appendChild(renderRouteElement(route, i));
    });
  };
  var renderRouteElement = function(route, i) {
    var element = document.createElement('li');

    var routeSummary = route.route.summary;
    element.innerHTML = renderRouteTitle(routeSummary, i);

    element.addEventListener('click', function() {
      if (selectedRoute) {
        selectedRouteElement.classList.remove('selected');
      }

      element.classList.add('selected');
      selectedRoute = route;
      selectedRouteElement = element;

      if (options.onRouteSelection) {
        options.onRouteSelection(selectedRoute);
      }
    }, false);

    return element;
  };

  var renderRouteTitle = function(routeSummary, i) {
    return [
      '<strong>Route ' + (i + 1) + '</strong> (',
      Utils.formatDistance(routeSummary.distance) + ' in ',
      Utils.formatDuration(routeSummary.travelTime) + ')'
    ].join('');
};
  render(routes)
}
