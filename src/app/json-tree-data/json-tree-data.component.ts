import { Component } from '@angular/core';

@Component({
  selector: 'app-json-tree-data',
  templateUrl: './json-tree-data.component.html',
  styleUrls: ['./json-tree-data.component.css']
})
export class JsonTreeDataComponent {
  jsonOutput: any;  // Use the CompleteData type

  ngOnInit() {
    let firstLevelArr = [
      { id: "1", name: "India" },
      { id: "2", name: "Germany" }
    ];
    let secondLevelArr = [
      { id: "s1", parentId: "2", name: "Bavaria" },
      { id: "s2", parentId: "2", name: "Berlin" },
      { id: "s3", parentId: "1", name: "Maharashtra" },
      { id: "s4", parentId: "1", name: "Tamilnadu" }
    ];
    let thirdLevelArr = [
      { id: "d1", parentId: "s1", name: "Upper Bavaria" },
      { id: "d2", parentId: "s1", name: "Lower Bavaria" },
      { id: "d3", parentId: "s2", name: "Berlin-Mitte" },
      { id: "d4", parentId: "s2", name: "Kreuzberg" },
      { id: "d5", parentId: "s3", name: "Nashik" },
      { id: "d6", parentId: "s3", name: "Jalgoan" },
      { id: "d7", parentId: "s4", name: "Ariyalur" },
      { id: "d8", parentId: "s4", name: "Chennai" }
    ];
    let fourthLevelArr = [
      { id: "p1", parentId: "d1", name: "Munich" },
      { id: "p2", parentId: "d1", name: "Erding" },
      { id: "p3", parentId: "d2", name: "Leipzig" },
      { id: "p4", parentId: "d2", name: "Landshut" },
      { id: "p5", parentId: "d3", name: "Passau" },
      { id: "p6", parentId: "d3", name: "Gesundbrunnen" },
      { id: "p7", parentId: "d4", name: "Frieburg" },
      { id: "p8", parentId: "d4", name: "Hamburg" },
      { id: "p9", parentId: "d6", name: "Raver" },
      { id: "p10", parentId: "d6", name: "Savda" },
      { id: "p11", parentId: "d5", name: "Ozar" },
      { id: "p12", parentId: "d5", name: "Manmad" },
      { id: "p13", parentId: "d7", name: "Thirumanur" },
      { id: "p14", parentId: "d7", name: "Sendurai" },
      { id: "p15", parentId: "d8", name: "New Chennai" },
      { id: "p16", parentId: "d8", name: "Old Chennai" }
    ];

    this.jsonOutput = this.buildTree(firstLevelArr, secondLevelArr, thirdLevelArr, fourthLevelArr);
  }

  buildTree(firstLevel: any[], secondLevel: any[], thirdLevel: any[], fourthLevel: any[]){
    const countryMap:any = {};

    // Build country tree
    firstLevel.forEach(country => {
      countryMap[country.id] = {
        countryName: country.name,
        states: {}
      };
    });

    // Build state tree
    const stateMap: any = {};
    secondLevel.forEach(state => {
      const countryId = state.parentId;
      stateMap[state.id] = {
        stateName: state.name,
        districts: {}
      };
      countryMap[countryId].states[state.id] = stateMap[state.id];
    });

    // Build district tree
    const districtMap: any = {};
    thirdLevel.forEach(district => {
      const stateId = district.parentId;
      districtMap[district.id] = {
        districtName: district.name,
        places: {}
      };
      stateMap[stateId].districts[district.id] = districtMap[district.id];
    });

    // Build place tree
    fourthLevel.forEach(place => {
      const districtId = place.parentId;
      districtMap[districtId].places[place.id] = {
        placeName: place.name
      };
    });

    return { countries: countryMap };
  }
}
