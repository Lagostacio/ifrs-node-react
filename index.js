const { MongoClient } = require("mongodb");
// Substitua a string uri pela string de conexão do MongoDB
const uri = "mongodb+srv://lagostacio:dragonite9234@cluster0.54hihx1.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {
    try {
        await client.connect();
        const database = client.db('ifrs_db');
        const collection = database.collection('courses');


        // DELETAR varios
        const query = { name: 'Agronomia' };
        const result = await collection.deleteMany(query);
        if (result.deletedCount >= 1) {
            console.dir("Exclusão realizada com sucesso.");
        } else {
            console.log("Não foi possível encontrar um documento");
        }





        //ATUALIZA UM
        // const filter = {
        //     name: "Análise e Desenvolvimento de Sistemas"
        // };
        // // atualiza o documento
        // const updateDocument = {
        //     $set: { name: 'ADS', },
        // };
        // const result = await collection.updateOne(filter,

        //     updateDocument);
        // console.log("Atualizou!");

        // BUSCA VÁRIOS
        // const query = { type: 'Técnico' }
        // const options = {
        //     sort: { name: 1 },
        //     projection: { _id: 0, name:1, type:1},
        // }
        // const cursor = await collection.find(query,options)

        // if((await cursor.count()) === 0 ){
        //     console.log('nenhum documento retornado!')
        // }
        // await cursor.forEach(console.dir)



        // Buscar um
        // const query = {name:"Agronomia"}
        // const result = await  collection.findOne(query);
        // console.log(result)



        // inserir um
        // const courseDocument = {
        //     name: "Análise e Desenvolvimento de Sistemas",
        //     type: "Superior",
        // };
        // const result = await collection.insertOne(courseDocument);



        //  inserir vários
        // const courseDocument = [
        //     { name: "Agronomia", type: "Superior" },
        //     { name: "Hospedagem", type: "Técnico" },
        //     { name: "Informática para Internet", type: "Técnico" },
        //     ];
        // const options = { ordered: true };
        // const result = await collection.insertMany(courseDocument,options);
        // console.log(`${result.insertedCount} documentos foram inseridos`);

    } finally {
        // Garante que o client fechará quando você terminar ou der
        // erro
        await client.close();
    }
}
run().catch(console.dir);