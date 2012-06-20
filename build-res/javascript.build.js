({
  appDir: "./module-scripts",
  optimize: "none",
  baseUrl: ".",
  dir: "../bin/scriptOutput",

  //Indicates the namespace to use for require/requirejs/define.
  namespace: "pen",

  modules: [
    {
      name: "cookbook-module-compressed",
      include: ["cookbook/cookbook-module"],
      create: true
    }
  ]
})
