// SPDX-License-Identifier: CC0-1.0
/* SPDX-FileCopyrightText: 2016-2018, André Fiedler <mail@andrefiedler.de>
 * SPDX-FileCopyrightText: 2016-2020, Sven Eckelmann <sven@narfation.org>
 * SPDX-FileCopyrightText: 2017-2018, Enrico Meinel <mail@enricomeinel.de>
 */

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
         'href': '//stats.freifunk-vogtland.net/d/ffv_globals?from=now-365d',
         'image': '//stats.freifunk-vogtland.net/render/d-solo/ffv_globals/globals?panelId=2&from=now-365d&width=528&height=300&theme=light',
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
        'name': 'OpenStreetMap.Humanitarian',
        'url': '//{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
        'config': {
            'subdomains': 'ab',
            'type': 'osm',
            'attribution': '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>. Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>. <a href="https://wiki.osmfoundation.org/wiki/Terms_of_Use" target="_blank">Website and API terms</a>',
            'maxZoom': 19
        }
      },
      {
        'name': 'Mapbox',
        'url': '//api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        'config': {
            'subdomains': '1234',
            'id': 'mapbox/streets-v11',
            'accessToken': 'pk.eyJ1IjoiZmZ2IiwiYSI6ImNrY2xrN3k4eTFoanQyc28zdGZkaXhuaHUifQ.32VCC_RUt2mV8ghTLPnKow',
            'type': 'osm',
            'attribution': '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
            'maxZoom': 19
        }
      },
      {
        'name': 'Mapbox (Sat)',
        'url': '//api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        'config': {
            'subdomains': '1234',
            'id': 'mapbox/satellite-streets-v11',
            'accessToken': 'pk.eyJ1IjoiZmZ2IiwiYSI6ImNrY2xrN3k4eTFoanQyc28zdGZkaXhuaHUifQ.32VCC_RUt2mV8ghTLPnKow',
            'type': 'osm',
            'attribution': '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>',
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
    'domainNames': [
      {
        'domain': 'ffv',
        'name': 'FFV (Fallback)'
      },
      {
        'domain': 'ffv_a',
        'name': 'FFV Adorf'
      },
      {
        'domain': 'ffv_ae',
        'name': 'FFV Auerbach'
      },
      {
        'domain': 'ffv_bb',
        'name': 'FFV Bad Brambach'
      },
      {
        'domain': 'ffv_be',
        'name': 'FFV Bad Elster'
      },
      {
        'domain': 'ffv_b',
        'name': 'FFV Bergen'
      },
      {
        'domain': 'ffv_boe',
        'name': 'FFV Bösenbrunn'
      },
      {
        'domain': 'ffv_eic',
        'name': 'FFV Eichigt'
      },
      {
        'domain': 'ffv_ell',
        'name': 'FFV Ellefeld'
      },
      {
        'domain': 'ffv_els',
        'name': 'FFV Elsterberg'
      },
      {
        'domain': 'ffv_fst',
        'name': 'FFV Falkenstein'
      },
      {
        'domain': 'ffv_gb',
        'name': 'FFV Grünbach'
      },
      {
        'domain': 'ffv_hdg',
        'name': 'FFV Heinsdorfergrund'
      },
      {
        'domain': 'ffv_k',
        'name': 'FFV Klingenthal'
      },
      {
        'domain': 'ffv_le',
        'name': 'FFV Lengenfeld'
      },
      {
        'domain': 'ffv_l',
        'name': 'FFV Limbach'
      },
      {
        'domain': 'ffv_mkn',
        'name': 'FFV Markneukirchen'
      },
      {
        'domain': 'ffv_mtl',
        'name': 'FFV Mühlental'
      },
      {
        'domain': 'ffv_mh',
        'name': 'FFV Muldenhammer'
      },
      {
        'domain': 'ffv_n',
        'name': 'FFV Netzschkau'
      },
      {
        'domain': 'ffv_nsz',
        'name': 'FFV Neuensalz'
      },
      {
        'domain': 'ffv_nmk',
        'name': 'FFV Neumark'
      },
      {
        'domain': 'ffv_nst',
        'name': 'FFV Neustadt'
      },
      {
        'domain': 'ffv_oel',
        'name': 'FFV Oelsnitz'
      },
      {
        'domain': 'ffv_pmf',
        'name': 'FFV Pausa-Mühltroff'
      },
      {
        'domain': 'ffv_pl',
        'name': 'FFV Plauen'
      },
      {
        'domain': 'ffv_poe',
        'name': 'FFV Pöhl'
      },
      {
        'domain': 'ffv_rbh',
        'name': 'FFV Rosenbach'
      },
      {
        'domain': 'ffv_rc',
        'name': 'FFV Reichenbach'
      },
      {
        'domain': 'ffv_rdw',
        'name': 'FFV Rodewisch'
      },
      {
        'domain': 'ffv_s',
        'name': 'FFV Schöneck'
      },
      {
        'domain': 'ffv_sbg',
        'name': 'FFV Steinberg'
      },
      {
        'domain': 'ffv_t',
        'name': 'FFV Theuma'
      },
      {
        'domain': 'ffv_tdf',
        'name': 'FFV Tirpersdorf'
      },
      {
        'domain': 'ffv_tr',
        'name': 'FFV Treuen'
      },
      {
        'domain': 'ffv_tri',
        'name': 'FFV Triebel'
      },
      {
        'domain': 'ffv_wei',
        'name': 'FFV Weischlitz'
      },
      {
        'domain': 'ffv_wer',
        'name': 'FFV Werda'
      },
      {
        'domain': 'fferz',
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

