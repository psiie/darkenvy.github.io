// Front end, to scroll to top:
// window.scrollTo(0,0)
console.log('v2.4');

var app = angular.module('Portfolio', ['ui.router']);

app.factory('projects', function() {
  return {
    '1': {title: 'SquidLink',           cover: 'project/cover-squidl.jpg',
          github: 'https://github.com/darkenvy/Squidl.ink',
          img: ['squidlink1.jpg', 'squidlink2.png', 'squidlink3.png', 'squidlink4.jpg',],
          desc: ['A tool for helping to get files from A to B. All without the need for additional software or hardware. Squidlink utilizes Webtorrent as it\'s core but is geared towards ease of use.'],
          links: [['Live Site', 'http://squidl.ink/']]
         },

    '2': {title: 'Yammerings on Twitter', cover: 'project/cover-yammerings.jpg',
          github: 'https://github.com/darkenvy/Yammerings',
          img: ['yammerings1.jpg','yammerings2.jpg'],
          desc: ['By analyzing conversations on Twitter, we can provide client with realtime, up-to-date numbers trends, statistics and emotion bearing results.'],
          links: [['Live Site','https://yammerings.herokuapp.com']]
         },

    '3': {title: 'Tactile VR Doom', cover: 'project/cover-vr-doom.jpg',
          github: 'https://github.com/darkenvy/Tactile-VR-Doom-Demo',
          img: ['vr-doom1.jpg','vr-doom2.jpg'],
          desc: ['Tactile VR Doom is a tech demo that illustrates the possibilities of using physical objects to control the VR world by utilizing the camera'],
          links: [
            ['Live Demo','http://renomckenzie.com/vr-doom/'],
            ['Setup Instructions', 'https://github.com/darkenvy/Tactile-VR-Doom-Demo']
            ]
         },

    '4': {title: 'Game of Life',        cover: 'project/cover-life.jpg',
          github: 'https://github.com/darkenvy/GameOfLife',
          img: ['gol1.png', 'gol2.png'],
          desc: ['An exploration into efficiency and game logic. With simple 4 rules, complexity can arise.'],
          links: [['Play Now','http://renomckenzie.com/gol']]
         },

    '5': {title: 'Dungeon Explorer',    cover: 'project/cover-dung.jpg',
          github: 'https://github.com/darkenvy/Tactile-VR-Doom-Demo',
          img: ['dungeon1.jpg','dungeon2.jpg'],
          desc: ['A quick, roguelike game where the main objective is to stay alive and delve as deep into the depths as possible.'],
          links: [['Play Now', 'http://renomckenzie.com/DungeonTreasure/']]
         },

    '6': {title: 'Alexa Skills', cover: 'project/cover-echo.jpg',
          github: '',
          img: ['echo1.jpg', 'echo2.jpg'],
          desc: ['Lorem Ipsum'],
          links: [
            ['Amazon: CalPal', 'https://www.amazon.com/Reno-McKenzie-CalPal/dp/B01M8JPI0M'],
            ['Amazon: CoinWatch', 'https://www.amazon.com/Reno-McKenzie-CoinWatch/dp/B01N3RAD6F']
          ]
         },

    '7': {title: 'HL Language Services', cover: 'project/cover-hllang.jpg',
          github: '',
          img: ['hllang1.jpg', 'hllang2.jpg', 'hllang3.jpg',],
          desc: ['Designed & developed a native Internet experience for a target demographic. Through agile development processes, the end result was delivered with minimal intermediary steps.'],
          links: [
            ['Live Site','http://hllanguage.com/']
            ]
         },

    '8': {title: 'The Beacon Logo Design', cover: 'project/cover-beacon.png',
          github: '',
          img: ['beacon1.jpg', 'beacon2.jpg'],
          desc: ['With HamptonInn opening a waterside restaurant, a new identity was needed. The new direction gives patrons a proper look & feel which invites new & old customers alike.'],
          links: [
            ['Behance','http://www.behance.net/gallery/25795507/Hampton-Inns-Beacon'],
            ['TripAdvisor', 'https://www.tripadvisor.com/LocationPhotoDirectLink-g60903-d93924-i140085849-Hampton_Inn_Frederick-Frederick_Maryland.html']
            ]
         },

    '9': {title: 'The Bitcoin Check', cover: 'project/cover-bitcoin.jpg',
          github: '',
          img: ['bitcoin1.jpg','bitcoin2.jpg','bitcoin3.jpg'],
          desc: ['The usability of paper Bitcoin would be more widespread if the currency is more pleasing to look at and gave a sense of security that Bitcoin already has.'],
          links: [
            ['Behance','https://www.behance.net/gallery/26028099/The-Bitcoin-Check']
            ]
         },

    '10': {title: 'TokeiTokei WatchFace', cover: 'project/cover-tokei.jpg',
          github: 'https://github.com/darkenvy/TokeiTokei',
          img: ['tokeitokei1.jpg'],
          desc: ['Tokei Tokei is a Pebble Watchface for the service "WaniKani" which teaches Japanese to tens of thousands of users through SRS. Tokei Tokei immerses the user even further while telling the time.'],
          links: [
            ['Github','https://github.com/darkenvy/TokeiTokei']
            ]
         },

    '11': {title: 'Studio24 Logo Design', cover: 'project/cover-studio.jpg',
          github: '',
          img: ['studio24.jpg'],
          desc: ['Alchemy Studios LLC is a startup dance studio in Tacoma, WA. The core belief of the studio is that through the life of theater and the arts, anyone is able to transform themself. '],
          links: [
            ['Behance','https://www.behance.net/gallery/25795795/Alchemy-Studios-LLC']
            ]
         },
    '12': {title: 'Minecraft Fansite', cover: 'project/cover-voidkingdom.jpg',
          github: '',
          img: ['minecraft1.jpg'],
          desc: ['Minecraft is a phenomenon. It\'s no wonder that there are thousands of servers hosted at any given moment. Standing out is important.'],
          links: [
            ]
         },
    // '13': {title: 'Bend Guru Logo Design', cover: 'project/cover-guru.png',
    //       github: '',
    //       img: ['bendguru.png'],
    //       desc: ['An upcoming company in the tourism industry needing a professional logo. By working carefully with the type and using simple shapes, this minimalist design is intended to be reserved in nature. All puns intended.'],
    //       links: [
    //         ['Behance','https://www.behance.net/gallery/25831393/Bend-Guru']
    //         ]
    //      },
    '13': {title: 'Portfolio Site', cover: 'project/cover-portfolio.jpg',
          github: 'https://github.com/darkenvy/darkenvy.github.io',
          desc: ['This site is created using Angular, Angular Factories, CSS Animations, Google Fonts, and a splash of creativity.'],
          links: [
            ['github','https://github.com/darkenvy/darkenvy.github.io']
            ]
         },


  }
})

app.controller('MainCtrl', ['$scope', 'projects', '$location', '$anchorScroll', function($scope, projects, $location, $anchorScroll) {
  $scope.projects = projects;

  $scope.gotoTop = function() {
    $anchorScroll();
  }
  $scope.flip = function(project) {
    project._flipped = !project._flipped;
  }
}])

app.controller('ProjectsCtrl', ['$scope', 'projects', '$stateParams',
  function($scope, projects, $stateParams) {
  $scope.project = projects[$stateParams.id];
}])

app.controller('ContactCtrl', ['$scope', function($scope) {
  $scope.text = 'contact page'
}])

app.controller('AboutCtrl', ['$scope', function($scope) {
  $scope.text = 'about page'
}])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'views/aboutme.html',
    //   // controller: 'MainCtrl'
    })
    .state('projects', {
      url: '/projects/:id',
      templateUrl: 'views/projects.html',
      controller: 'ProjectsCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'views/contact.html',
      controller: 'ContactCtrl'
    })
    // .state('about', {
    //   url: '/about',
    //   templateUrl: 'views/about.html',
    //   controller: 'AboutCtrl'
    // })


}])
