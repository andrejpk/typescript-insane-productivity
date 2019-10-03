import {CosmosClient} from '@azure/cosmos';

const client = new CosmosClient({endpoint: '', key: ''});

async function helloCosmos() {
  const {database} = await client.databases.create({id: 'helloworld'});
  console.log(database.id);
}



