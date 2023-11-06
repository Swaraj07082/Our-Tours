import React, { useState } from "react";

export default function Structure() {
  let irelandstring =
    "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways —including Kinsale, the Dingle Peninsula, the Cliffs of Moher,the Aran Islands, Galway, Connemara, Giant's Causeway, and thecompelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!";

  let romestring =
    "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history,and city life with style.On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!";

  let parisstring =
    " Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!";

  let Australiastring =
    "From the golden stretch of Bondi to the white sand of Whitehaven, Australia’s beaches are nothing short of breathtaking. Whether you like to swim, surf or simply soak it all in, you’re sure to find what you’re looking for at these beautiful beaches Australia's islands are as diverse as they are beautiful. Choose from luxurious island resorts, remote and rugged outposts and wide open spaces teeming with wildlife. Find your paradise on these incredible Australian islands.Australia is home to the largest reef system on the planet. While the Great Barrier Reef is a must-visit, it’s not the only reef in Australia that deserves a spot on your bucket list. Explore our list of Australia’s epic coral reef systems.";

  let japanstring =
    "Japan is an archipelago, or string of islands, on the eastern edge of Asia. There are four main islands: Hokkaido, Honshu, Shikoku, and Kyushu. There are also nearly 4,000 smaller islands! Japan's nearest mainland neighbors are the Siberian region of Russia in the north and Korea and China farther south. Almost four-fifths of Japan is covered with mountains. The Japanese Alps run down the center of the largest island, Honshu. The highest peak is Mount Fuji, a cone-shaped volcano considered sacred by many Japanese. Japan can be a dangerous place. Three of the tectonic plates that form Earth's crust meet nearby and often move against each other, causing earthquakes. More than a thousand earthquakes hit Japan every year.";

  let russiastring =
    "Russia, the largest country in the world, occupies one-tenth of all the land on Earth. It spans 11 time zones across two continents Europe and Asia and has coasts on three oceans the Atlantic, Pacific, and Arctic. The Russian landscape varies from desert to frozen coastline, tall mountains to giant marshes. Much of Russia is made up of rolling, treeless plains called steppes. Siberia, which occupies three-quarters of Russia, is dominated by sprawling pine forests called taigas. Russia has about 100,000 rivers, including some of the longest and most powerful in the world. It also has many lakes, including Europe's two largest: Ladoga and Onega. Lake Baikal in Siberia contains more water than any other lake on Earth..";

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div
              className="card"
              id="new"
              style={{
                width: 352,
                height: 620,
                position: "relative",
                top: 150,
              }}
            >
              <img
                src="./images/ireland.jpg"
                className="card-img-top"
                alt="..."
                style={{ height: 320 }}
              />
              <div className="card-body">
                <h5 className="card-title my-4">
                  Best Of Ireland In 14 Days Tour
                </h5>
                <p className="card-text">
                  {irelandstring.slice(0, 430)}

                  <button
                    type="button"
                    className="btn btn-transparent"
                    style={{
                      position: "relative",
                      left: 106,
                      bottom: 8,
                      color: "#53cd53",
                      fontWeight: "bold",
                    }}
                  >
                    Read More
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <img src="./images/rome.jpg" alt=""  style={{    width: 352,
    height: 320}} /> */}

            <div
              className="card"
              style={{
                width: 352,
                height: 620,
                position: "relative",
                top: 150,
              }}
            >
              <img
                src="./images/rome.jpg"
                className="card-img-top"
                alt="..."
                style={{ height: 320 }}
              />
              <div className="card-body">
                <h5 className="card-title my-4">Best Of Rome In 7 Days Tour</h5>
                <p className="card-text">
                  {romestring.slice(0, 430)}
                  <button
                    type="button"
                    className="btn btn-transparent"
                    style={{
                      position: "relative",
                      left: 91,
                      bottom: 2,
                      color: "#53cd53",
                      fontWeight: "bold",
                    }}
                  >
                    Read More
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <img src="./images/paris.jpg" alt=""  style={{    width: 352,
    height: 320}}/> */}

            <div
              className="card "
              style={{
                width: 352,
                height: 620,
                position: "relative",
                top: 150,
              }}
            >
              <img
                src="./images/paris.jpg"
                className="card-img-top"
                alt="..."
                style={{ height: 320 }}
              />
              <div className="card-body">
                <h5 className="card-title my-4">
                  Best Of Paris In 7 Days Tour
                </h5>
                <p className="card-text">
                  {parisstring.slice(0, 430)}
                  <button
                    type="button"
                    className="btn btn-transparent"
                    style={{
                      position: "relative",
                      left: 117,
                      bottom: -4,
                      color: "#53cd53",
                      fontWeight: "bold",
                    }}
                  >
                    Read More
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            {/* <img src="./images/ireland.jpg" alt=""   style={{    width: 352,
    height: 320}}/> */}

            <div
              className="card my-4"
              style={{
                width: 352,
                height: 620,
                position: "relative",
                top: 150,
              }}
            >
              <img
                src="./images/Australia.jpg"
                className="card-img-top"
                alt="..."
                style={{ height: 320 }}
              />
              <div className="card-body">
                <h5 className="card-title my-5">
                  {" "}
                  Best Of Australia In 14 Days Tour
                </h5>
                <p className="card-text">
                  {Australiastring.slice(0, 430)}
                  <button
                    type="button"
                    className="btn btn-transparent"
                    style={{
                      position: "relative",
                      left: 84,
                      bottom: -18,
                      color: "#53cd53",
                      fontWeight: "bold",
                    }}
                  >
                    Read More
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <img src="./images/rome.jpg" alt=""  style={{    width: 352,
    height: 320}} /> */}

            <div
              className="card my-4"
              style={{
                width: 352,
                height: 620,
                position: "relative",
                top: 150,
              }}
            >
              <img
                src="./images/japan.jpg"
                className="card-img-top"
                alt="..."
                style={{ height: 320 }}
              />
              <div className="card-body">
                <h5 className="card-title my-5"> Best Of Japan 14 Days Tour</h5>
                <p className="card-text">
                  {japanstring.slice(0, 430)}
                  <button
                    type="button"
                    className="btn btn-transparent"
                    style={{
                      position: "relative",
                      left: 108,
                      bottom: 18,
                      color: "#53cd53",
                      fontWeight: "bold",
                    }}
                  >
                    Read More
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            {/* <img src="./images/paris.jpg" alt=""  style={{    width: 352,
    height: 320}}/> */}

            <div
              className="card my-4"
              style={{
                width: 352,
                height: 620,
                position: "relative",
                top: 150,
              }}
            >
              <img
                src="./images/Russia.jpg"
                className="card-img-top"
                alt="..."
                style={{ height: 320 }}
              />
              <div className="card-body">
                <h5 className="card-title my-5">
                  {" "}
                  Best Of Russia In 7 Days Tour
                </h5>
                <p className="card-text">
                  {russiastring.slice(0, 430)}
                  <button
                    type="button"
                    className="btn btn-transparent"
                    style={{
                      position: "relative",
                      left: 117,
                      bottom: -18,
                      color: "#53cd53",
                      fontWeight: "bold",
                    }}
                  >
                    Read More
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
