module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        'name': 'Nutzerstatistik',
        'href': '//stats.freifunk-vogtland.net/dashboard/file/node.json?var-node={NODE_ID}&from=now-24h&to=now',
        'image': '//stats.freifunk-vogtland.net/render/dashboard-solo/file/node.json?panelId=1&var-node={NODE_ID}&width=528&height=300&theme=light&from=now-24h&to=now',
        'title': 'Für detailierten Verlauf klicken.'
      },
      {
        'name': 'Traffic',
        'href': '//stats.freifunk-vogtland.net/dashboard/file/node.json?var-node={NODE_ID}&from=now-24h&to=now',
        'image': '//stats.freifunk-vogtland.net/render/dashboard-solo/file/nodethumbnails.json?panelId=6&var-node={NODE_ID}&width=528&height=300&theme=light&from=now-24h&to=now&hideLegend=true',
        'title': 'Für detailierten Verlauf klicken.'
      }
    ],
    'globalInfos': [
      {
        'name': 'Jahresstatistik',
        'href': '//stats.freifunk-vogtland.net/dashboard/file/global.json?from=now-365d&to=now',
        'image': '//stats.freifunk-vogtland.net/render/dashboard-solo/file/global.json?from=now-365d&to=now&theme=light&panelId=1&width=528&height=300',
        'title': 'Bild mit Wochenstatistik'
      },
      {
        'name': 'Wochenstatistik',
        'href': '//stats.freifunk-vogtland.net/dashboard/file/global.json',
        'image': '//stats.freifunk-vogtland.net/render/dashboard-solo/file/global.json?from=now-7d&to=now&theme=light&panelId=1&width=528&height=300',
        'title': 'Bild mit Wochenstatistik'
      }
    ],
    'hwImg': [
      {
        'href': '//vogtland.freifunk.net/meshviewer_hwpics/nodes/{MODELHASH}.svg',
        'title': 'Knoten {MODELHASH}'
      }
    ],
    // Array of data provider are supported
    'dataPath': [
      '//mapdata.freifunk-vogtland.net/'
    ],
    'siteName': 'Freifunk Vogtland',
    'mapLayers': [
      {
        'name': 'Mapbox',
        'url': '//b.tiles.mapbox.com/v4/mapquest.streets-mb/{z}/{x}/{y}.jpg?access_token=pk.eyJ1IjoiZmZ2IiwiYSI6ImNpcW03djhhZDAwMTdoem5ta282ZTJrdnIifQ.Eh0VfV3iIoDbD5VuI0W0fQ',
        'config': {
            'subdomains': '1234',
            'type': 'osm',
            'attribution': 'Tiles &copy; <a href=\'https://www.mapbox.com/\' target=\'_blank\'>mapbox</a>, Data CC-BY-SA OpenStreetMap',
            'maxZoom': 19
        }
      },
      {
        'name': 'Mapbox (Sat)',
        'url': '//c.tiles.mapbox.com/v3/tmcw.map-j5fsp01s/{z}/{x}/{y}.png',
        'config': {
            'type': '',
            'attribution': 'Tiles &copy; <a href=\'https://www.mapbox.com/\' target=\'_blank\'>MapQuest</a>',
            'maxZoom': 19
        }
      },
      {
        'name': 'OpenStreetMap.Mapnik',
        'url': '//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'config': {
            'type': 'osm',
            'attribution': '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            'maxZoom': 19
        }
      },
      {
        'name': 'OpenStreetMap.BlackAndWhite',
        'url': '//{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png',
        'config': {
            'type': 'osm',
            'attribution': '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            'maxZoom': 18
        }
      },
      {
        'name': 'OpenStreetMap.DE',
        'url': '//{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        'config': {
            'type': 'osm',
            'attribution': '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            'maxZoom': 18
        }
      },
      {
        'name': 'Stamen.TonerLite',
        'url': '//stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}',
        'config': {
            'subdomains': 'abcd',
            'type': 'osm',
            'attribution': 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            'minZoom': 0,
            'maxZoom': 18,
            'ext': 'png'
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        50.636397368,
        11.921539307
      ],
      // Southeast
      [
        50.370430542,
        12.441329956,
      ]
    ],
    'siteNames': [
      {
        'site': 'ffv',
        'name': 'Freifunk Vogtland'
      }
    ]
  };
};

