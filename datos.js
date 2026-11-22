/* Datos de la web del Club Ciclista La Palma (Strava, club 1094910).
   Se actualiza cada semana: se añade la semana cerrada al principio de SEMANAS,
   se sustituye "Esta semana" y se reescribe TEMPORADA con los totales del año.
   Socios extra (del club pero fuera del club de Strava): Pedro Villegas Gil, Juanma Bernal, Moises Avila, Luis Carlos Espina, Juan Domingo López🇪🇦, Pedro Antonio Pérez Lepe, Luis Martinez.
   Excluidos (no deben salir nunca): "Juan Silva Medrano" (cuenta duplicada de "Juan Silva"). */
window.CLUB_DATOS = {
  ACTUALIZADO: "2026-11-22",
  SEMANAS: [
    { id:"2026-11-16", etiqueta:"Semana pasada", rango:"16–22 nov 2026", completa:true, filas:[
      ["David Gil 🇪🇸",500.3,6,111.1,30.2,5705],["Mario Luis Pérez Medrano",429.5,4,118.2,28.4,4809],["Pau González",410.9,7,133.4,30.7,2768],
      ["Rubén Cepeda Lepe",365.7,6,117.5,27.6,3151],["Juan Domingo López🇪🇦",340.6,10,null,24.8,2136],["Antonio Lorenzo Guerrero",311.1,5,108.1,30.3,2365],
      ["José Carlos Marroco Jaen",275.8,4,110.0,29.0,3108],["Pedro Antonio Pérez Lepe",272.5,3,null,27.3,4396],["Juan Manuel Medrano",262.0,4,105.2,30.1,2649],
      ["José Francisco Suárez García",259.1,3,90.2,25.2,1436],["Javier Pavón Millán",252.0,4,117.1,26.3,2369],["Luis Carlos Espina",243.5,5,null,30.6,1625],
      ["Miguel Mendez Garcia",226.1,3,97.4,31.1,1871],["Emilio Martin Ramirez",221.2,3,110.3,30.7,2468],["Rafael Marquez Sanchez",203.8,3,134.1,27.3,3233],
      ["Juan Silva",197.4,4,100.5,26.6,2694],["Alfonso Barneto",185.7,3,86.0,30.1,1679],["Paco Ligero Martinez",177.6,4,85.9,32.3,987],
      ["Juan Manuel Valdayo Merchante",176.8,3,85.6,30.5,1222],["Juan Delgado",176.0,9,24.1,29.3,441],["Luis Márquez",174.4,3,82.5,29.3,1481],
      ["Enrique Jerez",173.1,3,79.1,30.4,1223],["Ramon Sanchez",167.9,2,88.7,25.7,1020],["Jose Pichardo",164.6,2,83.9,31.9,1383],
      ["Jose Luis Gomez Galan",150.4,2,107.5,27.5,2056],["Antonio Jesús Cordero Bustamante",137.2,2,87.6,24.0,798],["Nacho Sotelo",136.0,2,85.9,30.8,1210],
      ["Gonzalo 🌬️",132.7,3,49.4,30.9,1324],["Juan Manuel Fidalgo",126.5,2,81.4,26.8,1159],["Manuel Del Toro",125.4,2,82.7,24.4,962],
      ["Antonio Pichardo 🇪🇸",125.2,2,81.9,28.7,1166],["Miguel Lepe",111.0,2,60.6,32.3,376],["Jose Antonio Mairena",105.9,3,105.9,18.1,791],
      ["Gustavo Melado Mairena",96.4,2,50.0,29.0,1180],["Alejandro Espina Rosado",81.5,1,81.5,23.9,1421],["José Ángel Perez Lepe",68.2,5,32.0,37.1,639],
      ["Pedro Villegas Gil",64.9,1,null,18.3,501],["Miguel Diaz",52.4,1,52.4,33.5,221],["David Jiménez Ramos",52.0,1,52.0,28.6,564],
      ["Moises Avila",47.9,1,null,14.5,367],["Fernando Gonzalez",12.1,1,12.1,30.5,3]
    ]},
    { id:"2026-11-09", etiqueta:"Semana del 9–15 nov", rango:"9–15 nov 2026", completa:true, filas:[
      ["Pau González",347.9,5,116.3,35.4,2015],["Rubén Cepeda Lepe",306.2,5,103.0,25.6,3570],["José Carlos Marroco Jaen",293.0,6,135.5,27.9,2954],
      ["Rafael Marquez Sanchez",254.0,5,150.1,30.9,1823],["Antonio Jesús Cordero Bustamante",252.7,4,87.3,23.8,1319],["Mario Luis Pérez Medrano",249.6,2,127.1,29.0,2432],
      ["Paco Ligero Martinez",222.4,4,96.1,30.7,1908],["Miguel Mendez Garcia",205.3,2,111.4,30.0,1868],["Gonzalo 🌬️",196.9,3,96.7,30.4,1968],
      ["Gonzalo Mogorron",194.3,4,92.5,30.3,939],["Juan Silva",186.9,4,96.7,26.8,2473],["Javier Pavón Millán",176.7,2,90.5,28.4,1332],
      ["David Gil 🇪🇸",167.7,2,103.1,32.7,1629],["Emilio Martin Ramirez",159.6,2,94.1,30.9,1670],["Miguel Lepe",144.1,3,77.6,32.2,340],
      ["Luis Márquez",136.5,2,71.0,31.3,1186],["Nacho Sotelo",135.8,2,70.2,31.6,1157],["Gustavo Melado Mairena",126.4,2,69.3,31.2,1056],
      ["Alfonso Barneto",120.9,2,67.5,31.3,988],["Jose Pichardo",120.6,3,57.2,33.4,1082],["Juan Delgado",119.6,8,21.2,30.1,273],
      ["Antonio Pichardo 🇪🇸",96.2,1,96.2,28.5,1107],["David Jiménez Ramos",91.0,2,51.0,22.5,865],["Antonio Lorenzo Guerrero",90.5,3,32.4,30.0,165],["Juan Manuel Fidalgo",88.8,1,88.8,26.6,629],
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
  TEMPORADA: { desde:"2026-01-01", hasta:"2026-11-22", filas:[
      ["manuel ligero Martínez",52,2437.5,20139,6003],["Pedro Villegas Gil",69,3660.4,32378,11254],["Jose Pichardo",300,14728.2,138126,27688],
      ["Ismael Jarillo",2,137.7,1076,245],["Antonio Lorenzo Guerrero",178,9788.6,63724,19935],["Jose Luis Gomez Galan",56,2634.9,28525,5497],
      ["Jose Luis Garcia",35,740.1,1333,2379],["David Gil 🇪🇸",231,15269.6,164612,31186],["Juanma Bernal",null,null,null,null],
      ["Fernando Gonzalez",59,3596.0,31953,7664],["David Jiménez Ramos",39,1456.3,12591,3453],["Antonio Lopez",74,3044.7,25247,6898],
      ["Jose Luis Infante",0,0.0,0,0],["Juan Manuel Valdayo Merchante",61,3318.7,23497,6884],["Alejandro Espina Rosado",103,7840.6,80680,18132],
      ["Miguel Lepe",135,10283.0,65359,23753],["Miguel Diaz",145,8600.1,67979,18418],["Diego Jesus Gil",91,7314.1,66453,16833],
      ["Pablo Gil",153,8380.9,78704,18365],["Ignacio García",14,517.2,4015,1149],["Pau González",253,17504.1,133785,35346],
      ["Paco Ligero Martinez",198,10994.4,78411,21114],["Justi Cobo Diaz",0,0.0,0,0],["Ale Madrid",0,0.0,0,0],
      ["Javier Pavón Millán",187,12833.1,118527,28568],["Pedro Avila Solis",11,674.3,5027,1613],["Moises Avila",32,1749.1,13029,6166],
      ["Petri Perez Bebian",0,0.0,0,0],["Juan Manuel Medrano",212,11002.9,102166,21825],["Juan Delgado",319,13247.9,132785,32039],
      ["jose angel ramos martin",41,2711.6,21671,6402],["Nacho Sotelo",147,9556.2,75688,18962],["Mario Muñoz Artillo",45,1250.9,10539,2962],
      ["Manuel Fernández Ramírez",72,4265.2,35520,8589],["Daniel Del Toro Navarro",34,1878.8,13440,3766],["Aurelio Guerra",3,286.5,970,606],
      ["José Antonio Palacio Serrano",136,3732.5,37289,8636],["Jose Antonio Mairena",217,11969.4,85897,29682],["Emilio Martin Ramirez",111,7455.9,75077,15334],
      ["Juan Manuel Fidalgo",95,5119.9,35407,11346],["JUAN DIEGO LEPE GUTIÉRREZ",null,null,null,null],["Miguel Mendez Garcia",43,3846.9,34355,7410],
      ["Enrique Jerez",115,6465.3,51578,14384],["Javier Dabrio Soldán",0,0.0,0,0],["José Carlos Marroco Jaen",221,13118.2,128830,26548],
      ["Fran Merchante",82,5522.1,55187,12284],["Santi Gil🇪🇸",137,9659.5,82933,20452],["Victoria Teba",0,0.0,0,0],
      ["David Gil Jiménez",43,1966.6,19470,4578],["Ezequiel DP",0,0.0,0,0],["Alfonso Barneto",153,8609.2,67296,18677],
      ["Luis Barneto",12,529.2,5876,1250],["José Ángel Perez Lepe",92,5059.7,50293,10311],["Daniel Diaz",24,875.3,9490,2334],
      ["José Francisco Suárez García",125,9706.7,64684,22555],["Juan Enrique Nieto Julián",51,2386.0,22303,6821],["Antonio Pichardo 🇪🇸",56,2781.7,24633,6313],
      ["Rafael Marquez Sanchez",152,7012.6,72256,15142],["Gonzalo 🌬️",51,2952.3,27944,6084],["Manuel Del Toro",86,5347.9,46126,13576],
      ["Luis Carlos Espina",46,2228.5,15182,4716],["Antonio Lepe Rasgado",9,381.8,2646,883],["Luis Márquez",128,7572.7,59836,14953],
      ["Estivenson Romero Polanco",28,1462.6,13662,3960],["Mario Luis Pérez Medrano",228,22434.3,178761,47147],["Ramon Sanchez",59,4231.3,27958,9907],
      ["Jorge Chirino Sosa",45,1170.4,10395,5325],["Juan Silva",181,9818.5,103089,19758],["Rubén Cepeda Lepe",304,14604.5,147327,30526],
      ["Gonzalo Mogorron",130,7610.1,76372,15853],["Álvaro Félix",131,7449.3,64980,15366],["Gustavo Melado Mairena",116,6721.2,61568,13368],
      ["Juan Domingo López🇪🇦",286,10158.6,69841,23643],["Jose Diago silva",16,1270.8,9477,2539],["Antonio Jesús Cordero Bustamante",101,6484.0,48793,15385],
      ["Pedro Antonio Pérez Lepe",206,11303.1,103014,21767],["Luis Martinez",50,2812.0,26383,6332]
  ]}
};
