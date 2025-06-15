import * as sdk from "@owlbear-rodeo/sdk";

const extension = sdk.ext.registerExtension({
  id: "polygon-tile-fill",
  name: "Polygon Tile Fill",
  init() {
    console.log("Polygon Tile Fill Extension gestartet");

    sdk.input.onClick((event) => {
      const position = event.position;
      // Beispiel: Ein einfaches Tile an der Klickposition hinzufügen
      sdk.map.placeTile({
        assetId: "dein-tile-asset-id", // Muss in Owlbear als Asset existieren
        x: position.x,
        y: position.y,
      });
      console.log(`Tile platziert bei x:${position.x} y:${position.y}`);
    });
  },
});

export default extension;
