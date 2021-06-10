var gitalk = new Gitalk({
  "clientID": "afe47c8793fef76e4c9b",
  "clientSecret": "a6d0999d8cbf9b321d9c998e2eb53e69094062cf",
  "repo": "m3shine.github.io",
  "owner": "m3shine",
  "admin": ["m3shine"],
  "id": location.pathname,      
  "distractionFreeMode": false  
});

gitalk.render("gitalk-container");
