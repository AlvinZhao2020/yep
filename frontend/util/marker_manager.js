class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.markerLabel = 1;
  }

  updateMarkers(businesses) {
    let businessesObj = {};

    businesses.forEach((business) => (businessesObj[business.id] = business));
    businesses
      .filter((business) => !this.markers[business.id])
      .forEach((newBusiness) => {
        this.createMarkerFromBusiness(newBusiness);
        this.markerLabel++;
      });
  }

  createMarkerFromBusiness(business) {
    const position = new google.maps.LatLng(business.lat, business.lng);
    const marker = new google.maps.Marker({
      position,
      label: {
        text: this.markerLabel.toString(),
        color: "#ffffff",
        fontWeight: "bold",
      },
      map: this.map,
      businessId: business.id,
    });
    this.markers[marker.businessId] = marker;
  }
}

export default MarkerManager;
