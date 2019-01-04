
db = db.getSiblingDB("dictionary-dev");
db.duden.drop();
db.duden.createIndex({
  "word": "text",
  "definitions.definition": "text",
  "definitions.examples.example": "text",
  "definitions.examples.definition": "text"
}, {
  "background": true,
  "name": "_wd_def_ex_"
});
db.duden.insertMany([
{
  "word": "Acht, die",
  "stem": "Acht",
  "definitions": [
    {
      "definition": "Ausschluss einer Person vom Rechtsschutz, wodurch sie vogelfrei wird",
      "examples": [
        {
          "example": "über jemanden die Acht verhängen",
          "_id": "84c41199e664b9ba362d7e9a9334e28d2c2ab540"
        },
        {
          "example": "jemanden mit der Acht belegen",
          "_id": "639d863caf0cfb47c6e7348b4439fc926c3fce57"
        },
        {
          "example": "jemanden in Acht und Bann tun (1. Geschichte; aus der weltlichen und kirchlichen Gemeinschaft ausschließen. 2. gehoben; aus einer Gemeinschaft ausschließen, verdammen.)",
          "_id": "f68f5d393057a5ef0127255b9f98ac662f452e37"
        }
      ],
      "_id": "c8534f4bbd00fe0b42d5e35b69b6fb202f3cc5f0"
    }
  ]
},
{
  "word": "Adam, der",
  "stem": "Adam",
  "definitions": [
    {
      "definition": "(umgangssprachlich scherzhaft) Mann [als Partner der Frau]",
      "examples": [],
      "_id": "3c04d2aa6b3808a1ae50a33b12f3aa311e78e714"
    },
    {
      "definition": "in »bei Adam und Eva anfangen/beginnen« und anderen Wendungen, Redensarten oder Sprichwörtern",
      "examples": [
        {
          "example": "bei Adam und Eva anfangen/beginnen (umgangssprachlich: in einem Vortrag, bei seinen Ausführungen sehr weit ausholen)",
          "_id": "975d01ca68af2129931000f7642a5424bd189c29"
        },
        {
          "example": "seit Adams Zeiten (umgangssprachlich: seit je, von jeher, solange man denken kann)",
          "_id": "4c49aa8f2bf5ee7358a7c6385ac271f2712fd811"
        },
        {
          "example": "von Adam und Eva abstammen (umgangssprachlich: [von Dingen] sehr alt sein)",
          "_id": "98c775ace13a7a326a88cfbf2eae91f25846c6ff"
        }
      ],
      "_id": "cba3895b2e952030a41b8068a6f5bf7ef41c880b"
    }
  ]
},
{
  "word": "Anstalten, die",
  "stem": "Anstalten",
  "definitions": [
    {
      "definition": "Vorbereitungen, Vorkehrungen",
      "examples": [
        {
          "example": "Anstalten zu einer Reise treffen",
          "_id": "2998d34cfd6cf0a105f7c448211b3adc36230795"
        },
        {
          "example": "[keine] Anstalten machen (etwas [nicht] tun wollen, [keine] Absichten zu etwas zeigen: er machte Anstalten wegzugehen)",
          "_id": "5e061570ce584c4a61fb699ab25563e1549ff702"
        }
      ],
      "_id": "995a7d396e66f14f80057faafe1787a232d1be5b"
    }
  ]
},
{
  "word": "Gedanke, veraltet Gedanken, der",
  "stem": "Gedanke",
  "definitions": [
    {
      "definition": "etwas, was gedacht wird, gedacht worden ist; Überlegung",
      "examples": [
        {
          "example": "gute, vernünftige Gedanken",
          "_id": "ed17e02575d9a5943daeecdfa97a7567338a8635"
        },
        {
          "example": "dieser Gedanke liegt mir fern, verfolgt mich, tröstet mich",
          "_id": "b0e739f54bc8ff125f42eede38b2aec5129703aa"
        },
        {
          "example": "ein Gedanke ging mir durch den Kopf",
          "_id": "3bd2d6491234cfb48a19e0e4daa80bb03439ff59"
        },
        {
          "example": "mir drängt sich der Gedanke auf, dass das nicht stimmt",
          "_id": "3aeb2c596854488d265bb425515b8e405d69b29d"
        },
        {
          "example": "einen Gedanken fassen, aufgreifen, fallen lassen, in Worte kleiden, zu Ende denken, nicht mehr loswerden",
          "_id": "1737ccc304c9000c7f61ad33d9dcafd3ce8f4d72"
        },
        {
          "example": "Gedanken an jemanden, etwas verschwenden",
          "_id": "13bf2b6c95ac9b01d9634b992f5bcd11e86da08e"
        },
        {
          "example": "auf einen Gedanken kommen, verfallen",
          "_id": "c0f14caee595acd0a04a6df5fe29d24079639dba"
        },
        {
          "example": "es ist mir ein schrecklicher Gedanke (eine schreckliche Vorstellung), dass du verärgert bist",
          "_id": "bf9b7ae467560d70990ae5da4e7a53d2c48cbb89"
        },
        {
          "example": "seine Gedanken sammeln (sich konzentrieren)",
          "_id": "8647d3ec8c67e2c5b47a018b75ee581ef6d58b84"
        },
        {
          "example": "seinen Gedanken nachhängen, sich seinen Gedanken überlassen ([nach]sinnen)",
          "_id": "06d2671826a8e3db4fe8e94bcc06b4c802a5643c"
        },
        {
          "example": "sich an einen Gedanken klammern (ängstlich, krampfhaft daran festhalten und Hoffnung damit verbinden)",
          "_id": "45a8065ac0cae4a74949e69c990f8efd586976f8"
        },
        {
          "example": "jemanden auf andere Gedanken bringen (jemanden ablenken)",
          "_id": "dc7db9f0fc1d295319f3a82ab5a1bfbdcb65ede9"
        },
        {
          "example": "[ganz] in Gedanken verloren, versunken sein",
          "_id": "be07db860e3acd8e1fd80e813b691a61a8e32894"
        },
        {
          "example": "ich war [ganz] in Gedanken (gedankenverloren, zerstreut, habe nicht aufgepasst)",
          "_id": "0e8907a8da927d01db568e025936df7f43188fe6"
        },
        {
          "example": "das habe ich in Gedanken (ohne es zu wollen, zu wissen) getan",
          "_id": "d5caa53a402748e081b83903c99ce73490e03f46"
        },
        {
          "example": "mit seinen Gedanken woanders, nicht bei der Sache sein (gedankenverloren, unaufmerksam sein)",
          "_id": "b04a01676c964c16509cf17238c4aee94f8c3948"
        },
        {
          "example": "[jemandes] Gedanken lesen [können] ([jemandes] Gedanken erraten [können])",
          "_id": "687c4283e1bd0a6a2c187f6286a3e2cc2d4d4da6"
        },
        {
          "example": "sich <Dativ> Gedanken [über jemanden, etwas/wegen jemandes, etwas] machen (sich [um jemanden, etwas] sorgen)",
          "_id": "4ff584d97cffc1a3fdd6b1d56787c0950c42ed3a"
        },
        {
          "example": "sich <Dativ> über etwas Gedanken machen (über etwas länger nachdenken)",
          "_id": "60003cdc40d3e66351d1691c76c838597e7e080b"
        },
        {
          "example": "Gedanken sind [zoll]frei (was man denkt, kann einem keiner vorschreiben)",
          "_id": "b3b9b5a6bada5b91c47fd30298f48e3b56e5d55a"
        },
        {
          "example": "der erste Gedanke ist nicht immer der beste",
          "_id": "b505394b36633d190504042f838e5879922a36f6"
        }
      ],
      "_id": "3f0de0d1e648642edc7ac586c72e660559ec2796"
    },
    {
      "definition": "das Denken an etwas",
      "examples": [
        {
          "example": "bei dem Gedanken [daran] wurde ihr unheimlich zumute",
          "_id": "d5e50fc03bce165bf81397a6b68a8eb8d767717f"
        },
        {
          "example": "der bloße Gedanke [daran] macht ihn wütend",
          "_id": "e726cc5b8bd3838b93d67c9f6c902a73a2f97f53"
        },
        {
          "example": "kein Gedanke [daran]! (umgangssprachlich: keinesfalls, unmöglich, das kommt nicht infrage!)",
          "_id": "205c992a53f4d8e6e8f56151c418b0458b54362f"
        }
      ],
      "_id": "a6aa9215baa5a8abbb9b8d8b7c80a406e29679db"
    },
    {
      "definition": "Meinung, Ansicht",
      "examples": [
        {
          "example": "über etwas seine eigenen Gedanken haben",
          "_id": "969b4916ba9fd94d260f96ac7740eebd663290ad"
        },
        {
          "example": "sie tauschten ihre Gedanken [über das Buch] aus",
          "_id": "d4c57f7c1f5aa2c177b811a711affc2cdb1e3eea"
        }
      ],
      "_id": "d6ec27e56f5e5c30d03d0132fc729931e84aebcd"
    },
    {
      "definition": "Einfall; Plan, Absicht",
      "examples": [
        {
          "example": "ein verwegener, großartiger Gedanke",
          "_id": "fd694be8f50ac3402e7e5d4a3ff4939acc9b1c79"
        },
        {
          "example": "da kam ihr ein rettender Gedanke",
          "_id": "99d5a879c470aa1900817c3095c9f3285106ebdb"
        },
        {
          "example": "einen Gedanken in die Tat umsetzen",
          "_id": "ec2b01e19a4310b848d17b7efca275ac83cc6247"
        },
        {
          "example": "das bringt mich auf einen Gedanken",
          "_id": "6af9ad4b52577cb3dd929c8e9fa2bf4e04262532"
        },
        {
          "example": "(umgangssprachlich) auf dumme Gedanken kommen (etwas Falsches, Unkluges oder Unerwünschtes tun)",
          "_id": "e220272043bf48c376409de5c8d26a22d2299a0c"
        }
      ],
      "_id": "f4620d83e304b6c6505ad6aef2d300d3ab08b21f"
    },
    {
      "definition": "Begriff, Idee",
      "examples": [
        {
          "example": "der [tragende] Gedanke eines vereinten Europas",
          "_id": "e7b524b86481de0ece84956c793c780839459e63"
        },
        {
          "example": "der Gedanke der Freiheit",
          "_id": "794e06173c05bbb3242ab4579724d0be2a8ba798"
        }
      ],
      "_id": "22ff75a1b79f7f26ed102bd0422207b7604ca4ca"
    },
    {
      "definition": "in »[um] einen Gedanken«",
      "examples": [
        {
          "example": "[um] einen Gedanken (landschaftlich: ein wenig: der Mantel könnte [um] einen Gedanken länger sein)",
          "_id": "6a699bd986ea60ad2565028f9c89eedfa4105125"
        }
      ],
      "_id": "a34ff7a45857fb8cb72999b6477cdd9dd37aed12"
    }
  ]
},
{
  "word": "Lappen, der",
  "stem": "Lappen",
  "definitions": [
    {
      "definition": "[minderwertiges] kleineres Stück Stoff, Leder o. Ä.",
      "examples": [
        {
          "example": "einen Lappen auswaschen, auswringen",
          "_id": "c9908580c95554a5eb09f403c3145016645ecda1"
        },
        {
          "example": "etwas mit einem Lappen säubern, blank polieren, umwickeln, zustopfen, flicken",
          "_id": "0e63362094f201ab2af65239537e305b6d2666cb"
        }
      ],
      "_id": "6609b9e6664ba9cb591476413e1f1ac19a10ec61"
    },
    {
      "definition": "(salopp) Geldschein [mit größerem Wert]",
      "examples": [
        {
          "example": "für die paar Lappen reiß ich mir doch kein Bein aus!",
          "_id": "788b370619adc24cd632fa3e0566c596c8d51fde"
        }
      ],
      "_id": "50bf83f77d4fd168aafae6c5bb95f4bd73a02886"
    },
    {
      "definition": "(salopp) Führerschein, Fahrerlaubnis",
      "examples": [
        {
          "example": "er muss seinen Lappen für einen Monat abgeben",
          "_id": "3e9bde3fe537e78d96e20d0fc5164cf88fc1191b"
        }
      ],
      "_id": "37f50f6652808a2c8379860293e9cdab07014338"
    },
    {
      "definition": "[herunterhängendes] Stück Haut am tierischen Körper",
      "examples": [
        {
          "example": "die Lappen eines Truthahns",
          "_id": "242ef465b84409851ee2f41f41ccf0b859104afa"
        }
      ],
      "_id": "b358223dcf74d0e402c2dabc2504f067e4364388"
    },
    {
      "definition": "flächiger Teil eines Organs",
      "examples": [
        {
          "example": "der rechte Lappen der Lunge",
          "_id": "4eb3857ebb2ebda446b1972e488e28033d51dd0a"
        }
      ],
      "_id": "b164e24f741c02e8982e66c4d98384831c025c01"
    },
    {
      "definition": "in »jemandem durch die Lappen gehen«",
      "examples": [
        {
          "example": "jemandem durch die Lappen gehen (umgangssprachlich: [jemandem] entkommen, entgehen: er ist der Polizei durch die Lappen gegangen; die Wohnung, das Geschäft ist mir ärgerlicherweise durch die Lappen gegangen)",
          "_id": "5d74f03aa9c0dd9d7e82391cc761b4e37738002a"
        }
      ],
      "_id": "56c338dc8eb38aaf0dd5b1a1d91586a1db51aa63"
    }
  ]
},
{
  "word": "Stroh, das",
  "stem": "Stroh",
  "definitions": [
    {
      "definition": "trockene Halme von ausgedroschenem Getreide",
      "examples": [
        {
          "example": "frisches, trockenes, feuchtes Stroh",
          "_id": "a7f2dc0cf6af91eb3a033f638615b778829b3190"
        },
        {
          "example": "ein Ballen Stroh",
          "_id": "ac55fc9608b409a3128fb15f40dc476f3b115d3c"
        },
        {
          "example": "Stroh aufschütten, binden, flechten",
          "_id": "4a3f003ecadb458658d9c7bf6d36ba7d2e8624c6"
        },
        {
          "example": "auf Stroh, im Stroh schlafen",
          "_id": "59b63cd87b80082080cc1a243374a611e69cc3fd"
        },
        {
          "example": "das Dach ist mit Stroh gedeckt",
          "_id": "269289c27271758afdbd308382a19beb8a62e80d"
        },
        {
          "example": "das Haus brannte wie Stroh (lichterloh)",
          "_id": "1b12fa55acdffb1e79c59b1a56a9f3a7074ae4f4"
        },
        {
          "example": "etwas brennt wie nasses Stroh (schlecht)",
          "_id": "42ea6236ffd126f5cca51dbfc425f7883e0d4303"
        },
        {
          "example": "das Essen schmeckt wie Stroh (umgangssprachlich; ist trocken, ohne Würze)",
          "_id": "66e7f6cbe8ad6dfee91af43ffb1726769d81d2f9"
        },
        {
          "example": "Stroh im Kopf haben (umgangssprachlich: dumm sein)",
          "_id": "3ef220b8a9ef7fc8c0d0d39f8b6a71fa9e2abcfc"
        },
        {
          "example": "leeres Stroh dreschen (umgangssprachlich: viel Unnötiges, Belangloses reden: bei der Diskussion wurde viel leeres Stroh gedroschen)",
          "_id": "0c7692c0efe27a994de94208d7bc63e72f5b751d"
        }
      ],
      "_id": "b7614f3de9e62d1a4300179e8547c6cf27e4cccd"
    }
  ]
},
{
  "word": "ansehen",
  "stem": "ansehen",
  "definitions": [
    {
      "definition": "den Blick auf jemanden, etwas richten; ins Gesicht blicken, betrachten",
      "examples": [
        {
          "example": "einen Menschen ernst, tadelnd, freundlich, böse, herausfordernd, fragend, missbilligend, von der Seite ansehen",
          "_id": "02aa61ba12f1c7cb100f3c8e97fa9a7ebeec44ec"
        },
        {
          "example": "sieh mich [nicht so] an!",
          "_id": "9337eb33d52b33cc7f8c8d6357e9b2bdeb436328"
        },
        {
          "example": "sich [gegenseitig]/(gehoben:) einander ansehen",
          "_id": "fedaaf140d04f1d5b665610e22541ee9ed8ceb66"
        },
        {
          "example": "jemanden groß ansehen (erstaunt, mit großen Augen anblicken)",
          "_id": "da20134d97cafdd403145ca28edcdbe8a281289e"
        },
        {
          "example": "<in übertragener Bedeutung>: jemanden von oben [herab] ansehen (herablassend, gönnerhaft behandeln)",
          "_id": "6cc1dbdac41f7d5ddccc06465f7d2e2cfe5feb95"
        },
        {
          "example": "[nur] von/vom Ansehen ([nur] vom Sehen, nicht mit Namen: er ist mir nur vom Ansehen bekannt)",
          "_id": "0a7fcbca8c404036e8233196dcc1f10705f1296c"
        },
        {
          "example": "ohne Ansehen der Person (ganz gleich, um wen es sich handelt: es müssen alle ohne Ansehen der Person gehört werden)",
          "_id": "3134838cb0c64ed9c504c0cdf10df1405f0939b4"
        }
      ],
      "_id": "0be5a8497ee3bd6635cf1503f330d4ae825e7078"
    },
    {
      "definition": "etwas [aufmerksam, prüfend] betrachten (um es kennenzulernen)",
      "examples": [
        {
          "example": "[sich] Bilder, einen Film, ein Theaterstück ansehen",
          "_id": "938f07b1eaec817ad4d859f0439bb12a446bd804"
        },
        {
          "example": "eine Wohnung ansehen (besichtigen)",
          "_id": "81b79344d0a8442c7d76a2bbc9e4c064df559501"
        },
        {
          "example": "das ist nicht des Ansehens wert",
          "_id": "78a21432f27e4d6eb6860a86b178755ac6b4379f"
        },
        {
          "example": "<in übertragener Bedeutung>: ich werde mir die Sache ansehen (mich damit beschäftigen)",
          "_id": "bd299e86b1b26928fe0c8a094644f4c8c4785b32"
        },
        {
          "example": "<substantiviert>: vom bloßen Ansehen wird man nicht satt",
          "_id": "de1fdabebafe46e3305e962482ff2ea4cebc9492"
        },
        {
          "example": "sieh [mal] [einer] an! (umgangssprachlich: wer hätte das gedacht!)",
          "_id": "9319b187b7e15b1addcd67a038ceae55b33ce3ab"
        },
        {
          "example": "[das] sehe [sich] einer an! (umgangssprachlich: das ist doch nicht zu glauben, ist ganz erstaunlich!)",
          "_id": "6c2a307debe719baf07002734a35cbfed532d97f"
        },
        {
          "example": "ansehen kostet nichts! (für das bloße Anschauen muss man nichts bezahlen)",
          "_id": "0a73ef6fb2b7b0e1ed7a4997df9f800bc7c5f2ca"
        }
      ],
      "_id": "b0031c0cca486dc5c42951b652f73d43ddae1b5d"
    },
    {
      "definition": "in bestimmter Weise aussehen",
      "examples": [
        {
          "example": "das sieht sich ganz hübsch an",
          "_id": "2ee8459ba1ed83de9a3c04320308d76a6c161c36"
        },
        {
          "example": "es sah sich an (hatte den Anschein), als würde es sich bessern",
          "_id": "ff91fa90ae9a96f93d21fc81747aef114d381771"
        }
      ],
      "_id": "99c5e9ba3c9602fbce0162529047ba6f6883ac95"
    },
    {
      "definition": "in »anzusehen sein«",
      "examples": [
        {
          "example": "anzusehen sein (aussehen: sie ist in diesem Kleid hübsch anzusehen; der Verletzte war schrecklich anzusehen)",
          "_id": "cacbff4a7869a0e65708e0743cd28d06b3257c3d"
        }
      ],
      "_id": "9814be5562b0a2add69e2767061f2ff34dbbc10d"
    },
    {
      "definition": "vom Gesicht ablesen können; an der äußeren Erscheinung erkennen",
      "examples": [
        {
          "example": "jemandem etwas schon von Weitem ansehen",
          "_id": "3d822b0b3bddb975370a015c72c5118d1f7bfaf1"
        },
        {
          "example": "jemandem sein Alter [nicht] ansehen",
          "_id": "964490852ef3d18787f8ad4599412a7bde22d8d0"
        },
        {
          "example": "man sieht ihm seine Unsicherheit an",
          "_id": "2f66236fa2d1ddd0060ca6b607f16f01a2048f68"
        }
      ],
      "_id": "d8952afd9ae75ea9e76e3c5be111d9da6f62be05"
    },
    {
      "definition": "einschätzen, beurteilen",
      "examples": [
        {
          "example": "etwas anders, mit anderen Augen ansehen",
          "_id": "fbbdf4e01d7c48a7f4ade23d8489ed0a8dca3f95"
        }
      ],
      "_id": "ca235efa7041fd88dedbb87b8927c50186955257"
    },
    {
      "definition": "als etwas betrachten, auffassen; für jemanden, etwas halten",
      "examples": [
        {
          "example": "jemanden als seinen Freund, als Betrüger ansehen",
          "_id": "1f9b482c53a3ae374f24b8334a56e7b3ea93f91e"
        },
        {
          "example": "etwas als/für seine Pflicht ansehen",
          "_id": "2d8e0b1f1bc2ab4aedb13e9583d0dd8a1284b8ad"
        },
        {
          "example": "etwas als/für eilig ansehen",
          "_id": "cdb30dcb0161e37a133496c919dc37d559ab279e"
        },
        {
          "example": "sich als Held, (veraltend:) als Helden ansehen",
          "_id": "48e2e359daa56dc6292a8c69f4ae700ee26ea32e"
        },
        {
          "example": "jemanden nicht für voll ansehen (nicht für ganz zurechnungsfähig halten, nicht ernst nehmen)",
          "_id": "7e13c21ed1de916484a685a05c6a3a15afa468bd"
        }
      ],
      "_id": "e4792d42b7d6e51f325b6105d12e9d207ae35bd2"
    },
    {
      "definition": "Zeuge sein; zusehen, ohne etwas dagegen zu unternehmen",
      "examples": [
        {
          "example": "er musste mit ansehen, wie sie in den Fluten versank",
          "_id": "838642233a85de97650569de8976d251a8c6eb34"
        },
        {
          "example": "das Elend nicht mehr [mit] ansehen können",
          "_id": "eeab924969d00e9bcab5f885c01d63e956539e1a"
        }
      ],
      "_id": "4600fb42202facccab470e447653632e6f45ebd6"
    }
  ]
},
{
  "word": "weiß",
  "stem": "weiß",
  "definitions": [
    {
      "definition": "von der hellsten Farbe; alle sichtbaren Farben, die meisten Lichtstrahlen reflektierend",
      "examples": [
        {
          "example": "weiße Lilien, Wolken",
          "_id": "3bc2ac99c75236fef4d0f6e8895e7c7414456a0c"
        },
        {
          "example": "weiße Gardinen",
          "_id": "a060d4a587a9f3bff4795f3669a32e6344d506c0"
        },
        {
          "example": "ein weißes Kleid",
          "_id": "384e05a38a519d895c43414d209ad0974e10561c"
        },
        {
          "example": "weiße Haare",
          "_id": "b355f634ab99df0a106bf34af20a9fe5585b1241"
        },
        {
          "example": "ein weißer Hai, Hirsch",
          "_id": "5a3a1a42a4b594f09982952757e391d0eb255362"
        },
        {
          "example": "die Schachfiguren so aufstellen, dass die weiße Dame auf einem weißen Feld steht",
          "_id": "f249e5a14b59dda403416c16f33ae5058ba38a7e"
        },
        {
          "example": "weiß wie Schnee",
          "_id": "9ad6c7be0b8f9e180d1110814d2c438ea52ce6d8"
        },
        {
          "example": "weiße Wäsche",
          "_id": "36b51f471b84abe57284a533684733cfe70dd88c"
        },
        {
          "example": "sein Gesicht war weiß von Kalk",
          "_id": "5e66c50468edde26629f328f647e85a3585bb417"
        },
        {
          "example": "weiß (in Weiß) gekleidet sein",
          "_id": "ed9a3e5cd7daa3197b14dce4e27b26d3c11e4a07"
        },
        {
          "example": "der Rock war rot und weiß gestreift",
          "_id": "6599aecd8f1146c5c3f7ea65b5b56884cd525ae5"
        },
        {
          "example": "der Tisch ist weiß (mit einem weißen Tischtuch) gedeckt",
          "_id": "3f64736df0bc4e451c47101e5126d496b8ef0e45"
        },
        {
          "example": "strahlend, blendend weiße Zähne",
          "_id": "3fe8dfebd52e7dbb363f3b62067cb82ca2f94193"
        },
        {
          "example": "weiß lackierte Möbel",
          "_id": "baf2fedbd3aa298a94be41054142dfa5bd3043c8"
        },
        {
          "example": "die Wand weiß kalken/tünchen",
          "_id": "bf334bb53b1f0572c120ae5638ba74baca21c35c"
        },
        {
          "example": "eine weiß gekalkte/getünchte/gestrichene Wand",
          "_id": "8cc119b07d896ae368258d3ffc14ff8ae482bae0"
        },
        {
          "example": "weißes (unbeschriebenes) Papier",
          "_id": "4e34635f44be8d2cfdb12afe83c84069156afb4c"
        },
        {
          "example": "er ist weiß geworden (hat weiße Haare bekommen)",
          "_id": "76ae8984c207ea0f4fcf41a3639249e83d74a9d0"
        },
        {
          "example": "weiße Blutkörperchen (Medizin; Leukozyten)",
          "_id": "2f23cf670245e0cf56a41e1f0cfad9300dc942a7"
        },
        {
          "example": "weißes (das ganze sichtbare Spektrum umfassendes) Licht",
          "_id": "ec170a7afe11b847084f9254623b350ad0f7c590"
        },
        {
          "example": "die Wäsche weiß waschen",
          "_id": "571fd4f7172f8405dcb03e122d7347fd11ffe6af"
        },
        {
          "example": "<substantiviert>: das Weiße im Ei/des Eis",
          "_id": "5f83e8c70e2c1dad2d7a05f2b391569aebad7348"
        },
        {
          "example": "Weiß (der Spieler, der die weißen Figuren hat) eröffnet das Spiel",
          "_id": "e4c3ab6093e977c124cb61e168cb144ddbf8bad5"
        }
      ],
      "_id": "257ae225d885bf3585cb3357c3d06b170b55c76a"
    },
    {
      "definition": "sehr hell aussehend",
      "examples": [
        {
          "example": "weißer Pfeffer",
          "_id": "e2079b35176864a8f482ba123fa3eb1ad16ad599"
        },
        {
          "example": "weiße Bohnen, Johannisbeeren",
          "_id": "02a5866f40b1d97f973f79b65579d61a2f4b4f2d"
        },
        {
          "example": "weißes Mehl",
          "_id": "ab40cab1c94af94dfe680cabe8231e02f92d4345"
        },
        {
          "example": "weißes Brot (Weißbrot)",
          "_id": "e0f558bdf96c35a9b3dffafe9926d007f9fb504d"
        },
        {
          "example": "weißes Fleisch",
          "_id": "f6410f518b066d67835954bc3174cea9488391fb"
        },
        {
          "example": "weißer Wein (Weißwein)",
          "_id": "1d969b3993b67e14e981a1f2782e27d136708187"
        },
        {
          "example": "<substantiviert>: (umgangssprachlich) ein Glas von dem Weißen (von dem Weißwein)",
          "_id": "dd8b5ea758d1423c26063f79bf052ef132e2da13"
        }
      ],
      "_id": "72a31ad19c0c20e68d58ec2203827af0b422b08f"
    },
    {
      "definition": "von heller Hautfarbe",
      "examples": [
        {
          "example": "die weißen Amerikaner",
          "_id": "0e49aaa74c5f6f40cf5942e7367a95c528fc31c4"
        },
        {
          "example": "die weiße Minderheit",
          "_id": "9e12e7cf93f3829f252b5110710738af2ca5a273"
        },
        {
          "example": "Menschen weißer Hautfarbe",
          "_id": "d0c49876e4a157eb977e1654c5e0da6288ca2ff5"
        },
        {
          "example": "der weiße Mann (die Weißen)",
          "_id": "ba69e8d0c5d7bd3bd915c732c5be4af71197ccc0"
        },
        {
          "example": "der Vater ist weiß",
          "_id": "ddaf1ddabcc438e3a82cd65b56ae6f00bf4b5602"
        }
      ],
      "_id": "782d62e7d3dccbd8a770a66fbeb1678ac34fcac9"
    }
  ]
},
{
  "word": "wissen lassen, wissenlassen",
  "stem": "wissen lassen",
  "definitions": [
    {
      "definition": "jemanden in Kenntnis setzen; jemandem Bescheid sagen",
      "examples": [
        {
          "example": "wenn du Hilfe brauchst, lass es mich wissen",
          "_id": "61ec6867e18ac2bd7c0aaf4263ec2f67655d2bf1"
        }
      ],
      "_id": "3eec2c7f05eaecadcf468450c015480343cd3bce"
    }
  ]
},
{
  "word": "zustehen",
  "stem": "zustehen",
  "definitions": [
    {
      "definition": "etwas sein, worauf jemand einen [rechtmäßigen] Anspruch hat, was jemand zu bekommen hat",
      "examples": [
        {
          "example": "dieses Geld steht ihr zu",
          "_id": "166b5e217a71dc14aa6a5a1441263fd25150be53"
        },
        {
          "example": "der Partei stehen 78 Mandate zu",
          "_id": "631d3b3b5ec1977553c06f771dfdb31fad9dd34e"
        },
        {
          "example": "dieses Recht steht jedem zu",
          "_id": "1458e049f8f7e11350ed016c521219a17ae26be4"
        }
      ],
      "_id": "46c6c449b3fd1d32d854159429ddc252982766e9"
    },
    {
      "definition": "zukommen",
      "examples": [
        {
          "example": "ein Urteil über ihn steht mir nicht zu",
          "_id": "fbce7acccc700fca1b9e701c867881beaadcf0b8"
        },
        {
          "example": "es steht dir nicht zu, sie zu verdammen",
          "_id": "3f1249d269732ff705369911b39c63a556c0065f"
        }
      ],
      "_id": "e560ec5e49ceace4e814f1784151d29a3c43ad68"
    }
  ]
},
]);