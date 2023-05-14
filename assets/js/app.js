class app {
    url = "https://api.quotable.io/random";
    theme = "dark";

    generateQuote = () => {
        // fetch(this.url)
        //     .then((data) => {
        //         return data.json();
        //     })
        //     .then((data) => {
        //         document.getElementById("quote").innerHTML = data.content;
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });

       var quotes = [
"The mind that opens up to a new idea never returns to its original size. - Albert Einstein",
"Knowledge is power. - Francis Bacon",
"True happiness comes from the joy of good deeds, the taste of creating something renewed. - Antoine de Saint-Exupéry",
"Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
"Wisdom is the only wealth that tyrants cannot expropriate. - Kahlil Gibran",
"All that we know is a drop; all that we don't know is an ocean. - Isaac Newton",
"Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
"Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
"Ignorance, intolerance, and indifference are the main sources of evil in the world. - Dalai Lama",
"The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
];
        var q = quotes[ Math.floor( Math.random() * quotes.length ) ];

        document.getElementById("quote").innerHTML = q;  

    }

    getRepos = () => {
        $.ajax({
            url: 'https://api.github.com/users/nslowfx/repos?sort=pushed&per_page=9'
        }).done(function (data) {
            $.each(data, function (index, repo) {
                if (repo.name.includes("nslowfx")) return;
                if (repo.name.includes("history")) return;
                $('#cards').append(
                    `
                        <div onclick="_app.openlink('${repo.html_url}')" style="max-height: 180px;" class="card magic-hover magic-hover__square">
                        <div style="padding-top: 35px; padding-left: 35px;" class="card-content">
                          <div class="card-info">
                            <div class="card-info-title">
                              <h3>${repo.name}</h3>  
                              <h4 id="desc" style="max-width: 200px;">${repo.description}</h4>
                            </div>    
                          </div>
          
                          <h4 id="language" style="max-width: 200px;  color: rgba(255, 255, 255, 0.5); font-size: 0.85em; position: absolute; bottom: 0; margin-bottom: 15px;">${repo.language}</h4>
                      </div>
                      </div>
                    `
                );
            });
        });

    }

    openlink(url) {
        window.open(url, '_blank');
    }

    constructor() {
        this.generateQuote(); // generate quote on page load

        this.getRepos(); // get repos on page load

        document.getElementById("cards").onmousemove = e => {
            for (const card of document.getElementsByClassName("card")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            };
        }
        document.documentElement.style.cursor = 'none';
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
          });
        particlesJS('particles-js',
  
        {
          "particles": {
            "number": {
              "value": 80,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#1f1f1f"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 5,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": false,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true,
          
        });
    }
}

let _app = new app();

options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "pointer-blur",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 41,
    "outerHeight": 41
};

magicMouse(options);
