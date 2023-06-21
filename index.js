const { MongoClient } = require("mongodb");
// Substitua a string uri pela string de conexão do MongoDB
const uri = "mongodb+srv://lagostacio:dragonite9234@cluster0.54hihx1.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useUnifiedTopology: true });
async function run() {
    try {
        await client.connect();
        const database = client.db('ifrs_db');
        const collection = database.collection('courses');
        // // cria um documento a ser inserido
        // const courseDocument = {

        //     name: "Análise e Desenvolvimento de Sistemas",
        //     type: "Superior",
        // };
        // const result = await collection.insertOne(courseDocument);

        const courseDocument = [
            { name: "Agronomia", type: "Superior" },
            { name: "Hospedagem", type: "Técnico" },
            { name: "Informática para Internet", type: "Técnico" },
            ];
        const options = { ordered: true };
        const result = await collection.insertMany(courseDocument,options);
        console.log(`${result.insertedCount} documentos foram inseridos`);

        // console.log(`${result.insertedCount} documentos foram inseridos com o _id: `);
        console.log(result)
    } finally {
        // Garante que o client fechará quando você terminar ou der
        // erro
        await client.close();
    }
}
run().catch(console.dir);