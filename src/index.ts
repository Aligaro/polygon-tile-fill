import * as sdk from "@owlbear-rodeo/sdk";

interface Point {
  x: number;
  y: number;
}

// Hilfsfunktion: Zufälliges Element aus Array
function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default async function() {
  // Alle Assets laden
  const assets = await sdk.map.getAssets();

  // Tiles nach Tag gruppieren
  const tilesByTag = new Map<string, string[]>(); // tag => Array von asset-IDs

  for (const asset of assets) {
    if (asset.type !== "tile") continue;

    const tags = asset.tags || (asset.metadata && asset.metadata.tags) || [];

    for (const tag of tags) {
      if (!tilesByTag.has(tag)) {
        tilesByTag.set(tag, []);
      }
      tilesByTag.get(tag)!.push(asset.id);
    }
  }

  // Falls keine Tags, Fallback auf alle Tiles unter "all"
  if (tilesByTag.size === 0) {
    tilesByTag.set("all", assets.filter(a => a.type === "tile").map(a => a.id));
  }

  // Erstelle UI Dropdown für Tag-Auswahl
  const select = document.createElement("select");
  select.style.position = "fixed";
  select.style.top = "10px";
  select.style.right = "10px";
  select.style.zIndex = "9999";
  select.style.padding = "6px 12px";
  select.style.background = "white";
  select.style.border = "1px solid #ccc";
  select.style.borderRadius = "4px";
  select.title = "Wähle den Tile-Tag";

  for (const tag of tilesByTag.keys()) {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    select.appendChild(option);
  }

  document.body.appendChild(select);

  let selectedTag = select.value;

  select.addEventListener("change", () => {
    selectedTag = select.value;
  });

  // Funktion zum Platzieren eines Tiles an (x, y)
  async function placeTile(x: number, y: number) {
    const tileIds = tilesByTag.get(selectedTag);
    if (!tileIds || tileIds.length === 0) return;

    const tileId = randomChoice(tileIds);

    await sdk.scene.addTile({
      assetId: tileId,
      position: { x, y },
      rotation: 0,
      width: sdk.grid.getGridSize(),
      height: sdk.grid.getGridSize(),
    });
  }

  // Drag-Event Listener für Karte (mouse down + move)
  let dragging = false;

  window.addEventListener("mousedown", (ev) => {
    if (ev.button !== 0) return; // nur linker Klick
    dragging = true;
    handlePointer(ev);
  });

  window.addEventListener("mouseup", (ev) => {
    if (ev.button !== 0) return;
    dragging = false;
  });

  window.addEventListener("mousemove", (ev) => {
    if (!dragging) return;
    handlePointer(ev);
  });

  // Funktion zur Positionsbestimmung auf Grid
  function handlePointer(ev: MouseEvent) {
    const gridSize = sdk.grid.getGridSize();

    // Mausposition in Map-Koordinaten (local zu Map)
    const mapPos = sdk.viewport.screenToWorld({ x: ev.clientX, y: ev.clientY });

    // Auf Grid ausrichten
    const x = Math.floor(mapPos.x / gridSize) * gridSize;
    const y = Math.floor(mapPos.y / gridSize) * gridSize;

    placeTile(x, y);
  }
}
