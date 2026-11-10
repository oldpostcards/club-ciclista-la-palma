/* Datos de la web del Club Ciclista La Palma (Strava, club 1094910).
   Se actualiza cada semana: se añade la semana cerrada al principio de SEMANAS,
   se sustituye "Esta semana" y se reescribe TEMPORADA con los totales del año. */
window.CLUB_DATOS = {
  ACTUALIZADO: "2026-11-10",
  SEMANAS: [
    { id:"2026-11-09", etiqueta:"Esta semana", rango:"9–15 nov 2026", completa:false, filas:[
      ["Miguel Lepe",66.4,2,62.4,43.4,26],["Pau González",46.9,1,46.9,46.9,6],["Juan Delgado",36.4,2,21.2,30.4,58],
      ["José Carlos Marroco Jaen",33.3,1,33.3,29.9,175],["Paco Ligero Martinez",32.9,1,32.9,31.0,209],["Juan Silva",32.0,1,32.0,28.2,309],
      ["Rafael Marquez Sanchez",29.9,1,29.9,32.3,1],["Antonio Lorenzo Guerrero",28.0,1,28.0,28.0,null],["Jose Pichardo",23.5,1,23.5,32.9,243],
      ["Rubén Cepeda Lepe",19.9,1,19.9,19.3,80],["Antonio Jesús Cordero Bustamante",7.9,1,7.9,7.6,45]
    ]},
    { id:"2026-11-02", etiqueta:"Semana pasada", rango:"2–8 nov 2026", completa:true, filas:[
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
  TEMPORADA: { desde:"2026-01-01", hasta:"2026-11-10", filas:[
    ["manuel ligero Martínez",52,2437.5,20139,6003],["Jose Pichardo",296,14466.5,135904,27204],["Ismael Jarillo",2,137.7,1076,245],
    ["Antonio Lorenzo Guerrero",170,9381.4,61194,19138],["Jose Luis Gomez Galan",52,2411.6,25742,5016],["Jose Luis Garcia",33,714.6,1333,2280],
    ["David Gil 🇪🇸",223,14601.6,157278,29883],["Fernando Gonzalez",57,3527.4,31498,7520],["David Jiménez Ramos",36,1313.2,11162,3101],
    ["Antonio Lopez",74,3044.7,25247,6898],["Jose Luis Infante",0,0,0,0],["Juan Manuel Valdayo Merchante",57,3090.6,21930,6434],
    ["Alejandro Espina Rosado",101,7679.6,78253,17700],["Miguel Lepe",132,10094.4,64669,23370],["Miguel Diaz",142,8408.7,66858,18031],
    ["Diego Jesus Gil",91,7314.1,66453,16833],["Pablo Gil",152,8320.9,77752,18229],["Ignacio García",14,517.2,4015,1149],
    ["Pau González",242,16792.3,129008,34013],["Paco Ligero Martinez",191,10627.3,75725,20413],["Justi Cobo Diaz",0,0,0,0],
    ["Ale Madrid",0,0,0,0],["Javier Pavón Millán",180,12362.2,114681,27521],["Pedro Avila Solis",11,674.3,5027,1613],
    ["Petri Perez Bebian",0,0,0,0],["Juan Manuel Medrano",206,10684.4,98908,21176],["Juan Delgado",304,12988.7,132129,31513],
    ["jose angel ramos martin",41,2711.6,21671,6402],["Nacho Sotelo",143,9284.3,73321,18439],["Mario Muñoz Artillo",45,1250.9,10539,2962],
    ["Manuel Fernández Ramírez",72,4265.2,35520,8589],["Daniel Del Toro Navarro",33,1835.6,12956,3680],["Aurelio Guerra",3,286.5,970,606],
    ["José Antonio Palacio Serrano",136,3732.5,37289,8636],["Jose Antonio Mairena",211,11784.0,84612,29020],["Emilio Martin Ramirez",106,7075.1,70939,14591],
    ["Juan Manuel Fidalgo",92,4904.5,33619,10861],["JUAN DIEGO LEPE GUTIÉRREZ",null,null,null,null],["Miguel Mendez Garcia",38,3415.5,30616,6563],
    ["Enrique Jerez",111,6215.0,49962,13861],["Javier Dabrio Soldán",0,0,0,0],["José Carlos Marroco Jaen",212,12582.7,122943,25414],
    ["Fran Merchante",82,5522.1,55187,12284],["Santi Gil🇪🇸",137,9659.5,82933,20452],["Victoria Teba",0,0,0,0],
    ["David Gil Jiménez",43,1966.6,19470,4578],["Ezequiel DP",0,0,0,0],["Alfonso Barneto",148,8302.6,64629,18075],
    ["Luis Barneto",12,529.2,5876,1250],["José Ángel Perez Lepe",87,4991.4,49654,10201],["Daniel Diaz",24,875.3,9490,2334],
    ["José Francisco Suárez García",121,9372.6,62970,21773],["Juan Enrique Nieto Julián",49,2265.8,21211,6520],["Antonio Pichardo 🇪🇸",53,2560.3,22360,5849],
    ["Rafael Marquez Sanchez",145,6584.8,67201,14256],["Gonzalo 🌬️",45,2622.6,24653,5438],["Manuel Del Toro",83,5173.3,44707,13109],
    ["Antonio Lepe Rasgado",9,381.8,2646,883],["Luis Márquez",123,7261.8,57169,14334],["Estivenson Romero Polanco",28,1462.6,13662,3960],
    ["Mario Luis Pérez Medrano",222,21755.1,171520,45724],["Ramon Sanchez",57,4063.4,26938,9515],["Jorge Chirino Sosa",45,1170.4,10395,5325],
    ["Juan Silva",174,9466.3,98231,18963],["Juan Silva Medrano",null,null,null,null],["Rubén Cepeda Lepe",294,13952.5,140686,29077],
    ["Gonzalo Mogorron",126,7415.8,75433,15467],["Álvaro Félix",131,7449.3,64980,15366],["Gustavo Melado Mairena",112,6498.5,59332,12926],
    ["Jose Diago silva",16,1270.8,9477,2539],["Antonio Jesús Cordero Bustamante",96,6102.1,46722,14469]
  ]}
};
