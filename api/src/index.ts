import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
const travelList = [
  {
    id: 1,
    name: "Paris",
    city: "Paris",
    country: "France",
    image:
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
    description:
      "Paris is known for its iconic landmarks like the Eiffel Tower, art museums like the Louvre, and its romantic atmosphere.",
  },
  {
    id: 2,
    name: "New York City",
    city: "New York",
    country: "USA",
    image:
      "https://www.planetware.com/photos-large/USNY/new-york-city-empire-state-building.jpg",
    description:
      "New York City is famous for its skyline, Central Park, Times Square, and vibrant cultural life.",
  },
];

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/travels", (req, res) => {
  res.send(travelList);
});

app.post("/travels", (req, res) => {
  const travel = {
    id: travelList.length + 1,
    ...req.body,
  };

  travelList.push(travel);
  res.json(travel);
  res.send("create a travel!");
});

app.delete("/travels/:id", (req, res) => {
  const travelId = parseInt(req.params.id, 10);
  const index = travelList.findIndex((travel) => travel.id === travelId);

  if (index !== -1) {
    const deletedTravel = travelList.splice(index, 1);
  } else {
    res.status(404).json({ message: "Travel not found" });
  }
});

app.put("/travels/:id", (req, res) => {
  res.send("update a travel!");
});

app.get("/travels/:id", (req, res) => {
  res.send("Trouver un voyage");
});

app.use(express.json());

const port = 8000;
const hostname = "localhost";

app.listen(port, hostname, () => {
  console.log(`Serveur démarré sur http://${hostname}:${port}`);
});
