import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response)  {
  const user = createUser({
    email: 'lucas@gmail.com',
    password: '123456',
    techs: [
      'node', 
      'react',
      { title: 'Javascript', experience: 10 }
    ],
  });

  return response.json({ message: 'Hello World'});
}