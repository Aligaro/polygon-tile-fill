import * as sdk from "@owlbear-rodeo/sdk";

const GRID_SIZE = 100;

// Beispiel-Map mit Tags zu Tile-Asset-IDs
const tilesByTag: Record<string, string[]> = {
  wald: [
    "assetIdWald1",
    "assetIdWald2",
    "assetIdWald3",
  ],
  stadt: [
    "assetIdStadt1",
    "assetIdStadt2",
    "assetIdStadt3",
  ],
  wasser: [
    "assetIdWasser1",
    "assetIdWasser2",
  ],
};

let selectedTag = "wald"; // default
let isDragging = false;
let placedPositions = new Set<string>();

function gridSnap(value: number) {
  return Math.floor(value / GRID_SIZE) * GRID_SIZE;
}

// UI für Tag-Auswahl
function createUI() {
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.top = "10px";
  container.style.right = "10px";
  container.style.backgroundColor = "rgba(255,255,255,0.8)";
  container.style.padding = "8px";
  container.style.borderRadius = "4px";
  container.style.zIndex = "1000";

  const label = document.createElement("label");
  label.textContent = "Tile-Tag auswählen: ";
  container.appendChild(label);

  const select = document.createElement("select");
  for (const tag in tilesByTag) {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    select.appendChild(option);
  }
  select.value = selectedTag;
  select.onchange = () => {
    selectedTag = select.value;
    placedPositions.clear();
  };
  container.appendChild(select);

  document.body.appendChild(container);
}

const extension = sdk.ext.registerExtension({
  id: "polygon-tile-brush-with-tags",
  name: "Polygon Tile Brush mit Tags",
  init() {
    console.log("Extension mit Tag-Brush gestartet");

    createUI();

    sdk.input.onMouseDown(() => {
      isDragging = true;
      placedPositions.clear();
    });

    sdk.input.onMouseUp(() => {
      isDragging = false;
      placedPositions.clear();
    });

    sdk.input.onMouseMove((event) => {
      if (!isDragging) return;

      const snappedX = gridSnap(event.position.x);
      const snappedY = gridSnap(event.position.y);
      const key = `${snappedX}_${snappedY}`;

      if (!placedPositions.has(key)) {
        // Zufälliges Tile aus dem aktuellen Tag-Set wählen
        const tiles = tilesByTag[selectedTag];
        if (!tiles || tiles.length === 0) return;

        const randomIndex = Math.floor(Math.random() * tiles.length);
        const assetId = tiles[randomIndex];

        sdk.map.placeTile({
          assetId,
          x: snappedX,
          y: snappedY,
        });

        placedPositions.add(key);
      }
    });
  },
});

export default extension;
