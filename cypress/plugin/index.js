module.exports = (on, config) => {

  on('before:browser:launch', (browser = {}, args) => {
    
    if (browser.name === 'chrome') {
      // launch chrome using incognito
      args.push(' --incognito')
      console.log(args)
    }

    return args
  })

}