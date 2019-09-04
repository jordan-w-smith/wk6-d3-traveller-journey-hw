const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const x = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return x
};

Traveller.prototype.getJourneyEndLocations = function () {
  const x = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return x
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeyResults = this.journeys.filter((journey) => journey.transport === transport)
  return journeyResults
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeyResults = this.journeys.filter((journey) => journey.distance >= minDistance)
  return journeyResults
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance
  }, 0)
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const transportMethods = this.journeys.map((journey) => {
      return journey.transport
  });
  const noFilter = transportMethods
  let unique = [...new Set(noFilter)]
  return unique
};


module.exports = Traveller;
