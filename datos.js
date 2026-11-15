/* Datos de la web del Club Ciclista La Palma (Strava, club 1094910).
   Se actualiza cada semana: se añade la semana cerrada al principio de SEMANAS,
   se sustituye "Esta semana" y se reescribe TEMPORADA con los totales del año.
   Socios extra (del club pero fuera del club de Strava): Pedro Villegas Gil, Juanma Bernal, Moises Avila, Luis Carlos Espina, Juan Domingo López🇪🇦, Pedro Antonio Pérez Lepe, Luis Martinez. */
window.CLUB_DATOS = {
  ACTUALIZADO: "2026-11-15",
  SEMANAS: [
    { id:"2026-11-09", etiqueta:"Semana pasada", rango:"9–15 nov 2026", completa:true, filas:[
      ["Pau González",347.9,5,116.3,35.4,2015],["Rubén Cepeda Lepe",306.2,5,103.0,25.6,3570],["José Carlos Marroco Jaen",293.0,6,135.5,27.9,2954],
      ["Rafael Marquez Sanchez",254.0,5,150.1,30.9,1823],["Antonio Jesús Cordero Bustamante",252.7,4,87.3,23.8,1319],["Mario Luis Pérez Medrano",249.6,2,127.1,29.0,2432],
      ["Paco Ligero Martinez",222.4,4,96.1,30.7,1908],["Miguel Mendez Garcia",205.3,2,111.4,30.0,1868],["Gonzalo 🌬️",196.9,3,96.7,30.4,1968],
      ["Gonzalo Mogorron",194.3,4,92.5,30.3,939],["Juan Silva",186.9,4,96.7,26.8,2473],["Javier Pavón Millán",176.7,2,90.5,28.4,1332],
      ["David Gil 🇪🇸",167.7,2,103.1,32.7,1629],["Emilio Martin Ramirez",159.6,2,94.1,30.9,1670],["Miguel Lepe",144.1,3,77.6,32.2,340],
      ["Luis Márquez",136.5,2,71.0,31.3,1186],["Nacho Sotelo",135.8,2,70.2,31.6,1157],["Gustavo Melado Mairena",126.4,2,69.3,31.2,1056],
      ["Alfonso Barneto",120.9,2,67.5,31.3,988],["Jose Pichardo",120.6,3,57.2,33.4,1082],["Juan Delgado",119.6,8,21.2,30.1,273],
      ["Antonio Pichardo 🇪🇸",96.2,1,96.2,28.5,1107],["David Jiménez Ramos",91.0,2,51.0,22.5,865],["Antonio Lorenzo Guerrero",90.5,3,32.4,30.0,165],
      ["Juan Enrique Nieto Julián",80.4,1,80.4,25.0,547],["Alejandro Espina Rosado",79.6,1,79.6,21.0,1007],["Jose Antonio Mairena",79.5,4,79.5,12.9,494],
      ["Enrique Jerez",77.2,1,77.2,25.6,393],["José Francisco Suárez García",75.0,1,75.0,27.2,278],["Jose Luis Gomez Galan",72.8,2,38.2,28.5,727],
      ["Pablo Gil",60.0,2,60.0,18.3,952],["Fernando Gonzalez",56.6,1,56.6,28.3,452],["Juan Manuel Medrano",56.5,2,33.8,26.8,609],
      ["Juan Manuel Valdayo Merchante",51.4,1,51.4,30.4,345],["Manuel Del Toro",49.1,1,49.1,18.6,457],["Jose Luis Garcia",13.9,1,13.9,15.7,0]
    ]},
    { id:"2026-11-02", etiqueta:"Semana del 2–8 nov", rango:"2–8 nov 2026", completa:true, filas:[
      ["Pau González",454.8,5,145.7,31.2,3246],["Antonio Jesús Cordero Bustamante",449.4,7,90.6,24.0,3510],["David Gil 🇪🇸",419.3,5,125.0,32.3,3276],
      ["Jose Pichardo",408.1,8,119.0,32.3,3439],["José Carlos Marroco Jaen",384.3,5,123.5,28.3,4312],["Mario Luis Pérez Medrano",381.7,3,131.8,30.2,2881],
      ["Rubén Cepeda Lepe",345.4,5,113.4,27.6,3125],["Juan Manuel Fidalgo",331.6,6,83.5,28.4,2175],["José Francisco Suárez García",317.0,4,86.3,26.1,2059],
      ["Pablo Gil",307.4,4,109.0,31.2,2274],["Juan Silva",292.5,5,114.3,29.3,2874],["Jose Antonio Mairena",282.5,6,88.7,23.8,2001],
      ["Antonio Lorenzo Guerrero",272.8,5,80.0,31.9,1344],["Gustavo Melado Mairena",266.2,4,90.1,31.4,2050],["Juan Manuel Valdayo Merchante",261.4,3,100.0,32.1,1714],
      ["Gonzalo 🌬️",258.9,4,109.4,32.6,1620],["Rafael Marquez Sanchez",255.6,5,80.9,29.6,2537],["Nacho Sotelo",242.6,3,95.5,31.1,1758],
      ["Alfonso Barneto",237.3,6,95.2,26.8,2129],["Paco Ligero Martinez",235.2,5,82.0,31.8,962],["Antonio Pichardo 🇪🇸",234.5,4,96.0,29.0,2034],
      ["Miguel Mendez Garcia",213.2,2,121.1,31.3,1795],["Juan Manuel Medrano",203.8,4,118.9,30.5,1463],["David Gil Jiménez",198.1,3,109.4,28.6,1453],
      ["Diego Jesus Gil",173.5,2,91.3,26.9,1260],["Miguel Lepe",168.8,2,89.2,26.0,1027],["Alejandro Espina Rosado",168.2,2,86.6,24.5,1332],
      ["Manuel Fernández Ramírez",154.4,3,82.7,32.7,1118],["Javier Pavón Millán",152.3,2,100.0,28.4,1454],["David Jiménez Ramos",106.9,2,59.7,26.9,1119],
      ["Juan Delgado",96.5,5,23.6,29.6,186],["Fernando Gonzalez",87.4,1,87.4,28.1,690],["Enrique Jerez",82.4,2,49.4,29.7,503],
      ["Juan Enrique Nieto Julián",80.4,2,71.5,25.2,706],["Manuel Del Toro",76.3,2,49.9,20.3,922],["Ramon Sanchez",74.3,1,74.3,22.7,527],
      ["jose angel ramos martin",61.0,1,61.0,22.2,607],["manuel ligero Martínez",56.1,1,56.1,17.9,744],["José Ángel Perez Lepe",50.2,1,50.2,31.0,639],
      ["Gonzalo Mogorron",42.2,1,42.2,30.7,192],["Luis Márquez",41.5,1,41.5,26.1,393],["Emilio Martin Ramirez",40.4,1,40.4,30.9,183],
      ["Antonio Lopez",25.5,2,25.5,12.1,219]
    ]}
  ],
  /* Totales de ciclismo del 1 de enero hasta la fecha: [nombre, salidas, km, desnivel_m, minutos]. null = perfil sin datos visibles */
  TEMPORADA: { desde:"2026-01-01", hasta:"2026-11-15", filas:[
      ["manuel ligero Martínez",52,2437.5,20139,6003],["Pedro Villegas Gil",68,3595.5,31877,11041],["Jose Pichardo",298,14563.6,136743,27378],
      ["Ismael Jarillo",2,137.7,1076,245],["Antonio Lorenzo Guerrero",172,9443.9,61359,19259],["Jose Luis Gomez Galan",54,2484.5,26469,5169],
      ["Jose Luis Garcia",35,740.1,1333,2379],["David Gil 🇪🇸",225,14769.3,158907,30191],["Juanma Bernal",null,null,null,null],
      ["Fernando Gonzalez",58,3584.0,31950,7640],["David Jiménez Ramos",38,1404.3,12027,3344],["Antonio Lopez",74,3044.7,25247,6898],
      ["Jose Luis Infante",0,0.0,0,0],["Juan Manuel Valdayo Merchante",58,3141.9,22275,6536],["Alejandro Espina Rosado",102,7759.1,79260,17928],
      ["Miguel Lepe",133,10172.0,64983,23547],["Miguel Diaz",142,8408.7,66858,18031],["Diego Jesus Gil",91,7314.1,66453,16833],
      ["Pablo Gil",153,8380.9,78704,18365],["Ignacio García",14,517.2,4015,1149],["Pau González",246,17093.2,131017,34543],
      ["Paco Ligero Martinez",194,10816.8,77424,20784],["Justi Cobo Diaz",0,0.0,0,0],["Ale Madrid",0,0.0,0,0],
      ["Javier Pavón Millán",182,12538.8,116013,27894],["Pedro Avila Solis",11,674.3,5027,1613],["Moises Avila",31,1701.2,12662,5968],
      ["Petri Perez Bebian",0,0.0,0,0],["Juan Manuel Medrano",208,10740.9,99517,21302],["Juan Delgado",310,13071.9,132344,31679],
      ["jose angel ramos martin",41,2711.6,21671,6402],["Nacho Sotelo",145,9420.2,74478,18697],["Mario Muñoz Artillo",45,1250.9,10539,2962],
      ["Manuel Fernández Ramírez",72,4265.2,35520,8589],["Daniel Del Toro Navarro",33,1835.6,12956,3680],["Aurelio Guerra",3,286.5,970,606],
      ["José Antonio Palacio Serrano",136,3732.5,37289,8636],["Jose Antonio Mairena",214,11863.5,85106,29330],["Emilio Martin Ramirez",108,7234.7,72609,14901],
      ["Juan Manuel Fidalgo",92,4904.5,33619,10861],["JUAN DIEGO LEPE GUTIÉRREZ",null,null,null,null],["Miguel Mendez Garcia",40,3620.9,32484,6974],
      ["Enrique Jerez",112,6292.2,50355,14042],["Javier Dabrio Soldán",0,0.0,0,0],["José Carlos Marroco Jaen",217,12842.4,125722,25977],
      ["Fran Merchante",82,5522.1,55187,12284],["Santi Gil🇪🇸",137,9659.5,82933,20452],["Victoria Teba",0,0.0,0,0],
      ["David Gil Jiménez",43,1966.6,19470,4578],["Ezequiel DP",0,0.0,0,0],["Alfonso Barneto",150,8423.5,65617,18307],
      ["Luis Barneto",12,529.2,5876,1250],["José Ángel Perez Lepe",87,4991.4,49654,10201],["Daniel Diaz",24,875.3,9490,2334],
      ["José Francisco Suárez García",122,9447.7,63248,21938],["Juan Enrique Nieto Julián",51,2386.0,22303,6821],["Antonio Pichardo 🇪🇸",54,2656.5,23467,6051],
      ["Rafael Marquez Sanchez",149,6808.8,69023,14694],["Gonzalo 🌬️",48,2819.6,26621,5826],["Manuel Del Toro",84,5222.5,45164,13268],
      ["Luis Carlos Espina",41,1985.0,13557,4239],["Antonio Lepe Rasgado",9,381.8,2646,883],["Luis Márquez",125,7398.3,58355,14595],
      ["Estivenson Romero Polanco",28,1462.6,13662,3960],["Mario Luis Pérez Medrano",224,22004.8,173952,46240],["Ramon Sanchez",57,4063.4,26938,9515],
      ["Jorge Chirino Sosa",45,1170.4,10395,5325],["Juan Silva",177,9621.1,100395,19313],["Juan Silva Medrano",null,null,null,null],
      ["Rubén Cepeda Lepe",298,14238.8,144176,29732],["Gonzalo Mogorron",130,7610.1,76372,15853],["Álvaro Félix",131,7449.3,64980,15366],
      ["Gustavo Melado Mairena",114,6624.8,60388,13168],["Juan Domingo López🇪🇦",276,9818.0,67705,22819],["Jose Diago silva",16,1270.8,9477,2539],
      ["Antonio Jesús Cordero Bustamante",99,6346.8,47996,15042],["Pedro Antonio Pérez Lepe",203,11030.6,98618,21169],["Luis Martinez",50,2812.0,26383,6332]
  ]}
};
