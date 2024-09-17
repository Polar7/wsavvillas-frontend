module.exports = {
  apps: [
    {
      name: 'angular-app-wsavillas',
      script: 'http-server',
      args: '-p 4200 -s dist/wsavvillas-front',
      cwd: '/home/polar_rhel/WebstormProjects/wsavvillas-front',
      watch: true,
      env: {
        NODE_ENV: 'production'
      },
    }
  ]
};

