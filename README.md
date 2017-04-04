# ionicLearning

This is a simple example of an Ionic 2 hybrid framework project. 

It's about an REST API consumer for countries most populous cities, given its code. 

Developed following the Ionic 2 guidelines and tutoried, in part, by professor @brunogamacatao.

Download and check the available samples! [WindowsPhone](https://goo.gl/vLkbTu) and [Android](https://play.google.com/store/apps/details?id=com.jgeraldo.ioniclearning)

# Getting started

You'll need to install **nodejs**, **cordova ionic** and **VisualStudioCode** (preferably) on your computer.

You can follow the [Ionic2 Getting Started website](https://ionicframework.com/getting-started/) to reach it.

Once you have VSC installed, just open repo root folder. Fork it too, if you prefer!

# TIPs

  * To create a new project: `ionic start --v <name> <tipo layout (tabs, sidemenu, blank, super, tutorial)>`
  * To create a new page: `ionic g page <page_name>` (it will create a `.ts`, a `.sass` and an `.html` file for you, already linked)
  * To create a new provider: `ionic g provider <service_name>` (don't forget to declare it on app/app.module.ts!)
    
  * Download **IonicView** app on your mobile device to make real tests easier!

  * New on Angular2? Use `let` to define **local variables** instead of `var`! Plus, check the .html new binding symbols to use ng directives (master detail, brackets, etc)!

# Version: 1.0

  * Initial Build
  * Search countries by its code (ex.: "BR" for Brazil)
  * View countries's cities details

# What's next

  * Add city position on a maps in details view
  * Add "Rate this app" function
  * Add network connect/disconnect listeners (prevent errors on api calling)
  * Try Native Geocoder (currently in beta) 
  * Suggestions are beeing accepted :)

# Credits

- [Bruno Catão ](https://github.com/brunogamacatao)
- [Ionic Docs](https://ionicframework.com/docs/)
- [GeoNames REST API](http://www.geonames.org/)
- [Public APIs by toddmotto](https://github.com/toddmotto/public-apis)

# License

You may use this software under the MIT License.
