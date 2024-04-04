require("./db");
const { Dog, Owner } = require("./models");
const seed = require("./seed");

const main = async () => {
  // const dogs = await Dog.find();
  // console.log(dogs);

  console.log(">>> Guardando los documentos");
  const dogs = await Dog.insertMany(seed.dogs);
  const owners = await Owner.insertMany(seed.owners);
  console.log(">>> Documentos guardados con exito");

  console.log(">>> Actualizando los Dog con su Owner");
  await Promise.all(
    dogs.map(async (dog) => {
      const owner = owners.find((owner) => owner._ownerId === dog._owner);
      await dog.updateOne({ owner: owner._id});
    })
  );
  console.log(">>> Elementos Dog actualizados");

};

main()
  .then(() => {
    console.log("Script terminado!");
    process.exit();
  })
  .catch((err) => {
    console.log("Error lanzando script!", err);
    process.exit(1);
  });
