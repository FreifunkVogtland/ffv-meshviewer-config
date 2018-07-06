module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': '//stats.freifunk-vogtland.net/d/ffv_node?var-node={NODE_ID}',
        'image': '//stats.freifunk-vogtland.net/render/d-solo/ffv_node/nodeinfo?panelId=1&var-node={NODE_ID}&from=now-86399s&width=528&height=300&theme=light',
        'title': 'Entwicklung der Anzahl der Clients innerhalb des letzten Tages',
      },
      {
        'name': 'Trafficstatistik',
        'href': '//stats.freifunk-vogtland.net/d/ffv_node?var-node={NODE_ID}',
        'image': '//stats.freifunk-vogtland.net/render/d-solo/ffv_node/nodeinfo?panelId=2&var-node={NODE_ID}&from=now-86399s&width=528&height=300&theme=light',
        'title': 'Entwicklung des Traffic innerhalb des letzten Tages',
      },
      {
        'name': 'Hardwareauslastung',
        'href': '//stats.freifunk-vogtland.net/d/ffv_node?var-node={NODE_ID}',
        'image': '//stats.freifunk-vogtland.net/render/d-solo/ffv_node/nodeinfo?panelId=4&var-node={NODE_ID}&from=now-86399s&width=528&height=300&theme=light',
        'title': 'Loadavg und Arbeitspeicherauslastung innerhalb des letzten Tages',
      },
      {
        'name': 'Airtime',
        'href': '//stats.freifunk-vogtland.net/d/ffv_node?var-node={NODE_ID}',
        'image': '//stats.freifunk-vogtland.net/render/d-solo/ffv_node/nodeinfo?panelId=5&var-node={NODE_ID}&from=now-86399s&width=528&height=300&theme=light',
        'title': 'Auslastung des WLAN-Frequenz innerhalb des letzten Tages',
      }
    ],
    'linkInfos': [
      {
        'name': 'Verlauf min. und max. Übertragungsqualität aller Links',
        'href': '//stats.freifunk-vogtland.net/d/ffv_link?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}',
        'image': '//stats.freifunk-vogtland.net/render/d-solo/ffv_link/link?panelId=7&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&from=now-86399s&width=528&height=300&theme=light',
        'title': 'Linkstatistik des letzten Tages, min und max aller Links zwischen diesen Knoten',
      }
    ],
    'linkTypeInfos': [
      {
        'name': 'Verlauf der Übertragungsqualität für {TYPE}',
        'href': '//stats.freifunk-vogtland.net/d/ffv_link?var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&var-source_addr={SOURCE_ADDR}&var-target_addr={TARGET_ADDR}',
        'image': '//stats.freifunk-vogtland.net/render/d-solo/ffv_link/link?panelId=8&var-node={SOURCE_ID}&var-nodetolink={TARGET_ID}&var-source_addr={SOURCE_ADDR}&var-target_addr={TARGET_ADDR}&from=now-86399s&width=528&height=300&theme=light',
        'title': 'Linkstatistik des letzten Tages des einzelnen Links in beide Richtungen',
      }
    ],
    'globalInfos': [
      {
        'name': 'Jahresstatistik',
        'href': '//stats.freifunk-vogtland.net/d/Zy8gTRgik/global?from=now-365d&to=now',
        'image': '//stats.freifunk-vogtland.net/render/d-solo/Zy8gTRgik/global?from=now-365d&to=now&theme=light&panelId=1&width=528&height=300',
        'title': 'Bild mit Wochenstatistik',
      },
      {
         'name': 'Wochenstatistik',
         'href': '//stats.freifunk-vogtland.net/d/ffv_globals',
         'image': '//stats.freifunk-vogtland.net/render/d-solo/ffv_globals/globals?panelId=2&from=now-7d&width=528&height=300&theme=light',
         'title': 'Entwicklung der Anzahl der Knoten und der Clients innerhalb der letzten 7 Tage',
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
        'name': 'FFV (Fallback)'
      },
      {
        'site': 'ffv_a',
        'name': 'FFV Adorf'
      },
      {
        'site': 'ffv_ae',
        'name': 'FFV Auerbach'
      },
      {
        'site': 'ffv_bb',
        'name': 'FFV Bad Brambach'
      },
      {
        'site': 'ffv_be',
        'name': 'FFV Bad Elster'
      },
      {
        'site': 'ffv_b',
        'name': 'FFV Bergen'
      },
      {
        'site': 'ffv_boe',
        'name': 'FFV Bösenbrunn'
      },
      {
        'site': 'ffv_eic',
        'name': 'FFV Eichigt'
      },
      {
        'site': 'ffv_ell',
        'name': 'FFV Ellefeld'
      },
      {
        'site': 'ffv_els',
        'name': 'FFV Elsterberg'
      },
      {
        'site': 'ffv_fst',
        'name': 'FFV Falkenstein'
      },
      {
        'site': 'ffv_gb',
        'name': 'FFV Grünbach'
      },
      {
        'site': 'ffv_hdg',
        'name': 'FFV Heinsdorfergrund'
      },
      {
        'site': 'ffv_k',
        'name': 'FFV Klingenthal'
      },
      {
        'site': 'ffv_le',
        'name': 'FFV Lengenfeld'
      },
      {
        'site': 'ffv_l',
        'name': 'FFV Limbach'
      },
      {
        'site': 'ffv_mkn',
        'name': 'FFV Markneukirchen'
      },
      {
        'site': 'ffv_mtl',
        'name': 'FFV Mühlental'
      },
      {
        'site': 'ffv_mh',
        'name': 'FFV Muldenhammer'
      },
      {
        'site': 'ffv_n',
        'name': 'FFV Netzschkau'
      },
      {
        'site': 'ffv_nsz',
        'name': 'FFV Neuensalz'
      },
      {
        'site': 'ffv_nmk',
        'name': 'FFV Neumark'
      },
      {
        'site': 'ffv_nst',
        'name': 'FFV Neustadt'
      },
      {
        'site': 'ffv_oel',
        'name': 'FFV Oelsnitz'
      },
      {
        'site': 'ffv_pmf',
        'name': 'FFV Pausa-Mühltroff'
      },
      {
        'site': 'ffv_pl',
        'name': 'FFV Plauen'
      },
      {
        'site': 'ffv_poe',
        'name': 'FFV Pöhl'
      },
      {
        'site': 'ffv_rbh',
        'name': 'FFV Rosenbach'
      },
      {
        'site': 'ffv_rc',
        'name': 'FFV Reichenbach'
      },
      {
        'site': 'ffv_rdw',
        'name': 'FFV Rodewisch'
      },
      {
        'site': 'ffv_s',
        'name': 'FFV Schöneck'
      },
      {
        'site': 'ffv_sbg',
        'name': 'FFV Steinberg'
      },
      {
        'site': 'ffv_t',
        'name': 'FFV Theuma'
      },
      {
        'site': 'ffv_tdf',
        'name': 'FFV Tirpersdorf'
      },
      {
        'site': 'ffv_tr',
        'name': 'FFV Treuen'
      },
      {
        'site': 'ffv_tri',
        'name': 'FFV Triebel'
      },
      {
        'site': 'ffv_wei',
        'name': 'FFV Weischlitz'
      },
      {
        'site': 'ffv_wer',
        'name': 'FFV Werda'
      },
      {
        'site': 'fferz',
        'name': 'Freifunk Erzgebirge'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': '//vogtland.freifunk.net/impressum/'
      },
      {
        'title': 'Datenschutz',
        'href': '//vogtland.freifunk.net/datenschutzerklaerung/'
      }
    ]
  };
};

