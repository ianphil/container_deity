var dockerode = require('dockerode');
var docker = new dockerode();

var docker_commands = {
  container_exists: (container_name) => {
    var container = docker.getContainer(container_name);
    container.inspect(function (err, data) {
      if (err) { return false; }
      else { return true; }
    });
  },
  run_container: (repo_name, args) => {
    docker.createContainer({
        Image: repo_name,
        "AttachStdin": false,
        "AttachStdout": false,
        "AttachStderr": false,
        "ExposedPorts": {
          "6996/tcp": {}
        },
        Tty: false,
        OpenStdin: false,
        StdinOnce: false,
        "WorkingDir": "/app",
        "Entrypoint": [
          "npm",
          "start"
        ],
        "PortBindings": {
          "6996/tcp": [
            {
              "HostIp": "",
              "HostPort": "6996"
            }
          ]
        }
      }, function(err, container) {
        if (err) console.log(err);
        console.log('Starting: ' + container.id);
        container.start(() => {});
    });
  }
}

module.exports = docker_commands;

function getContainerName(webhookData) {
  return webhookData.repository.repo_name;
}
