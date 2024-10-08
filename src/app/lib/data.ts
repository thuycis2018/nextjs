import { createClient } from '@vercel/postgres';
//import { unstable_noStore as noStore} from 'next/cache';
import { sql } from '@vercel/postgres';

export async function connectToDB(){
    const client = createClient();
    await client.connect();

    try{
        if (client){
            console.log('Connected to db');
            return client;
        }
    }catch(error){
        console.error('Error connecting to db', error);
    }
}

export async function getPosts(){
    try{
        //noStore();
        const data = await sql`SELECT * FROM posts`;
        return data.rows;
    }catch(error){
        console.error('Error getting posts', error);
    }
}