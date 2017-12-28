# sense-chrome

I forked this plugins from [StephaneBour/sense-chrome](https://github.com/StephaneBour/sense-chrome).
Sometime ES cluster have thousands indices and the mapping size might be larger then 
30M which result in crash of this plugin, So I made a little change to disable query mapping
and alias from ES.  _by scott_
 

The original extension "sense for chrome" was [blacklisted](https://www.elastic.co/blog/sense-chrome-plugin-malware-issue)

To use this fork (from https://github.com/elastic/sense) :

#### Directly in chrome :

- make a git clone of the project
- go in your chrome extensions tabs
- activate the developer mode
- choose your folder in "load extension unpacked"
- Go on http://sense.stephane.tech

#### Change from the original extension

- Add "instances" config function.
- Deleting Google Analytics
- Disable fetch mapping or alias to ES
- Add "filter" in autocomplete
- Add "Saved query"
- Export source data in CSV file 

### Screenshots

#### Main screen

![Main screen](https://github.com/StephaneBour/sense-chrome/raw/master/screenshots/main.jpg)

#### Save your query

![Save 1](https://github.com/StephaneBour/sense-chrome/raw/master/screenshots/saved-1.jpg)


![Save 2](https://github.com/StephaneBour/sense-chrome/raw/master/screenshots/saved-2.jpg)