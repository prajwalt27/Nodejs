

const add= (x,y)=>x+y

const PI =3.14

const square = x=> x*x;

exports.square=square;
exports.PI=PI;

//Different ways

//==============================
// module.exports.add= (x,y)=>x+y
// module.exports.PI =3.14
// module.exports.square = x=> x*x;



//============================
// const math={
//     add:add,
//     PI:PI,
//     square:square
// }

// module.exports=math;

//===========================
// module.exports.add= add;
// module.exports.PI= PI;
// module.exports.square= square;

