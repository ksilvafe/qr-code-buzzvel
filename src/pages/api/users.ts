// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import fs, { writeFile } from 'fs/promises'
import { randomUUID } from 'crypto'
import { readFile } from 'fs/promises'
import getConfig from 'next/config';
type Data = {
  name?: string
  message?: string
}

type User = {
  id: string
  name: string
  githubURL: string
  linkedinURL: string
}
const getUsers = async() => {
  const { serverRuntimeConfig } = getConfig()
  console.log(serverRuntimeConfig.PROJECT_ROOT);
  const databaseFile = path.join(serverRuntimeConfig.PROJECT_ROOT, './public/db.json');

  const users: User[] = JSON.parse(await readFile(databaseFile, 'utf8'));

  return {
    databaseFile,
    users,
  }
}

const routes: any = {
  'GET': async(req:NextApiRequest, res: NextApiResponse) => {
    const {id} = req.query;
    const {users} = await getUsers();
    const currentUser: User | undefined = users.find(user => user.id === id);
    return currentUser ? res.status(200).json(currentUser) : res.status(404).json({message: 'Usuário não encontrado'})
    // }
    // res.status(404).json({message: 'preencha o id'})
  },
  'POST': async(req:NextApiRequest, res: NextApiResponse) => {
    try {
      const {name, githubURL, linkedinURL } = JSON.parse(req.body);
      const { databaseFile, users } = await getUsers();
      
      var id = randomUUID()
  
      const user: User = {
        id,
        name,
        githubURL,
        linkedinURL
      }
      users.push(user)  
      
      await writeFile(databaseFile, JSON.stringify(users))
      return res.status(201).setHeader('id', id).json({ok: 'ok'}); 
    } catch (error) {
      return res.status(500).json({message: error})
    }
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {method} = req;

  if(method) {
    return await routes[method](req, res);
  }

  return res.status(404).json({message: 'Metodo não encontrado'})
  
}